import * as THREE from 'three'

/**
 * Creates a simple apartment building (optimized, no interior)
 * Lightweight with few meshes for performance
 * @param floors - Number of floors (default 4, range 2-10)
 * @param scale - Scale multiplier (default 1)
 * @param wallColor - Wall color (default 0xc8d6e5 light blue-gray)
 * @param roofColor - Roof color (default 0x576574 dark gray)
 * @param windowColor - Window color (default 0x88c0ff light blue)
 */
export function createApartmentBuilding(
  floors: number = 4,
  scale: number = 1,
  wallColor: number = 0xc8d6e5,
  roofColor: number = 0x576574,
  windowColor: number = 0x88c0ff
) {
  // Clamp floors between 2 and 10
  floors = Math.max(2, Math.min(10, Math.floor(floors)))
  
  const buildingGroup = new THREE.Group()

  const wallMat = new THREE.MeshStandardMaterial({ color: wallColor, roughness: 0.9 })
  const roofMat = new THREE.MeshStandardMaterial({ color: roofColor, roughness: 0.7, metalness: 0.1 })
  const glassMat = new THREE.MeshStandardMaterial({
    color: windowColor,
    metalness: 0.1,
    roughness: 0.2,
    transparent: true,
    opacity: 0.7
  })

  const floorHeight = 3 // Height per floor
  const totalHeight = floors * floorHeight
  
  // Main building body (single box for efficiency)
  const mainBody = new THREE.Mesh(
    new THREE.BoxGeometry(8, totalHeight, 8),
    wallMat
  )
  mainBody.position.y = totalHeight / 2
  mainBody.castShadow = true
  mainBody.receiveShadow = true
  buildingGroup.add(mainBody)

  // Flat roof
  const roof = new THREE.Mesh(
    new THREE.BoxGeometry(8.5, 0.5, 8.5),
    roofMat
  )
  roof.position.y = totalHeight + 0.25
  roof.castShadow = true
  buildingGroup.add(roof)

  // Windows - create for each floor
  const windowGeo = new THREE.BoxGeometry(1.2, 1.5, 0.1)
  
  for (let floor = 0; floor < floors; floor++) {
    const y = 1.5 + floor * floorHeight
    
    // Front and back facade windows (3 per floor)
    for (let col = 0; col < 3; col++) {
      const x = -3 + col * 3
      
      // Front
      const winFront = new THREE.Mesh(windowGeo, glassMat)
      winFront.position.set(x, y, 4.05)
      buildingGroup.add(winFront)
      
      // Back
      const winBack = new THREE.Mesh(windowGeo, glassMat)
      winBack.position.set(x, y, -4.05)
      buildingGroup.add(winBack)
    }

    // Side facade windows (2 per floor)
    for (let col = 0; col < 2; col++) {
      const z = -2 + col * 4
      
      // Left side
      const winLeft = new THREE.Mesh(windowGeo, glassMat)
      winLeft.position.set(-4.05, y, z)
      buildingGroup.add(winLeft)
      
      // Right side
      const winRight = new THREE.Mesh(windowGeo, glassMat)
      winRight.position.set(4.05, y, z)
      buildingGroup.add(winRight)
    }
  }

  // Entrance door (simple dark rectangle) - only on ground floor
  const doorMat = new THREE.MeshStandardMaterial({ color: 0x2c3e50 })
  const door = new THREE.Mesh(
    new THREE.BoxGeometry(2, 3, 0.1),
    doorMat
  )
  door.position.set(0, 1.5, 4.06)
  buildingGroup.add(door)

  buildingGroup.scale.setScalar(scale)
  return buildingGroup
}
