import { useCallback, useEffect, useRef, useState } from 'react'
import type { DriveInput } from '../drive/arcadeVehicle'

const DEADZONE = 0.12

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

/** GTA V-style pad: LS steer, RT gas, LT brake/reverse, A handbrake. */
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

  const readInput = useCallback((): DriveInput & {
    toggleRecord: boolean
    lookX: number
    lookY: number
  } => {
    const empty = {
      steer: 0,
      throttle: 0,
      brake: 0,
      handbrake: false,
      toggleRecord: false,
      lookX: 0,
      lookY: 0,
    }

    let idx = indexRef.current
    if (idx === null) {
      const any = Array.from(navigator.getGamepads()).find((p) => p)
      if (!any) return empty
      indexRef.current = any.index
      setStatus({ connected: true, id: any.id, index: any.index })
      idx = any.index
    }

    const pad = navigator.getGamepads()[idx]
    if (!pad) return empty

    // Left stick X — steer
    const steer = applyDeadzone(pad.axes[0] ?? 0)

    // Right stick — look (GTA camera)
    const lookX = applyDeadzone(pad.axes[2] ?? 0)
    const lookY = applyDeadzone(pad.axes[3] ?? 0)

    // RT = accelerate, LT = brake / reverse (standard gamepad mapping)
    const throttle = buttonValue(pad.buttons[7])
    const brake = buttonValue(pad.buttons[6])

    // A / Cross — handbrake (GTA V)
    const handbrake = !!pad.buttons[0]?.pressed

    // Menu / Start — toggle record
    const startPressed = !!pad.buttons[9]?.pressed
    let toggleRecord = false
    if (startPressed && !recordEdgeRef.current) {
      toggleRecord = true
    }
    recordEdgeRef.current = startPressed

    return { steer, throttle, brake, handbrake, toggleRecord, lookX, lookY }
  }, [])

  return { status, readInput }
}
