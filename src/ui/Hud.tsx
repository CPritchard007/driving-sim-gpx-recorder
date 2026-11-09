import { useRef } from 'react'
import type { GamepadStatus } from '../input/useGamepad'

type Props = {
  gamepad: GamepadStatus
  speedKmh: number
  recording: boolean
  pointCount: number
  distanceM: number
  onToggleRecord: () => void
  onDownload: () => void
  onReset: () => void
  onUpload: (file: File) => Promise<void>
  importing: boolean
  importedName: string | null
  importError: string | null
}

function formatDistance(m: number): string {
  if (m < 1000) return `${Math.round(m)} m`
  return `${(m / 1000).toFixed(2)} km`
}

export function Hud({
  gamepad,
  speedKmh,
  recording,
  pointCount,
  distanceM,
  onToggleRecord,
  onDownload,
  onReset,
  onUpload,
  importing,
  importedName,
  importError,
}: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const padLabel = gamepad.connected
    ? gamepad.id?.split('(')[0]?.trim() || 'Controller'
    : 'No controller — press any button on your pad'

  return (
    <div className="hud">
      <header className="hud-brand">
        <p className="hud-title">GPX Drive</p>
        <p className="hud-tag">Arcade recorder</p>
      </header>

      <div className="hud-speed" aria-live="polite">
        <span className="hud-speed-value">{Math.round(speedKmh)}</span>
        <span className="hud-speed-unit">km/h</span>
      </div>

      <div className="hud-status">
        <p className={`hud-pad ${gamepad.connected ? 'is-on' : ''}`}>
          {padLabel}
        </p>
        <p className="hud-meta">
          {recording ? 'Recording' : 'Idle'} · {pointCount} pts ·{' '}
          {formatDistance(distanceM)}
        </p>
      </div>

      <div className="hud-actions">
        <input ref={fileInputRef} type="file" accept=".gpx,application/gpx+xml" hidden
          aria-label="Upload GPX file" disabled={recording || importing}
          onChange={(event) => {
            const file = event.target.files?.[0]
            event.target.value = ''
            if (file) void onUpload(file)
          }} />
        <button type="button" className="btn btn-import" disabled={recording || importing}
          title={recording ? 'Stop recording to upload a GPX file' : 'Move to the GPX start and highlight its route'}
          onClick={() => fileInputRef.current?.click()}>
          {importing ? 'Loading GPX…' : 'Upload GPX'}
        </button>
        <button
          type="button"
          className={recording ? 'btn btn-stop' : 'btn btn-rec'}
          onClick={onToggleRecord}
        >
          {recording ? 'Stop' : 'Record'}
        </button>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={onDownload}
          disabled={pointCount < 2}
        >
          Download GPX
        </button>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={onReset}
          disabled={recording}
        >
          Reset start
        </button>
      </div>

      <div className="gpx-import-status" aria-live="polite">
        {importError ? <p role="alert">{importError}</p> : importedName ? <p>Pink route: {importedName}</p> : null}
      </div>
      <aside className="hud-legend">
        <p>
          <kbd>W</kbd> accelerate · <kbd>S</kbd> brake/reverse · <kbd>A</kbd>/
          <kbd>D</kbd> steer · <kbd>Space</kbd> handbrake · <kbd>R</kbd> record
        </p>
        <p>
          Pad: LS steer · RT accelerate · LT brake · A handbrake · RS look
          · Start record
        </p>
        <p>Drag the map to explore · Click to select · Drag the pin · Place to relocate.</p>
      </aside>
    </div>
  )
}
