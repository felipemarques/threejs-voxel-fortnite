import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/threejs-voxel-firecraft/v2/dist/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Output to dist for GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
