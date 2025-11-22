import { defineConfig } from 'vite'

// Base is the path where the app will be served on GitHub Pages.
// We set it so that built asset URLs become:
// /threejs-voxel-fortnite/dist/assets/... which matches your deployment URL.
export default defineConfig({
  // Use the repo root as base so assets resolve correctly when `dist` is published
  // to the gh-pages branch root. This generates URLs like:
  // /threejs-voxel-fortnite/assets/index-<hash>.js
  base: '/threejs-voxel-fortnite/'
})
