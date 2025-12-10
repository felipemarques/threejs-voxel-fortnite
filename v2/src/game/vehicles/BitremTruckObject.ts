import * as THREE from 'three'

/**
 * Creates a Bitrem Truck (Scania-style Cab + 2 Trailers)
 */
export function createBitremTruck() {
  const group = new THREE.Group()

  // Materials
  const paintColor = 0x808080 // Gray
  const paintMat = new THREE.MeshStandardMaterial({ color: paintColor, roughness: 0.2, metalness: 0.3 })
  const chassisMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.8 })
  const chromeMat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.9, roughness: 0.1 })
  const glassMat = new THREE.MeshStandardMaterial({ color: 0x336699, transparent: true, opacity: 0.4, metalness: 0.6 })
  const rubberMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9 })
  const lightRed = new THREE.MeshStandardMaterial({ color: 0xff0000, emissive: 0x550000 })
  const lightYellow = new THREE.MeshStandardMaterial({ color: 0xffaa00, emissive: 0x553300 })
  const lightWhite = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0x555555 })

  // --- TRUCK CAB (SCANIA STYLE) ---
  const cabGroup = new THREE.Group()
  group.add(cabGroup)

  // Chassis
  const chassisGeo = new THREE.BoxGeometry(2.4, 0.4, 7.0)
  const chassis = new THREE.Mesh(chassisGeo, chassisMat)
  chassis.position.y = 0.8
  chassis.castShadow = true
  cabGroup.add(chassis)

  // Cab Body (Box component)
  const cabW = 2.5
  const cabH = 3.2
  const cabD = 2.2
  const cab = new THREE.Mesh(new THREE.BoxGeometry(cabW, cabH, cabD), paintMat)
  cab.position.set(0, 0.8 + 0.2 + cabH/2, 2.0) // Front of chassis
  cab.castShadow = true
  cabGroup.add(cab)

  // Windshield
  const windGeo = new THREE.PlaneGeometry(2.3, 1.2)
  const windshield = new THREE.Mesh(windGeo, glassMat)
  windshield.position.set(0, 3.2, 3.11)
  // No rotation needed if front face is +Z? 
  // Wait, standard orientation: usually +Z is front or -Z is front?
  // In `createVehicle`, car length is Z.
  // Let's assume +Z is front.
  windshield.rotation.y = Math.PI // Face +Z? Plane faces +Z by default.
  // Wait, if box is at Z=2.0 (Front), and we want windshield on front face:
  // Box Z extend is 2.0 +/- 1.1 = 0.9 to 3.1.
  // So front face is at 3.1. 
  // Plane default normal is +Z. So we don't need rot Y PI if we want it facing +Z.
  // But usually we face -Z in Three.js? 
  // Let's stick to +Z is front for vehicle building here, can rotate container later.
  windshield.position.z = 3.11
  cabGroup.add(windshield)

  // Grille
  const grillGeo = new THREE.BoxGeometry(2.0, 1.2, 0.1)
  const grill = new THREE.Mesh(grillGeo, new THREE.MeshStandardMaterial({ color: 0x111111 }))
  grill.position.set(0, 1.8, 3.11)
  cabGroup.add(grill)

  // Headlights
  const hlL = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.2, 0.1), lightWhite)
  hlL.position.set(-0.9, 1.3, 3.11)
  cabGroup.add(hlL)
  const hlR = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.2, 0.1), lightWhite)
  hlR.position.set(0.9, 1.3, 3.11)
  cabGroup.add(hlR)

  // Wheels Helper
  const createWheel = (x: number, z: number) => {
    const w = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 0.3, 16), rubberMat)
    w.rotation.z = Math.PI / 2
    w.position.set(x, 0.45, z)
    w.castShadow = true
    return w
  }

  // Cab Wheels (6x4)
  // Front
  cabGroup.add(createWheel(-1.1, 2.5))
  cabGroup.add(createWheel(1.1, 2.5))
  // Rear 1
  cabGroup.add(createWheel(-1.1, -1.5))
  cabGroup.add(createWheel(1.1, -1.5))
  // Rear 2
  cabGroup.add(createWheel(-1.1, -2.8))
  cabGroup.add(createWheel(1.1, -2.8))

  // --- TRAILERS ---
  const trailerW = 2.6
  const trailerH = 3.5 // Box height
  const trailerL = 8.0 // Length of one bitrem trailer
  const trailerColorMat = paintMat // Same gray

  const createTrailer = (zOffset: number) => {
      const tGroup = new THREE.Group()
      
      // Chassis
      const tChassis = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.4, trailerL), chassisMat)
      tChassis.position.y = 0.8
      tGroup.add(tChassis)
      
      // Cargo Box
      const box = new THREE.Mesh(new THREE.BoxGeometry(trailerW, trailerH, trailerL), trailerColorMat)
      box.position.y = 0.8 + 0.2 + trailerH/2
      box.castShadow = true
      tGroup.add(box)
      
      // Wheels (3 Axles at rear)
      const rearZ = -trailerL/2 + 1.5 // Start from back
      tGroup.add(createWheel(-1.1, rearZ))
      tGroup.add(createWheel(1.1, rearZ))
      
      tGroup.add(createWheel(-1.1, rearZ + 1.2))
      tGroup.add(createWheel(1.1, rearZ + 1.2))
      
      tGroup.add(createWheel(-1.1, rearZ + 2.4))
      tGroup.add(createWheel(1.1, rearZ + 2.4))
      
      // Connector/Pin for next trailer? (visual only)
      // Bitrem front trailer has a fifth wheel at the back
      const fifthWheel = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.1, 12), chassisMat)
      fifthWheel.position.set(0, 1.1, -trailerL/2 - 0.5) // Stick out back
      tGroup.add(fifthWheel)
      
      tGroup.position.z = zOffset
      return tGroup
  }

  // Trailer 1 Position
  // Hitch is at Cab Rear approx Z = -2.0
  // Trailer 1 Front is at hitch.
  // Trailer 1 Center approaches Z = -2.0 - (TrailerL/2) = -6.0
  const t1 = createTrailer(-6.5)
  group.add(t1)

  // Trailer 2 Position
  // Connected to Trailer 1 Rear. 
  // Trailer 1 Rear is roughly T1.z - L/2 = -6.5 - 4.0 = -10.5
  // Trailer 2 Front attaches there.
  // Trailer 2 Center = -10.5 - (TrailerL/2) = -14.5
  const t2 = createTrailer(-15.5) // small gap
  group.add(t2)

  return group
}
