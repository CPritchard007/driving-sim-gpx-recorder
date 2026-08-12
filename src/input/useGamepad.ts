import { useCallback, useEffect, useRef, useState } from 'react'
import type { DriveInput } from '../drive/arcadeVehicle'

const DEADZONE = 0.15

function applyDeadzone(v: number, dz = DEADZONE): number {
  if (Math.abs(v) < dz) return 0
  const sign = v < 0 ? -1 : 1
  return sign * ((Math.abs(v) - dz) / (1 - dz))
}

function buttonValue(button: GamepadButton | undefined): number {
  if (!button) return 0
  if (typeof button.value === 'number') return button.value
  return button.pressed ? 1 : 0
}

export type GamepadStatus = {
  connected: boolean
  id: string | null
  index: number | null
}

export function useGamepad() {
  const [status, setStatus] = useState<GamepadStatus>({
    connected: false,
    id: null,
    index: null,
  })
  const indexRef = useRef<number | null>(null)
  const recordEdgeRef = useRef(false)

  useEffect(() => {
    const syncFromNavigator = () => {
      const pads = navigator.getGamepads()
      const next = Array.from(pads).find((p) => p)
      if (next) {
        indexRef.current = next.index
        setStatus({
          connected: true,
          id: next.id,
          index: next.index,
        })
      } else {
        indexRef.current = null
        setStatus({ connected: false, id: null, index: null })
      }
    }

    const onConnect = (e: GamepadEvent) => {
      indexRef.current = e.gamepad.index
      setStatus({
        connected: true,
        id: e.gamepad.id,
        index: e.gamepad.index,
      })
    }
    const onDisconnect = () => syncFromNavigator()

    window.addEventListener('gamepadconnected', onConnect)
    window.addEventListener('gamepaddisconnected', onDisconnect)
    syncFromNavigator()

    return () => {
      window.removeEventListener('gamepadconnected', onConnect)
      window.removeEventListener('gamepaddisconnected', onDisconnect)
    }
  }, [])

  const readInput = useCallback((): DriveInput & { toggleRecord: boolean } => {
    const empty = {
      steer: 0,
      throttle: 0,
      brake: 0,
      handbrake: false,
      toggleRecord: false,
    }

    let idx = indexRef.current
    if (idx === null) {
      // Discover pad after first button press (browsers often delay until then)
      const any = Array.from(navigator.getGamepads()).find((p) => p)
      if (!any) return empty
      indexRef.current = any.index
      setStatus({ connected: true, id: any.id, index: any.index })
      idx = any.index
    }

    const pad = navigator.getGamepads()[idx]
    if (!pad) return empty

    const steer = applyDeadzone(pad.axes[0] ?? 0)
    let throttle = buttonValue(pad.buttons[7])
    let brake = buttonValue(pad.buttons[6])

    if (throttle === 0 && pad.buttons[12]?.pressed) throttle = 1
    if (brake === 0 && pad.buttons[13]?.pressed) brake = 1

    const handbrake =
      !!pad.buttons[0]?.pressed || !!pad.buttons[1]?.pressed

    const startPressed = !!pad.buttons[9]?.pressed
    let toggleRecord = false
    if (startPressed && !recordEdgeRef.current) {
      toggleRecord = true
    }
    recordEdgeRef.current = startPressed

    return { steer, throttle, brake, handbrake, toggleRecord }
  }, [])

  return { status, readInput }
}
