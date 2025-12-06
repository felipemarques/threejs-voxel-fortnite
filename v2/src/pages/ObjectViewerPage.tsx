import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { createMalePlayer } from '@/game/player/MalePlayerObject'
import { createFemalePlayer } from '@/game/player/FemalePlayerObject'
import { createFatMalePlayer } from '@/game/player/FatMalePlayerObject'
import { createNormalZombie } from '@/game/enemies/NormalZombieObject'
import { createBigZombie } from '@/game/enemies/BigZombieObject'
import { createFatZombie } from '@/game/enemies/FatZombieObject'
import { createSlenderman } from '@/game/enemies/SlendermanObject'
import { createSpider } from '@/game/enemies/SpiderObject'
import { createVehicle } from '@/game/vehicles/VehicleObject'
import { createBus } from '@/game/vehicles/BusObject'
import { createMotorcycle } from '@/game/vehicles/MotorcycleObject'
import { createOakTree, createAlpineTree, createBush } from '@/game/nature/TreesObject'
import { createRock, createRockPillar, createFlatBoulder, createCrystalShard } from '@/game/nature/RocksObject'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'

type AnimationType = 'idle' | 'walk' | 'attack' | 'jump'
type MouthStyle = 'serious' | 'smile' | 'angry' | 'surprised' | 'none'
type WeaponType = 'none' | 'pistol' | 'rifle' | 'smg' | 'shotgun' | 'dmr' | 'sniper'
type CharacterType = 'male' | 'female' | 'fatMale' | 'zombie' | 'bigZombie' | 'fatZombie' | 'slenderman' | 'spider' | 'car' | 'truck' | 'bus' | 'motorcycle' | 'oak' | 'alpine' | 'bush' | 'rock' | 'pillar' | 'boulder' | 'crystal'
type HairStyle = 'long' | 'ponytail' | 'short' | 'bun'

export function ObjectViewerPage() {
  const navigate = useNavigate()
  const canvasRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(true)
  
  // Animation controls
  const [currentAnimation, setCurrentAnimation] = useState<AnimationType>('idle')
  const [animSpeed, setAnimSpeed] = useState(1.0)
  const [zoomDistance, setZoomDistance] = useState(10) // v1 default
  const [autoRotate, setAutoRotate] = useState(false)
  const [isNight, setIsNight] = useState(false)

  // Character selection
  const [characterType, setCharacterType] = useState<CharacterType>('male')
  
  // Player customization
  const [shirtColor, setShirtColor] = useState('#3498db')
  const [mouthStyle, setMouthStyle] = useState<MouthStyle>('serious')
  const [showHat, setShowHat] = useState(true)
  const [showGlasses, setShowGlasses] = useState(false)
  const [weapon, setWeapon] = useState<WeaponType>('none')
  
  // Female-specific customization
  const [hairColor, setHairColor] = useState('#8b4513') // Brown
  const [hairStyle, setHairStyle] = useState<HairStyle>('long')
  const [showEarrings, setShowEarrings] = useState(true)
  
  // Global visualization options
  const [showBoundingBox, setShowBoundingBox] = useState(false)

  // Refs for Three.js objects
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const controlsRef = useRef<OrbitControls | null>(null)
  const playerDataRef = useRef<any | null>(null)
  const ambientLightRef = useRef<THREE.AmbientLight | null>(null)
  const dirLightRef = useRef<THREE.DirectionalLight | null>(null)
  const boundingBoxHelperRef = useRef<THREE.BoxHelper | null>(null)
  
  // Refs for values read in animation loop
  const animSpeedRef = useRef(animSpeed)
  const currentAnimationRef = useRef(currentAnimation)
  const autoRotateRef = useRef(autoRotate)
  const characterTypeRef = useRef(characterType)

  // Update refs when state changes
  useEffect(() => { animSpeedRef.current = animSpeed }, [animSpeed])
  useEffect(() => {
    currentAnimationRef.current = currentAnimation
  }, [currentAnimation])
  useEffect(() => { autoRotateRef.current = autoRotate }, [autoRotate])
  useEffect(() => { characterTypeRef.current = characterType }, [characterType])

  // ESC key handler
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') navigate('/')
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [navigate])

  // Load/reload player
  const loadPlayer = (firstLoad = false) => {
    if (!sceneRef.current) return

    if (playerDataRef.current) {
      sceneRef.current.remove(playerDataRef.current.mesh)
    }

    const hexColor = parseInt(shirtColor.replace('#', '0x'))
    
    let playerData
    // Vehicles (return THREE.Group directly, not { mesh } object)
    if (characterType === 'car') {
      const carGroup = createVehicle('car')
      playerData = { mesh: carGroup }
    } else if (characterType === 'truck') {
      const truckGroup = createVehicle('truck')
      playerData = { mesh: truckGroup }
    } else if (characterType === 'bus') {
      const busGroup = createBus()
      playerData = { mesh: busGroup }
    } else if (characterType === 'motorcycle') {
      const motoGroup = createMotorcycle()
      playerData = { mesh: motoGroup }
    }
    // Nature objects (return THREE.Group directly)
    else if (characterType === 'oak') {
      const oakGroup = createOakTree()
      playerData = { mesh: oakGroup }
    } else if (characterType === 'alpine') {
      const alpineGroup = createAlpineTree()
      playerData = { mesh: alpineGroup }
    } else if (characterType === 'bush') {
      const bushGroup = createBush()
      playerData = { mesh: bushGroup }
    } else if (characterType === 'rock') {
      const rockMesh = createRock()
      playerData = { mesh: rockMesh }
    } else if (characterType === 'pillar') {
      const pillarMesh = createRockPillar()
      playerData = { mesh: pillarMesh }
    } else if (characterType === 'boulder') {
      const boulderMesh = createFlatBoulder()
      playerData = { mesh: boulderMesh }
    } else if (characterType === 'crystal') {
      const crystalMesh = createCrystalShard()
      playerData = { mesh: crystalMesh }
    }
    // Enemies
    else if (characterType === 'zombie') {
      playerData = createNormalZombie()
    } else if (characterType === 'bigZombie') {
      playerData = createBigZombie()
    } else if (characterType === 'fatZombie') {
      playerData = createFatZombie()
    } else if (characterType === 'slenderman') {
      playerData = createSlenderman()
    } else if (characterType === 'spider') {
      playerData = createSpider()
    }
    // Players
    else if (characterType === 'female') {
      playerData = createFemalePlayer({
        shirtColor: hexColor,
        hairColor: parseInt(hairColor.replace('#', '0x')),
        hairStyle,
        mouthStyle,
        showEarrings,
        showGlasses,
        weapon
      })
    } else if (characterType === 'fatMale') {
      playerData = createFatMalePlayer({
        shirtColor: hexColor,
        mouthStyle,
        showHat,
        showGlasses,
        weapon
      })
    } else {
      playerData = createMalePlayer({
        shirtColor: hexColor,
        mouthStyle,
        showHat,
        showGlasses,
        weapon
      })
    }
    
    sceneRef.current.add(playerData.mesh)
    playerDataRef.current = playerData

    if (firstLoad) setLoading(false)
  }

  // Three.js setup - EXACT copy from v1
  useEffect(() => {
    if (!canvasRef.current) return

    // Scene - EXACT v1 colors
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x2d3436)
    scene.fog = new THREE.Fog(0x2d3436, 10, 60)
    sceneRef.current = scene

    // Camera - EXACT v1 position
    const camera = new THREE.PerspectiveCamera(
      75,
      canvasRef.current.clientWidth / canvasRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.set(5, 4, 5) // v1 exact
    cameraRef.current = camera

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    canvasRef.current.appendChild(renderer.domElement)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.target.set(0, 1, 0)
    controlsRef.current = controls

    // Lights - EXACT v1
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)
    ambientLightRef.current = ambientLight

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.0)
    dirLight.position.set(10, 20, 10)
    dirLight.castShadow = true
    dirLight.shadow.mapSize.width = 2048
    dirLight.shadow.mapSize.height = 2048
    scene.add(dirLight)
    dirLightRef.current = dirLight

    // Ground - EXACT v1 colors
    const groundGeo = new THREE.PlaneGeometry(60, 60)
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x3d5a80, // v1 exact color
      roughness: 0.8,
      metalness: 0.2
    })
    const ground = new THREE.Mesh(groundGeo, groundMat)
    ground.rotation.x = -Math.PI / 2
    ground.receiveShadow = true
    ground.position.y = -0.01
    scene.add(ground)

    // Grid - EXACT v1 colors
    const gridHelper = new THREE.GridHelper(60, 60, 0x64dfdf, 0x293241)
    scene.add(gridHelper)

    // Load character
    loadPlayer(true)

    // Animation wrapper class data
    const animWrapperData = {
      baseY: 0,
      animTime: 0
    }

    // Animation clock
    const clock = new THREE.Clock()

    // Animation loop - EXACT v1
    function animate() {
      requestAnimationFrame(animate)
      
      const dt = clock.getDelta()
      
      // V1 exact: wrapper.update(dt * animSpeed, state)
      // which does: this.animTime += dt * 10
      // Skip animation for static objects (vehicles and nature)
      const staticObjects = ['car', 'truck', 'bus', 'motorcycle', 'oak', 'alpine', 'bush', 'rock', 'pillar', 'boulder', 'crystal']
      const isStaticObject = staticObjects.includes(characterTypeRef.current)
      
      if (playerDataRef.current && animSpeedRef.current > 0 && !isStaticObject) {
        animWrapperData.animTime += dt * animSpeedRef.current * 10
        animateCharacter(playerDataRef.current, currentAnimationRef.current, animWrapperData.animTime, animWrapperData)
      }

      // Auto rotate - v1 rotates CONTROLS not mesh
      if (autoRotateRef.current) {
        controls.autoRotate = true
        controls.autoRotateSpeed = 2.0
      } else {
        controls.autoRotate = false
      }

      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // Resize
    const handleResize = () => {
      if (!canvasRef.current) return
      const width = canvasRef.current.clientWidth
      const height = canvasRef.current.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      controls.dispose()
      if (canvasRef.current && renderer.domElement.parentNode === canvasRef.current) {
        canvasRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  // Update zoom - v1 style
  useEffect(() => {
    if (cameraRef.current && controlsRef.current) {
      // v1 uses fitCameraToObject logic, simplified here
      const angle = Math.atan2(
        cameraRef.current.position.x - controlsRef.current.target.x,
        cameraRef.current.position.z - controlsRef.current.target.z
      )
      const height = cameraRef.current.position.y - controlsRef.current.target.y
      
      cameraRef.current.position.x = controlsRef.current.target.x + Math.sin(angle) * zoomDistance
      cameraRef.current.position.z = controlsRef.current.target.z + Math.cos(angle) * zoomDistance
      cameraRef.current.position.y = controlsRef.current.target.y + height
    }
  }, [zoomDistance])

  // Day/Night toggle
  useEffect(() => {
    if (ambientLightRef.current && dirLightRef.current) {
      if (isNight) {
        ambientLightRef.current.intensity = 0.2
        dirLightRef.current.intensity = 0.3
      } else {
        ambientLightRef.current.intensity = 0.6
        dirLightRef.current.intensity = 1.0
      }
    }
  }, [isNight])
  
  // Reload player when character type changes
  useEffect(() => {
    loadPlayer(false)
  }, [characterType])
  
  // Bounding box visualization
  useEffect(() => {
    if (!sceneRef.current || !playerDataRef.current) return
    
    // Remove existing bounding box
    if (boundingBoxHelperRef.current) {
      sceneRef.current.remove(boundingBoxHelperRef.current)
      boundingBoxHelperRef.current.dispose()
      boundingBoxHelperRef.current = null
    }
    
    // Add bounding box if enabled
    if (showBoundingBox && playerDataRef.current.mesh) {
      const boxHelper = new THREE.BoxHelper(playerDataRef.current.mesh, 0x00ff00)
      sceneRef.current.add(boxHelper)
      boundingBoxHelperRef.current = boxHelper
    }
  }, [showBoundingBox, playerDataRef.current])

  // Animation function - handles both regular characters and spider
  function animateCharacter(playerData: any, anim: AnimationType, time: number, wrapper: any) {
    const t = time

    // Spider has special animation logic (8 legs with upper/lower pivots)
    if (playerData.legs && Array.isArray(playerData.legs)) {
      animateSpider(playerData, anim, t, wrapper)
      return
    }

    // Regular character animations (using arm/leg pivots)
    if (anim === 'idle') {
      if (playerData.leftArmPivot) playerData.leftArmPivot.rotation.x = Math.sin(t) * 0.1
      if (playerData.rightArmPivot) playerData.rightArmPivot.rotation.x = -Math.sin(t) * 0.1
      if (playerData.leftLegPivot) playerData.leftLegPivot.rotation.x = 0
      if (playerData.rightLegPivot) playerData.rightLegPivot.rotation.x = 0
      playerData.mesh.position.y = wrapper.baseY + Math.sin(t * 2) * 0.02
    } 
    else if (anim === 'walk') {
      const angle = Math.sin(t) * 0.5
      if (playerData.leftLegPivot) playerData.leftLegPivot.rotation.x = angle
      if (playerData.rightLegPivot) playerData.rightLegPivot.rotation.x = -angle
      if (playerData.leftArmPivot) playerData.leftArmPivot.rotation.x = -angle * 0.8
      if (playerData.rightArmPivot) playerData.rightArmPivot.rotation.x = angle * 0.8
      playerData.mesh.position.y = wrapper.baseY + Math.abs(Math.sin(t)) * 0.05
    }
    else if (anim === 'attack') {
      const progress = (Math.sin(t * 3) + 1) / 2
      const angle = -Math.PI / 2 * progress
      if (playerData.leftArmPivot) playerData.leftArmPivot.rotation.x = angle
      if (playerData.rightArmPivot) playerData.rightArmPivot.rotation.x = angle
    }
    else if (anim === 'jump') {
      playerData.mesh.position.y = wrapper.baseY + Math.abs(Math.sin(t * 2)) * 0.5
    }
  }

  // Spider-specific animations (from v1)
  function animateSpider(playerData: any, anim: AnimationType, t: number, wrapper: any) {
    if (!playerData.legs) return

    if (anim === 'idle') {
      // Front legs animate differently (menacing idle)
      playerData.legs.forEach((leg: any) => {
        if (leg.index === 0) {
          const speed = leg.side === 0 ? 1.5 : 1.2
          const offset = leg.side === 0 ? 0 : 1
          const wave = Math.sin(t * speed + offset) * 0.2
          leg.upper.rotation.x = -Math.PI / 4 + wave
          leg.lower.rotation.x = Math.PI / 1.2 - wave * 0.5
        } else {
          // Other legs subtle movement
          const wave = Math.sin(t * 0.5 + leg.index) * 0.05
          leg.upper.rotation.x = -Math.PI / 4 + wave
          leg.lower.rotation.x = Math.PI / 1.2
        }
      })
      // Body bobbing
      playerData.mesh.position.y = wrapper.baseY + Math.sin(t) * 0.02
    }
    else if (anim === 'walk') {
      // Alternating leg movement
      playerData.legs.forEach((leg: any) => {
        const offset = (leg.side + leg.index) % 2 === 0 ? 0 : Math.PI
        const wave = Math.sin(t * 2 + offset)
        leg.upper.rotation.x = -Math.PI / 4 + wave * 0.15
        leg.lower.rotation.x = Math.PI / 1.2 + wave * 0.1
        // Leg sway
        if (leg.upper.parent) {
          leg.upper.parent.rotation.z = wave * 0.2
        }
      })
      // Body bobbing while walking
      playerData.mesh.position.y = wrapper.baseY + Math.abs(Math.sin(t * 2)) * 0.04
    }
    else if (anim === 'attack') {
      // Front legs strike forward
      playerData.legs.forEach((leg: any) => {
        if (leg.index === 0) {
          const progress = (Math.sin(t * 3) + 1) / 2
          leg.upper.rotation.x = -Math.PI / 4 - progress * 0.6
          leg.lower.rotation.x = Math.PI / 1.2 - progress * 0.4
          if (leg.upper.parent) {
            leg.upper.parent.rotation.z = -progress * 1.2
          }
        }
      })
      // Head movement during attack
      if (playerData.head) {
        playerData.head.rotation.x = Math.sin(t * 3) * 0.3
      }
    }
    else if (anim === 'jump') {
      const jumpProgress = Math.abs(Math.sin(t * 1))
      playerData.mesh.position.y = wrapper.baseY + jumpProgress * 2
      // Legs curl up during jump
      playerData.legs.forEach((leg: any) => {
        const curl = Math.sin(t * 1)
        leg.upper.rotation.x = -Math.PI / 4 + curl * 0.3
        leg.lower.rotation.x = Math.PI / 1.2 - curl * 0.3
      })
    }
  }

  const handleResetCamera = () => {
    if (cameraRef.current && controlsRef.current) {
      cameraRef.current.position.set(5, 4, 5)
      controlsRef.current.target.set(0, 1, 0)
      setZoomDistance(10)
    }
  }

  return (
    <div className="w-screen h-screen bg-[#2d3436] flex">
      {/* Sidebar */}
      <div className="w-[300px] h-full bg-[rgba(30,30,30,0.95)] backdrop-blur-[10px] border-r border-[#444] flex flex-col shadow-[2px_0_10px_rgba(0,0,0,0.3)]">
        <div className="p-5 bg-[#111] border-b border-[#444]">
          <h2 className="text-xl m-0 text-[#00cec9] font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif]">Object Viewer</h2>
          <p className="text-[13px] text-[#aaa] mt-[5px] m-0">Voxel Firecraft Asset Inspector</p>
        </div>

        <div className="flex-1 overflow-y-auto p-[10px]">
          <div className="mb-[15px]">
            <div className="p-[8px_10px] font-bold text-[#dfe6e9] uppercase text-[13.6px] tracking-[1px] mb-[5px]">
              CHARACTERS
            </div>
            <div className="space-y-2">
              <Card 
                onClick={() => setCharacterType('male')}
                className={`cursor-pointer border-none ${
                  characterType === 'male' ? 'bg-[#0984e3]' : 'bg-[#444]'
                }`}
              >
                <CardHeader className="p-2">
                  <CardTitle className="text-xs text-white flex items-center m-0 font-medium">
                    <span className="mr-1.5 opacity-70 text-sm">🧑</span>
                    Male Character
                  </CardTitle>
                </CardHeader>
              </Card>
              
              <Card 
                onClick={() => setCharacterType('fatMale')}
                className={`cursor-pointer border-none ${
                  characterType === 'fatMale' ? 'bg-[#f39c12]' : 'bg-[#444]'
                }`}
              >
                <CardHeader className="p-2">
                  <CardTitle className="text-xs text-white flex items-center m-0 font-medium">
                    <span className="mr-1.5 opacity-70 text-sm">🍔</span>
                    Fat Male Character
                  </CardTitle>
                </CardHeader>
              </Card>
              
              <Card 
                onClick={() => setCharacterType('female')}
                className={`cursor-pointer border-none ${
                  characterType === 'female' ? 'bg-[#e91e63]' : 'bg-[#444]'
                }`}
              >
                <CardHeader className="p-2">
                  <CardTitle className="text-xs text-white flex items-center m-0 font-medium">
                    <span className="mr-1.5 opacity-70 text-sm">👩</span>
                    Female Character
                  </CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>
          
          {/* ENEMIES Section */}
          <div className="mb-[15px]">
            <div className="p-[8px_10px] font-bold text-[#dfe6e9] uppercase text-[13.6px] tracking-[1px] mb-[5px]">
              ENEMIES
            </div>
            <div className="space-y-2">
              <Card 
                onClick={() => setCharacterType('zombie')}
                className={`cursor-pointer border-none ${
                  characterType === 'zombie' ? 'bg-[#8e44ad]' : 'bg-[#444]'
                }`}
              >
                <CardHeader className="p-3">
                  <CardTitle className="text-sm text-white flex items-center m-0 font-medium">
                    <span className="mr-2 opacity-70">🧟</span>
                    Normal Zombie
                  </CardTitle>
                </CardHeader>
              </Card>
              
              <Card 
                onClick={() => setCharacterType('bigZombie')}
                className={`cursor-pointer border-none ${
                  characterType === 'bigZombie' ? 'bg-[#7d3c98]' : 'bg-[#444]'
                }`}
              >
                <CardHeader className="p-3">
                  <CardTitle className="text-sm text-white flex items-center m-0 font-medium">
                    <span className="mr-2 opacity-70">🧟‍♂️</span>
                    Big Zombie (2x)
                  </CardTitle>
                </CardHeader>
              </Card>
              
              <Card 
                onClick={() => setCharacterType('fatZombie')}
                className={`cursor-pointer border-none ${
                  characterType === 'fatZombie' ? 'bg-[#27ae60]' : 'bg-[#444]'
                }`}
              >
                <CardHeader className="p-3">
                  <CardTitle className="text-sm text-white flex items-center m-0 font-medium">
                    <span className="mr-2 opacity-70">🧟‍♀️</span>
                    Fat Zombie
                  </CardTitle>
                </CardHeader>
              </Card>
              
              <Card 
                onClick={() => setCharacterType('slenderman')}
                className={`cursor-pointer border-none ${
                  characterType === 'slenderman' ? 'bg-[#1a1a1a]' : 'bg-[#444]'
                }`}
              >
                <CardHeader className="p-3">
                  <CardTitle className="text-sm text-white flex items-center m-0 font-medium">
                    <span className="mr-2 opacity-70">🕴️</span>
                    Slenderman
                  </CardTitle>
                </CardHeader>
              </Card>
              
              <Card 
                onClick={() => setCharacterType('spider')}
                className={`cursor-pointer border-none ${
                  characterType === 'spider' ? 'bg-[#8b4513]' : 'bg-[#444]'
                }`}
              >
                <CardHeader className="p-3">
                  <CardTitle className="text-sm text-white flex items-center m-0 font-medium">
                    <span className="mr-2 opacity-70">🕷️</span>
                    Spider
                  </CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* VEHICLES Section */}
          <div className="mb-[15px]">
            <div className="p-[8px_10px] font-bold text-[#dfe6e9] uppercase text-[13.6px] tracking-[1px] mb-[5px]">
              VEHICLES
            </div>
            <div className="space-y-2">
              <Card 
                onClick={() => setCharacterType('car')}
                className={`cursor-pointer border-none ${
                  characterType === 'car' ? 'bg-[#1976d2]' : 'bg-[#444]'
                }`}
              >
                <CardHeader className="p-3">
                  <CardTitle className="text-sm text-white flex items-center m-0 font-medium">
                    <span className="mr-2 opacity-70">🚗</span>
                    Car
                  </CardTitle>
                </CardHeader>
              </Card>
              
              <Card 
                onClick={() => setCharacterType('truck')}
                className={`cursor-pointer border-none ${
                  characterType === 'truck' ? 'bg-[#1e3a5f]' : 'bg-[#444]'
                }`}
              >
                <CardHeader className="p-3">
                  <CardTitle className="text-sm text-white flex items-center m-0 font-medium">
                    <span className="mr-2 opacity-70">🚚</span>
                    Truck
                  </CardTitle>
                </CardHeader>
              </Card>
              
              <Card 
                onClick={() => setCharacterType('bus')}
                className={`cursor-pointer border-none ${
                  characterType === 'bus' ? 'bg-[#f39c12]' : 'bg-[#444]'
                }`}
              >
                <CardHeader className="p-3">
                  <CardTitle className="text-sm text-white flex items-center m-0 font-medium">
                    <span className="mr-2 opacity-70">🚌</span>
                    Bus
                  </CardTitle>
                </CardHeader>
              </Card>
              
              <Card 
                onClick={() => setCharacterType('motorcycle')}
                className={`cursor-pointer border-none ${
                  characterType === 'motorcycle' ? 'bg-[#2c3e50]' : 'bg-[#444]'
                }`}
              >
                <CardHeader className="p-3">
                  <CardTitle className="text-sm text-white flex items-center m-0 font-medium">
                    <span className="mr-2 opacity-70">🏍️</span>
                    Motorcycle
                  </CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* NATURE Section */}
          <div className="mb-[12px]">
            <div className="p-[6px_8px] font-bold text-[#dfe6e9] uppercase text-[12px] tracking-[1px] mb-[3px]">
              NATURE
            </div>
            <div className="space-y-1.5">
              <Card onClick={() => setCharacterType('oak')} className={`cursor-pointer border-none ${characterType === 'oak' ? 'bg-[#6b3f26]' : 'bg-[#444]'}`}>
                <CardHeader className="p-2"><CardTitle className="text-xs text-white flex items-center m-0 font-medium"><span className="mr-1.5 opacity-70 text-sm">🌳</span>Oak Tree</CardTitle></CardHeader>
              </Card>
              <Card onClick={() => setCharacterType('alpine')} className={`cursor-pointer border-none ${characterType === 'alpine' ? 'bg-[#1a5e28]' : 'bg-[#444]'}`}>
                <CardHeader className="p-2"><CardTitle className="text-xs text-white flex items-center m-0 font-medium"><span className="mr-1.5 opacity-70 text-sm">🌲</span>Alpine Tree</CardTitle></CardHeader>
              </Card>
              <Card onClick={() => setCharacterType('bush')} className={`cursor-pointer border-none ${characterType === 'bush' ? 'bg-[#2ca02c]' : 'bg-[#444]'}`}>
                <CardHeader className="p-2"><CardTitle className="text-xs text-white flex items-center m-0 font-medium"><span className="mr-1.5 opacity-70 text-sm">🌿</span>Bush</CardTitle></CardHeader>
              </Card>
              <Card onClick={() => setCharacterType('rock')} className={`cursor-pointer border-none ${characterType === 'rock' ? 'bg-[#7f8c8d]' : 'bg-[#444]'}`}>
                <CardHeader className="p-2"><CardTitle className="text-xs text-white flex items-center m-0 font-medium"><span className="mr-1.5 opacity-70 text-sm">🪨</span>Rock</CardTitle></CardHeader>
              </Card>
              <Card onClick={() => setCharacterType('pillar')} className={`cursor-pointer border-none ${characterType === 'pillar' ? 'bg-[#6d6d6d]' : 'bg-[#444]'}`}>
                <CardHeader className="p-2"><CardTitle className="text-xs text-white flex items-center m-0 font-medium"><span className="mr-1.5 opacity-70 text-sm">⛰️</span>Rock Pillar</CardTitle></CardHeader>
              </Card>
              <Card onClick={() => setCharacterType('boulder')} className={`cursor-pointer border-none ${characterType === 'boulder' ? 'bg-[#8b8b8b]' : 'bg-[#444]'}`}>
                <CardHeader className="p-2"><CardTitle className="text-xs text-white flex items-center m-0 font-medium"><span className="mr-1.5 opacity-70 text-sm">🗿</span>Flat Boulder</CardTitle></CardHeader>
              </Card>
              <Card onClick={() => setCharacterType('crystal')} className={`cursor-pointer border-none ${characterType === 'crystal' ? 'bg-[#9b59b6]' : 'bg-[#444]'}`}>
                <CardHeader className="p-2"><CardTitle className="text-xs text-white flex items-center m-0 font-medium"><span className="mr-1.5 opacity-70 text-sm">💎</span>Crystal Shard</CardTitle></CardHeader>
              </Card>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-[#444]">
          <Button onClick={() => navigate('/')} className="w-full bg-white text-black hover:bg-slate-200">
            ← Back to Menu
          </Button>
        </div>
      </div>

      {/* Canvas */}
      <div className="flex-1 relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#2d3436] z-50">
            <div className="w-10 h-10 border-4 border-[#00cec9] border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        
        <div ref={canvasRef} className="w-full h-full" />

        {/* Object Info */}
        <div className="absolute top-5 right-5 bg-[rgba(0,0,0,0.6)] px-[15px] py-[10px] rounded z-[5] text-right pointer-events-none">
          <h3 className="text-xl font-bold text-[#00cec9] m-0">
            {characterType === 'zombie' 
              ? 'Normal Zombie'
              : characterType === 'bigZombie'
              ? 'Big Zombie (2x)'
              : characterType === 'fatZombie'
              ? 'Fat Zombie'
              : characterType === 'slenderman'
              ? 'Slenderman'
              : characterType === 'spider'
              ? 'Spider'
              : characterType === 'car'
              ? 'Car'
              : characterType === 'truck'
              ? 'Truck'
              : characterType === 'bus'
              ? 'Bus'
              : characterType === 'motorcycle'
              ? 'Motorcycle' 
              : characterType === 'oak' ? 'Oak Tree'
              : characterType === 'alpine' ? 'Alpine Tree'
              : characterType === 'bush' ? 'Bush'
              : characterType === 'rock' ? 'Rock'
              : characterType === 'pillar' ? 'Rock Pillar'
              : characterType === 'boulder' ? 'Flat Boulder'
              : characterType === 'crystal' ? 'Crystal Shard'
              : `${characterType === 'female' ? 'Female' : characterType === 'fatMale' ? 'Fat Male' : 'Male'} Character`
            }
          </h3>
          <p className="text-[14.4px] text-[#aaa] m-0">
            {characterType}
</p>
        </div>

        {/* Controls Panel */}
        <div className="absolute bottom-5  right-5 w-[300px] bg-[rgba(30,30,30,0.9)] backdrop-blur-[5px] p-[15px] rounded-lg z-10 border border-[#444] max-h-[calc(100vh-100px)] overflow-y-auto">
          <div className="space-y-[15px]">
            {/* Player Controls - Only show for player characters (not enemies or vehicles) */}
            {['male', 'female', 'fatMale'].includes(characterType) && (
              <div>
                {/* Color Pickers Row */}
                <div className="grid grid-cols-2 gap-3 mb-2">
                  <div>
                    <label className="block mb-[5px] text-[13.6px] text-[#aaa]">Shirt Color</label>
                    <input type="color" value={shirtColor} onChange={(e) => setShirtColor(e.target.value)} className="w-full h-10" />
                  </div>
                  {characterType === 'female' && (
                    <div>
                      <label className="block mb-[5px] text-[13.6px] text-[#aaa]">Hair Color</label>
                      <input type="color" value={hairColor} onChange={(e) => setHairColor(e.target.value)} className="w-full h-10" />
                    </div>
                  )}
                </div>

                {/* Style Selectors Row */}
                <div className={`grid ${characterType === 'female' ? 'grid-cols-2' : 'grid-cols-1'} gap-3 mb-2`}>
                  {characterType === 'female' && (
                    <div>
                      <label className="block mb-[5px] text-[13.6px] text-[#aaa]">Hair Style</label>
                      <Select value={hairStyle} onValueChange={(v) => setHairStyle(v as HairStyle)}>
                        <SelectTrigger className="w-full p-1 bg-white/10 border-white/20 text-white"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="long">Long</SelectItem>
                          <SelectItem value="ponytail">Ponytail</SelectItem>
                          <SelectItem value="short">Short</SelectItem>
                          <SelectItem value="bun">Bun</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                  
                  <div>
                    <label className="block mb-[5px] text-[13.6px] text-[#aaa]">Mouth Style</label>
                    <Select value={mouthStyle} onValueChange={(v) => setMouthStyle(v as MouthStyle)}>
                      <SelectTrigger className="w-full p-1 bg-white/10 border-white/20 text-white"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="serious">Serious</SelectItem>
                        <SelectItem value="smile">Smile</SelectItem>
                        <SelectItem value="angry">Angry</SelectItem>
                        <SelectItem value="surprised">Surprised</SelectItem>
                        <SelectItem value="none">None</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <label className="block mb-[5px] text-[13.6px] text-[#aaa]">Accessories</label>
                <div className="mb-2 flex gap-3 flex-wrap">
                  {characterType === 'male' && (
                    <label className="inline-flex items-center cursor-pointer font-normal text-sm text-white">
                      <Checkbox id="hat" checked={showHat} onCheckedChange={(c: boolean) => setShowHat(c)} className="mr-2" /> Hat
                    </label>
                  )}
                  <label className="inline-flex items-center cursor-pointer font-normal text-sm text-white">
                    <Checkbox id="glasses" checked={showGlasses} onCheckedChange={(c: boolean) => setShowGlasses(c)} className="mr-2" /> Glasses
                  </label>
                  {characterType === 'female' && (
                    <label className="inline-flex items-center cursor-pointer font-normal text-sm text-white">
                      <Checkbox id="earrings" checked={showEarrings} onCheckedChange={(c: boolean) => setShowEarrings(c)} className="mr-2" /> Earrings
                    </label>
                  )}
                </div>

                <label className="block mb-[5px] text-[13.6px] text-[#aaa]">Weapon</label>
                <Select value={weapon} onValueChange={(v) => setWeapon(v as WeaponType)}>
                  <SelectTrigger className="w-full mb-2 p-1 bg-white/10 border-white/20 text-white"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None</SelectItem>
                    <SelectItem value="pistol">Pistol</SelectItem>
                    <SelectItem value="rifle">Rifle</SelectItem>
                    <SelectItem value="smg">SMG</SelectItem>
                    <SelectItem value="shotgun">Shotgun</SelectItem>
                    <SelectItem value="dmr">DMR</SelectItem>
                    <SelectItem value="sniper">Sniper</SelectItem>
                  </SelectContent>
                </Select>

                <button onClick={() => loadPlayer(false)} className="bg-[#444] border-none text-white px-3 py-[6px] rounded cursor-pointer text-[13.6px] transition-colors hover:bg-[#555] w-full">
                  Apply Changes
                </button>
              </div>
            )}

            {/* Animation controls - Only for characters and enemies (not vehicles or nature) */}
            {!['car', 'truck', 'bus', 'motorcycle', 'oak', 'alpine', 'bush', 'rock', 'pillar', 'boulder', 'crystal'].includes(characterType) && (
              <>
                {/* Animation */}
                <div>
                  <label className="block mb-2 text-[13.6px] text-[#aaa]">Animation</label>
                  <div className="flex gap-[5px] flex-wrap">
                    {(['idle', 'walk', 'attack', 'jump'] as AnimationType[]).map(anim => (
                      <button
                        key={anim}
                        onClick={() => setCurrentAnimation(anim)}
                        className={`bg-[#444] border-none text-white px-3 py-[6px] rounded cursor-pointer text-[13.6px] transition-colors hover:bg-[#555] ${
                          currentAnimation === anim ? '!bg-[#00cec9] !text-black font-bold' : ''
                        }`}
                      >
                        {anim.charAt(0).toUpperCase() + anim.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Animation Speed */}
                <div>
                  <label className="block mb-2 text-[13.6px] text-[#aaa]">Animation Speed: <span className="text-white">{animSpeed.toFixed(1)}</span>x</label>
                  <input type="range" min="0" max="2" step="0.1" value={animSpeed} onChange={(e) => setAnimSpeed(parseFloat(e.target.value))} className="w-full" />
                </div>
              </>
            )}

            {/* Zoom */}
            <div>
              <label className="block mb-2 text-[13.6px] text-[#aaa]">Zoom Distance: <span className="text-white">{zoomDistance}</span></label>
              <input type="range" min="2" max="60" step="0.5" value={zoomDistance} onChange={(e) => setZoomDistance(parseFloat(e.target.value))} className="w-full" />
            </div>

            {/* Camera */}
            <div>
              <label className="block mb-2 text-[13.6px] text-[#aaa]">Camera</label>
              <div className="flex gap-[5px]">
                <button onClick={handleResetCamera} className="bg-[#444] border-none text-white px-3 py-[6px] rounded cursor-pointer text-[13.6px] transition-colors hover:bg-[#555]">
                  Reset View
                </button>
                <button onClick={() => setAutoRotate(!autoRotate)} className="bg-[#444] border-none text-white px-3 py-[6px] rounded cursor-pointer text-[13.6px] transition-colors hover:bg-[#555]">
                  Auto Rotate
                </button>
              </div>
            </div>

            {/* Lighting */}
            <div>
              <label className="block mb-2 text-[13.6px] text-[#aaa]">Lighting</label>
              <button onClick={() => setIsNight(!isNight)} className="bg-[#444] border-none text-white  px-3 py-[6px] rounded cursor-pointer text-[13.6px] transition-colors hover:bg-[#555] w-full">
                Day/Night
              </button>
            </div>
            
            {/* Visualization Options */}
            <div>
              <label className="block mb-2 text-[13.6px] text-[#aaa]">Visualization</label>
              <label className="inline-flex items-center cursor-pointer font-normal text-sm text-white w-full">
                <Checkbox 
                  id="boundingBox" 
                  checked={showBoundingBox} 
                  onCheckedChange={(c: boolean) => setShowBoundingBox(c)} 
                  className="mr-2" 
                /> 
                Show Bounding Box
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
