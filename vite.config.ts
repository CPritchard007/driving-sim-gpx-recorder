import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
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
