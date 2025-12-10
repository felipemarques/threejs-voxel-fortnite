import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js'
import * as CANNON from 'cannon-es'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
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
import { createBitremTruck } from '@/game/vehicles/BitremTruckObject'
import { createOakTree, createAlpineTree, createBush } from '@/game/nature/TreesObject'
import { createRock, createRockPillar, createFlatBoulder, createCrystalShard } from '@/game/nature/RocksObject'
import { createHouse } from '@/game/buildings/HouseObject'
import { createSmallBuilding } from '@/game/buildings/SmallBuildingObject'
import { createTowerBuilding } from '@/game/buildings/Tower3FloorsObject'
import { createApartmentBuilding } from '@/game/buildings/ApartmentBuildingObject'
import { createWarehouse } from '@/game/buildings/WarehouseObject'
import { createJelly } from '@/game/enemies/JellyObject'
import { loadPistolModel } from '@/game/weapons/PistolObject'
import { loadPistol2Model } from '@/game/weapons/Pistol2Object'
import { loadSniperModel } from '@/game/weapons/SniperObject'
import { loadShotgunModel } from '@/game/weapons/ShotgunObject'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { CharacterAnimator } from '@/game/animations/CharacterAnimator'

type AnimationType = 'idle' | 'walk' | 'run' | 'attack' | 'jump' | 'dance' | 'die'
type MouthStyle = 'serious' | 'smile' | 'angry' | 'surprised' | 'none'
type WeaponType = 'none' | 'pistol' | 'rifle' | 'smg' | 'shotgun' | 'dmr' | 'sniper'
type CharacterType = 'male' | 'female' | 'fatMale' | 'zombie' | 'bigZombie' | 'fatZombie' | 'jelly' | 'slenderman' | 'spider' | 'car' | 'truck' | 'bitrem' | 'bus' | 'motorcycle' | 'oak' | 'alpine' | 'bush' | 'rock' | 'pillar' | 'boulder' | 'crystal' | 'house' | 'building' | 'tower' | 'apartment' | 'warehouse' | 'pistol' | 'pistol2' | 'sniper' | 'shotgun' | 'custom'
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
  const [isWalkMode, setIsWalkMode] = useState(false)
  const [isCharacterView, setIsCharacterView] = useState(false) // For weapons

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
  
  // Debug Inspector
  const [debugMode, setDebugMode] = useState(false)
  const [selectedDebugObject, setSelectedDebugObject] = useState<THREE.Object3D | null>(null)
  const [debugPanelPos, setDebugPanelPos] = useState({ x: 20, y: 100 })
  const debugBoxHelperRef = useRef<THREE.BoxHelper | null>(null)
  const isDraggingPanelRef = useRef(false)
  const dragStartPosRef = useRef({ x: 0, y: 0 })

  // Refs for Three.js objects
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const controlsRef = useRef<OrbitControls | null>(null)
  const playerDataRef = useRef<any | null>(null)
  const ambientLightRef = useRef<THREE.AmbientLight | null>(null)
  const dirLightRef = useRef<THREE.DirectionalLight | null>(null)
  const boundingBoxHelperRef = useRef<THREE.BoxHelper | null>(null)
  
  // Physics & Walk  // Custom GLB Loader State
  const [customAnimations, setCustomAnimations] = useState<string[]>([])
  const [activeCustomAnim, setActiveCustomAnim] = useState<string>('')
  const customMixerRef = useRef<THREE.AnimationMixer | null>(null)
  const customActionsRef = useRef<Record<string, THREE.AnimationAction>>({})
  const fileInputRef = useRef<HTMLInputElement>(null)
  
  // Audio state
  const [isMuted, setIsMuted] = useState(false)
  
  // Custom model Y position offset
  const [customModelYOffset, setCustomModelYOffset] = useState(0)
  const customModelBaseYRef = useRef(0) // Store the original Y position after auto-positioning
  
  // Apartment building customization
  const [apartmentFloors, setApartmentFloors] = useState(4)
  const [apartmentWallColor, setApartmentWallColor] = useState('#c8d6e5')
  
  const moveForward = useRef(false)
  const moveBackward = useRef(false)
  const moveLeft = useRef(false)
  const moveRight = useRef(false)
  const canJump = useRef(false)
  const velocity = useRef(new THREE.Vector3())
  // Controls State
  const pointerLockControlsRef = useRef<PointerLockControls | null>(null)
  const isTouchRef = useRef(false) // Flag to prevent auto-unlock on touch devices
  const raycasterRef = useRef(new THREE.Raycaster())

  // Avatar Ref
  const avatarRef = useRef<THREE.Group | null>(null)

  // Cannon.js Physics (for Tower boxes)
  const physicsWorldRef = useRef<CANNON.World | null>(null)
  const physicsBoxMeshes = useRef<THREE.Mesh[]>([])
  const physicsBoxBodies = useRef<CANNON.Body[]>([])
  const staticCollisionMeshes = useRef<THREE.Mesh[]>([]) // Chair meshes for raycasting
  const staticCollisionBodies = useRef<CANNON.Body[]>([]) // Chair bodies for physics

  // Walk Mode Toggle
  const toggleWalkMode = () => {
    if (!pointerLockControlsRef.current) return
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
    
    if (isWalkMode) {
      setIsWalkMode(false)
      isTouchRef.current = false
      pointerLockControlsRef.current.unlock()
    } else {
      setIsWalkMode(true)
      // Assume touch/manual mode initially. 
      // If we are on Desktop, 'lock' event will fire and clear this flag.
      isTouchRef.current = true 
      
      try {
         pointerLockControlsRef.current.lock()
      } catch (e) {
         console.warn("Pointer lock failed (expected on touch devices):", e)
      }
    }
  }

  // Manage Avatar, Spawn, & Controls State
  useEffect(() => {
    if (!sceneRef.current) return
    
    if (isWalkMode) {
      // Disable Orbit Controls (Crucial for Tablet to avoid conflicts)
      if (controlsRef.current) controlsRef.current.enabled = false
      
      // Spawn Avatar based on selected character type
      const hexColor = parseInt(shirtColor.replace('#', '0x'))
      
      let avatar
      if (characterType === 'fatMale') {
        avatar = createFatMalePlayer({
          shirtColor: hexColor,
          mouthStyle,
          showHat,
          showGlasses,
          weapon
        })
      } else if (characterType === 'female') {
        const hexHairColor = parseInt(hairColor.replace('#', '0x'))
        avatar = createFemalePlayer({
          shirtColor: hexColor,
          hairColor: hexHairColor,
          hairStyle,
          mouthStyle,
          showEarrings,
          showGlasses,
          weapon
        })
      } else {
        // Default to male
        avatar = createMalePlayer({
          shirtColor: hexColor,
          mouthStyle,
          showHat,
          showGlasses,
          weapon
        })
      }
      
      avatar.mesh.scale.set(1.0, 1.0, 1.0) // Same scale as Object Viewer
      // Store full structure in userData so we can animate it
      avatar.mesh.userData = avatar 
      sceneRef.current.add(avatar.mesh)
      avatarRef.current = avatar.mesh

      // --- SPAWN FIX ---
      if (pointerLockControlsRef.current) {
        playerPosRef.current.set(0, 10, 25)
        cameraYawRef.current = 0 
        cameraPitchRef.current = 0.1
        velocity.current.set(0, 0, 0)
      }
    } else {
      // Re-enable Orbit Controls
      if (controlsRef.current) controlsRef.current.enabled = true
      
      // Remove Avatar
      if (avatarRef.current) {
        sceneRef.current.remove(avatarRef.current)
        avatarRef.current = null
      }
    }
  }, [isWalkMode])

  // Pointer Lock Listeners (Sync State)
  useEffect(() => {
    if (!pointerLockControlsRef.current) return
    const plControls = pointerLockControlsRef.current
    
    const onLock = () => {
       // We successfully locked, so we are on Desktop. 
       // Disable touch flag so ESC key works correctly.
       isTouchRef.current = false
    }
    const onUnlock = () => {
       // If we are in "Touch Mode" (implying lock failed or unavailable), 
       // ignore the unlock event to prevent closing Walk Mode.
       if (isTouchRef.current) return
       
       setIsWalkMode(false)
    }
    
    plControls.addEventListener('lock', onLock)
    plControls.addEventListener('unlock', onUnlock)
    return () => {
      plControls.removeEventListener('lock', onLock)
      plControls.removeEventListener('unlock', onUnlock)
    }
  }, [pointerLockControlsRef.current])

  // Keyboard Controls
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'ArrowUp':
        case 'KeyW': moveForward.current = true; break
        case 'ArrowLeft':
        case 'KeyA': moveLeft.current = true; break
        case 'ArrowDown':
        case 'KeyS': moveBackward.current = true; break
        case 'ArrowRight':
        case 'KeyD': moveRight.current = true; break
        case 'Space': if (canJump.current) velocity.current.y += 12; canJump.current = false; break // Jump force
      }
    }
    const onKeyUp = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'ArrowUp':
        case 'KeyW': moveForward.current = false; break
        case 'ArrowLeft':
        case 'KeyA': moveLeft.current = false; break
        case 'ArrowDown':
        case 'KeyS': moveBackward.current = false; break
        case 'ArrowRight':
        case 'KeyD': moveRight.current = false; break
      }
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('keyup', onKeyUp)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('keyup', onKeyUp)
    }
  }, [])

  // Refs for values read in animation loop
  const animSpeedRef = useRef(animSpeed)
  const currentAnimationRef = useRef(currentAnimation)
  const autoRotateRef = useRef(autoRotate)
  const characterTypeRef = useRef(characterType)
  const isWalkModeRef = useRef(isWalkMode)
  const cameraYawRef = useRef(0)
  const cameraPitchRef = useRef(0.3) // Initial pitch (slightly looking down)
  
  // Player Physics Position (Decoupled from Camera)
  const playerPosRef = useRef(new THREE.Vector3(0, 10, 25))

  // Load OBJ File
  const loadOBJFile = (file: File) => {
    setLoading(true)
    const blobUrl = URL.createObjectURL(file)
    const loader = new OBJLoader()
    
    loader.load(
      blobUrl,
      (object) => {
        try {
          URL.revokeObjectURL(blobUrl)
          
          // Clear previous
          if (playerDataRef.current?.mesh) {
            sceneRef.current?.remove(playerDataRef.current.mesh)
          }
          
          // Apply default material to all meshes
          object.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              child.material = new THREE.MeshStandardMaterial({
                color: 0xcccccc,
                roughness: 0.7,
                metalness: 0.3
              })
              child.castShadow = true
              child.receiveShadow = true
            }
          })
          
          sceneRef.current?.add(object)
          
          // Center and scale
          const box = new THREE.Box3().setFromObject(object)
          const size = box.getSize(new THREE.Vector3())
          const maxDim = Math.max(size.x, size.y, size.z)
          if (maxDim > 10 || maxDim < 0.5) {
            const scale = 2 / maxDim
            object.scale.set(scale, scale, scale)
          }
          
          // Position on ground
          box.setFromObject(object)
          const yOffset = -box.min.y
          object.position.set(0, yOffset, 0)
          
          // Store base Y position for offset control
          customModelBaseYRef.current = yOffset
          
          // Reset Y offset control
          setCustomModelYOffset(0)
          
          // No animations for OBJ files
          setCustomAnimations([])
          customMixerRef.current = null
          customActionsRef.current = {}
          
          playerDataRef.current = {
            mesh: object,
            type: 'custom'
          }
          
          setCharacterType('custom')
          setLoading(false)
        } catch (err) {
          URL.revokeObjectURL(blobUrl)
          console.error('Error processing OBJ:', err)
          alert('Erro ao processar o modelo OBJ.')
          setLoading(false)
        }
      },
      undefined,
      (error) => {
        URL.revokeObjectURL(blobUrl)
        console.error('Error loading OBJ:', error)
        alert('Erro ao carregar arquivo OBJ.')
        setLoading(false)
      }
    )
  }

  // Handle Custom GLB/GLTF/OBJ Load
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Detect file type by extension
    const fileExtension = file.name.split('.').pop()?.toLowerCase()
    
    if (fileExtension === 'obj') {
      loadOBJFile(file)
      return
    }

    // Default to GLTF/GLB loading
    setLoading(true)
    
    // Create a blob URL from the file - more reliable than ArrayBuffer
    const blobUrl = URL.createObjectURL(file)
    
    // Create loading manager to handle missing textures gracefully
    const manager = new THREE.LoadingManager()
    manager.onError = (url) => {
      // Suppress texture not found errors (expected for external textures in GLTF)
      if (!url.includes('.png') && !url.includes('.jpg') && !url.includes('.jpeg')) {
        console.warn('Failed to load:', url)
      }
    }
    
    const loader = new GLTFLoader(manager)
    
    // Load using the blob URL instead of parsing ArrayBuffer
    loader.load(
      blobUrl,
      (gltf) => {
        try {
          // Clean up blob URL after loading
          URL.revokeObjectURL(blobUrl)
          
          // Clear previous
          if (playerDataRef.current?.mesh) {
            sceneRef.current?.remove(playerDataRef.current.mesh)
          }
          
          const model = gltf.scene
          sceneRef.current?.add(model)
          
          // Center and scale if reasonable
          const box = new THREE.Box3().setFromObject(model)
          const size = box.getSize(new THREE.Vector3())
          const maxDim = Math.max(size.x, size.y, size.z)
          if (maxDim > 10 || maxDim < 0.5) {
            const scale = 2 / maxDim
            model.scale.set(scale, scale, scale)
          }
          
          // Position model so its bottom sits on the ground (y = 0)
          box.setFromObject(model) // Recalculate after scaling
          const yOffset = -box.min.y // Offset to place bottom at y=0
          model.position.set(0, yOffset, 0)
          
          // Store base Y position for offset control
          customModelBaseYRef.current = yOffset
          
          // Reset custom Y offset when loading new model
          setCustomModelYOffset(0)
          
          // Setup Animation Mixer
          const mixer = new THREE.AnimationMixer(model)
          customMixerRef.current = mixer
          customActionsRef.current = {}
          
          const animNames: string[] = []
          gltf.animations.forEach((clip) => {
            const action = mixer.clipAction(clip)
            action.setLoop(THREE.LoopRepeat, Infinity)
            customActionsRef.current[clip.name] = action
            animNames.push(clip.name)
          })
          
          setCustomAnimations(animNames)
          if (animNames.length > 0) {
            setActiveCustomAnim(animNames[0])
            const firstAction = customActionsRef.current[animNames[0]]
            firstAction.setLoop(THREE.LoopRepeat, Infinity)
            firstAction.play()
          }
          
          playerDataRef.current = {
            mesh: model,
            type: 'custom'
          }
          
          setCharacterType('custom')
          setLoading(false)
        } catch (err) {
          URL.revokeObjectURL(blobUrl)
          console.error('Error processing model:', err)
          alert('Erro ao processar o modelo. O arquivo pode estar corrompido.')
          setLoading(false)
        }
      },
      (progress) => {
        // Optional: could show progress here
        console.log('Loading:', (progress.loaded / progress.total * 100).toFixed(2) + '%')
      },
      (error) => {
        URL.revokeObjectURL(blobUrl)
        console.error('Error loading GLTF/GLB:', error)
        alert('Erro ao carregar o arquivo. Certifique-se de que é um arquivo .glb ou .gltf válido.')
        setLoading(false)
      }
    )
  }

  const playCustomAnimation = (animName: string) => {
    if (!customMixerRef.current || !customActionsRef.current[animName]) return
    
    // Stop current
    if (activeCustomAnim && customActionsRef.current[activeCustomAnim]) {
      customActionsRef.current[activeCustomAnim].fadeOut(0.2)
    }
    
    // Play new
    const action = customActionsRef.current[animName]
    action.setLoop(THREE.LoopRepeat, Infinity)
    action.reset().fadeIn(0.2).play()
    setActiveCustomAnim(animName)
  }

  // Update refs when state changes
  useEffect(() => { animSpeedRef.current = animSpeed }, [animSpeed])
  useEffect(() => {
    currentAnimationRef.current = currentAnimation
  }, [currentAnimation])
  useEffect(() => { autoRotateRef.current = autoRotate }, [autoRotate])
  useEffect(() => { characterTypeRef.current = characterType }, [characterType])

  // Apply Y offset to custom model when slider changes
  useEffect(() => {
    if (characterType === 'custom' && playerDataRef.current?.mesh) {
      // Apply offset on top of the base Y position
      playerDataRef.current.mesh.position.y = customModelBaseYRef.current + customModelYOffset
    }
  }, [customModelYOffset, characterType])

  // Load character-specific defaults when switching
  useEffect(() => {
    if (characterType === 'custom') return // Custom handled by file load
    if (characterType === 'male') {
      setShirtColor('#3498db') // Blue
      setMouthStyle('serious')
      setShowHat(true)
      setShowGlasses(false)
      setWeapon('none')
    } else if (characterType === 'fatMale') {
      setShirtColor('#e67e22') // Orange
      setMouthStyle('serious')
      setShowHat(false)
      setShowGlasses(false)
      setWeapon('none')
    } else if (characterType === 'female') {
      setShirtColor('#e91e63') // Pink
      setMouthStyle('smile')
      setShowHat(false)
      setShowGlasses(false)
      setWeapon('none')
      setHairColor('#8b4513') // Brown
      setHairStyle('long')
      setShowEarrings(true)
    }
  }, [characterType])
  useEffect(() => { isWalkModeRef.current = isWalkMode }, [isWalkMode])

  // Reload apartment building when customization changes
  useEffect(() => {
    if (characterType === 'apartment' && sceneRef.current && playerDataRef.current?.mesh) {
      // Remove old apartment
      sceneRef.current.remove(playerDataRef.current.mesh)
      
      // Create new apartment with current settings
      const hexColor = parseInt(apartmentWallColor.replace('#', '0x'))
      const apartmentGroup = createApartmentBuilding(apartmentFloors, 1, hexColor)
      sceneRef.current.add(apartmentGroup)
      
      // Update playerDataRef
      playerDataRef.current = { mesh: apartmentGroup }
    }
  }, [apartmentFloors, apartmentWallColor])

  // ESC key handler
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') navigate('/')
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [navigate])
  
  // Debug mode click handler
  useEffect(() => {
    const handleCanvasClick = (event: MouseEvent) => {
      if (!debugMode || !canvasRef.current || !sceneRef.current || !cameraRef.current) return
      
      const rect = canvasRef.current.getBoundingClientRect()
      const mouse = new THREE.Vector2(
        ((event.clientX - rect.left) / rect.width) * 2 - 1,
        -((event.clientY - rect.top) / rect.height) * 2 + 1
      )
      
      const raycaster = new THREE.Raycaster()
      raycaster.setFromCamera(mouse, cameraRef.current)
      const intersects = raycaster.intersectObjects(sceneRef.current.children, true)
      
      if (intersects.length > 0) {
        setSelectedDebugObject(intersects[0].object)
      } else {
        setSelectedDebugObject(null)
      }
    }
    
    if (canvasRef.current) {
      canvasRef.current.addEventListener('click', handleCanvasClick)
      return () => {
        canvasRef.current?.removeEventListener('click', handleCanvasClick)
      }
    }
  }, [debugMode])

  // Mouse Move Handler for 3rd Person Orbital Camera
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (document.pointerLockElement === document.body && isWalkModeRef.current) {
         // Sensitivity
         const sensitivity = 0.002
         
         // Yaw (Horizontal): Rotate around Y axis
         // Moving mouse right (positive X) should probably rotate view right (add to yaw)
         cameraYawRef.current -= event.movementX * sensitivity
         
         // Pitch (Vertical): Clamp between limits
         cameraPitchRef.current -= event.movementY * sensitivity
         const minPitch = -Math.PI / 4 // Look up limit
         const maxPitch = Math.PI / 2.5 // Look down limit
         cameraPitchRef.current = Math.max(minPitch, Math.min(maxPitch, cameraPitchRef.current))
      }
    }
    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Click handler to re-lock pointer in Walk Mode
  useEffect(() => {
    const handleClick = () => {
      if (isWalkModeRef.current && pointerLockControlsRef.current && !pointerLockControlsRef.current.isLocked) {
        pointerLockControlsRef.current.lock()
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  // Load/reload player
  const loadPlayer = async (firstLoad = false) => {
    if (!sceneRef.current) return
    
    // Don't reload if we are dragging the debug panel
    if (isDraggingPanelRef.current) return

    if (playerDataRef.current) {
      sceneRef.current.remove(playerDataRef.current.mesh)
      playerDataRef.current = null // Clear ref immediately
    }

    const hexColor = parseInt(shirtColor.replace('#', '0x'))
    
    let playerData
    
    // Async loading needed for some types
    if (characterType === 'pistol') {
      try {
        setLoading(true)
        if (isCharacterView) {
            // Load base male character
            playerData = createMalePlayer({
                shirtColor: hexColor,
                mouthStyle,
                showHat,
                showGlasses,
                weapon: 'none' // We will attach GLB weapon manually
            })
            // Load weapon
            const weaponData = await loadPistolModel(true) // true = isHandView
            if (weaponData && weaponData.mesh && playerData.rightArmPivot) {
                playerData.rightArmPivot.add(weaponData.mesh)
                // Set arm to aiming position if not already (createMalePlayer does this if weapon is set, but we set weapon='none')
                playerData.rightArmPivot.rotation.x = -Math.PI / 2
            }
        } else {
            // Standard object view
            playerData = await loadPistolModel(false) 
        }
      } catch (err) {
        console.error("Failed to load pistol:", err)
        setLoading(false)
        return
      }
    }
    else if (characterType === 'pistol2') {
      try {
        setLoading(true)
         if (isCharacterView) {
            // Load base male character
            playerData = createMalePlayer({
                shirtColor: hexColor,
                mouthStyle,
                showHat,
                showGlasses,
                weapon: 'none'
            })
            // Load weapon
            const weaponData = await loadPistol2Model(true)
            if (weaponData && weaponData.mesh && playerData.rightArmPivot) {
                playerData.rightArmPivot.add(weaponData.mesh)
                playerData.rightArmPivot.rotation.x = -Math.PI / 2
            }
        } else {
            playerData = await loadPistol2Model(false)
        }
      } catch (err) {
        console.error("Failed to load pistol2:", err)
        setLoading(false)
        return
      }
    }
    // Jelly Enemy
    else if (characterType === 'jelly') {
      playerData = createJelly()
    }

    else if (characterType === 'sniper') {
      try {
        setLoading(true)
        if (isCharacterView) {
            playerData = createMalePlayer({
                shirtColor: hexColor,
                mouthStyle,
                showHat,
                showGlasses,
                weapon: 'none'
            })
            const weaponData = await loadSniperModel(true)
            if (weaponData && weaponData.mesh && playerData.rightArmPivot) {
                playerData.rightArmPivot.add(weaponData.mesh)
                playerData.rightArmPivot.rotation.x = -Math.PI / 2
            }
        } else {
            playerData = await loadSniperModel(false)
        }
      } catch (err) {
        console.error("Failed to load sniper:", err)
        setLoading(false)
        return
      }
    }
    else if (characterType === 'shotgun') {
      try {
        setLoading(true)
        if (isCharacterView) {
            playerData = createMalePlayer({
                shirtColor: hexColor,
                mouthStyle,
                showHat,
                showGlasses,
                weapon: 'none'
            })
            const weaponData = await loadShotgunModel(true)
            if (weaponData && weaponData.mesh && playerData.rightArmPivot) {
                playerData.rightArmPivot.add(weaponData.mesh)
                playerData.rightArmPivot.rotation.x = -Math.PI / 2
            }
        } else {
            playerData = await loadShotgunModel(false)
        }
      } catch (err) {
        console.error("Failed to load shotgun:", err)
        setLoading(false)
        return
      }
    }
    // Vehicles (return THREE.Group directly, not { mesh } object)
    else if (characterType === 'car') {
      const carGroup = createVehicle('car')
      playerData = { mesh: carGroup }
    } else if (characterType === 'truck') {
      const truckGroup = createVehicle('truck')
      playerData = { mesh: truckGroup }
    } else if (characterType === 'bitrem') {
      const bitremGroup = createBitremTruck()
      playerData = { mesh: bitremGroup }
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
    // Buildings (return THREE.Group directly)
    else if (characterType === 'house') {
      const houseGroup = createHouse()
      playerData = { mesh: houseGroup }
    } else if (characterType === 'building') {
      const buildingGroup = createSmallBuilding()
      playerData = { mesh: buildingGroup }
    } else if (characterType === 'tower') {
      const towerGroup = createTowerBuilding()
      playerData = { mesh: towerGroup }
    } else if (characterType === 'apartment') {
      const hexColor = parseInt(apartmentWallColor.replace('#', '0x'))
      const apartmentGroup = createApartmentBuilding(apartmentFloors, 1, hexColor)
      playerData = { mesh: apartmentGroup }
    } else if (characterType === 'warehouse') {
      const warehouseGroup = createWarehouse()
      playerData = { mesh: warehouseGroup }
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
    } else if (characterType === 'male') {
      playerData = createMalePlayer({
        shirtColor: hexColor,
        mouthStyle,
        showHat,
        showGlasses,
        weapon
      })
    }

    if (playerData && sceneRef.current) {
      sceneRef.current.add(playerData.mesh)
      playerDataRef.current = playerData
    }

    if (firstLoad || characterType === 'pistol' || characterType === 'pistol2' || characterType === 'sniper' || characterType === 'shotgun') setLoading(false)
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

    // First Person Controls (PointerLock)
    const plControls = new PointerLockControls(camera, document.body)
    pointerLockControlsRef.current = plControls
    // Note: We don't add plControls.getObject() to scene here because OrbitControls also controls camera.
    // We will swap control logic in animate loop.

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
    
    let frameCount = 0

    // Animation clock
    const clock = new THREE.Clock()

    // Animation loop - EXACT v1
    function animate() {
      requestAnimationFrame(animate)
      
      const dt = clock.getDelta()
      
      // Update physics world if active
      if (physicsWorldRef.current) {
        const fixedTimeStep = 1 / 60
        physicsWorldRef.current.step(fixedTimeStep, dt, 3)
        
        // Sync Three.js meshes with Cannon bodies
        // Note: physicsBoxMeshes includes chair collision meshes (no bodies), 
        // so only sync items that have corresponding bodies
        for (let i = 0; i < physicsBoxBodies.current.length; i++) {
          const mesh = physicsBoxMeshes.current[i]
          const body = physicsBoxBodies.current[i]
          if (mesh && body) {
            mesh.position.copy(body.position as any)
            mesh.quaternion.copy(body.quaternion as any)
          }
        }
        
        // Sync chair groups with chair bodies (Groups need special handling)
        for (let i = 0; i < staticCollisionBodies.current.length; i++) {
          const chairGroup = staticCollisionMeshes.current[i]
          const body = staticCollisionBodies.current[i]
          if (chairGroup && body) {
            // For Groups, we need to set position and quaternion directly
            chairGroup.position.copy(body.position as any)
            chairGroup.quaternion.copy(body.quaternion as any)
          }
        }
      }
      
      // V1 exact: wrapper.update(dt * animSpeed, state)
      // which does: this.animTime += dt * 10
      // Skip animation for static objects (vehicles, nature, and buildings)
      const staticObjects = ['car', 'truck', 'bitrem', 'bus', 'motorcycle', 'oak', 'alpine', 'bush', 'rock', 'pillar', 'boulder', 'crystal', 'house', 'building', 'tower', 'apartment', 'warehouse', 'pistol', 'pistol2', 'sniper', 'shotgun']
      const isStaticObject = staticObjects.includes(characterTypeRef.current)
      
      // Custom Mixer Update (with speed control)
      if (characterTypeRef.current === 'custom' && customMixerRef.current) {
         customMixerRef.current.update(dt * animSpeedRef.current)
      }
      // Standard Manual Animation
      else if (characterTypeRef.current !== 'custom' && playerDataRef.current && animSpeedRef.current > 0 && !isStaticObject) {
        animWrapperData.animTime += dt * animSpeedRef.current * 10
        CharacterAnimator.animate(playerDataRef.current, currentAnimationRef.current, animWrapperData.animTime, animWrapperData)
      }

      // Auto rotate - v1 rotates CONTROLS not mesh
      if (autoRotateRef.current) {
        controls.autoRotate = true
        controls.autoRotateSpeed = 2.0
      } else {
        controls.autoRotate = false
      }

      if (isWalkModeRef.current) {
        // --- PHYSICS & CAMERA LOOP (Third Person) ---
        const vel = velocity.current
        const delta = Math.min(dt, 0.1) // Cap delta

        // Get camera forward direction (projected solely on XZ plane)
        const camYaw = cameraYawRef.current
        // Camera is at (sin(yaw), cos(yaw)). View dir is opposite: (-sin, -cos).
        const forward = new THREE.Vector3(-Math.sin(camYaw), 0, -Math.cos(camYaw)).normalize()
        const right = new THREE.Vector3(Math.cos(camYaw), 0, -Math.sin(camYaw)).normalize()

        // Calculate Input Vector based on Camera View
        const inputDir = new THREE.Vector3()
        if (moveForward.current) inputDir.add(forward)
        if (moveBackward.current) inputDir.sub(forward)
        if (moveRight.current) inputDir.add(right) 
        if (moveLeft.current) inputDir.sub(right)
        
        // Normalize input
        if (inputDir.lengthSq() > 0) inputDir.normalize()

        // --- 2. PHYSICS (Velocity) ---
        // Friction
        vel.x -= vel.x * 10.0 * delta
        vel.z -= vel.z * 10.0 * delta
        vel.y -= 9.8 * 2.0 * delta // Gravity

        const speed = 40.0 // Reduced from 80.0 for more natural movement
        if (inputDir.lengthSq() > 0) {
            vel.x += inputDir.x * speed * delta
            vel.z += inputDir.z * speed * delta
            currentAnimationRef.current = 'run'
        } else {
            currentAnimationRef.current = 'idle'
        }

        const currentPos = playerPosRef.current // Use Reference
        
        // --- 2.5 ANIMATE AVATAR ---
        if (avatarRef.current && animSpeedRef.current > 0) {
            animWrapperData.animTime += delta * animSpeedRef.current * 10
            // Use the full player structure stored in userData
            if (avatarRef.current.userData) {
               CharacterAnimator.animate(avatarRef.current.userData, currentAnimationRef.current, animWrapperData.animTime, animWrapperData)
            }
        }

        // --- 3. COLLISION DETECTION ---
        // 3a. Physics Objects (Boxes, Chairs) - Push them!
        const moveDir = new THREE.Vector3(vel.x, 0, vel.z)
        const allCollisionObjects = [...physicsBoxMeshes.current, ...staticCollisionMeshes.current]
        
        // RADIAL DETECTION: Check 8 directions around player for nearby objects
        if (allCollisionObjects.length > 0 && physicsWorldRef.current) {
          const raycaster = raycasterRef.current
          const pushRadius = 1.0 // Increased detection radius
          const directions = [
            new THREE.Vector3(1, 0, 0),   // Right
            new THREE.Vector3(-1, 0, 0),  // Left
            new THREE.Vector3(0, 0, 1),   // Forward
            new THREE.Vector3(0, 0, -1),  // Back
            new THREE.Vector3(0.707, 0, 0.707),   // Diagonal NE
            new THREE.Vector3(-0.707, 0, 0.707),  // Diagonal NW
            new THREE.Vector3(0.707, 0, -0.707),  // Diagonal SE
            new THREE.Vector3(-0.707, 0, -0.707)  // Diagonal SW
          ]
          
          // Check at multiple heights to catch boxes on ground AND standing
          const heights = [
            currentPos.y - 1.5,  // Ground level (для boxes on floor)
            currentPos.y - 0.8,  // Mid level
            currentPos.y - 0.3   // Chest level
          ]
          
          for (const height of heights) {
            for (const dir of directions) {
              raycaster.set(new THREE.Vector3(currentPos.x, height, currentPos.z), dir)
              const hits = raycaster.intersectObjects(allCollisionObjects, false)
              
              if (hits.length > 0 && hits[0].distance < pushRadius) {
                const hitMesh = hits[0].object as THREE.Mesh
                
                // Find corresponding Cannon body
                let body: CANNON.Body | null = null
                let chairIndex = -1
                const boxIndex = physicsBoxMeshes.current.indexOf(hitMesh)
                if (boxIndex !== -1 && physicsBoxBodies.current[boxIndex]) {
                  body = physicsBoxBodies.current[boxIndex]
                } else {
                  chairIndex = staticCollisionMeshes.current.indexOf(hitMesh)
                  if (chairIndex !== -1 && staticCollisionBodies.current[chairIndex]) {
                    body = staticCollisionBodies.current[chairIndex]
                  }
                }
                
                if (body) {
                  // Push away from player
                  const pushForce = 15.0 // Gentle nudge, not explosion
                  const force = new CANNON.Vec3(
                    dir.x * pushForce,
                    0,
                    dir.z * pushForce
                  )
                  body.applyForce(force, body.position)
                  
                  // Slow player down when touching objects
                  if (moveDir.length() > 0.1) {
                    vel.x *= 0.6
                    vel.z *= 0.6
                  }
                }
              }
            }
          }
        }
        
        // Original directional push (for strong forward push)
        if (moveDir.length() > 0.1 && allCollisionObjects.length > 0 && physicsWorldRef.current) {
          moveDir.normalize()
          const raycaster = raycasterRef.current
          raycaster.set(new THREE.Vector3(currentPos.x, currentPos.y - 0.5, currentPos.z), moveDir)
          
          // Check collision with all physics boxes and static objects
          const boxIntersects = raycaster.intersectObjects(allCollisionObjects, false)
          if (boxIntersects.length > 0 && boxIntersects[0].distance < 0.7) {
            const hitMesh = boxIntersects[0].object as THREE.Mesh
            
            // Find corresponding Cannon body (check boxes first, then chairs)
            let body: CANNON.Body | null = null
            let chairIndex = -1
            const boxIndex = physicsBoxMeshes.current.indexOf(hitMesh)
            if (boxIndex !== -1 && physicsBoxBodies.current[boxIndex]) {
              body = physicsBoxBodies.current[boxIndex]
            } else {
              // Check if it's a chair
              chairIndex = staticCollisionMeshes.current.indexOf(hitMesh)
              if (chairIndex !== -1 && staticCollisionBodies.current[chairIndex]) {
                body = staticCollisionBodies.current[chairIndex]
              }
            }
            
            if (body) {
              // Apply push force to the object (gradual, not instant)
              const pushForce = 50.0 // Strong enough to topple boxes
              const force = new CANNON.Vec3(
                moveDir.x * pushForce,
                0,
                moveDir.z * pushForce
              )
              body.applyForce(force, body.position)
              
              // Stop player almost completely when pushing (feel solid collision)
              vel.x *= 0.2
              vel.z *= 0.2
            } else {
              // No physics body found - full stop
              vel.x = 0
              vel.z = 0
            }
          }
        }
        
        // 3b. Tower Walls
         if (playerDataRef.current && playerDataRef.current.mesh) {
           const raycaster = raycasterRef.current
           const moveDir = new THREE.Vector3(vel.x, 0, vel.z)
           if (moveDir.length() > 0.1) {
             moveDir.normalize()
             raycaster.set(new THREE.Vector3(currentPos.x, currentPos.y - 0.7, currentPos.z), moveDir)
             const wallIntersects = raycaster.intersectObject(playerDataRef.current.mesh, true)
             if (wallIntersects.length > 0 && wallIntersects[0].distance < 0.6) {
               vel.x = 0
               vel.z = 0
             }
           }
        }

        // Apply Movement to REF (Not Controls Object)
        currentPos.x += vel.x * delta
        currentPos.z += vel.z * delta
        currentPos.y += vel.y * delta

        // --- 4. GROUND COLLISION ---
        let onObject = false
        if (playerDataRef.current && playerDataRef.current.mesh) {
           const raycaster = raycasterRef.current
           
           raycaster.set(new THREE.Vector3(currentPos.x, currentPos.y - 0.8, currentPos.z), new THREE.Vector3(0, -1, 0))
           // Filter output to ignore BackFaces? (Standard material is usually DoubleSide? No, FrontSide default).
           // If double side, ray inside box hits it.
           const inters = raycaster.intersectObject(playerDataRef.current.mesh, true)
           
           if (inters.length > 0) {
              const dist = inters[0].distance
              if (dist < 1.4) { 
                 const targetY = inters[0].point.y + 1.7
                 // Ensure we are falling onto it, not jumping UP through it? 
                 // If vel.y > 0, we shouldn't snap UP.
                 if (vel.y <= 0 && targetY - currentPos.y < 0.6) {
                    currentPos.y = targetY
                    vel.y = Math.max(0, vel.y)
                    canJump.current = true
                    onObject = true
                 }
              }
           }

           // Fallback Floor (Y=0)
           if (!onObject) {
              if (currentPos.y < 1.7) {
                 vel.y = 0
                 currentPos.y = 1.7
                 canJump.current = true
                 onObject = true
              }
           }
        }
        
        // DEBUG UI UPDATE
        frameCount++;
        if (frameCount % 5 === 0) { 
             const panel = document.getElementById('debug-panel-coords')
             if (panel) {
               panel.innerText = `Player:\n X: ${currentPos.x.toFixed(2)}\n Y: ${currentPos.y.toFixed(2)}\n Z: ${currentPos.z.toFixed(2)}\nJump: ${canJump.current}\n\nTower:\n X: 0.00\n Y: 0.15 (Floor)\n Z: 0.00`
             }
             
             const lbl = document.getElementById('debug-head-label')
             if (lbl && avatarRef.current) {
                const headPos = currentPos.clone().add(new THREE.Vector3(0, 1.9, 0))
                headPos.project(camera)
                
                const x = (headPos.x * .5 + .5) * canvasRef.current!.clientWidth
                const y = (-(headPos.y * .5) + .5) * canvasRef.current!.clientHeight
                
                if (headPos.z < 1) {
                  lbl.style.display = 'block'
                  lbl.style.left = `${x}px`
                  lbl.style.top = `${y}px`
                  lbl.style.transform = 'translate(-50%, -100%)' 
                  lbl.innerText = `[${currentPos.x.toFixed(1)}, ${currentPos.y.toFixed(1)}, ${currentPos.z.toFixed(1)}]`
                } else {
                  lbl.style.display = 'none'
                }
             }
        }

        // --- 5. SYNC AVATAR & ROTATION ---
        if (avatarRef.current) {
             const avatar = avatarRef.current
             avatar.position.copy(currentPos)
             avatar.position.y -= 1.6 
             
             // Smooth Rotation
             if (inputDir.lengthSq() > 0.1) {
                const targetAngle = Math.atan2(inputDir.x, inputDir.z)
                let currentAngle = avatar.rotation.y
                let diff = targetAngle - currentAngle
                while (diff > Math.PI) diff -= Math.PI * 2
                while (diff < -Math.PI) diff += Math.PI * 2
                const rotSpeed = 10.0 * delta
                avatar.rotation.y = currentAngle + diff * rotSpeed
             }
        }

        // --- 6. UPDATE CAMERA POSITION (Orbital) ---
        const orbitRadius = 3.5 
        const camPitch = cameraPitchRef.current
        
        const camOffset = new THREE.Vector3(
            Math.sin(camYaw) * Math.cos(camPitch) * orbitRadius,
            Math.sin(camPitch) * orbitRadius,
            Math.cos(camYaw) * Math.cos(camPitch) * orbitRadius
        )
        
        const finalCamPos = currentPos.clone().add(camOffset)
        const lookTarget = currentPos.clone().add(new THREE.Vector3(0, 0.5, 0)) 
        
        camera.position.copy(finalCamPos)
        camera.lookAt(lookTarget)

      } else {
        controls.update()
      }
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

  useEffect(() => {
    // Touch Joystick (Left)
    const joystick = document.getElementById('touch-joystick')
    const joyStickHandle = document.getElementById('touch-joystick-handle')
    const touchZoneRight = document.getElementById('touch-zone-right')
    const jumpBtn = document.getElementById('touch-jump-btn')
    
    if (!joystick || !joyStickHandle || !touchZoneRight) return

    let startX = 0, startY = 0
    let currentX = 0, currentY = 0
    const maxRadius = 40

    // Joystick Touch
    let joyTouchId: number | null = null;

    const handleJoyStart = (e: TouchEvent) => {
      e.preventDefault() 
      const touch = e.changedTouches[0]
      joyTouchId = touch.identifier
      startX = touch.clientX
      startY = touch.clientY
      currentX = 0
      currentY = 0
      
      joyStickHandle.style.transition = 'none'
      
      document.addEventListener('touchmove', handleJoyMove, { passive: false })
      document.addEventListener('touchend', handleJoyEnd)
      document.addEventListener('touchcancel', handleJoyEnd)
    }

    const handleJoyMove = (e: TouchEvent) => {
      let touch: React.Touch | null = null
      // Find the touch that started on joystick
      for (let i = 0; i < e.changedTouches.length; i++) {
         if (e.changedTouches[i].identifier === joyTouchId) {
             touch = e.changedTouches[i] as any
             break
         }
      }
      if (!touch) return

      e.preventDefault()
      const dx = touch.clientX - startX
      const dy = touch.clientY - startY
      
      const distance = Math.sqrt(dx*dx + dy*dy)
      const angle = Math.atan2(dy, dx)
      
      const cappedDist = Math.min(distance, maxRadius)
      currentX = Math.cos(angle) * cappedDist
      currentY = Math.sin(angle) * cappedDist
      
      joyStickHandle.style.transform = `translate(${currentX}px, ${currentY}px)`
      
      const normX = currentX / maxRadius
      const normY = currentY / maxRadius
      
      const threshold = 0.2
      moveForward.current = normY < -threshold
      moveBackward.current = normY > threshold
      moveLeft.current = normX < -threshold
      moveRight.current = normX > threshold
    }

    const handleJoyEnd = (e: TouchEvent) => {
      let touch: React.Touch | null = null
      for (let i = 0; i < e.changedTouches.length; i++) {
         if (e.changedTouches[i].identifier === joyTouchId) {
             touch = e.changedTouches[i] as any
             break
         }
      }
      if (!touch) return

      // Cleanup
      joyTouchId = null
      document.removeEventListener('touchmove', handleJoyMove)
      document.removeEventListener('touchend', handleJoyEnd)
      document.removeEventListener('touchcancel', handleJoyEnd)
      
      joyStickHandle.style.transition = 'transform 0.2s'
      joyStickHandle.style.transform = 'translate(0px, 0px)'
      
      moveForward.current = false
      moveBackward.current = false
      moveLeft.current = false
      moveRight.current = false
    }

    // Right Zone Look
    let lastLookX = 0
    let lastLookY = 0
    
    // ... (Keep existing look logic or ensure it doesn't conflict? Look logic is simple touchstart/move on element)
    // Actually Look Logic might suffer from same issue (sliding off right zone?)
    // User didn't complain yet. Focusing on Joystick.

    const handleLookStart = (e: TouchEvent) => {
       const touch = e.changedTouches[0]
       lastLookX = touch.clientX
       lastLookY = touch.clientY
    }
    
    const handleLookMove = (e: TouchEvent) => {
       if (!isWalkModeRef.current) return
       e.preventDefault() 
       const touch = e.changedTouches[0]
       const dx = touch.clientX - lastLookX
       const dy = touch.clientY - lastLookY
       
       lastLookX = touch.clientX
       lastLookY = touch.clientY
       
       const sensitivity = 0.005
       cameraYawRef.current -= dx * sensitivity
       cameraPitchRef.current -= dy * sensitivity
       
       const minPitch = -Math.PI / 4 
       const maxPitch = Math.PI / 2.5
       cameraPitchRef.current = Math.max(minPitch, Math.min(maxPitch, cameraPitchRef.current))
    }
    
    // Jump Button
    const handleJump = (e: TouchEvent) => {
      e.preventDefault()
      if (canJump.current) {
        velocity.current.y = 15 
        canJump.current = false
      }
    }

    joystick.addEventListener('touchstart', handleJoyStart, { passive: false })
    // Remove direct move/end listeners from joystick element
    // joystick.addEventListener('touchmove', handleJoyMove, { passive: false }) 
    // joystick.addEventListener('touchend', handleJoyEnd)

    touchZoneRight.addEventListener('touchstart', handleLookStart, { passive: false })
    touchZoneRight.addEventListener('touchmove', handleLookMove, { passive: false })
    
    if (jumpBtn) {
      jumpBtn.addEventListener('touchstart', handleJump, { passive: false })
    }

    return () => {
      joystick.removeEventListener('touchstart', handleJoyStart)
      
      // Safety cleanup
      document.removeEventListener('touchmove', handleJoyMove)
      document.removeEventListener('touchend', handleJoyEnd)
      document.removeEventListener('touchcancel', handleJoyEnd)
      
      touchZoneRight.removeEventListener('touchstart', handleLookStart)
      touchZoneRight.removeEventListener('touchmove', handleLookMove)
      
      if (jumpBtn) {
        jumpBtn.removeEventListener('touchstart', handleJump)
      }
    }
  }, [isWalkMode])


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
  
  // Reload player when character type OR config changes
  useEffect(() => {
    if (characterType === 'custom') return // Custom GLB is loaded via file input, not this effect
    loadPlayer(false)
  }, [characterType, shirtColor, mouthStyle, showHat, showGlasses, weapon, hairColor, hairStyle, showEarrings, isCharacterView])
  
  // Physics boxes for Tower
  useEffect(() => {
    if (!sceneRef.current) return
    
    // Clean up previous physics
    if (physicsWorldRef.current) {
      // Remove old boxes from scene
      physicsBoxMeshes.current.forEach(mesh => {
        sceneRef.current?.remove(mesh)
        mesh.geometry.dispose()
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach(m => m.dispose())
        } else {
          mesh.material.dispose()
        }
      })
      staticCollisionMeshes.current.forEach(mesh => {
        sceneRef.current?.remove(mesh)
        mesh.geometry.dispose()
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach(m => m.dispose())
        } else {
          mesh.material.dispose()
        }
      })
      physicsBoxMeshes.current = []
      physicsBoxBodies.current = []
      staticCollisionMeshes.current = []
      physicsWorldRef.current = null
    }
    
    // Only create physics for Tower
    if (characterType !== 'tower') return
    
    // Create physics world
    const world = new CANNON.World({
      gravity: new CANNON.Vec3(0, -9.82, 0)
    })
    physicsWorldRef.current = world
    
    // Tower dimensions (must be declared before use)
    const towerWidth = 15.6
    const towerDepth = 7.8
    const roofY = 3 * 4.2 // 3 floors * new floor height
    
    // Ground (invisible physics plane)
    const groundBody = new CANNON.Body({
      mass: 0,
      shape: new CANNON.Plane()
    })
    groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0)
    world.addBody(groundBody)
    
    // Roof platform (static physics body so chairs don't fall through)
    const roofBody = new CANNON.Body({
      mass: 0, // Static
      shape: new CANNON.Box(new CANNON.Vec3(towerWidth / 2, 0.2, towerDepth / 2))
    })
    roofBody.position.set(0, roofY + 0.2, 0)
    world.addBody(roofBody)
    
    // Add physics bodies for 4 chairs on roof
    // Chair positions from Tower3FloorsObject.ts - better distribution
    const chairPositions = [
      { x: 2, z: 1.2 },   // South (farther)
      { x: 2, z: -1.2 },  // North (farther)
      { x: 0.8, z: 0 },   // West (farther)
      { x: 3.2, z: 0 }    // East (farther)
    ]
    
    const chairShape = new CANNON.Box(new CANNON.Vec3(0.475, 1.1, 0.475)) // 0.95/2, 2.2/2, 0.95/2
    
    // Use hardcoded positions - Tower is at (0,0,0) so world position = local position
    chairPositions.forEach((pos, index) => {
      const chairName = `roofChair${index + 1}`
      const chairGroup = playerDataRef.current?.mesh.getObjectByName(chairName) as THREE.Group
      
      if (!chairGroup) {
        console.warn(`Chair ${chairName} not found in Tower mesh`)
        return
      }
      
      // DIRECT POSITION: Since Tower is at origin, use the exact position from Tower3FloorsObject
      const chairY = roofY + 0.2 + 1.1 // roofY + platform offset + half chair height
      
      console.log(`${chairName} position:`, pos.x, chairY, pos.z) // Debug log
      
      const chairBody = new CANNON.Body({
        mass: 0.5,
        shape: chairShape,
        position: new CANNON.Vec3(pos.x, chairY, pos.z)
      })
      chairBody.linearDamping = 0.9
      chairBody.angularDamping = 0.9
      world.addBody(chairBody)
      
      staticCollisionMeshes.current.push(chairGroup as any)
      staticCollisionBodies.current.push(chairBody)
    })
    
    // Removed grill chairs - only 4 table chairs now
    
    // Box stacks around Tower
    const boxSize = 0.8
    const boxGeo = new THREE.BoxGeometry(boxSize, boxSize, boxSize)
    const boxShape = new CANNON.Box(new CANNON.Vec3(boxSize / 2, boxSize / 2, boxSize / 2))
    
    // Helper function to create a stack
    const createStack = (x: number, y: number, z: number, height: number, hue: number) => {
      for (let i = 0; i < height; i++) {
        const stackY = y + (boxSize / 2) + (i * boxSize) + 0.1
        
        const color = new THREE.Color().setHSL(hue, 0.7, 0.6)
        const material = new THREE.MeshStandardMaterial({
          color,
          metalness: 0.2,
          roughness: 0.6
        })
        
        const mesh = new THREE.Mesh(boxGeo, material)
        mesh.position.set(x, stackY, z)
        mesh.castShadow = true
        mesh.receiveShadow = true
        sceneRef.current.add(mesh)
        
        const body = new CANNON.Body({
          mass: 1.5,
          shape: boxShape,
          position: new CANNON.Vec3(x, stackY, z)
        })
        body.linearDamping = 0.5
        body.angularDamping = 0.9
        world.addBody(body)
        
        physicsBoxMeshes.current.push(mesh)
        physicsBoxBodies.current.push(body)
      }
    }
    
    // Stacks around Tower perimeter (ground level)
    createStack(-10, 0, 5, 3, 0.1)   // Left side, orange
    createStack(10, 0, 5, 4, 0.55)   // Right side, blue
    createStack(-8, 0, -5, 2, 0.3)   // Back left, green
    createStack(8, 0, -5, 3, 0.8)    // Back right, purple
    createStack(0, 0, 15, 2, 0.15)   // Front center, brown
    createStack(-6, 0, 12, 3, 0.6)   // Front left, cyan
    createStack(6, 0, 12, 2, 0.9)    // Front right, pink
    
    // Stacks on roof (top floor)
    createStack(-3, roofY + 0.2, 2, 2, 0.1)    // Roof left
    createStack(3, roofY + 0.2, 2, 2, 0.55)    // Roof right
    createStack(0, roofY + 0.2, -2, 3, 0.3)    // Roof back
    
    
    return () => {
      // Cleanup on unmount or character change
      physicsBoxMeshes.current.forEach(mesh => {
        sceneRef.current?.remove(mesh)
        mesh.geometry.dispose()
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach(m => m.dispose())
        } else {
          mesh.material.dispose()
        }
      })
      // Don't dispose chair groups - they're part of the Tower mesh
      physicsBoxMeshes.current = []
      physicsBoxBodies.current = []
      staticCollisionMeshes.current = []
      staticCollisionBodies.current = []
      physicsWorldRef.current = null
    }
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
  
  // Debug box helper
  useEffect(() => {
    if (!sceneRef.current) return
    
    // Remove existing debug box
    if (debugBoxHelperRef.current) {
      sceneRef.current.remove(debugBoxHelperRef.current)
      debugBoxHelperRef.current.dispose()
      debugBoxHelperRef.current = null
    }
    
    // Add debug box if object selected
    if (selectedDebugObject && debugMode) {
      const boxHelper = new THREE.BoxHelper(selectedDebugObject, 0xff00ff) // Magenta
      sceneRef.current.add(boxHelper)
      debugBoxHelperRef.current = boxHelper
    }
  }, [selectedDebugObject, debugMode])

  // Animation functions moved to shared CharacterAnimator


  const handleResetCamera = () => {
    if (cameraRef.current && controlsRef.current) {
      cameraRef.current.position.set(5, 4, 5)
      controlsRef.current.target.set(0, 1, 0)
      setZoomDistance(10)
    }
  }

  return (
    <div className="w-screen h-screen bg-[#2d3436] flex relative">
      {/* Walk Mode Instructions */}
      {isWalkMode && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/60 text-white p-4 rounded-lg backdrop-blur text-center z-50 pointer-events-none border border-white/10">
          <p className="font-bold text-lg mb-1">Walking Mode</p>
          <p className="text-sm opacity-80">WASD to Move • SPACE to Jump • ESC to Unlock Cursor</p>
          <div className="mt-2 text-xs opacity-60">Click on screen to capture mouse</div>
        </div>
      )}
      
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
              
               <Card 
                onClick={() => setCharacterType('jelly')}
                className={`cursor-pointer border-none ${
                  characterType === 'jelly' ? 'bg-[#55efc4]' : 'bg-[#444]'
                }`}
              >
                <CardHeader className="p-3">
                  <CardTitle className="text-sm text-black flex items-center m-0 font-medium">
                    <span className="mr-2 opacity-70">🪼</span>
                    Jelly
                  </CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* WEAPONS Section */}
          <div className="mb-[15px]">
            <div className="p-[8px_10px] font-bold text-[#dfe6e9] uppercase text-[13.6px] tracking-[1px] mb-[5px]">
              WEAPONS
            </div>
            <div className="space-y-2">
              <Card 
                onClick={() => {
                  setCharacterType('pistol')
                  setIsCharacterView(false)
                }}
                className={`cursor-pointer border-none ${
                  characterType === 'pistol' ? 'bg-[#5f27cd]' : 'bg-[#444]'
                }`}
              >
                <CardHeader className="p-3">
                  <CardTitle className="text-sm text-white flex items-center m-0 font-medium">
                    <span className="mr-2 opacity-70">🔫</span>
                    Pistol
                  </CardTitle>
                </CardHeader>
              </Card>
              
              <Card 
                onClick={() => {
                  setCharacterType('pistol2')
                  setIsCharacterView(false)
                }}
                className={`cursor-pointer border-none ${
                  characterType === 'pistol2' ? 'bg-[#341f97]' : 'bg-[#444]'
                }`}
              >
                <CardHeader className="p-3">
                  <CardTitle className="text-sm text-white flex items-center m-0 font-medium">
                    <span className="mr-2 opacity-70">🔫</span>
                    Pistol 2
                  </CardTitle>
                </CardHeader>
              </Card>

              <Card 
                onClick={() => {
                  setCharacterType('sniper')
                  setIsCharacterView(false)
                }}
                className={`cursor-pointer border-none ${
                  characterType === 'sniper' ? 'bg-[#5f27cd]' : 'bg-[#444]'
                }`}
              >
                <CardHeader className="p-3">
                  <CardTitle className="text-sm text-white flex items-center m-0 font-medium">
                    <span className="mr-2 opacity-70">🎯</span>
                    Sniper
                  </CardTitle>
                </CardHeader>
              </Card>

              <Card 
                onClick={() => {
                  setCharacterType('shotgun')
                  setIsCharacterView(false)
                }}
                className={`cursor-pointer border-none ${
                  characterType === 'shotgun' ? 'bg-[#341f97]' : 'bg-[#444]'
                }`}
              >
                <CardHeader className="p-3">
                  <CardTitle className="text-sm text-white flex items-center m-0 font-medium">
                    <span className="mr-2 opacity-70">💥</span>
                    Shotgun
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
                onClick={() => setCharacterType('bitrem')}
                className={`cursor-pointer border-none ${
                  characterType === 'bitrem' ? 'bg-[#607d8b]' : 'bg-[#444]'
                }`}
              >
                <CardHeader className="p-3">
                  <CardTitle className="text-sm text-white flex items-center m-0 font-medium">
                    <span className="mr-2 opacity-70">🚛</span>
                    Bitrem Truck
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

          {/* BUILDINGS Section */}
          <div className="mb-[12px]">
            <div className="p-[6px_8px] font-bold text-[#dfe6e9] uppercase text-[12px] tracking-[1px] mb-[3px]">
              BUILDINGS
            </div>
            <div className="space-y-1.5">
              <Card onClick={() => setCharacterType('house')} className={`cursor-pointer border-none ${characterType === 'house' ? 'bg-[#bdc3c7]' : 'bg-[#444]'}`}>
                <CardHeader className="p-2"><CardTitle className="text-xs text-white flex items-center m-0 font-medium"><span className="mr-1.5 opacity-70 text-sm">🏠</span>House</CardTitle></CardHeader>
              </Card>
              <Card onClick={() => setCharacterType('building')} className={`cursor-pointer border-none ${characterType === 'building' ? 'bg-[#7f8c8d]' : 'bg-[#444]'}`}>
                <CardHeader className="p-2"><CardTitle className="text-xs text-white flex items-center m-0 font-medium"><span className="mr-1.5 opacity-70 text-sm">🏢</span>Small Building</CardTitle></CardHeader>
              </Card>
              <Card onClick={() => setCharacterType('tower')} className={`cursor-pointer border-none ${characterType === 'tower' ? 'bg-[#8b7355]' : 'bg-[#444]'}`}>
                <CardHeader className="p-2"><CardTitle className="text-xs text-white flex items-center m-0 font-medium"><span className="mr-1.5 opacity-70 text-sm">🏰</span>Tower (3 Floors)</CardTitle></CardHeader>
              </Card>
              <Card onClick={() => setCharacterType('apartment')} className={`cursor-pointer border-none ${characterType === 'apartment' ? 'bg-[#5f7a9f]' : 'bg-[#444]'}`}>
                <CardHeader className="p-2"><CardTitle className="text-xs text-white flex items-center m-0 font-medium"><span className="mr-1.5 opacity-70 text-sm">🏙️</span>Apartment Building</CardTitle></CardHeader>
              </Card>
              <Card onClick={() => setCharacterType('warehouse')} className={`cursor-pointer border-none ${characterType === 'warehouse' ? 'bg-[#8b7355]' : 'bg-[#444]'}`}>
                <CardHeader className="p-2"><CardTitle className="text-xs text-white flex items-center m-0 font-medium"><span className="mr-1.5 opacity-70 text-sm">🏭</span>Warehouse</CardTitle></CardHeader>
              </Card>
            </div>
          </div>

          {/* CUSTOM GLB Section */}

          <div className="mb-[15px]">
            <div className="p-[8px_10px] font-bold text-[#dfe6e9] uppercase text-[13.6px] tracking-[1px] mb-[5px]">
              CUSTOM GLB
            </div>
            
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              accept=".glb,.gltf,.obj" 
              style={{ display: 'none' }} 
            />
            
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="w-full bg-[#00b894] text-white border-none py-2 rounded cursor-pointer hover:bg-[#00a884] mb-4 flex items-center justify-center gap-2 text-[13.6px]"
            >
              <span>📂</span> Load .GLB / .GLTF
            </button>
            
             {characterType === 'custom' && customAnimations.length > 0 && (
              <div className="mb-4">
                 <label className="block mb-2 text-[13.6px] text-[#aaa]">Detected Animations</label>
                 <div className="flex gap-[5px] flex-wrap max-h-[150px] overflow-y-auto">
                  {customAnimations.map(anim => (
                    <button
                      key={anim}
                      onClick={() => playCustomAnimation(anim)}
                      className={`px-3 py-[6px] rounded border border-[#555] cursor-pointer text-[13px] transition-all
                        ${activeCustomAnim === anim ? 'bg-[#00cec9] text-black border-[#00cec9]' : 'bg-[#333] text-white hover:bg-[#444]'}`}
                    >
                      {anim}
                    </button>
                  ))}
                 </div>
              </div>
            )}
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
              : characterType === 'bitrem'
              ? 'Bitrem Truck'
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
              : characterType === 'house' ? 'House'
              : characterType === 'building' ? 'Small Building'
              : characterType === 'tower' ? 'Tower (3 Floors)'
              : characterType === 'apartment' ? 'Apartment Building'
              : characterType === 'warehouse' ? 'Warehouse'
              : characterType === 'custom' ? 'Custom GLB Model'
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

            {/* Animation controls - Only for standard characters */}
            {['male', 'female', 'fatMale', 'zombie', 'bigZombie', 'fatZombie', 'slenderman', 'spider', 'jelly'].includes(characterType) && (
              <>
                {/* Animation */}
                <div>
                  <label className="block mb-2 text-[13.6px] text-[#aaa]">Animation</label>
                  <div className="flex gap-[5px] flex-wrap">
                    {(['idle', 'walk', 'run', 'attack', 'jump', 'dance', 'die'] as AnimationType[]).map(anim => (
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
              </>
            )}

            {/* Animation Speed - Show for all animated characters including custom */}
            {(characterType === 'custom' || ['male', 'female', 'fatMale', 'zombie', 'bigZombie', 'fatZombie', 'slenderman', 'spider', 'jelly'].includes(characterType)) && (
              <div>
                <label className="block mb-2 text-[13.6px] text-[#aaa]">Animation Speed: <span className="text-white">{animSpeed.toFixed(1)}</span>x</label>
                <input type="range" min="0" max="2" step="0.1" value={animSpeed} onChange={(e) => setAnimSpeed(parseFloat(e.target.value))} className="w-full" />
              </div>
            )}

            {/* Y Position Control - Only for custom models */}
            {characterType === 'custom' && (
              <div>
                <label className="block mb-2 text-[13.6px] text-[#aaa]">Y Position: <span className="text-white">{customModelYOffset.toFixed(1)}</span></label>
                <input type="range" min="-5" max="5" step="0.1" value={customModelYOffset} onChange={(e) => setCustomModelYOffset(parseFloat(e.target.value))} className="w-full" />
              </div>
            )}

            {/* Walk Mode (Only for Tower and Warehouse) */}
            {(characterType === 'tower' || characterType === 'warehouse') && (
              <div>
                <Button 
                  onClick={toggleWalkMode}
                  className={`w-full ${isWalkMode ? 'bg-[#00cec9] text-black hover:bg-[#00b8b0]' : 'bg-[#444] text-white hover:bg-[#555]'}`}
                >
                  {isWalkMode ? '🚶 Exit Walk Mode' : '🚶 Walk Mode'}
                </Button>
              </div>
            )}

            {/* Apartment Building Customization */}
            {characterType === 'apartment' && (
              <div className="space-y-3">
                <div>
                  <label className="block mb-2 text-[13.6px] text-[#aaa]">Floors: <span className="text-white">{apartmentFloors}</span></label>
                  <input 
                    type="range" 
                    min="2" 
                    max="10" 
                    step="1" 
                    value={apartmentFloors} 
                    onChange={(e) => setApartmentFloors(parseInt(e.target.value))} 
                    className="w-full" 
                  />
                </div>
                <div>
                  <label className="block mb-2 text-[13.6px] text-[#aaa]">Wall Color</label>
                  <div className="grid grid-cols-4 gap-2">
                    {/* Neutral color palette */}
                    <button
                      onClick={() => setApartmentWallColor('#f5f5f5')}
                      className={`w-full h-8 rounded border-2 ${apartmentWallColor === '#f5f5f5' ? 'border-white' : 'border-gray-600'}`}
                      style={{ backgroundColor: '#f5f5f5' }}
                      title="White"
                    />
                    <button
                      onClick={() => setApartmentWallColor('#e8e8e8')}
                      className={`w-full h-8 rounded border-2 ${apartmentWallColor === '#e8e8e8' ? 'border-white' : 'border-gray-600'}`}
                      style={{ backgroundColor: '#e8e8e8' }}
                      title="Light Gray"
                    />
                    <button
                      onClick={() => setApartmentWallColor('#f5f5dc')}
                      className={`w-full h-8 rounded border-2 ${apartmentWallColor === '#f5f5dc' ? 'border-white' : 'border-gray-600'}`}
                      style={{ backgroundColor: '#f5f5dc' }}
                      title="Beige"
                    />
                    <button
                      onClick={() => setApartmentWallColor('#faf0e6')}
                      className={`w-full h-8 rounded border-2 ${apartmentWallColor === '#faf0e6' ? 'border-white' : 'border-gray-600'}`}
                      style={{ backgroundColor: '#faf0e6' }}
                      title="Linen"
                    />
                    <button
                      onClick={() => setApartmentWallColor('#d3d3d3')}
                      className={`w-full h-8 rounded border-2 ${apartmentWallColor === '#d3d3d3' ? 'border-white' : 'border-gray-600'}`}
                      style={{ backgroundColor: '#d3d3d3' }}
                      title="Light Gray"
                    />
                    <button
                      onClick={() => setApartmentWallColor('#c8d6e5')}
                      className={`w-full h-8 rounded border-2 ${apartmentWallColor === '#c8d6e5' ? 'border-white' : 'border-gray-600'}`}
                      style={{ backgroundColor: '#c8d6e5' }}
                      title="Light Blue Gray"
                    />
                    <button
                      onClick={() => setApartmentWallColor('#deb887')}
                      className={`w-full h-8 rounded border-2 ${apartmentWallColor === '#deb887' ? 'border-white' : 'border-gray-600'}`}
                      style={{ backgroundColor: '#deb887' }}
                      title="Burlywood"
                    />
                    <button
                      onClick={() => setApartmentWallColor('#f0e68c')}
                      className={`w-full h-8 rounded border-2 ${apartmentWallColor === '#f0e68c' ? 'border-white' : 'border-gray-600'}`}
                      style={{ backgroundColor: '#f0e68c' }}
                      title="Khaki"
                    />
                    <button
                      onClick={() => setApartmentWallColor('#a9a9a9')}
                      className={`w-full h-8 rounded border-2 ${apartmentWallColor === '#a9a9a9' ? 'border-white' : 'border-gray-600'}`}
                      style={{ backgroundColor: '#a9a9a9' }}
                      title="Dark Gray"
                    />
                    <button
                      onClick={() => setApartmentWallColor('#b0c4de')}
                      className={`w-full h-8 rounded border-2 ${apartmentWallColor === '#b0c4de' ? 'border-white' : 'border-gray-600'}`}
                      style={{ backgroundColor: '#b0c4de' }}
                      title="Light Steel Blue"
                    />
                    <button
                      onClick={() => setApartmentWallColor('#d2b48c')}
                      className={`w-full h-8 rounded border-2 ${apartmentWallColor === '#d2b48c' ? 'border-white' : 'border-gray-600'}`}
                      style={{ backgroundColor: '#d2b48c' }}
                      title="Tan"
                    />
                    <button
                      onClick={() => setApartmentWallColor('#fffaf0')}
                      className={`w-full h-8 rounded border-2 ${apartmentWallColor === '#fffaf0' ? 'border-white' : 'border-gray-600'}`}
                      style={{ backgroundColor: '#fffaf0' }}
                      title="Floral White"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Zoom */}
            <div>
              <label className="block mb-2 text-[13.6px] text-[#aaa]">Zoom Distance: <span className="text-white">{zoomDistance}</span></label>
              <input type="range" min="2" max="60" step="0.5" value={zoomDistance} onChange={(e) => setZoomDistance(parseFloat(e.target.value))} className="w-full" />
            </div>

            {/* Camera */}
            <div>
              <label className="block mb-2 text-[13.6px] text-[#aaa]">Camera</label>
              <div className="flex gap-[5px] flex-wrap">
                <button onClick={handleResetCamera} className="bg-[#444] border-none text-white px-3 py-[6px] rounded cursor-pointer text-[13.6px] transition-colors hover:bg-[#555]">
                  Reset View
                </button>
                <button onClick={() => setAutoRotate(!autoRotate)} className="bg-[#444] border-none text-white px-3 py-[6px] rounded cursor-pointer text-[13.6px] transition-colors hover:bg-[#555]">
                  Auto Rotate
                </button>
                
                {/* Character View Toggle for Weapons */}
                {(characterType === 'pistol' || characterType === 'pistol2' || characterType === 'sniper' || characterType === 'shotgun') && (
                   <button 
                     onClick={() => setIsCharacterView(!isCharacterView)} 
                     className={`border-none text-white px-3 py-[6px] rounded cursor-pointer text-[13.6px] transition-colors ${isCharacterView ? 'bg-[#00cec9] text-black font-bold' : 'bg-[#444] hover:bg-[#555]'}`}
                   >
                     {isCharacterView ? '👤 Character View' : '🔫 Object View'}
                   </button>
                )}
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
              <label className="inline-flex items-center cursor-pointer font-normal text-sm text-white w-full mb-2">
                <Checkbox 
                  id="boundingBox" 
                  checked={showBoundingBox} 
                  onCheckedChange={(c: boolean) => setShowBoundingBox(c)} 
                  className="mr-2" 
                /> 
                Show Bounding Box
              </label>
              <label className="inline-flex items-center cursor-pointer font-normal text-sm text-white w-full">
                <Checkbox 
                  id="debugMode" 
                  checked={debugMode} 
                  onCheckedChange={(c: boolean) => setDebugMode(c)} 
                  className="mr-2" 
                /> 
                Debug Elements
              </label>
            </div>
            
            {/* Debug Info Panel */}
            <div className="mt-4 pt-4 border-t border-[rgba(255,255,255,0.1)]">
               <label className="block mb-2 text-[13.6px] text-[#aaa]">Debug Coords</label>
               <div id="debug-panel-coords" className="text-xs font-mono text-[#4ec9b0] bg-black bg-opacity-30 p-2 rounded whitespace-pre-wrap">
                 Waiting for data...
               </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Head Label (Debug) */}
      <div 
        id="debug-head-label" 
        className="absolute px-2 py-1 bg-black bg-opacity-60 text-white text-xs font-mono rounded pointer-events-none whitespace-nowrap z-[1100] hidden"
      >
        PlayerHead
      </div>

      {/* Touch Controls Overlay (Visible in Walk Mode) */}
      {isWalkMode && (
        <div id="touch-controls" className="absolute top-0 left-0 w-full h-full pointer-events-none z-[1000] touch-none">
           {/* Left Joystick Container - Moved inward to avoid Sidebar */}
           <div id="touch-joystick" className="absolute bottom-[60px] left-[120px] w-[150px] h-[150px] bg-[rgba(255,255,255,0.1)] rounded-full pointer-events-auto touch-none border-2 border-[rgba(255,255,255,0.2)]">
              {/* Handle */}
              <div id="touch-joystick-handle" className="absolute top-1/2 left-1/2 w-[60px] h-[60px] bg-[rgba(255,255,255,0.5)] rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none shadow-lg"></div>
           </div>

           {/* Right Look Area (Invisible touch zone) */}
           <div id="touch-zone-right" className="absolute top-0 right-0 w-1/2 h-full pointer-events-auto touch-none"></div>

           {/* Jump Button - Moved inward */}
           <div id="touch-jump-btn" className="absolute bottom-[80px] right-[80px] w-[80px] h-[80px] bg-[rgba(255,255,255,0.2)] rounded-full pointer-events-auto touch-none flex items-center justify-center border-2 border-[rgba(255,255,255,0.3)] active:bg-[rgba(255,255,255,0.4)]">
              <span className="text-white font-bold text-sm tracking-widest">JUMP</span>
           </div>
           
           {/* Hint */}
           <div className="absolute top-[20px] left-1/2 transform -translate-x-1/2 text-white text-opacity-50 text-sm font-bold bg-black bg-opacity-30 px-4 py-1 rounded-full pointer-events-none">
             Walk Mode: Joystick to Move, Right side to Look
           </div>
        </div>
      )}
       
       {/* Draggable Debug Info Panel */}
       {selectedDebugObject && debugMode && (() => {
        const worldPos = new THREE.Vector3()
        selectedDebugObject.getWorldPosition(worldPos)
        
        return (
          <div 
            style={{
              position: 'absolute',
              left: debugPanelPos.x,
              top: debugPanelPos.y,
              background: 'rgba(30, 30, 30, 0.95)',
              color: 'white',
              padding: '16px',
              borderRadius: '8px',
              minWidth: '320px',
              maxWidth: '400px',
              border: '2px solid #ff00ff',
              boxShadow: '0 4px 16px rgba(255, 0, 255, 0.3)',
              cursor: 'move',
              zIndex: 1000
            }}
            onMouseDown={(e) => {
              isDraggingPanelRef.current = true
              dragStartPosRef.current = {
                x: e.clientX - debugPanelPos.x,
                y: e.clientY - debugPanelPos.y
              }
            }}
            onMouseMove={(e) => {
              if (isDraggingPanelRef.current) {
                setDebugPanelPos({
                  x: e.clientX - dragStartPosRef.current.x,
                  y: e.clientY - dragStartPosRef.current.y
                })
              }
            }}
            onMouseUp={() => isDraggingPanelRef.current = false}
            onMouseLeave={() => isDraggingPanelRef.current = false}
          >
            <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: 'bold', color: '#ff00ff' }}>
              🔍 Debug Inspector
            </h3>
            <div style={{ fontSize: '13px', lineHeight: '1.6' }}>
              <p style={{ margin: '4px 0' }}>
                <strong style={{ color: '#4ec9b0' }}>Name:</strong>{' '}
                <span style={{ fontFamily: 'monospace', color: '#dcdcaa' }}>
                  {selectedDebugObject.name || '(unnamed)'}
                </span>
              </p>
              <p style={{ margin: '4px 0' }}>
                <strong style={{ color: '#4ec9b0' }}>Type:</strong>{' '}
                <span style={{ color: '#dcdcaa' }}>{selectedDebugObject.type}</span>
              </p>
              <p style={{ margin: '8px 0 4px 0', fontWeight: 'bold', color: '#9cdcfe' }}>Local Position:</p>
              <p style={{ margin: '2px 0', fontFamily: 'monospace', fontSize: '12px' }}>
                X: {selectedDebugObject.position.x.toFixed(3)}<br/>
                Y: {selectedDebugObject.position.y.toFixed(3)}<br/>
                Z: {selectedDebugObject.position.z.toFixed(3)}
              </p>
              <p style={{ margin: '8px 0 4px 0', fontWeight: 'bold', color: '#9cdcfe' }}>World Position:</p>
              <p style={{ margin: '2px 0', fontFamily: 'monospace', fontSize: '12px' }}>
                X: {worldPos.x.toFixed(3)}<br/>
                Y: {worldPos.y.toFixed(3)}<br/>
                Z: {worldPos.z.toFixed(3)}
              </p>
            </div>
          </div>
        )
      })()}
    </div>
  )
}
