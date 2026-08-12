import { useCallback, useEffect, useRef } from 'react'
import type { DriveInput } from '../drive/arcadeVehicle'

type KeyState = {
  left: boolean
  right: boolean
  up: boolean
  down: boolean
  handbrake: boolean
  record: boolean
}

const initial: KeyState = {
  left: false,
  right: false,
  up: false,
  down: false,
  handbrake: false,
  record: false,
}

export function useKeyboard() {
  const keys = useRef<KeyState>({ ...initial })
  const recordEdge = useRef(false)

  useEffect(() => {
    const setKey = (code: string, down: boolean) => {
      switch (code) {
        case 'KeyA':
        case 'ArrowLeft':
          keys.current.left = down
          break
        case 'KeyD':
        case 'ArrowRight':
          keys.current.right = down
          break
        case 'KeyW':
        case 'ArrowUp':
          keys.current.up = down
          break
        case 'KeyS':
        case 'ArrowDown':
          keys.current.down = down
          break
        case 'Space':
          keys.current.handbrake = down
          break
        case 'KeyR':
          keys.current.record = down
          break
        default:
          break
      }
    }

    const onDown = (e: KeyboardEvent) => {
      if (e.repeat) return
      if (
        ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(
          e.code,
        )
      ) {
        e.preventDefault()
      }
      setKey(e.code, true)
    }
    const onUp = (e: KeyboardEvent) => setKey(e.code, false)

    window.addEventListener('keydown', onDown)
    window.addEventListener('keyup', onUp)
    return () => {
      window.removeEventListener('keydown', onDown)
      window.removeEventListener('keyup', onUp)
    }
  }, [])

  const readInput = useCallback((): DriveInput & { toggleRecord: boolean } => {
    const k = keys.current
    let steer = 0
    if (k.left) steer -= 1
    if (k.right) steer += 1

    const throttle = k.up ? 1 : 0
    const brake = k.down ? 1 : 0

    let toggleRecord = false
    if (k.record && !recordEdge.current) {
      toggleRecord = true
    }
    recordEdge.current = k.record

    return {
      steer,
      throttle,
      brake,
      handbrake: k.handbrake,
      toggleRecord,
    }
  }, [])

  return { readInput }
}
