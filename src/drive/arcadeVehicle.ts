/** GTA-style arcade vehicle: velocity vector + lateral grip decay. */

export type DriveInput = {
  steer: number // -1 left … 1 right
  throttle: number // 0…1
  brake: number // 0…1
  handbrake: boolean
}

export type VehicleState = {
  lat: number
  lon: number
  headingDeg: number
  /** Forward speed along heading (m/s). Can be negative when reversing. */
  speedMps: number
  /** World velocity east/north (m/s) for slip. */
  velEast: number
  velNorth: number
}

export type VehicleTunables = {
  maxSpeed: number
  maxReverse: number
  accel: number
  brakeForce: number
  coastDrag: number
  steerRate: number
  maxSteerAtSpeed: number
  grip: number
  handbrakeGrip: number
  handbrakeYawBoost: number
}

export const DEFAULT_TUNABLES: VehicleTunables = {
  maxSpeed: 60 / 3.6, // 60 km/h
  maxReverse: 12 / 3.6, // ~12 km/h reverse
  accel: 40,
  brakeForce: 36,
  coastDrag: 2.5,
  steerRate: 95, // deg/s at full steer, low speed
  maxSteerAtSpeed: 0.35, // fraction of steerRate retained at max speed
  grip: 14,
  handbrakeGrip: 1.2,
  handbrakeYawBoost: 1.8,
}

const METERS_PER_DEG_LAT = 111_320

function metersPerDegLon(lat: number): number {
  return METERS_PER_DEG_LAT * Math.cos((lat * Math.PI) / 180)
}

function clamp(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, v))
}

export function createVehicle(
  lat: number,
  lon: number,
  headingDeg = 0,
): VehicleState {
  return {
    lat,
    lon,
    headingDeg,
    speedMps: 0,
    velEast: 0,
    velNorth: 0,
  }
}

export function stepVehicle(
  state: VehicleState,
  input: DriveInput,
  dt: number,
  tunables: VehicleTunables = DEFAULT_TUNABLES,
): VehicleState {
  let stepDt = dt
  if (stepDt <= 0 || stepDt > 0.1) {
    stepDt = Math.min(Math.max(stepDt, 0), 0.1)
  }

  const steer = clamp(input.steer, -1, 1)
  const throttle = clamp(input.throttle, 0, 1)
  const brake = clamp(input.brake, 0, 1)
  const { handbrake } = input

  let speed = state.speedMps

  if (throttle > 0 && brake === 0) {
    if (speed < tunables.maxSpeed) {
      speed += tunables.accel * throttle * stepDt
    }
  } else if (brake > 0 && speed > 0.5) {
    speed -= tunables.brakeForce * brake * stepDt
  } else if (brake > 0 && speed <= 0.5) {
    speed -= tunables.accel * 0.6 * brake * stepDt
    speed = Math.max(speed, -tunables.maxReverse)
  } else if (speed > 0) {
    speed = Math.max(0, speed - tunables.coastDrag * stepDt)
  } else if (speed < 0) {
    speed = Math.min(0, speed + tunables.coastDrag * stepDt)
  }

  speed = clamp(speed, -tunables.maxReverse, tunables.maxSpeed)

  const speedFrac = Math.min(Math.abs(speed) / tunables.maxSpeed, 1)
  const steerScale =
    tunables.maxSteerAtSpeed +
    (1 - tunables.maxSteerAtSpeed) * (1 - speedFrac)
  const yawSign = speed >= 0 ? 1 : -1
  let yawRate =
    steer *
    tunables.steerRate *
    steerScale *
    yawSign *
    (Math.abs(speed) > 0.3 ? 1 : 0)

  if (handbrake && Math.abs(speed) > 2) {
    yawRate *= tunables.handbrakeYawBoost
  }

  let headingDeg = state.headingDeg + yawRate * stepDt
  headingDeg = ((headingDeg % 360) + 360) % 360

  const headingRad = (headingDeg * Math.PI) / 180
  const fE = Math.sin(headingRad)
  const fN = Math.cos(headingRad)
  const rE = Math.cos(headingRad)
  const rN = -Math.sin(headingRad)

  const desiredE = fE * speed
  const desiredN = fN * speed

  const grip = handbrake ? tunables.handbrakeGrip : tunables.grip
  const blend = 1 - Math.exp(-grip * stepDt)

  let velEast = state.velEast + (desiredE - state.velEast) * blend
  let velNorth = state.velNorth + (desiredN - state.velNorth) * blend

  if (handbrake) {
    const latVel = velEast * rE + velNorth * rN
    const keep = Math.exp(-3 * stepDt)
    velEast -= latVel * rE * (1 - keep)
    velNorth -= latVel * rN * (1 - keep)
  }

  const forwardSpeed = velEast * fE + velNorth * fN

  const mLon = metersPerDegLon(state.lat)
  const lat = state.lat + (velNorth * stepDt) / METERS_PER_DEG_LAT
  const lon = state.lon + (velEast * stepDt) / mLon

  return {
    lat,
    lon,
    headingDeg,
    speedMps: forwardSpeed,
    velEast,
    velNorth,
  }
}

export function speedKmh(state: VehicleState): number {
  return Math.abs(state.speedMps) * 3.6
}

export function haversineMeters(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
): number {
  const R = 6_371_000
  const toRad = (d: number) => (d * Math.PI) / 180
  const dLat = toRad(lat2 - lat1)
  const dLon = toRad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2
  return 2 * R * Math.asin(Math.sqrt(a))
}
