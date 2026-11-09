import { useEffect, useRef, useState, type FormEvent } from 'react'

export type Location = { lat: number; lon: number; name: string }
type Feature = {
  id: string
  geometry: { coordinates: [number, number] }
  properties: { name: string; full_address?: string; place_formatted?: string }
}

export function LocationSearch({ token, onSelect }: {
  token: string
  onSelect: (location: Location) => void
}) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Feature[]>([])
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const request = useRef<AbortController | null>(null)
  useEffect(() => () => request.current?.abort(), [])

  const search = async (event: FormEvent) => {
    event.preventDefault()
    request.current?.abort()
    setLoading(false)
    setResults([])
    setMessage('')
    if (!query.trim()) return

    // Pasted coordinates use latitude first, unlike Mapbox's coordinate arrays.
    const input = query.trim().replace(/^\((.*)\)$/, '$1').replace(/^\[(.*)\]$/, '$1').trim()
    const number = '[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)'
    const coordinates = input.match(new RegExp(`^(${number})(?:\\s*,\\s*|\\s+)(${number})$`))
    if (coordinates) {
      const lat = Number(coordinates[1])
      const lon = Number(coordinates[2])
      if (Math.abs(lat) > 90 || Math.abs(lon) > 180) {
        setMessage('Latitude must be between -90 and 90; longitude must be between -180 and 180.')
        return
      }
      const name = `${lat}, ${lon}`
      onSelect({ lat, lon, name })
      setQuery(name)
      return
    }

    const controller = new AbortController()
    request.current = controller
    setLoading(true)
    setResults([])
    setMessage('')
    try {
      const params = new URLSearchParams({ q: query.trim(), access_token: token, limit: '5', autocomplete: 'false' })
      const response = await fetch(`https://api.mapbox.com/search/geocode/v6/forward?${params}`, { signal: controller.signal })
      if (!response.ok) throw new Error('Search failed')
      const data = await response.json() as { features: Feature[] }
      if (controller.signal.aborted) return
      setResults(data.features)
      if (!data.features.length) setMessage('No locations found. Try another city or address.')
    } catch {
      if (!controller.signal.aborted) setMessage('Unable to search. Please try again.')
    } finally {
      if (!controller.signal.aborted) setLoading(false)
    }
  }

  return (
    <div className="location-search">
      <form role="search" onSubmit={search} className="location-search-form">
        <input aria-label="Search for a city, address, or latitude and longitude" placeholder="Address or lat, lng…" value={query}
          onChange={(event) => {
            request.current?.abort()
            setLoading(false)
            setQuery(event.target.value)
            setResults([])
            setMessage('')
          }}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              request.current?.abort()
              setLoading(false)
              setResults([])
              setMessage('')
              event.currentTarget.blur()
            }
          }} />
        <button type="submit" disabled={loading || !query.trim()} aria-label="Search location">{loading ? '…' : 'Search'}</button>
      </form>
      {message && <p className="search-message" role="status">{message}</p>}
      {results.length > 0 && <ul className="search-results" aria-label="Locations">
        {results.map((result) => <li key={result.id}>
          <button type="button" onClick={() => {
            const [lon, lat] = result.geometry.coordinates
            onSelect({ lon, lat, name: result.properties.full_address || result.properties.name })
            setResults([])
            setQuery(result.properties.name)
          }}>
            <strong>{result.properties.name}</strong>
            <span>{result.properties.place_formatted}</span>
          </button>
        </li>)}
      </ul>}
    </div>
  )
}
