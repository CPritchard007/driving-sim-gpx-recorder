import { haversineMeters } from '../drive/arcadeVehicle'

export type TrackPoint = {
  lat: number
  lon: number
  ele: number
  time: string // ISO 8601
}

export type RecorderState = {
  recording: boolean
  points: TrackPoint[]
  distanceM: number
  lastSampleAt: number
  lastLat: number
  lastLon: number
}

export function createRecorder(): RecorderState {
  return {
    recording: false,
    points: [],
    distanceM: 0,
    lastSampleAt: 0,
    lastLat: 0,
    lastLon: 0,
  }
}

const MIN_INTERVAL_MS = 500
const MIN_DISTANCE_M = 5

export function startRecording(
  _state: RecorderState,
  lat: number,
  lon: number,
  now = Date.now(),
): RecorderState {
  const point: TrackPoint = {
    lat,
    lon,
    ele: 0,
    time: new Date(now).toISOString(),
  }
  return {
    recording: true,
    points: [point],
    distanceM: 0,
    lastSampleAt: now,
    lastLat: lat,
    lastLon: lon,
  }
}

export function stopRecording(state: RecorderState): RecorderState {
  return { ...state, recording: false }
}

export function sampleIfNeeded(
  state: RecorderState,
  lat: number,
  lon: number,
  now = Date.now(),
): RecorderState {
  if (!state.recording) return state

  const dt = now - state.lastSampleAt
  const dist = haversineMeters(state.lastLat, state.lastLon, lat, lon)

  if (dt < MIN_INTERVAL_MS && dist < MIN_DISTANCE_M) {
    return state
  }

  const point: TrackPoint = {
    lat,
    lon,
    ele: 0,
    time: new Date(now).toISOString(),
  }

  return {
    ...state,
    points: [...state.points, point],
    distanceM: state.distanceM + dist,
    lastSampleAt: now,
    lastLat: lat,
    lastLon: lon,
  }
}

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export function toGpxXml(
  points: TrackPoint[],
  name = 'GPX Driving Sim Track',
): string {
  const trkpts = points
    .map(
      (p) =>
        `      <trkpt lat="${p.lat.toFixed(7)}" lon="${p.lon.toFixed(7)}">\n` +
        `        <ele>${p.ele.toFixed(1)}</ele>\n` +
        `        <time>${p.time}</time>\n` +
        `      </trkpt>`,
    )
    .join('\n')

  return (
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<gpx version="1.1" creator="gpx-driving-sim"\n` +
    `  xmlns="http://www.topografix.com/GPX/1/1"\n` +
    `  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n` +
    `  xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">\n` +
    `  <metadata>\n` +
    `    <name>${escapeXml(name)}</name>\n` +
    `    <time>${points[0]?.time ?? new Date().toISOString()}</time>\n` +
    `  </metadata>\n` +
    `  <trk>\n` +
    `    <name>${escapeXml(name)}</name>\n` +
    `    <trkseg>\n` +
    `${trkpts}\n` +
    `    </trkseg>\n` +
    `  </trk>\n` +
    `</gpx>\n`
  )
}

export function downloadGpx(points: TrackPoint[], filename?: string): void {
  if (points.length === 0) return
  const xml = toGpxXml(points)
  const stamp = new Date().toISOString().slice(0, 10).replace(/-/g, '')
  const name = filename ?? `drive-${stamp}.gpx`
  const blob = new Blob([xml], { type: 'application/gpx+xml' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = name
  a.click()
  URL.revokeObjectURL(url)
}
