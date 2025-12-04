# Voxel Firecraft

## Project context
Voxel Firecraft is a Three.js-based 3D voxel world where creative building meets real-time interaction. The showcase combines procedurally lit environments, animated particles, and a voxel palette that recalls a blocky-fantasy aesthetic. The repository hosts two major branches: the original `v1` iteration, which proved the concept in a single-scene prototype, and the ongoing `v2` rebuild that aims to scale the experience for modern browsers.

## Motivation for the v2 refactor
The v2 refactor rethinks the app structure to unlock consistent improvements across the stack:
- **Performance**: modular scene orchestration, lazy resource loading, and leaner rendering loops cut frame drops and keep the experience responsive on varied hardware.
- **Code reuse**: shared utilities, composable systems, and clearer lifecycles reduce duplication between screens and make future features easier to add.
- **Automated testing**: CI-friendly suites around build, rendering sanity, and interaction flows ensure regressions are caught before they reach users.
- **Modern layout and CSS**: new layout libraries and utility-driven styling deliver responsive, theme-ready UI scaffolding without bulky custom styles.

The README keeps both versions visible so contributors can compare the prototype (`v1`) with the structured, maintainable rebuild housed under `v2`.
