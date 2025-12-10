import * as THREE from 'three'

/**
 * Creates a 3-story tower building with stairs
 * Custom creation for v2
 */
export function createTowerBuilding() {
  const g = new THREE.Group()

  const wallMat = new THREE.MeshStandardMaterial({ color: 0x8b7355, roughness: 0.8 }) // Brown brick
  const floorMat = new THREE.MeshStandardMaterial({ color: 0xa0a0a0, roughness: 0.7 }) // Gray concrete
  const stairMat = new THREE.MeshStandardMaterial({ color: 0x6a5d4f, roughness: 0.9 }) // Dark brown
  const glassMat = new THREE.MeshStandardMaterial({
    color: 0x87ceeb,
    transparent: true,
    opacity: 0.6,
    metalness: 0.3,
    roughness: 0.2
  })
  
  const width = 15.6 // 12 * 1.3 = +30%
  const depth = 7.8 // 6 * 1.3 = +30%
  const floorHeight = 4.2 // 3.5 * 1.2 = +20%
  const thick = 0.3
  const halfW = width / 2
  const halfD = depth / 2
  
  const stairWidth = 2.0
  const stairGap = 2.4
  const stairCount = 14
  const stairDepth = 0.35
  const stairRise = floorHeight / stairCount
  const stairRunTotal = stairCount * stairDepth

  const stairStartZ = halfD - 1.0 
  const stairEndZ = stairStartZ - stairRunTotal

  // Helper to create a wall with a window hole
  const createWallWithWindow = (
      w: number, h: number, d: number, 
      winW: number, winH: number, winYOffset: number, // winYOffset from wall center
      mat: THREE.Material,
      hasGlass: boolean = true // New param
  ) => {
      const container = new THREE.Group()
      
      const winTop = winYOffset + winH/2
      const winBottom = winYOffset - winH/2
      const wallHalfH = h/2
      
      // Top Lintel
      const topH = wallHalfH - winTop
      if (topH > 0) {
          const top = new THREE.Mesh(new THREE.BoxGeometry(w, topH, d), mat)
          top.position.y = winTop + topH/2
          top.castShadow = true; top.receiveShadow = true
          container.add(top)
      }
      
      // Bottom Sill
      const botH = winBottom - (-wallHalfH)
      if (botH > 0) {
          const bot = new THREE.Mesh(new THREE.BoxGeometry(w, botH, d), mat)
          bot.position.y = -wallHalfH + botH/2
          bot.castShadow = true; bot.receiveShadow = true
          container.add(bot)
      }
      
      // Side Pillars
      const sideH = winH
      const sideW = (w - winW) / 2
      if (sideW > 0) {
          // Left
          const left = new THREE.Mesh(new THREE.BoxGeometry(sideW, sideH, d), mat)
          left.position.set(-w/2 + sideW/2, winYOffset, 0)
          left.castShadow = true; left.receiveShadow = true
          container.add(left)
          
          // Right
          const right = new THREE.Mesh(new THREE.BoxGeometry(sideW, sideH, d), mat)
          right.position.set(w/2 - sideW/2, winYOffset, 0)
          right.castShadow = true; right.receiveShadow = true
          container.add(right)
      }

      // Glass (Maybe Broken?)
      if (hasGlass && Math.random() > 0.3) {
           const glass = new THREE.Mesh(new THREE.BoxGeometry(winW, winH, d * 0.5), glassMat)
           glass.position.y = winYOffset
           container.add(glass)
      }
      
      return container
  }

  for (let floor = 0; floor < 3; floor++) {
    const baseY = floor * floorHeight
    const isGround = floor === 0
    const isStairLeft = (floor % 2 === 0)
    const stairXSign = isStairLeft ? -1 : 1
    const hasHole = !isGround
    const isHoleLeft = ((floor - 1) % 2 === 0)
    const holeXSign = isHoleLeft ? -1 : 1

    // --- FLOOR PLATFORM ---
    if (!hasHole) {
      const floorPlatform = new THREE.Mesh(new THREE.BoxGeometry(width, 0.3, depth), floorMat)
      floorPlatform.position.y = baseY + 0.15
      floorPlatform.receiveShadow = true
      g.add(floorPlatform)
    } else {
      const mainW = width - stairGap
      const mainFloor = new THREE.Mesh(new THREE.BoxGeometry(mainW, 0.3, depth), floorMat)
      mainFloor.position.set(-holeXSign * (halfW - mainW/2), baseY + 0.15, 0)
      mainFloor.receiveShadow = true
      g.add(mainFloor)

      const holeStartMargin = stairStartZ + 0.5 
      const holeEndMargin = stairEndZ - 0.2 
      
      const frontDist = halfD - holeStartMargin
      if (frontDist > 0) {
        const fStrip = new THREE.Mesh(new THREE.BoxGeometry(stairGap, 0.3, frontDist), floorMat)
        fStrip.position.set(holeXSign * (halfW - stairGap/2), baseY + 0.15, halfD - frontDist/2)
        fStrip.receiveShadow = true
        g.add(fStrip)
      }

      const backDist = holeEndMargin - (-halfD)
      if (backDist > 0) {
        const bStrip = new THREE.Mesh(new THREE.BoxGeometry(stairGap, 0.3, backDist), floorMat)
        bStrip.position.set(holeXSign * (halfW - stairGap/2), baseY + 0.15, -halfD + backDist/2)
        bStrip.receiveShadow = true
        g.add(bStrip)
      }
      
      const railH = 1.0
      const railExitGap = 1.2
      const railEndEffective = holeEndMargin + railExitGap
      const railLen = Math.abs(holeStartMargin - railEndEffective) 
      
      const railGeo = new THREE.BoxGeometry(0.1, railH, railLen)
      const rail = new THREE.Mesh(railGeo, wallMat) 
      const railZ = (holeStartMargin + railEndEffective) / 2
      rail.position.set(holeXSign * (halfW - stairGap), baseY + 0.15 + railH/2, railZ)
      g.add(rail)
      
      const endRail = new THREE.Mesh(new THREE.BoxGeometry(stairGap, railH, 0.1), wallMat)
      endRail.position.set(holeXSign * (halfW - stairGap/2), baseY + 0.15 + railH/2, holeStartMargin)
      g.add(endRail)
    }

    // --- WALLS WITH WINDOWS ---
    const wallHeight = 3.84 // Increased by 20%: (floorHeight - 0.3) would be 3.9, but let's make it explicit
    const wallCenterY = baseY + wallHeight/2 + 0.3
    
    const winYOffset = 0.4

    // Back Wall (Split in 2 halves for 2 windows, or 1 big wall with 2 holes?)
    // Easier to make 2 segments. Left Half and Right Half.
    // Total Width 12. Left: -3, Right: +3.
    const backLeft = createWallWithWindow(width/2, wallHeight, thick, 2.5, 1.8, winYOffset, wallMat)
    backLeft.position.set(-width/4, wallCenterY, -halfD)
    g.add(backLeft)
    
    const backRight = createWallWithWindow(width/2, wallHeight, thick, 2.5, 1.8, winYOffset, wallMat)
    backRight.position.set(width/4, wallCenterY, -halfD)
    g.add(backRight)

    // Side Walls
    // Left Wall (-X)
    // High window (stair side) or Low?
    // User requested transparent/broken windows.
    // Let's stick to High Windows for Stair sides, but make them physical holes too.
    // High Window: Center Y higher.
    
    // Left Wall
    // Is this a stair side?
    // Floor 0: Stairs Left. High.
    // Floor 1: Stairs Right. Low? Or High? (Hole is here).
    // Let's just create generic "Wall with Window" for sides.
    // Window size 3.0 height 1.2.
    const sideWinW = 3.0
    const sideWinH = 1.2
    
    // Rotate to match Side (Thick is X, Width is Z)
    // Actually our helper assumes Width is X, Thick is Z.
    // So we create it as (Depth, Height, Thick) and Rotate Y.
    const leftWObj = createWallWithWindow(depth, wallHeight, thick, sideWinW, sideWinH, winYOffset + 0.5, wallMat)
    leftWObj.rotation.y = Math.PI / 2
    leftWObj.position.set(-halfW, wallCenterY, 0)
    g.add(leftWObj)

    // Right Wall
    const rightWObj = createWallWithWindow(depth, wallHeight, thick, sideWinW, sideWinH, winYOffset + 0.5, wallMat)
    rightWObj.rotation.y = Math.PI / 2
    rightWObj.position.set(halfW, wallCenterY, 0)
    g.add(rightWObj)

    // Front Wall
    if (isGround) {
       // Doorway shifted to the RIGHT (x = 3.0).
       // Total width 12 (-6 to 6). Door width 2.0.
       // Door Range: [2.0, 4.0] (Center 3.0)
       
       // Left Segment: -6 to 2.0. Width 8.0. Center -2.0.
       const wFL = new THREE.Mesh(new THREE.BoxGeometry(8.0, wallHeight, thick), wallMat)
       wFL.position.set(-2.0, wallCenterY, halfD)
       g.add(wFL)
       
       // Right Segment: 4.0 to 6.0. Width 2.0. Center 5.0.
       const wFR = new THREE.Mesh(new THREE.BoxGeometry(2.0, wallHeight, thick), wallMat)
       wFR.position.set(5.0, wallCenterY, halfD)
       g.add(wFR)
       
       // Top Lintel (Door)
       const wTop = new THREE.Mesh(new THREE.BoxGeometry(2.0, wallHeight - 2.5, thick), wallMat)
       wTop.position.set(3.0, baseY + 2.5 + (wallHeight - 2.5)/2 + 0.3, halfD)
       g.add(wTop)
    } else {
       // Upper Floor Front Walls
       // Split like Back Wall
       const frontLeft = createWallWithWindow(width/2, wallHeight, thick, 2.5, 1.8, winYOffset, wallMat)
       frontLeft.position.set(-width/4, wallCenterY, halfD)
       g.add(frontLeft)
       
       const frontRight = createWallWithWindow(width/2, wallHeight, thick, 2.5, 1.8, winYOffset, wallMat)
       frontRight.position.set(width/4, wallCenterY, halfD)
       g.add(frontRight)
    }

    // --- DIVIDER WALL (PARTITION) ---
    const doorH = 2.4
    const doorW = 2.0
    const doorYOffset = -wallHeight/2 + doorH/2
    // Pass hasGlass = false
    const divider = createWallWithWindow(depth, wallHeight, thick, doorW, doorH, doorYOffset, wallMat, false)
    divider.rotation.y = Math.PI / 2
    divider.position.set(0, wallCenterY, 0)
    g.add(divider)

    // --- STAIRS ---
    if (floor < 3) {
      for (let s = 0; s < stairCount; s++) {
        const step = new THREE.Mesh(
          new THREE.BoxGeometry(stairWidth, stairRise * (s + 1), stairDepth),
          stairMat
        )
        step.position.set(
           stairXSign * (halfW - stairGap/2),
           baseY + 0.3 + stairRise * (s + 1) / 2,
           stairStartZ - s * stairDepth
        )
        step.castShadow = true; step.receiveShadow = true
        g.add(step)
      }
    }
  }

  // --- ROOF ---
  const roofY = 3 * floorHeight
  const rHoleXSign = -1
  const mainRW = width - stairGap
  const mainRoof = new THREE.Mesh(new THREE.BoxGeometry(mainRW + 0.4, 0.4, depth + 0.4), new THREE.MeshStandardMaterial({ color: 0x5a4a3a, roughness: 0.8 }))
  mainRoof.position.set(-rHoleXSign * (halfW - mainRW/2), roofY + 0.2, 0)
  mainRoof.receiveShadow = true
  g.add(mainRoof)

  const rHoleStart = stairStartZ + 0.5
  const rHoleEnd = stairStartZ - stairRunTotal - 0.2
  
  const rFrontDist = halfD - rHoleStart
  if (rFrontDist > 0) {
      const rf = new THREE.Mesh(new THREE.BoxGeometry(stairGap + 0.4, 0.4, rFrontDist + 0.2), new THREE.MeshStandardMaterial({ color: 0x5a4a3a, roughness: 0.8 }))
      rf.position.set(rHoleXSign * (halfW - stairGap/2), roofY + 0.2, halfD - rFrontDist/2)
      g.add(rf)
  }
  const rBackDist = rHoleEnd - (-halfD)
  if (rBackDist > 0) {
      const rb = new THREE.Mesh(new THREE.BoxGeometry(stairGap + 0.4, 0.4, rBackDist + 0.2), new THREE.MeshStandardMaterial({ color: 0x5a4a3a, roughness: 0.8 }))
      rb.position.set(rHoleXSign * (halfW - stairGap/2), roofY + 0.2, -halfD + rBackDist/2)
      g.add(rb)
  }
  
  // ROOF RAILING REMOVED AS REQUESTED (but re-added as perimeter railing later)

  // --- FURNITURE ---
  // Helpers
  // Helpers
  const createGrill = () => {
     const gr = new THREE.Group()
     const brickColor = 0xc0392b // Red/Orange Brick
     const brickMat = new THREE.MeshStandardMaterial({ color: brickColor, roughness: 0.9 })
     const metalMat = new THREE.MeshStandardMaterial({ color: 0xaaaaaa, metalness: 0.8, roughness: 0.2 })
     
     // Dimensions
     const w = 1.2
     const d = 0.8
     const baseH = 1.0
     const midH = 0.8
     const hoodH = 1.2
     const chimneyH = 0.5
     
     // 1. BASE (U-Shape storage)
     // Left Leg
     const legsW = 0.25
     const lLeg = new THREE.Mesh(new THREE.BoxGeometry(legsW, baseH, d), brickMat)
     lLeg.position.set(-w/2 + legsW/2, baseH/2, 0)
     lLeg.castShadow = true; lLeg.receiveShadow = true
     gr.add(lLeg)
     
     // Right Leg
     const rLeg = new THREE.Mesh(new THREE.BoxGeometry(legsW, baseH, d), brickMat)
     rLeg.position.set(w/2 - legsW/2, baseH/2, 0)
     rLeg.castShadow = true; rLeg.receiveShadow = true
     gr.add(rLeg)
     
     // Bottom Shelf (Concrete/Brick)
     const shelf = new THREE.Mesh(new THREE.BoxGeometry(w - legsW*2, 0.1, d), brickMat)
     shelf.position.set(0, 0.2, 0)
     gr.add(shelf)

     // Countertop (Base top)
     const counter = new THREE.Mesh(new THREE.BoxGeometry(w, 0.1, d), brickMat)
     counter.position.set(0, baseH, 0)
     gr.add(counter)

     // 2. GRILL AREA (Middle)
     // Side Walls
     const midWallW = 0.15
     const mwL = new THREE.Mesh(new THREE.BoxGeometry(midWallW, midH, d), brickMat)
     mwL.position.set(-w/2 + midWallW/2, baseH + midH/2, 0)
     gr.add(mwL)
     
     const mwR = new THREE.Mesh(new THREE.BoxGeometry(midWallW, midH, d), brickMat)
     mwR.position.set(w/2 - midWallW/2, baseH + midH/2, 0)
     gr.add(mwR)
     
     // Back Wall
     const mwB = new THREE.Mesh(new THREE.BoxGeometry(w - midWallW*2, midH, 0.1), brickMat)
     mwB.position.set(0, baseH + midH/2, -d/2 + 0.05)
     gr.add(mwB)
     
     // Metal Insert (Grill Box)
     const insertW = w - midWallW*2 - 0.05
     const insert = new THREE.Mesh(new THREE.BoxGeometry(insertW, midH - 0.2, d - 0.1), metalMat)
     insert.position.set(0, baseH + midH/2 - 0.1, 0)
     gr.add(insert)
     
     // Grill Bars
     const barGeo = new THREE.CylinderGeometry(0.01, 0.01, insertW, 4)
     barGeo.rotateZ(Math.PI/2)
     for(let i=0; i<5; i++) {
         const bar = new THREE.Mesh(barGeo, new THREE.MeshStandardMaterial({ color: 0xdddddd, metalness: 1.0 }))
         bar.position.set(0, baseH + midH/3, -d/4 + i * 0.1)
         gr.add(bar)
     }

     // 3. HOOD (Tapered)
     // Approximated with a smaller box on top or manual geometry? 
     // Let's use 4 slanted planes or a resized Cone (pyramid)
     // CylinderGeometry(radiusTop, radiusBottom, height, radialSegments) with 4 segments = Pyramid
     // But we need rectangular base.
     // Let's stack 3 boxes getting smaller.
     const hood1 = new THREE.Mesh(new THREE.BoxGeometry(w, 0.4, d), brickMat)
     hood1.position.set(0, baseH + midH + 0.2, 0)
     gr.add(hood1)
     
     const hood2 = new THREE.Mesh(new THREE.BoxGeometry(w*0.7, 0.4, d*0.7), brickMat)
     hood2.position.set(0, baseH + midH + 0.6, 0)
     gr.add(hood2)
     
     const hood3 = new THREE.Mesh(new THREE.BoxGeometry(w*0.5, 0.4, d*0.5), brickMat)
     hood3.position.set(0, baseH + midH + 1.0, 0)
     gr.add(hood3)
     
     // 4. CHIMNEY
     const chimney = new THREE.Mesh(new THREE.BoxGeometry(0.4, chimneyH, 0.4), brickMat)
     chimney.position.set(0, baseH + midH + 1.2 + chimneyH/2, 0)
     gr.add(chimney)
     
     const cap = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.1, 0.6), brickMat)
     cap.position.set(0, baseH + midH + 1.2 + chimneyH + 0.05, 0)
     gr.add(cap)
     
     // COLLISION BOX
     const colBox = new THREE.Mesh(new THREE.BoxGeometry(w, 4, d), new THREE.MeshBasicMaterial({ visible: false }))
     colBox.position.set(0, 2, 0)
     gr.add(colBox)

     return gr
  }
  
  const createTable = () => {
     const tbl = new THREE.Group()
     // Top - Increased from 1.5 to 2.5
     const top = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.15, 2.5), new THREE.MeshStandardMaterial({ color: 0x8b5a2b })) // Wood
     top.position.y = 1.0 // Raised from 0.8 to 1.0
     top.castShadow = true; top.receiveShadow = true
     tbl.add(top)
     // Leg (Center pedestal)
     const leg = new THREE.Mesh(new THREE.BoxGeometry(0.25, 1.0, 0.25), new THREE.MeshStandardMaterial({ color: 0x5a4a3a }))
     leg.position.y = 0.5
     tbl.add(leg)
     // Base
     const base = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.08, 1.0), new THREE.MeshStandardMaterial({ color: 0x5a4a3a }))
     base.position.y = 0.04
     tbl.add(base)
     
     // COLLISION BOX (Tall enough to be hit by raycaster)
     const colBox = new THREE.Mesh(new THREE.BoxGeometry(2.5, 1.8, 2.5), new THREE.MeshBasicMaterial({ visible: false }))
     colBox.position.y = 0.9
     tbl.add(colBox)
     
     return tbl
  }
  
  const createChair = (name?: string) => {
     const ch = new THREE.Group()
     if (name) ch.name = name
     const mat = new THREE.MeshStandardMaterial({ color: 0xffffff }) // White plastic
     // Seat - Increased from 0.65 to 0.85
     const seat = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.09, 0.85), mat)
     seat.position.y = 0.65 // Raised
     ch.add(seat)
     // Legs
     const lGeo = new THREE.BoxGeometry(0.09, 0.65, 0.09)
     const l1 = new THREE.Mesh(lGeo, mat); l1.position.set(-0.35, 0.325, -0.35); ch.add(l1)
     const l2 = new THREE.Mesh(lGeo, mat); l2.position.set(0.35, 0.325, -0.35); ch.add(l2)
     const l3 = new THREE.Mesh(lGeo, mat); l3.position.set(-0.35, 0.325, 0.35); ch.add(l3)
     const l4 = new THREE.Mesh(lGeo, mat); l4.position.set(0.35, 0.325, 0.35); ch.add(l4)
     // Back
     const back = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.75, 0.09), mat)
     back.position.set(0, 1.0, -0.38)
     ch.add(back)
     
     // COLLISION BOX
     const colBox = new THREE.Mesh(new THREE.BoxGeometry(0.95, 2.2, 0.95), new THREE.MeshBasicMaterial({ visible: false }))
     colBox.position.y = 1.1
     ch.add(colBox)
     
     return ch
  }

  // --- PLACEMENT ON ROOF ---
  const grill = createGrill()
  grill.position.set(-3, roofY + 0.2, 1.5) 
  grill.rotation.y = Math.PI / 4
  g.add(grill)
  
  const table = createTable()
  table.position.set(2, roofY + 0.2, 0)
  g.add(table)
  
  // 4 Chairs around table - better distribution
  const chair1 = createChair('roofChair1')
  chair1.position.set(2, roofY + 0.2, 1.2) // South (farther from table)
  chair1.rotation.y = Math.PI // Face North (toward table)
  g.add(chair1)

  const chair2 = createChair('roofChair2')
  chair2.position.set(2, roofY + 0.2, -1.2) // North (farther from table)
  chair2.rotation.y = 0 // Face South (toward table)
  g.add(chair2)

  const chair3 = createChair('roofChair3')
  chair3.position.set(0.8, roofY + 0.2, 0) // West (farther from table)
  chair3.rotation.y = Math.PI / 2 // Face East (toward table)
  g.add(chair3)

  const chair4 = createChair('roofChair4')
  chair4.position.set(3.2, roofY + 0.2, 0) // East (farther from table)
  chair4.rotation.y = -Math.PI / 2 // Face West (toward table)
  g.add(chair4)

  // Railings--- ROOF PERIMETER RAILING (Mureta) ---
  const railH = 1.0
  const railY = roofY + 0.2 + railH/2
  
  // Back Wall Railing
  const rBack = new THREE.Mesh(new THREE.BoxGeometry(width, railH, thick), wallMat)
  rBack.position.set(0, railY, -halfD + thick/2)
  rBack.castShadow = true; rBack.receiveShadow = true
  g.add(rBack)

  // Back Railing Collision
  const rBackCol = new THREE.Mesh(new THREE.BoxGeometry(width, 4.0, thick), new THREE.MeshBasicMaterial({ visible: false }))
  rBackCol.position.set(0, railY + 1.0, -halfD + thick/2)
  g.add(rBackCol)

  // Front Wall Railing
  const rFront = new THREE.Mesh(new THREE.BoxGeometry(width, railH, thick), wallMat)
  rFront.position.set(0, railY, halfD - thick/2)
  rFront.castShadow = true; rFront.receiveShadow = true
  g.add(rFront)
  
  // Front Railing Collision
  const rFrontCol = new THREE.Mesh(new THREE.BoxGeometry(width, 4.0, thick), new THREE.MeshBasicMaterial({ visible: false }))
  rFrontCol.position.set(0, railY + 1.0, halfD - thick/2)
  g.add(rFrontCol)

  // Left Wall Railing
  const rLeft = new THREE.Mesh(new THREE.BoxGeometry(thick, railH, depth - thick*2), wallMat)
  rLeft.position.set(-halfW + thick/2, railY, 0)
  rLeft.castShadow = true; rLeft.receiveShadow = true
  g.add(rLeft)
  
  // Left Railing Collision
  const rLeftCol = new THREE.Mesh(new THREE.BoxGeometry(thick, 4.0, depth - thick*2), new THREE.MeshBasicMaterial({ visible: false }))
  rLeftCol.position.set(-halfW + thick/2, railY + 1.0, 0)
  g.add(rLeftCol)

  // Right Wall Railing
  const rRight = new THREE.Mesh(new THREE.BoxGeometry(thick, railH, depth - thick*2), wallMat)
  rRight.position.set(halfW - thick/2, railY, 0)
  rRight.castShadow = true; rRight.receiveShadow = true
  g.add(rRight)
  
  // Right Railing Collision
  const rRightCol = new THREE.Mesh(new THREE.BoxGeometry(thick, 4.0, depth - thick*2), new THREE.MeshBasicMaterial({ visible: false }))
  rRightCol.position.set(halfW - thick/2, railY + 1.0, 0)
  g.add(rRightCol)

  return g
}
