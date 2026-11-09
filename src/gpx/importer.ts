export type ImportedGpx = {
  name: string
  start: { lat: number; lon: number }
  data: GeoJSON.FeatureCollection<GeoJSON.LineString | GeoJSON.Point>
}

export function parseGpx(xml: string, name: string): ImportedGpx {
  const doc = new DOMParser().parseFromString(xml, 'application/xml')
  if (doc.getElementsByTagName('parsererror').length || doc.documentElement.localName !== 'gpx') {
    throw new Error('Choose a valid GPX file.')
  }
  const namespace = doc.documentElement.namespaceURI
  const children = (element: Element, tag: string) =>
    Array.from(element.children).filter((child) => child.localName === tag && child.namespaceURI === namespace)
  const coordinate = (point: Element): [number, number] => {
    const latText = point.getAttribute('lat')
    const lonText = point.getAttribute('lon')
    const lat = Number(latText)
    const lon = Number(lonText)
    if (!latText?.trim() || !lonText?.trim() || !Number.isFinite(lat) || !Number.isFinite(lon) || Math.abs(lat) > 90 || Math.abs(lon) > 180) {
      throw new Error('The GPX file contains an invalid latitude or longitude.')
    }
    return [lon, lat]
  }
  const root = doc.documentElement
  let segments = children(root, 'trk').flatMap((track) =>
    children(track, 'trkseg').map((segment) => children(segment, 'trkpt').map(coordinate)),
  ).filter((segment) => segment.length)
  if (!segments.length) {
    segments = children(root, 'rte').map((route) => children(route, 'rtept').map(coordinate)).filter((segment) => segment.length)
  }
  if (!segments.length) segments = children(root, 'wpt').map((point) => [coordinate(point)])
  if (!segments.length) throw new Error('This GPX file has no track, route, or waypoint positions.')
  const [lon, lat] = segments[0][0]
  const features: ImportedGpx['data']['features'] = segments.map((coordinates) => ({
    type: 'Feature', properties: {},
    geometry: coordinates.length > 1
      ? { type: 'LineString', coordinates }
      : { type: 'Point', coordinates: coordinates[0] },
  }))
  features.push({ type: 'Feature', properties: { start: true }, geometry: { type: 'Point', coordinates: [lon, lat] } })
  return { name, start: { lat, lon }, data: { type: 'FeatureCollection', features } }
}
