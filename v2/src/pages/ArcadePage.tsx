import { useEffect, useRef, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import * as THREE from 'three'
import { Button } from '@/components/ui/button'
import { createMalePlayer } from '@/game/player/MalePlayerObject'
import { PauseMenu } from '@/components/PauseMenu'
import { LoadingScreen } from '@/components/ui/LoadingScreen'
import { TouchControls } from '@/components/TouchControls'
import { CharacterAnimator } from '@/game/animations/CharacterAnimator'
import { useGameSettings } from '@/stores/gameSettings'

export function ArcadePage() {
  const navigate = useNavigate()
  const canvasRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const playerRef = useRef<any>(null)
  const crosshairRef = useRef<HTMLDivElement>(null)
  
  const [loading, setLoading] = useState(true)
  const [crosshairColor, setCrosshairColor] = useState<'white' | 'red' | 'yellow'>('white')
  const [hoverInfo, setHoverInfo] = useState('')
  const [isPaused, setIsPaused] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  
  // Player movement state
  const keysPressed = useRef<Set<string>>(new Set())
  const playerVelocity = useRef(new THREE.Vector3())
  const playerPosition = useRef(new THREE.Vector3(0, 0, 0))
  
  // Physics state
  const verticalVelocity = useRef(0)
  const isGrounded = useRef(true)
  const GRAVITY = -20
  const JUMP_FORCE = 8

  // Animation state
  const animTime = useRef(0)
  const animState = useRef<'idle' | 'walk' | 'run' | 'jump' | 'attack'>('idle')
  const isAttacking = useRef(false)
  const attackTimer = useRef(0)
  const ATTACK_DURATION = 0.3 // seconds
  
  // Camera orbit state
  const yaw = useRef(0)
  const pitch = useRef(0.3) // Slight downward angle
  
  // Touch controls state
  const [showTouchControls, setShowTouchControls] = useState(false)
  const joystickVector = useRef({ x: 0, y: 0 })
  const isFiring = useRef(false)
  
  useEffect(() => {
    // Auto-detect touch capability
    if (navigator.maxTouchPoints > 0) {
      setShowTouchControls(true)
    }
  }, [])
  
  useEffect(() => {
    if (!canvasRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x87ceeb) // Sky blue
    scene.fog = new THREE.Fog(0x87ceeb, 50, 200)
    sceneRef.current = scene

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    cameraRef.current = camera

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    canvasRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8)
    dirLight.position.set(50, 100, 50)
    dirLight.castShadow = true
    dirLight.shadow.mapSize.width = 2048
    dirLight.shadow.mapSize.height = 2048
    dirLight.shadow.camera.left = -100
    dirLight.shadow.camera.right = 100
    dirLight.shadow.camera.top = 100
    dirLight.shadow.camera.bottom = -100
    scene.add(dirLight)

    // City Ground - Asphalt
    const groundSize = 200
    const asphaltMat = new THREE.MeshStandardMaterial({
      color: 0x3a3a3a,
      roughness: 0.9,
      metalness: 0.1
    })
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(groundSize, groundSize),
      asphaltMat
    )
    ground.rotation.x = -Math.PI / 2
    ground.receiveShadow = true
    ground.userData.isGround = true
    scene.add(ground)

    // Grid lines (road markings)
    const gridHelper = new THREE.GridHelper(groundSize, 40, 0xffff00, 0x555555)
    gridHelper.position.y = 0.01
    scene.add(gridHelper)

    // Create Male Character
    const playerData = createMalePlayer({
      shirtColor: parseInt('0x3498db'),
      mouthStyle: 'serious',
      showHat: true,
      showGlasses: false,
      weapon: 'none'
    })
    playerData.mesh.position.copy(playerPosition.current)
    playerData.mesh.castShadow = true
    scene.add(playerData.mesh)
    playerRef.current = playerData

    setLoading(false)

    // Raycaster for crosshair target detection
    const raycaster = new THREE.Raycaster()

    // Animation loop
    const clock = new THREE.Clock()
    const animate = () => {
      requestAnimationFrame(animate)
      const delta = clock.getDelta()

      // Skip updates if paused
      if (!isPaused) {
        // Player movement
      const moveSpeed = 5
      const sprintSpeed = 9
      const isSprinting = keysPressed.current.has('shift')
      const actualSpeed = isSprinting ? sprintSpeed : moveSpeed
      
      const moveDirection = new THREE.Vector3()

      if (keysPressed.current.has('w')) moveDirection.z -= 1
      if (keysPressed.current.has('s')) moveDirection.z += 1
      if (keysPressed.current.has('a')) moveDirection.x -= 1
      if (keysPressed.current.has('d')) moveDirection.x += 1

      // Joystick Input (additive)
      moveDirection.z += joystickVector.current.y
      moveDirection.x += joystickVector.current.x

      // Handle Jump
      if (keysPressed.current.has('space') && isGrounded.current) {
        verticalVelocity.current = JUMP_FORCE
        isGrounded.current = false
        animState.current = 'jump'
      }

      // Apply Gravity
      if (!isGrounded.current) {
        verticalVelocity.current += GRAVITY * delta
      }

      // Update Vertical Position
      playerPosition.current.y += verticalVelocity.current * delta

      // Ground Collision
      if (playerPosition.current.y <= 0) {
        playerPosition.current.y = 0
        verticalVelocity.current = 0
        isGrounded.current = true
      } else {
        isGrounded.current = false
      }

      const isMoving = moveDirection.length() > 0

      if (isMoving) {
        moveDirection.normalize()
        
        // Apply camera rotation to moveDirection
        const rotationAxis = new THREE.Vector3(0, 1, 0)
        moveDirection.applyAxisAngle(rotationAxis, yaw.current)

        playerVelocity.current.x = moveDirection.x * actualSpeed
        playerVelocity.current.z = moveDirection.z * actualSpeed

        // Update horizontal position
        playerPosition.current.x += playerVelocity.current.x * delta
        playerPosition.current.z += playerVelocity.current.z * delta
        
        // Rotate player to face movement direction
        const angle = Math.atan2(moveDirection.x, moveDirection.z)
        playerData.mesh.rotation.y = angle
      }

      // Update mesh position
      playerData.mesh.position.copy(playerPosition.current)
      
      // Handle Attack Timer
      if (isAttacking.current) {
        attackTimer.current += delta
        if (attackTimer.current >= ATTACK_DURATION) {
            isAttacking.current = false
            attackTimer.current = 0
        }
      }

      // Determine animation state
      if (isAttacking.current) {
        animState.current = 'attack'
      } else if (!isGrounded.current) {
        animState.current = 'jump'
      } else if (isMoving) {
        animState.current = isSprinting ? 'run' : 'walk'
      } else {
        animState.current = 'idle'
      }

      // Update animations
      if (playerRef.current) {
          // Create wrapper for shared animator
          // In Arcade, Y position is controlled by physics, so baseY is just a reference offset if needed.
          // However, the animator sets mesh.position.y directly for some animations (jump, idle bob).
          // THIS MIGHT CONFLICT WITH PHYSICS ENGINE which sets playerPosition.y
          // For Arcade, we might ONLY want rotation updates, OR we let the animations strictly control pivots
          // and ignore the mesh.position.y lines in the shared class?
          
          // Actually, looking at CharacterAnimator, it mostly modifies PIVOTS, but DOES modify mesh.position.y for bobbing.
          // Arcade has physics gravity.
          // Solution: Standardize animations mostly on pivots.
          // For now, let's allow it to modify mesh.position.y RELATIVE to a base?
          // No, Arcade calculates exact physics position.
          // Ideally, we shouldn't let animation override physics Y.
          
          // But user wants standardized animations.
          // The shared class modifies `playerData.mesh.position.y`. 
          // In Arcade, `playerData.mesh.position.copy(playerPosition.current)` happens RIGHT BEFORE animation update.
          // So animation update will OVERWRITE the physics Y for that frame, potentially breaking gravity/jump arc?
          // YES.
          
          // Fix: We should update the shared class to accept a flag "applyPositionOffset" or similar, 
          // OR just trust the pivots and manually reset Y after if needed.
          
          // For this step, I will use it, but I will RESET the mesh position to physics position AFTER animation
          // to ensure physics wins.
          
          // Increase speed for run
          const finalSpeed = animState.current === 'run' ? 1.5 : 1.0
          
          animTime.current += delta * finalSpeed * 5
          
          const wrapper = {
              baseY: 0, // Not used if we overwrite Y anyway
              animTime: animTime.current
          }
          
          CharacterAnimator.animate(playerRef.current, animState.current, animTime.current, wrapper)
          
          // CRITICAL: Restore Physics Position Y (Animation might have added bobbing offset to mesh)
          // The mesh is the visual representation, physics is the logic. 
          // In Arcade, mesh follows physics. 
          // If we want bobbing, we should add it to the physics Y? 
          // Or add it as a visual offset?
          // For "jump", animation class does a fake parabolic arc. We DON'T want that in Arcade, we have real physics.
          
          // If state is JUMP, the shared allocator does a fake jump arc.
          // In Arcade, we have real velocity.
          // So for JUMP, we might want to ensure we don't use the fake Y.
          
          // Let's strictly enforce physics position AFTER animation:
          playerRef.current.mesh.position.copy(playerPosition.current)
          
          // However, 'Idle' has a breathing bob. 'Walk' has a bob.
          // If we overwrite Y, we lose the bob.
          // If we want the bob, we should add it to the current physics Y.
          // But CharacterAnimator sets Y absolutely based on baseY.
          
          // workaround: Set wrapper.baseY = playerPosition.current.y
          // Then the animator sets Y = playerPosition.current.y + bob
          // This preserves physics + adds bob!
          // EXCEPT for Jump.
          
          if (animState.current !== 'jump') {
             // Re-run with correct base
             wrapper.baseY = playerPosition.current.y
             CharacterAnimator.animate(playerRef.current, animState.current, animTime.current, wrapper)
          } else {
             // For jump, we rely purely on physics Y, so we overwrite whatever the animator did to Y
             playerRef.current.mesh.position.copy(playerPosition.current)
             // We still ran animate() to set the leg poses (static jump pose)
          }
      }

      // Camera orbit - follow player with offset
      updateCameraOrbit(camera, playerPosition.current)

      // Update crosshair target detection
      updateCrosshairTarget(camera, scene, raycaster)
      }

      renderer.render(scene, camera)
    }

    // Camera orbit update (v1 style - lines 1703-1716)
    const updateCameraOrbit = (cam: THREE.PerspectiveCamera, target: THREE.Vector3) => {
      cam.rotation.set(pitch.current, yaw.current, 0, 'YXZ')
      const idealOffset = new THREE.Vector3(1.0, 1.8, useGameSettings.getState().cameraZoom)
      idealOffset.applyQuaternion(cam.quaternion)
      idealOffset.add(target)
      cam.position.copy(idealOffset)
    }

    // Crosshair target detection
    const updateCrosshairTarget = (cam: THREE.PerspectiveCamera, scene: THREE.Scene, raycaster: THREE.Raycaster) => {
      const center = new THREE.Vector2(0, 0)
      raycaster.setFromCamera(center, cam)
      const currentWeapon = { name: 'Fist', range: 3 }
      const intersects = raycaster.intersectObjects(scene.children, true)

      let targetName = ''
      let targetDistance = 0

      if (intersects.length > 0) {
        const hit = intersects[0]
        targetDistance = hit.distance

        if (hit.object.userData.isGround || hit.object.parent?.userData.isGround) {
          setCrosshairColor('white')
          return
        }

        let obj: any = hit.object
        while (obj) {
          if (obj.userData?.gameName || obj.userData?.gameId) {
            targetName = obj.userData.gameName || obj.userData.gameId || 'Object'
            break
          }
          obj = obj.parent
        }

        if (targetDistance <= currentWeapon.range) {
          setCrosshairColor('red')
        } else {
          setCrosshairColor('yellow')
        }

        if (targetName) {
          setHoverInfo(`${targetName} • ${targetDistance.toFixed(1)}m`)
        } else {
          setHoverInfo('')
        }
      } else {
        setCrosshairColor('white')
        setHoverInfo('')
      }
    }

    animate()

    let pointerLocked = false
    const handleCanvasClick = () => {
      if (!rendererRef.current?.domElement) return
      rendererRef.current.domElement.requestPointerLock().catch((e) => {
        console.warn('Pointer lock failed:', e)
      })
    }
    const handlePointerLockChange = () => {
      pointerLocked = document.pointerLockElement === rendererRef.current?.domElement
    }
    const handleMouseMove = (e: MouseEvent) => {
      if (!pointerLocked) return
      const deltaX = e.movementX || 0
      const deltaY = e.movementY || 0
      const sensitivity = 0.003
      yaw.current -= deltaX * sensitivity
      pitch.current -= deltaY * sensitivity
      const limit = Math.PI / 2 - 0.01
      pitch.current = Math.max(-limit, Math.min(limit, pitch.current))
    }

    // Mouse Attack Handler
    const handleMouseDown = (e: MouseEvent) => {
        if (e.button === 0 && !isPaused) { // Left Click
            isAttacking.current = true
            attackTimer.current = 0
        }
    }

    renderer.domElement.addEventListener('click', handleCanvasClick)
    document.addEventListener('pointerlockchange', handlePointerLockChange)
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mousedown', handleMouseDown)

    const handleKeyDown = (e: KeyboardEvent) => {
      let key = e.key.toLowerCase()
      if (key === ' ') key = 'space'
      if (['w', 'a', 's', 'd', 'shift', 'space'].includes(key)) {
        keysPressed.current.add(key)
      }
      if (key === 'escape') {
        setIsPaused(true)
        if (document.pointerLockElement) {
          document.exitPointerLock()
        }
      }
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      let key = e.key.toLowerCase()
      if (key === ' ') key = 'space'
      keysPressed.current.delete(key)
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
      window.removeEventListener('resize', handleResize)
      renderer.domElement.removeEventListener('click', handleCanvasClick)
      document.removeEventListener('pointerlockchange', handlePointerLockChange)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mousedown', handleMouseDown)
      if (document.pointerLockElement) {
        document.exitPointerLock()
      }
      renderer.dispose()
      canvasRef.current?.removeChild(renderer.domElement)
    }
  }, [navigate])

  const handleTouchMove = useCallback((x: number, y: number) => {
    joystickVector.current = { x, y }
  }, [])
  
  const handleTouchLook = useCallback((dx: number, dy: number) => {
    const sensitivity = 0.005 
    yaw.current -= dx * sensitivity
    pitch.current -= dy * sensitivity
    const limit = Math.PI / 2 - 0.01
    pitch.current = Math.max(-limit, Math.min(limit, pitch.current))
  }, [])
  
  const handleTouchJump = useCallback(() => {
    if (isGrounded.current) {
      verticalVelocity.current = JUMP_FORCE
      isGrounded.current = false
      animState.current = 'jump'
    }
  }, [])
  
  const handleTouchSprint = useCallback((active: boolean) => {
    if (active) keysPressed.current.add('shift')
    else keysPressed.current.delete('shift')
  }, [])
  
  const handleTouchFire = useCallback((active: boolean) => {
    isFiring.current = active
    if (active) {
        isAttacking.current = true
        attackTimer.current = 0
    }
  }, [])

  return (
    <div className="relative w-full h-[100dvh] bg-black overflow-hidden">
      <LoadingScreen isLoading={loading} message="Loading Arcade..." />

      <div ref={canvasRef} className="w-full h-full" />

      {/* Pause Menu */}
      {isPaused && (
        <PauseMenu
          onResume={() => setIsPaused(false)}
          onQuit={() => navigate('/')}
          onBackToLobby={() => navigate('/arcade/lobby')}
          settingsOpen={settingsOpen}
          onSettingsOpenChange={setSettingsOpen}
        />
      )}

      {/* Hover info above crosshair */}
      {hoverInfo && (
        <div 
          style={{
            position: 'absolute',
            top: '48%',
            left: '50%',
            transform: 'translate(-50%, -100%)',
            color: '#fff',
            pointerEvents: 'none',
            fontFamily: 'Arial',
            fontSize: '14px',
            textShadow: '0 0 6px rgba(0,0,0,0.8)',
            zIndex: 101,
            userSelect: 'none'
          }}
        >
          {hoverInfo}
        </div>
      )}

      {/* Crosshair */}
      <div 
        ref={crosshairRef}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '20px',
          height: '20px',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 100
        }}
      >
        {/* Horizontal line */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          width: '100%',
          height: '2px',
          backgroundColor: crosshairColor === 'red' 
            ? 'rgba(255, 80, 80, 0.95)' 
            : crosshairColor === 'yellow'
            ? 'rgba(255, 200, 0, 0.95)'
            : 'rgba(255, 255, 255, 0.9)',
          boxShadow: crosshairColor === 'red'
            ? '0 0 8px rgba(255, 80, 80, 0.9)'
            : crosshairColor === 'yellow'
            ? '0 0 8px rgba(255, 200, 0, 0.9)'
            : '0 0 2px rgba(0, 0, 0, 0.8)',
          transform: 'translateY(-50%)'
        }} />
        {/* Vertical line */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          width: '2px',
          height: '100%',
          backgroundColor: crosshairColor === 'red' 
            ? 'rgba(255, 80, 80, 0.95)' 
            : crosshairColor === 'yellow'
            ? 'rgba(255, 200, 0, 0.95)'
            : 'rgba(255, 255, 255, 0.9)',
          boxShadow: crosshairColor === 'red'
            ? '0 0 8px rgba(255, 80, 80, 0.9)'
            : crosshairColor === 'yellow'
            ? '0 0 8px rgba(255, 200, 0, 0.9)'
            : '0 0 2px rgba(0, 0, 0, 0.8)',
          transform: 'translateX(-50%)'
        }} />
      </div>

      {/* UI Overlay - Safe Area Aware */}
      <div className="absolute top-4 left-4 z-10 pt-[env(safe-area-inset-top)] pl-[env(safe-area-inset-left)]">
        <Button 
          onClick={() => navigate('/')}
          className="bg-red-600 hover:bg-red-700 text-white shadow-md"
        >
          ← Exit Arcade
        </Button>
      </div>

      {/* Controls Info */}
      <div className="absolute bottom-4 left-4 bg-black/70 text-white p-4 rounded z-10 pointer-events-none pb-[env(safe-area-inset-bottom)] pl-[env(safe-area-inset-left)]">
        <h3 className="font-bold mb-2">Controls</h3>
        {showTouchControls ? (
          <>
            <p>Left Stick - Move</p>
            <p>Right Screen - Look</p>
            <p>Buttons - Action</p>
          </>
        ) : (
          <>
            <p>WASD / Space / Shift</p>
            <p>Mouse to Look</p>
            <p>Click to Lock</p>
          </>
        )}
      </div>

      {/* Mode Title - Safe Area Aware */}
      <div className="absolute top-4 right-4 text-white text-right z-10 pointer-events-none pt-[env(safe-area-inset-top)] pr-[env(safe-area-inset-right)]">
        <h1 className="text-3xl font-bold drop-shadow-md">ARCADE MODE</h1>
        <p className="text-sm text-gray-300 drop-shadow-sm">City Survival</p>
      </div>

      {/* Touch Controls */}
      {showTouchControls && (
        <TouchControls
          onMove={handleTouchMove}
          onLook={handleTouchLook}
          onJump={handleTouchJump}
          onSprint={handleTouchSprint}
          onFire={handleTouchFire}
        />
      )}
    </div>
  )
}
