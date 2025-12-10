import * as THREE from 'three'

/**
 * Creates a large warehouse with mezzanine and stairs
 * Optimized with few meshes for performance
 * @param scale - Scale multiplier (default 1)
 */
export function createWarehouse(scale: number = 1) {
  const warehouseGroup = new THREE.Group()

  // Materials
  const wallMat = new THREE.MeshStandardMaterial({ color: 0x8b7355, roughness: 0.9 })
  const roofMat = new THREE.MeshStandardMaterial({ color: 0x5a4a3a, roughness: 0.8 })
  const floorMat = new THREE.MeshStandardMaterial({ color: 0x666666, roughness: 0.95 })
  const stairMat = new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.9 })

  // Warehouse body - separate walls to allow front opening
  const wallHeight = 11.2 // Increased by 40% from 8
  const wallCenterY = wallHeight / 2
  
  // Back wall
  const backWall = new THREE.Mesh(
    new THREE.BoxGeometry(16, wallHeight, 0.3),
    wallMat
  )
  backWall.position.set(0, wallCenterY, -6)
  backWall.castShadow = true
  backWall.receiveShadow = true
  warehouseGroup.add(backWall)
  
  // Left wall
  const leftWall = new THREE.Mesh(
    new THREE.BoxGeometry(0.3, wallHeight, 12),
    wallMat
  )
  leftWall.position.set(-8, wallCenterY, 0)
  leftWall.castShadow = true
  leftWall.receiveShadow = true
  warehouseGroup.add(leftWall)
  
  // Right wall
  const rightWall = new THREE.Mesh(
    new THREE.BoxGeometry(0.3, wallHeight, 12),
    wallMat
  )
  rightWall.position.set(8, wallCenterY, 0)
  rightWall.castShadow = true
  rightWall.receiveShadow = true
  warehouseGroup.add(rightWall)

  // Flat roof (simple box on top)
  const roof = new THREE.Mesh(
    new THREE.BoxGeometry(16.5, 0.4, 12.5),
    roofMat
  )
  roof.position.y = wallHeight + 0.2
  roof.castShadow = true
  warehouseGroup.add(roof)

  // Circular air vents on roof
  const ventMat = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.6, metalness: 0.4 })
  const createAirVent = () => {
    const ventGroup = new THREE.Group()
    // Base cylinder
    const base = new THREE.Mesh(
      new THREE.CylinderGeometry(0.4, 0.4, 0.3, 16),
      ventMat
    )
    base.position.y = 0.15
    ventGroup.add(base)
    
    // Cap
    const cap = new THREE.Mesh(
      new THREE.CylinderGeometry(0.5, 0.3, 0.2, 16),
      ventMat
    )
    cap.position.y = 0.4
    ventGroup.add(cap)
    
    return ventGroup
  }
  
  const roofY = wallHeight + 0.2
  
  const vent1 = createAirVent()
  vent1.position.set(-4, roofY + 0.2, -3)
  warehouseGroup.add(vent1)
  
  const vent2 = createAirVent()
  vent2.position.set(4, roofY + 0.2, -3)
  warehouseGroup.add(vent2)
  
  const vent3 = createAirVent()
  vent3.position.set(-4, roofY + 0.2, 3)
  warehouseGroup.add(vent3)
  
  const vent4 = createAirVent()
  vent4.position.set(4, roofY + 0.2, 3)
  warehouseGroup.add(vent4)

  // Large windows on walls (some with glass, some without)
  const glassMat = new THREE.MeshStandardMaterial({
    color: 0x88c0ff,
    transparent: true,
    opacity: 0.3,
    roughness: 0.1,
    metalness: 0.2
  })
  
  // Left wall windows (2 windows, one without glass)
  const winFrame1 = new THREE.Mesh(
    new THREE.BoxGeometry(0.35, 2.5, 3.5),
    new THREE.MeshStandardMaterial({ color: 0x444444 })
  )
  winFrame1.position.set(-8, 6, -2)
  warehouseGroup.add(winFrame1)
  
  const winGlass1 = new THREE.Mesh(
    new THREE.BoxGeometry(0.2, 2.3, 3.3),
    glassMat
  )
  winGlass1.position.set(-8, 6, -2)
  warehouseGroup.add(winGlass1)
  
  // Window without glass
  const winFrame2 = new THREE.Mesh(
    new THREE.BoxGeometry(0.35, 2.5, 3.5),
    new THREE.MeshStandardMaterial({ color: 0x444444 })
  )
  winFrame2.position.set(-8, 6, 3)
  warehouseGroup.add(winFrame2)
  
  // Right wall windows (2 windows, both with glass)
  const winFrame3 = new THREE.Mesh(
    new THREE.BoxGeometry(0.35, 2.5, 3.5),
    new THREE.MeshStandardMaterial({ color: 0x444444 })
  )
  winFrame3.position.set(8, 6, -2)
  warehouseGroup.add(winFrame3)
  
  const winGlass3 = new THREE.Mesh(
    new THREE.BoxGeometry(0.2, 2.3, 3.3),
    glassMat
  )
  winGlass3.position.set(8, 6, -2)
  warehouseGroup.add(winGlass3)
  
  const winFrame4 = new THREE.Mesh(
    new THREE.BoxGeometry(0.35, 2.5, 3.5),
    new THREE.MeshStandardMaterial({ color: 0x444444 })
  )
  winFrame4.position.set(8, 6, 3)
  warehouseGroup.add(winFrame4)
  
  // Window without glass (removed winGlass4)
  
  // Back wall windows (3 windows, 2 without glass)
  const winFrame5 = new THREE.Mesh(
    new THREE.BoxGeometry(3, 2.5, 0.35),
    new THREE.MeshStandardMaterial({ color: 0x444444 })
  )
  winFrame5.position.set(-4, 7, -6)
  warehouseGroup.add(winFrame5)
  
  // Window without glass (removed winGlass5)
  
  // Middle window without glass
  const winFrame6 = new THREE.Mesh(
    new THREE.BoxGeometry(3, 2.5, 0.35),
    new THREE.MeshStandardMaterial({ color: 0x444444 })
  )
  winFrame6.position.set(0, 7, -6)
  warehouseGroup.add(winFrame6)
  
  const winFrame7 = new THREE.Mesh(
    new THREE.BoxGeometry(3, 2.5, 0.35),
    new THREE.MeshStandardMaterial({ color: 0x444444 })
  )
  winFrame7.position.set(4, 7, -6)
  warehouseGroup.add(winFrame7)
  
  const winGlass7 = new THREE.Mesh(
    new THREE.BoxGeometry(2.8, 2.3, 0.2),
    glassMat
  )
  winGlass7.position.set(4, 7, -6)
  warehouseGroup.add(winGlass7)

  // Mezzanine floor (second level platform)
  const mezzanineFloor = new THREE.Mesh(
    new THREE.BoxGeometry(10, 0.3, 8),
    floorMat
  )
  mezzanineFloor.position.set(-3, 4.5, 0)
  mezzanineFloor.castShadow = true
  mezzanineFloor.receiveShadow = true
  warehouseGroup.add(mezzanineFloor)

  // Mezzanine railing (simple bars)
  const railingMat = new THREE.MeshStandardMaterial({ color: 0x333333 })
  
  // Front railing
  const railingFront = new THREE.Mesh(
    new THREE.BoxGeometry(10, 0.8, 0.1),
    railingMat
  )
  railingFront.position.set(-3, 5.3, 4)
  warehouseGroup.add(railingFront)
  
  // Left railing
  const railingLeft = new THREE.Mesh(
    new THREE.BoxGeometry(0.1, 0.8, 8),
    railingMat
  )
  railingLeft.position.set(-8, 5.3, 0)
  warehouseGroup.add(railingLeft)

  // Stairs (simple stepped design)
  const stairWidth = 2
  const stairDepth = 0.8
  const stairHeight = 0.4
  const numSteps = 11

  for (let i = 0; i < numSteps; i++) {
    const step = new THREE.Mesh(
      new THREE.BoxGeometry(stairWidth, stairHeight, stairDepth),
      stairMat
    )
    step.position.set(
      2,
      0.2 + i * stairHeight,
      3.5 - i * stairDepth
    )
    step.castShadow = true
    step.receiveShadow = true
    warehouseGroup.add(step)
  }

  // Front wall with opening (where door was)
  // Total warehouse front is at z = 6 (halfDepth)
  // Opening from x = 3 to x = 7 (4 units wide, 3 units tall)
  // Left segment: -8 to 3 = 11 units
  const frontLeft = new THREE.Mesh(
    new THREE.BoxGeometry(11, wallHeight, 0.3),
    wallMat
  )
  frontLeft.position.set(-2.5, wallCenterY, 6)
  frontLeft.castShadow = true
  frontLeft.receiveShadow = true
  warehouseGroup.add(frontLeft)
  
  // Right segment: 7 to 8 = 1 unit
  const frontRight = new THREE.Mesh(
    new THREE.BoxGeometry(1, wallHeight, 0.3),
    wallMat
  )
  frontRight.position.set(7.5, wallCenterY, 6)
  frontRight.castShadow = true
  frontRight.receiveShadow = true
  warehouseGroup.add(frontRight)
  
  // Top lintel above opening (3 units tall from floor, so lintel from 3 to top)
  const lintelHeight = wallHeight - 3
  const frontTop = new THREE.Mesh(
    new THREE.BoxGeometry(4, lintelHeight, 0.3),
    wallMat
  )
  frontTop.position.set(5, 3 + lintelHeight/2, 6)
  frontTop.castShadow = true
  warehouseGroup.add(frontTop)

  // Wooden crates inside warehouse
  const crateMat = new THREE.MeshStandardMaterial({ color: 0x8b6f47, roughness: 0.95 })
  
  // Helper to create a wooden crate
  const createCrate = (w: number, h: number, d: number) => {
    const crate = new THREE.Group()
    
    // Main box
    const box = new THREE.Mesh(
      new THREE.BoxGeometry(w, h, d),
      crateMat
    )
    box.position.y = h/2
    box.castShadow = true
    box.receiveShadow = true
    crate.add(box)
    
    // Wooden slats (decorative lines)
    const slatMat = new THREE.MeshStandardMaterial({ color: 0x5a4a3a })
    const slat1 = new THREE.Mesh(
      new THREE.BoxGeometry(w + 0.05, 0.1, 0.05),
      slatMat
    )
    slat1.position.set(0, h/3, d/2 + 0.025)
    crate.add(slat1)
    
    const slat2 = new THREE.Mesh(
      new THREE.BoxGeometry(w + 0.05, 0.1, 0.05),
      slatMat
    )
    slat2.position.set(0, 2*h/3, d/2 + 0.025)
    crate.add(slat2)
    
    return crate
  }
  
  // Place crates around the warehouse
  // Stack near back left corner
  const crate1 = createCrate(1.5, 1.5, 1.5)
  crate1.position.set(-6, 0, -4)
  warehouseGroup.add(crate1)
  
  const crate2 = createCrate(1.5, 1.5, 1.5)
  crate2.position.set(-6, 1.5, -4)
  warehouseGroup.add(crate2)
  
  const crate3 = createCrate(1.2, 1.2, 1.2)
  crate3.position.set(-4, 0, -4.5)
  crate3.rotation.y = Math.PI / 6
  warehouseGroup.add(crate3)
  
  // Near back right corner
  const crate4 = createCrate(1.8, 1.2, 1.3)
  crate4.position.set(5, 0, -3.5)
  warehouseGroup.add(crate4)
  
  const crate5 = createCrate(1.3, 1.3, 1.3)
  crate5.position.set(6.5, 0, -4.8)
  crate5.rotation.y = -Math.PI / 4
  warehouseGroup.add(crate5)
  
  // Near right wall (middle)
  const crate6 = createCrate(1.0, 2.0, 1.0)
  crate6.position.set(6.5, 0, 1)
  warehouseGroup.add(crate6)
  
  const crate7 = createCrate(1.4, 1.0, 1.4)
  crate7.position.set(5.5, 0, 2.5)
  crate7.rotation.y = Math.PI / 3
  warehouseGroup.add(crate7)
  
  // Small crates near left wall
  const crate8 = createCrate(0.8, 0.8, 0.8)
  crate8.position.set(-6.5, 0, 2)
  warehouseGroup.add(crate8)

  // EXTERIOR CRATES (around warehouse)
  
  // Left side exterior - stacked
  const extCrate1 = createCrate(1.5, 1.4, 1.5)
  extCrate1.position.set(-9.5, 0, -3)
  warehouseGroup.add(extCrate1)
  
  const extCrate2 = createCrate(1.3, 1.2, 1.3)
  extCrate2.position.set(-9.5, 1.4, -3)
  extCrate2.rotation.y = Math.PI / 5
  warehouseGroup.add(extCrate2)
  
  const extCrate3 = createCrate(1.0, 1.8, 1.0)
  extCrate3.position.set(-9.5, 0, 1)
  warehouseGroup.add(extCrate3)
  
  // Back side exterior
  const extCrate4 = createCrate(1.4, 1.0, 1.4)
  extCrate4.position.set(-3, 0, -7.5)
  extCrate4.rotation.y = -Math.PI / 3
  warehouseGroup.add(extCrate4)
  
  const extCrate5 = createCrate(1.6, 1.3, 1.2)
  extCrate5.position.set(0, 0, -7.5)
  warehouseGroup.add(extCrate5)
  
  const extCrate6 = createCrate(1.2, 1.5, 1.2)
  extCrate6.position.set(3.5, 0, -7.5)
  extCrate6.rotation.y = Math.PI / 4
  warehouseGroup.add(extCrate6)
  
  // Right side exterior - some stacked
  const extCrate7 = createCrate(1.3, 1.3, 1.3)
  extCrate7.position.set(9.5, 0, -2)
  warehouseGroup.add(extCrate7)
  
  const extCrate8 = createCrate(1.1, 1.1, 1.1)
  extCrate8.position.set(9.5, 1.3, -2)
  extCrate8.rotation.y = -Math.PI / 6
  warehouseGroup.add(extCrate8)
  
  const extCrate9 = createCrate(0.9, 0.9, 0.9)
  extCrate9.position.set(9.5, 2.4, -2)
  warehouseGroup.add(extCrate9)
  
  const extCrate10 = createCrate(1.4, 1.2, 1.6)
  extCrate10.position.set(9.5, 0, 3)
  extCrate10.rotation.y = Math.PI / 7
  warehouseGroup.add(extCrate10)
  
  // Front side exterior (near opening)
  const extCrate11 = createCrate(1.2, 1.0, 1.2)
  extCrate11.position.set(-5, 0, 7.5)
  extCrate11.rotation.y = -Math.PI / 8
  warehouseGroup.add(extCrate11)
  
  const extCrate12 = createCrate(1.0, 1.4, 1.0)
  extCrate12.position.set(1, 0, 7.5)
  warehouseGroup.add(extCrate12)

  // Windows on the sides (simple rectangles)
  const windowMat = new THREE.MeshStandardMaterial({
    color: 0x88c0ff,
    transparent: true,
    opacity: 0.6
  })

  // Left side windows
  for (let i = 0; i < 3; i++) {
    const win = new THREE.Mesh(
      new THREE.BoxGeometry(0.1, 1.5, 2),
      windowMat
    )
    win.position.set(-8.05, 5 + i * 0.5, -4 + i * 4)
    warehouseGroup.add(win)
  }

  // Right side windows
  for (let i = 0; i < 3; i++) {
    const win = new THREE.Mesh(
      new THREE.BoxGeometry(0.1, 1.5, 2),
      windowMat
    )
    win.position.set(8.05, 5 + i * 0.5, -4 + i * 4)
    warehouseGroup.add(win)
  }

  warehouseGroup.scale.setScalar(scale)
  return warehouseGroup
}
