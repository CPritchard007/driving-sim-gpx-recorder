import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // GitHub Pages serves this project from a repository subdirectory.
  // Keep the casing in sync with the public URL: paths are case-sensitive.
  base: '/driving-sim-gpx-recorder/',
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^mapbox-gl$/,
        replacement: 'mapbox-gl/esm',
      },
    ],
  },
  optimizeDeps: {
    include: ['mapbox-gl', 'three'],
  },
})
