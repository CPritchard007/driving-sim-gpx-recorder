import { useCallback, useRef, useState } from 'react'
import type { DriveInput } from './drive/arcadeVehicle'
import {
  createRecorder,
  downloadGpx,
  sampleIfNeeded,
  startRecording,
  stopRecording,
  type RecorderState,
} from './gpx/recorder'
import { useGamepad } from './input/useGamepad'
import { useKeyboard } from './input/useKeyboard'
import {
  DEFAULT_START,
  DrivingMap,
  type HudSnapshot,
} from './map/DrivingMap'
import { Hud } from './ui/Hud'

function mergeInput(
  pad: DriveInput & { toggleRecord: boolean },
  keys: DriveInput & { toggleRecord: boolean },
): DriveInput & { toggleRecord: boolean } {
  const padActive =
    Math.abs(pad.steer) > 0.01 ||
    pad.throttle > 0.01 ||
    pad.brake > 0.01 ||
    pad.handbrake

  return {
    steer: padActive ? pad.steer : keys.steer || pad.steer,
    throttle: Math.max(pad.throttle, keys.throttle),
    brake: Math.max(pad.brake, keys.brake),
    handbrake: pad.handbrake || keys.handbrake,
    toggleRecord: pad.toggleRecord || keys.toggleRecord,
  }
}

export default function App() {
  const { status: gamepad, readInput: readPad } = useGamepad()
  const { readInput: readKeys } = useKeyboard()

  const [recorder, setRecorder] = useState<RecorderState>(() => createRecorder())
  const recorderRef = useRef(recorder)
  recorderRef.current = recorder

  const [hud, setHud] = useState<HudSnapshot>({
    speedKmh: 0,
    lat: DEFAULT_START.lat,
    lon: DEFAULT_START.lon,
    headingDeg: 0,
  })
  const lastHudUiRef = useRef(0)

  const [relocateToken, setRelocateToken] = useState(0)
  const [relocateTo, setRelocateTo] = useState<{
    lat: number
    lon: number
  } | null>(null)

  const posRef = useRef({ lat: DEFAULT_START.lat, lon: DEFAULT_START.lon })

  const readDriveInput = useCallback(() => {
    return mergeInput(readPad(), readKeys())
  }, [readPad, readKeys])

  const onToggleRecord = useCallback(() => {
    setRecorder((prev) => {
      if (prev.recording) return stopRecording(prev)
      return startRecording(prev, posRef.current.lat, posRef.current.lon)
    })
  }, [])

  const onVehicleSample = useCallback((lat: number, lon: number) => {
    posRef.current = { lat, lon }
    setRecorder((prev) => {
      if (!prev.recording) return prev
      return sampleIfNeeded(prev, lat, lon)
    })
  }, [])

  const onHudUpdate = useCallback((snap: HudSnapshot) => {
    const now = performance.now()
    if (now - lastHudUiRef.current < 100) return
    lastHudUiRef.current = now
    setHud(snap)
  }, [])

  const onDownload = useCallback(() => {
    downloadGpx(recorderRef.current.points)
  }, [])

  const onReset = useCallback(() => {
    if (recorderRef.current.recording) return
    setRelocateTo({ lat: DEFAULT_START.lat, lon: DEFAULT_START.lon })
    setRelocateToken((n) => n + 1)
    setRecorder(createRecorder())
  }, [])

  return (
    <div className="app">
      <DrivingMap
        readDriveInput={readDriveInput}
        recording={recorder.recording}
        trackPoints={recorder.points}
        onToggleRecord={onToggleRecord}
        onVehicleSample={onVehicleSample}
        onHudUpdate={onHudUpdate}
        relocateToken={relocateToken}
        relocateTo={relocateTo}
      />
      <Hud
        gamepad={gamepad}
        speedKmh={hud.speedKmh}
        recording={recorder.recording}
        pointCount={recorder.points.length}
        distanceM={recorder.distanceM}
        onToggleRecord={onToggleRecord}
        onDownload={onDownload}
        onReset={onReset}
      />
    </div>
  )
}
