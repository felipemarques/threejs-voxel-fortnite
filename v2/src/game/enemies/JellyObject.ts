import * as THREE from 'three'

/**
 * Creates a procedural Jelly enemy (Slime)
 */
export function createJelly() {
  const jellyGroup = new THREE.Group()

  // 1. Outer Body (Translucent Slime)
  const bodyGeo = new THREE.BoxGeometry(0.8, 0.8, 0.8)
  const bodyMat = new THREE.MeshStandardMaterial({
    color: 0x55efc4, // Light green/teal
    transparent: true,
    opacity: 0.7,
    roughness: 0.2,
    metalness: 0.1
  })
  const body = new THREE.Mesh(bodyGeo, bodyMat)
  body.castShadow = true
  body.position.y = 0.4 // Sit on ground
  jellyGroup.add(body)

  // 2. Inner Core (Opaque)
  const coreGeo = new THREE.BoxGeometry(0.4, 0.4, 0.4)
  const coreMat = new THREE.MeshStandardMaterial({
    color: 0x00b894, // Darker green
    roughness: 0.4
  })
  const core = new THREE.Mesh(coreGeo, coreMat)
  core.position.y = 0.4
  jellyGroup.add(core)

  // 3. Eyes
  const eyeGeo = new THREE.BoxGeometry(0.15, 0.15, 0.05)
  const eyeMat = new THREE.MeshStandardMaterial({ color: 0x2d3436 }) // Black/Dark Grey

  const leftEye = new THREE.Mesh(eyeGeo, eyeMat)
  leftEye.position.set(-0.2, 0.5, 0.4) // Front face
  jellyGroup.add(leftEye)

  const rightEye = new THREE.Mesh(eyeGeo, eyeMat)
  rightEye.position.set(0.2, 0.5, 0.4)
  jellyGroup.add(rightEye)

  // Floating animation hint (static for now, logic handles anim)
  
  return {
    mesh: jellyGroup,
    body: body,
    core: core,
    isJelly: true
  }
}
