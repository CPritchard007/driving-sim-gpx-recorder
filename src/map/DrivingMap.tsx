import { useEffect, useRef, useState, type FormEvent } from 'react'
import {
  Map,
  NavigationControl,
  type GeoJSONSource,
  type MapMouseEvent,
} from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import {
  createVehicle,
  speedKmh,
  stepVehicle,
  type DriveInput,
  type VehicleState,
} from '../drive/arcadeVehicle'
import type { TrackPoint } from '../gpx/recorder'
import { createCarLayer, type CarLayerApi } from './carLayer'

/** Detroit — Windsor Tunnel (US portal / Jefferson Ave). */
export const DEFAULT_START = { lat: 42.32856, lon: -83.04205, heading: 175 }

const MAP_STYLE = 'mapbox://styles/mapbox/streets-v12'
const TRACK_SOURCE = 'gpx-track'
const CHASE_PITCH = 62
const CHASE_ZOOM = 18
const TOKEN_STORAGE_KEY = 'gpx-drive.mapboxAccessToken'

function resolveMapboxToken(): string {
  const fromEnv = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN?.trim() ?? ''
  if (fromEnv) return fromEnv
  try {
    return localStorage.getItem(TOKEN_STORAGE_KEY)?.trim() ?? ''
  } catch {
    return ''
  }
}

export type HudSnapshot = {
  speedKmh: number
  lat: number
  lon: number
  headingDeg: number
}

type Props = {
  readDriveInput: () => DriveInput & {
    toggleRecord: boolean
    lookX: number
    lookY: number
  }
  recording: boolean
  trackPoints: TrackPoint[]
  onToggleRecord: () => void
  onVehicleSample: (lat: number, lon: number) => void
  onHudUpdate: (snap: HudSnapshot) => void
  relocateToken: number
  relocateTo: { lat: number; lon: number } | null
}

function emptyLine(): GeoJSON.Feature<GeoJSON.LineString> {
  return {
    type: 'Feature',
    properties: {},
    geometry: { type: 'LineString', coordinates: [] },
  }
}

function addBuildings(map: Map) {
  if (map.getLayer('3d-buildings')) return
  const layers = map.getStyle()?.layers
  const labelLayerId = layers?.find(
    (l) => l.type === 'symbol' && l.layout?.['text-field'],
  )?.id

  map.addLayer(
    {
      id: '3d-buildings',
      source: 'composite',
      'source-layer': 'building',
      filter: ['==', 'extrude', 'true'],
      type: 'fill-extrusion',
      minzoom: 14,
      paint: {
        'fill-extrusion-color': '#aaa',
        'fill-extrusion-height': [
          'interpolate',
          ['linear'],
          ['zoom'],
          14,
          0,
          14.05,
          ['get', 'height'],
        ],
        'fill-extrusion-base': [
          'interpolate',
          ['linear'],
          ['zoom'],
          14,
          0,
          14.05,
          ['get', 'min_height'],
        ],
        'fill-extrusion-opacity': 0.85,
      },
    },
    labelLayerId,
  )
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
  const mapRef = useRef<Map | null>(null)
  const carRef = useRef<CarLayerApi | null>(null)
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

  const [token, setToken] = useState(resolveMapboxToken)
  const [tokenDraft, setTokenDraft] = useState('')
  const [tokenError, setTokenError] = useState<string | null>(null)

  recordingRef.current = recording
  onToggleRecordRef.current = onToggleRecord
  onVehicleSampleRef.current = onVehicleSample
  onHudUpdateRef.current = onHudUpdate
  readInputRef.current = readDriveInput

  const saveToken = (event: FormEvent) => {
    event.preventDefault()
    const next = tokenDraft.trim()
    if (!next) {
      setTokenError('Paste a Mapbox public access token.')
      return
    }
    if (!next.startsWith('pk.')) {
      setTokenError('Use a public token that starts with pk.')
      return
    }
    try {
      localStorage.setItem(TOKEN_STORAGE_KEY, next)
    } catch {
      // Still allow in-session use if storage is blocked.
    }
    setTokenError(null)
    setToken(next)
  }

  useEffect(() => {
    if (!token || !containerRef.current || mapRef.current) return

    const map = new Map({
      container: containerRef.current,
      style: MAP_STYLE,
      center: [DEFAULT_START.lon, DEFAULT_START.lat],
      zoom: CHASE_ZOOM,
      pitch: CHASE_PITCH,
      bearing: DEFAULT_START.heading,
      maxPitch: 80,
      antialias: true,
      accessToken: token,
    })

    map.addControl(
      new NavigationControl({ visualizePitch: true }),
      'bottom-right',
    )

    const car = createCarLayer({
      lon: DEFAULT_START.lon,
      lat: DEFAULT_START.lat,
      headingDeg: DEFAULT_START.heading,
    })
    carRef.current = car

    map.on('click', (e: MapMouseEvent) => {
      if (recordingRef.current) return
      vehicleRef.current = createVehicle(
        e.lngLat.lat,
        e.lngLat.lng,
        vehicleRef.current.headingDeg,
      )
    })

    mapRef.current = map

    const chase = (
      v: VehicleState,
      lookX: number,
      lookY: number,
    ) => {
      // Right stick look — GTA-style orbit around chase bearing/pitch
      const bearing = v.headingDeg + lookX * 55
      const pitch = Math.min(80, Math.max(35, CHASE_PITCH - lookY * 25))
      map.jumpTo({
        center: [v.lon, v.lat],
        bearing,
        pitch,
      })
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

      vehicleRef.current = stepVehicle(
        vehicleRef.current,
        {
          steer: raw.steer,
          throttle: raw.throttle,
          brake: raw.brake,
          handbrake: raw.handbrake,
        },
        dt,
      )
      const v = vehicleRef.current

      onVehicleSampleRef.current(v.lat, v.lon)
      onHudUpdateRef.current({
        speedKmh: speedKmh(v),
        lat: v.lat,
        lon: v.lon,
        headingDeg: v.headingDeg,
      })

      car.setPose({ lon: v.lon, lat: v.lat, headingDeg: v.headingDeg })

      frame += 1
      if (frame % 2 === 0) chase(v, raw.lookX, raw.lookY)

      rafRef.current = requestAnimationFrame(loop)
    }

    map.on('style.load', () => {
      addBuildings(map)

      if (!map.getSource(TRACK_SOURCE)) {
        map.addSource(TRACK_SOURCE, { type: 'geojson', data: emptyLine() })
        map.addLayer({
          id: 'gpx-line',
          type: 'line',
          source: TRACK_SOURCE,
          layout: { 'line-join': 'round', 'line-cap': 'round' },
          paint: {
            'line-color': '#e85d04',
            'line-width': 5,
            'line-opacity': 0.9,
          },
        })
      }

      if (!map.getLayer(car.layer.id)) {
        map.addLayer(car.layer)
      }

      map.resize()
      lastTimeRef.current = 0
      rafRef.current = requestAnimationFrame(loop)
    })

    map.on('error', (e) => {
      console.error('Mapbox error:', e.error ?? e)
    })

    return () => {
      cancelAnimationFrame(rafRef.current)
      carRef.current = null
      map.remove()
      mapRef.current = null
      lastTimeRef.current = 0
    }
  }, [token])

  useEffect(() => {
    const map = mapRef.current
    if (!map?.getSource(TRACK_SOURCE)) return
    const coords = trackPoints.map((p) => [p.lon, p.lat] as [number, number])
    ;(map.getSource(TRACK_SOURCE) as GeoJSONSource).setData({
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates:
          coords.length >= 2
            ? coords
            : coords.length === 1
              ? [coords[0], coords[0]]
              : [],
      },
    })
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
            Paste a public Mapbox token below, or set{' '}
            <code>VITE_MAPBOX_ACCESS_TOKEN</code> in a <code>.env</code> file
            for local development.
          </p>
          <form className="map-token-form" onSubmit={saveToken}>
            <label className="map-token-label" htmlFor="mapbox-token">
              Access token
            </label>
            <input
              id="mapbox-token"
              className="map-token-input"
              type="password"
              autoComplete="off"
              spellCheck={false}
              placeholder="pk.eyJ1Ijoi..."
              value={tokenDraft}
              onChange={(event) => {
                setTokenDraft(event.target.value)
                if (tokenError) setTokenError(null)
              }}
            />
            {tokenError ? (
              <p className="map-token-error" role="alert">
                {tokenError}
              </p>
            ) : null}
            <button className="btn btn-rec" type="submit">
              Save token
            </button>
          </form>
          <p className="map-token-hint">
            Create a token at{' '}
            <a
              href="https://account.mapbox.com/access-tokens/"
              target="_blank"
              rel="noreferrer"
            >
              account.mapbox.com
            </a>
            . It stays in this browser only.
          </p>
        </div>
      </div>
    )
  }

  return <div className="map-root" ref={containerRef} />
}
