import { useCallback, useRef, useState } from 'react'
import { parseGpx, type ImportedGpx } from './gpx/importer'
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

type DriveControls = DriveInput & {
  toggleRecord: boolean
  lookX: number
  lookY: number
}

function mergeInput(pad: DriveControls, keys: DriveControls): DriveControls {
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
    lookX: pad.lookX,
    lookY: pad.lookY,
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

  const [importedGpx, setImportedGpx] = useState<ImportedGpx | null>(null)
  const [importError, setImportError] = useState<string | null>(null)
  const [importing, setImporting] = useState(false)

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

  const onUpload = async (file: File) => {
    if (recorderRef.current.recording || importing) return
    setImporting(true)
    setImportError(null)
    try {
      const imported = parseGpx(await file.text(), file.name)
      if (recorderRef.current.recording) {
        throw new Error('Stop recording before uploading a GPX file.')
      }
      setImportedGpx(imported)
      posRef.current = imported.start
      setRelocateTo(imported.start)
      setRelocateToken((n) => n + 1)
    } catch (error) {
      setImportError(error instanceof Error ? error.message : 'Unable to read this GPX file.')
    } finally {
      setImporting(false)
    }
  }

  const onReset = useCallback(() => {
    if (recorderRef.current.recording) return
    setRelocateTo(importedGpx?.start ?? { lat: DEFAULT_START.lat, lon: DEFAULT_START.lon })
    setRelocateToken((n) => n + 1)
    setRecorder(createRecorder())
  }, [importedGpx])

  return (
    <div className="app">
      <DrivingMap
        readDriveInput={readDriveInput}
        recording={recorder.recording}
        trackPoints={recorder.points}
        importedGpx={importedGpx}
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
        onUpload={onUpload}
        importing={importing}
        importedName={importedGpx?.name ?? null}
        importError={importError}
      />
    </div>
  )
}
