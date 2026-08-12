import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import {
  createVehicle,
  speedKmh,
  stepVehicle,
  type DriveInput,
  type VehicleState,
} from '../drive/arcadeVehicle'
import type { TrackPoint } from '../gpx/recorder'

/** Downtown San Francisco — good coverage for a demo start. */
export const DEFAULT_START = { lat: 37.7749, lon: -122.4194, heading: 0 }

export type HudSnapshot = {
  speedKmh: number
  lat: number
  lon: number
  headingDeg: number
}

type Props = {
  readDriveInput: () => DriveInput & { toggleRecord: boolean }
  recording: boolean
  trackPoints: TrackPoint[]
  onToggleRecord: () => void
  onVehicleSample: (lat: number, lon: number) => void
  onHudUpdate: (snap: HudSnapshot) => void
  relocateToken: number
  relocateTo: { lat: number; lon: number } | null
}

function makeCarIcon(headingDeg: number): L.DivIcon {
  return L.divIcon({
    className: 'car-leaflet-icon',
    html: `<div class="car-marker" style="transform: rotate(${headingDeg}deg)"><div class="car-marker-body"></div></div>`,
    iconSize: [28, 40],
    iconAnchor: [14, 20],
  })
}

export function DrivingMap({
  readDriveInput,
  recording,
  trackPoints,
  onToggleRecord,
  onVehicleSample,
  onHudUpdate,
  relocateToken,
  relocateTo,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<L.Map | null>(null)
  const markerRef = useRef<L.Marker | null>(null)
  const trackRef = useRef<L.Polyline | null>(null)
  const vehicleRef = useRef<VehicleState>(
    createVehicle(DEFAULT_START.lat, DEFAULT_START.lon, DEFAULT_START.heading),
  )
  const recordingRef = useRef(recording)
  const lastTimeRef = useRef(0)
  const rafRef = useRef(0)
  const onToggleRecordRef = useRef(onToggleRecord)
  const onVehicleSampleRef = useRef(onVehicleSample)
  const onHudUpdateRef = useRef(onHudUpdate)
  const readInputRef = useRef(readDriveInput)

  const token = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN?.trim() ?? ''

  recordingRef.current = recording
  onToggleRecordRef.current = onToggleRecord
  onVehicleSampleRef.current = onVehicleSample
  onHudUpdateRef.current = onHudUpdate
  readInputRef.current = readDriveInput

  useEffect(() => {
    if (!token || !containerRef.current || mapRef.current) return

    const map = L.map(containerRef.current, {
      zoomControl: false,
      attributionControl: true,
    }).setView([DEFAULT_START.lat, DEFAULT_START.lon], 16)

    L.control.zoom({ position: 'bottomright' }).addTo(map)

    L.tileLayer(
      `https://api.mapbox.com/styles/v1/mapbox/outdoors-v12/tiles/{z}/{x}/{y}@2x?access_token=${token}`,
      {
        tileSize: 512,
        zoomOffset: -1,
        maxZoom: 22,
        attribution:
          '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      },
    ).addTo(map)

    const marker = L.marker([DEFAULT_START.lat, DEFAULT_START.lon], {
      icon: makeCarIcon(DEFAULT_START.heading),
      interactive: false,
      keyboard: false,
    }).addTo(map)

    const track = L.polyline([], {
      color: '#e85d04',
      weight: 4,
      opacity: 0.9,
      lineJoin: 'round',
      lineCap: 'round',
    }).addTo(map)

    markerRef.current = marker
    trackRef.current = track
    mapRef.current = map

    map.on('click', (e: L.LeafletMouseEvent) => {
      if (recordingRef.current) return
      vehicleRef.current = createVehicle(
        e.latlng.lat,
        e.latlng.lng,
        vehicleRef.current.headingDeg,
      )
    })

    // Wait until Leaflet has a real size, then start the sim.
    const startSim = () => {
      map.invalidateSize()
      map.setView([DEFAULT_START.lat, DEFAULT_START.lon], 16, {
        animate: false,
      })
      cancelAnimationFrame(rafRef.current)
      lastTimeRef.current = 0
      rafRef.current = requestAnimationFrame(loop)
    }

    let frame = 0
    const loop = (t: number) => {
      if (!mapRef.current) return

      if (!lastTimeRef.current) lastTimeRef.current = t
      let dt = (t - lastTimeRef.current) / 1000
      lastTimeRef.current = t
      if (dt > 0.05) dt = 0.05

      const raw = readInputRef.current()
      if (raw.toggleRecord) onToggleRecordRef.current()

      const input: DriveInput = {
        steer: raw.steer,
        throttle: raw.throttle,
        brake: raw.brake,
        handbrake: raw.handbrake,
      }

      vehicleRef.current = stepVehicle(vehicleRef.current, input, dt)
      const v = vehicleRef.current

      onVehicleSampleRef.current(v.lat, v.lon)
      onHudUpdateRef.current({
        speedKmh: speedKmh(v),
        lat: v.lat,
        lon: v.lon,
        headingDeg: v.headingDeg,
      })

      marker.setLatLng([v.lat, v.lon])
      const el = marker.getElement()?.querySelector(
        '.car-marker',
      ) as HTMLElement | null
      if (el) el.style.transform = `rotate(${v.headingDeg}deg)`

      frame += 1
      if (frame % 3 === 0) {
        const center = map.getCenter()
        const dist = map.distance(center, L.latLng(v.lat, v.lon))
        if (dist > 2) {
          map.panTo([v.lat, v.lon], { animate: false, noMoveStart: true })
        }
      }

      rafRef.current = requestAnimationFrame(loop)
    }

    map.whenReady(() => {
      window.setTimeout(startSim, 50)
    })
    const resizeTimer = window.setTimeout(() => {
      map.invalidateSize()
    }, 250)

    return () => {
      window.clearTimeout(resizeTimer)
      cancelAnimationFrame(rafRef.current)
      map.remove()
      markerRef.current = null
      trackRef.current = null
      mapRef.current = null
      lastTimeRef.current = 0
    }
  }, [token])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const latlngs = trackPoints.map((p) => L.latLng(p.lat, p.lon))
    track.setLatLngs(latlngs)
  }, [trackPoints])

  useEffect(() => {
    if (!relocateTo || relocateToken === 0) return
    if (recordingRef.current) return
    vehicleRef.current = createVehicle(
      relocateTo.lat,
      relocateTo.lon,
      vehicleRef.current.headingDeg,
    )
  }, [relocateToken, relocateTo])

  if (!token) {
    return (
      <div className="map-root map-missing-token">
        <div className="map-missing-token-card">
          <p className="map-missing-token-title">Mapbox token required</p>
          <p>
            Set <code>VITE_MAPBOX_ACCESS_TOKEN</code> in a <code>.env</code> file
            (see <code>.env.example</code>), then restart the dev server.
          </p>
        </div>
      </div>
    )
  }

  return <div className="map-root" ref={containerRef} />
}
