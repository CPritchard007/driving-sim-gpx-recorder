import type { CustomLayerInterface, Map, MercatorCoordinate } from 'mapbox-gl'
import { MercatorCoordinate as MercatorCoord } from 'mapbox-gl'
import * as THREE from 'three'

export type CarPose = {
  lon: number
  lat: number
  headingDeg: number
  altitude?: number
}

/** Single block car (Y-up, +Z forward), size in meters. */
function buildCarMesh(): THREE.Mesh {
  const mat = new THREE.MeshStandardMaterial({
    color: 0xe85d04,
    metalness: 0.25,
    roughness: 0.55,
  })
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.0, 4.0), mat)
  mesh.position.y = 0.5
  return mesh
}

type Transform = {
  translateX: number
  translateY: number
  translateZ: number
  rotateX: number
  rotateY: number
  rotateZ: number
  scale: number
}

function poseToTransform(pose: CarPose): Transform {
  const mc: MercatorCoordinate = MercatorCoord.fromLngLat(
    [pose.lon, pose.lat],
    pose.altitude ?? 0,
  )
  // PI/2 on X stands a Y-up model on the map. Yaw must use Y (not Z),
  // or the block leans instead of turning flat.
  const headingRad = (-pose.headingDeg * Math.PI) / 180
  return {
    translateX: mc.x,
    translateY: mc.y,
    translateZ: mc.z ?? 0,
    rotateX: Math.PI / 2,
    rotateY: headingRad,
    rotateZ: 0,
    scale: mc.meterInMercatorCoordinateUnits(),
  }
}

export type CarLayerApi = {
  layer: CustomLayerInterface
  setPose: (pose: CarPose) => void
}

export function createCarLayer(initial: CarPose): CarLayerApi {
  let transform = poseToTransform(initial)

  let camera: THREE.Camera
  let scene: THREE.Scene
  let renderer: THREE.WebGLRenderer
  let mapRef: Map

  const layer: CustomLayerInterface = {
    id: 'car-3d',
    type: 'custom',
    renderingMode: '3d',

    onAdd(map, gl) {
      mapRef = map
      camera = new THREE.Camera()
      scene = new THREE.Scene()

      const key = new THREE.DirectionalLight(0xffffff, 1.1)
      key.position.set(50, -30, 80).normalize()
      scene.add(key)

      const fill = new THREE.DirectionalLight(0xffffff, 0.55)
      fill.position.set(-40, 60, 40).normalize()
      scene.add(fill)

      scene.add(new THREE.AmbientLight(0xffffff, 0.35))
      scene.add(buildCarMesh())

      renderer = new THREE.WebGLRenderer({
        canvas: map.getCanvas(),
        context: gl,
        antialias: true,
      })
      renderer.autoClear = false
    },

    render(_gl, matrix) {
      const rotationX = new THREE.Matrix4().makeRotationAxis(
        new THREE.Vector3(1, 0, 0),
        transform.rotateX,
      )
      const rotationY = new THREE.Matrix4().makeRotationAxis(
        new THREE.Vector3(0, 1, 0),
        transform.rotateY,
      )
      const rotationZ = new THREE.Matrix4().makeRotationAxis(
        new THREE.Vector3(0, 0, 1),
        transform.rotateZ,
      )

      const m = new THREE.Matrix4().fromArray(matrix)
      const l = new THREE.Matrix4()
        .makeTranslation(
          transform.translateX,
          transform.translateY,
          transform.translateZ,
        )
        .scale(
          new THREE.Vector3(transform.scale, -transform.scale, transform.scale),
        )
        .multiply(rotationX)
        .multiply(rotationY)
        .multiply(rotationZ)

      camera.projectionMatrix = m.multiply(l)
      renderer.resetState()
      renderer.render(scene, camera)
      mapRef.triggerRepaint()
    },
  }

  return {
    layer,
    setPose(pose) {
      transform = poseToTransform(pose)
    },
  }
}
