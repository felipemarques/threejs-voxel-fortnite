import { defineConfig } from 'vite'
import { resolve } from 'path'

// Base is the path where the app will be served on GitHub Pages.
// We set it so that built asset URLs become:
// /threejs-voxel-firecraft/dist/assets/... which matches your deployment URL.
export default defineConfig({
  // Use the repo root as base so assets resolve correctly when `dist` is published
  // to the gh-pages branch root. This generates URLs like:
  // /threejs-voxel-fortnite/assets/index-<hash>.js
  base: '/threejs-voxel-firecraft/v1/dist/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'enemy-viewer': resolve(__dirname, 'enemy-viewer.html'),
        'object-viewer': resolve(__dirname, 'object-viewer.html')
      }
    }
  }
})
