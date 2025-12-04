import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { createMalePlayer } from '@/game/player/MalePlayerObject'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

type AnimationType = 'idle' | 'walk' | 'attack' | 'jump'
type MouthStyle = 'serious' | 'smile' | 'angry' | 'surprised' | 'none'
type WeaponType = 'none' | 'pistol' | 'rifle' | 'smg' | 'shotgun' | 'dmr' | 'sniper'

export function ObjectViewerPage() {
  const navigate = useNavigate()
  const canvasRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(true)
  const [selectedObject, setSelectedObject] = useState('Male Character')
  
  // Animation controls
  const [currentAnimation, setCurrentAnimation] = useState<AnimationType>('idle')
  const [animSpeed, setAnimSpeed] = useState(1.0)
  const [zoomDistance, setZoomDistance] = useState(5)
  const [autoRotate, setAutoRotate] = useState(false)

  // Player customization
  const [shirtColor, setShirtColor] = useState('#3498db')
  const [mouthStyle, setMouthStyle] = useState<MouthStyle>('serious')
  const [showHat, setShowHat] = useState(true)
  const [showGlasses, setShowGlasses] = useState(false)
  const [weapon, setWeapon] = useState<WeaponType>('none')

  // Refs for Three.js objects
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const controlsRef = useRef<OrbitControls | null>(null)
  const playerDataRef = useRef<any | null>(null)
  const animTimeRef = useRef(0)
  
  // Refs for values read in animation loop (to avoid closure issues)
  const animSpeedRef = useRef(animSpeed)
  const currentAnimationRef = useRef(currentAnimation)
  const autoRotateRef = useRef(autoRotate)

  // Update refs when state changes
  useEffect(() => {
    animSpeedRef.current = animSpeed
  }, [animSpeed])

  useEffect(() => {
    currentAnimationRef.current = currentAnimation
    animTimeRef.current = 0
  }, [currentAnimation])

  useEffect(() => {
    autoRotateRef.current = autoRotate
  }, [autoRotate])

  // ESC key handler
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        navigate('/')
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [navigate])

  // Load/reload player function
  const loadPlayer = (firstLoad = false) => {
    if (!sceneRef.current) return

    // Remove old player
    if (playerDataRef.current) {
      sceneRef.current.remove(playerDataRef.current.mesh)
    }

    // Create new player with settings
    const hexColor = parseInt(shirtColor.replace('#', '0x'))
    const playerData = createMalePlayer({
      shirtColor: hexColor,
      mouthStyle,
      showHat,
      showGlasses,
      weapon
    })
    
    sceneRef.current.add(playerData.mesh)
    playerDataRef.current = playerData

    if (firstLoad) {
      setLoading(false)
    }
  }

  // Apply button handler
  const handleApplySettings = () => {
    loadPlayer(false)
  }

  // Three.js setup
  useEffect(() => {
    if (!canvasRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x1a1a1a)
    scene.fog = new THREE.Fog(0x1a1a1a, 10, 60)
    sceneRef.current = scene

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      canvasRef.current.clientWidth / canvasRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.set(3, 2, 3)
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

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.0)
    dirLight.position.set(10, 20, 10)
    dirLight.castShadow = true
    dirLight.shadow.mapSize.width = 2048
    dirLight.shadow.mapSize.height = 2048
    scene.add(dirLight)

    // Ground
    const groundGeo = new THREE.PlaneGeometry(30, 30)
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x2a2a2a,
      roughness: 0.8
    })
    const ground = new THREE.Mesh(groundGeo, groundMat)
    ground.rotation.x = -Math.PI / 2
    ground.receiveShadow = true
    scene.add(ground)

    // Grid
    const gridHelper = new THREE.GridHelper(30, 30, 0x444444, 0x222222)
    scene.add(gridHelper)

    // Load male character
    loadPlayer(true)

    // Animation loop
    function animate() {
      requestAnimationFrame(animate)
      
      const dt = 0.016
      animTimeRef.current += dt * animSpeedRef.current * 10

      // Apply animation
      if (playerDataRef.current) {
        animateCharacter(playerDataRef.current, currentAnimationRef.current, animTimeRef.current)
      }

      // Auto rotate
      if (autoRotateRef.current && playerDataRef.current) {
        playerDataRef.current.mesh.rotation.y += 0.01
      }

      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // Handle resize
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
      if (canvasRef.current) {
        canvasRef.current.removeChild(renderer.domElement)
      }
    }
  }, []) // Only run once

  // Update camera distance when zoom changes
  useEffect(() => {
    if (cameraRef.current && controlsRef.current) {
      const angle = Math.atan2(
        cameraRef.current.position.x,
        cameraRef.current.position.z
      )
      const height = cameraRef.current.position.y
      cameraRef.current.position.x = Math.sin(angle) * zoomDistance
      cameraRef.current.position.y = height
      cameraRef.current.position.z = Math.cos(angle) * zoomDistance
    }
  }, [zoomDistance])

  // Animation function (based on v1)
  function animateCharacter(playerData: any, anim: AnimationType, time: number) {
    const t = time

    if (anim === 'idle') {
      if (playerData.leftArmPivot) playerData.leftArmPivot.rotation.x = Math.sin(t) * 0.1
      if (playerData.rightArmPivot) playerData.rightArmPivot.rotation.x = -Math.sin(t) * 0.1
      if (playerData.leftLegPivot) playerData.leftLegPivot.rotation.x = 0
      if (playerData.rightLegPivot) playerData.rightLegPivot.rotation.x = 0
      playerData.mesh.position.y = Math.sin(t * 2) * 0.02
    } 
    else if (anim === 'walk') {
      const angle = Math.sin(t) * 0.5
      if (playerData.leftLegPivot) playerData.leftLegPivot.rotation.x = angle
      if (playerData.rightLegPivot) playerData.rightLegPivot.rotation.x = -angle
      if (playerData.leftArmPivot) playerData.leftArmPivot.rotation.x = -angle * 0.8
      if (playerData.rightArmPivot) playerData.rightArmPivot.rotation.x = angle * 0.8
      playerData.mesh.position.y = Math.abs(Math.sin(t)) * 0.05
    }
    else if (anim === 'attack') {
      const progress = (Math.sin(t * 3) + 1) / 2
      const angle = -Math.PI / 2 * progress
      if (playerData.leftArmPivot) playerData.leftArmPivot.rotation.x = angle
      if (playerData.rightArmPivot) playerData.rightArmPivot.rotation.x = angle
      if (playerData.leftLegPivot) playerData.leftLegPivot.rotation.x = 0
      if (playerData.rightLegPivot) playerData.rightLegPivot.rotation.x = 0
      playerData.mesh.position.y = 0
    }
    else if (anim === 'jump') {
      const jumpCycle = Math.abs(Math.sin(t * 2))
      playerData.mesh.position.y = jumpCycle * 0.5
      if (playerData.leftArmPivot) playerData.leftArmPivot.rotation.x = -0.3
      if (playerData.rightArmPivot) playerData.rightArmPivot.rotation.x = -0.3
      if (playerData.leftLegPivot) playerData.leftLegPivot.rotation.x = 0.2
      if (playerData.rightLegPivot) playerData.rightLegPivot.rotation.x = 0.2
    }
  }

  const handleResetCamera = () => {
    if (cameraRef.current && controlsRef.current) {
      cameraRef.current.position.set(3, 2, 3)
      controlsRef.current.target.set(0, 1, 0)
      setZoomDistance(5)
    }
  }

  return (
    <div className="w-screen h-screen bg-black flex">
      {/* Sidebar */}
      <div className="w-80 h-full bg-slate-950 border-r border-slate-800 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex-shrink-0">
          <h2 className="text-2xl font-bold text-cyan-400">Object Viewer</h2>
          <p className="text-sm text-slate-400 mt-1">Asset Inspector</p>
        </div>

        {/* Categories - Scrollable */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="mb-4">
            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-2">
              Characters
            </h3>
            <Card
              className="cursor-pointer bg-blue-600 border-blue-500"
              onClick={() => setSelectedObject('Male Character')}
            >
              <CardHeader className="p-3">
                <CardTitle className="text-sm text-white flex items-center">
                  <span className="mr-2">📦</span>
                  Male Character
                </CardTitle>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center text-slate-500 text-sm mt-8">
            More objects coming soon...
          </div>
        </div>

        {/* Back button */}
        <div className="p-4 border-t border-slate-800 flex-shrink-0">
          <Button
            onClick={() => navigate('/')}
            className="w-full bg-white text-black hover:bg-slate-200"
          >
            ← Back to Menu
          </Button>
        </div>
      </div>

      {/* Canvas Container */}
      <div className="flex-1 relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black z-50">
            <div className="w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        
        <div ref={canvasRef} className="w-full h-full" />

        {/* Object Info */}
        <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-sm px-4 py-3 rounded border border-slate-700">
          <h3 className="text-xl font-bold text-cyan-400">{selectedObject}</h3>
          <p className="text-sm text-slate-400">male-character</p>
        </div>

        {/* Controls Panel */}
        <div className="absolute bottom-6 right-6 w-80 bg-slate-950/95 backdrop-blur-sm border border-slate-800 rounded-lg p-4 max-h-[calc(100vh-120px)] overflow-y-auto">
          <div className="space-y-4">
            {/* Player Customization */}
            <div className="pb-4 border-b border-slate-700">
              <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-3">
                Player Customization
              </h3>
              
              {/* Shirt Color */}
              <div className="mb-3">
                <Label className="text-sm text-slate-400 mb-2 block">Shirt Color</Label>
                <input
                  type="color"
                  value={shirtColor}
                  onChange={(e) => setShirtColor(e.target.value)}
                  className="w-full h-10 rounded cursor-pointer"
                />
              </div>

              {/* Mouth Style */}
              <div className="mb-3">
                <Label className="text-sm text-slate-400 mb-2 block">Mouth Style</Label>
                <Select value={mouthStyle} onValueChange={(v) => setMouthStyle(v as MouthStyle)}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="serious">Serious</SelectItem>
                    <SelectItem value="smile">Smile</SelectItem>
                    <SelectItem value="angry">Angry</SelectItem>
                    <SelectItem value="surprised">Surprised</SelectItem>
                    <SelectItem value="none">None</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Accessories */}
              <div className="mb-3">
                <Label className="text-sm text-slate-400 mb-2 block">Accessories</Label>
                <div className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hat"
                      checked={showHat}
                      onCheckedChange={(checked) => setShowHat(checked as boolean)}
                    />
                    <label htmlFor="hat" className="text-sm text-slate-300">
                      Hat
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="glasses"
                      checked={showGlasses}
                      onCheckedChange={(checked) => setShowGlasses(checked as boolean)}
                    />
                    <label htmlFor="glasses" className="text-sm text-slate-300">
                      Glasses
                    </label>
                  </div>
                </div>
              </div>

              {/* Weapon */}
              <div className="mb-3">
                <Label className="text-sm text-slate-400 mb-2 block">Weapon</Label>
                <Select value={weapon} onValueChange={(v) => setWeapon(v as WeaponType)}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
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
              </div>

              <Button
                onClick={handleApplySettings}
                className="w-full bg-cyan-600 hover:bg-cyan-700"
              >
                Apply Changes
              </Button>
            </div>

            {/* Animation Controls */}
            <div>
              <label className="text-sm text-slate-400 block mb-2 font-semibold">Animation</label>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  size="sm"
                  className={currentAnimation === 'idle' ? 'bg-cyan-600 hover:bg-cyan-700' : ''}
                  variant={currentAnimation === 'idle' ? 'default' : 'outline'}
                  onClick={() => setCurrentAnimation('idle')}
                >
                  Idle
                </Button>
                <Button
                  size="sm"
                  className={currentAnimation === 'walk' ? 'bg-cyan-600 hover:bg-cyan-700' : ''}
                  variant={currentAnimation === 'walk' ? 'default' : 'outline'}
                  onClick={() => setCurrentAnimation('walk')}
                >
                  Walk
                </Button>
                <Button
                  size="sm"
                  className={currentAnimation === 'attack' ? 'bg-cyan-600 hover:bg-cyan-700' : ''}
                  variant={currentAnimation === 'attack' ? 'default' : 'outline'}
                  onClick={() => setCurrentAnimation('attack')}
                >
                  Attack
                </Button>
                <Button
                  size="sm"
                  className={currentAnimation === 'jump' ? 'bg-cyan-600 hover:bg-cyan-700' : ''}
                  variant={currentAnimation === 'jump' ? 'default' : 'outline'}
                  onClick={() => setCurrentAnimation('jump')}
                >
                  Jump
                </Button>
              </div>
            </div>

            {/* Animation Speed */}
            <div>
              <label className="text-sm text-slate-400 block mb-2">
                Animation Speed: <span className="text-white font-semibold">{animSpeed.toFixed(1)}x</span>
              </label>
              <Slider
                value={[animSpeed]}
                onValueChange={(vals) => setAnimSpeed(vals[0])}
                min={0}
                max={2}
                step={0.1}
                className="w-full"
              />
            </div>

            {/* Zoom Distance */}
            <div>
              <label className="text-sm text-slate-400 block mb-2">
                Zoom Distance: <span className="text-white font-semibold">{zoomDistance.toFixed(1)}</span>
              </label>
              <Slider
                value={[zoomDistance]}
                onValueChange={(vals) => setZoomDistance(vals[0])}
                min={2}
                max={15}
                step={0.5}
                className="w-full"
              />
            </div>

            {/* Camera Controls */}
            <div>
              <label className="text-sm text-slate-400 block mb-2 font-semibold">Camera</label>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1"
                  onClick={handleResetCamera}
                >
                  Reset View
                </Button>
                <Button
                  size="sm"
                  variant={autoRotate ? 'default' : 'outline'}
                  className={autoRotate ? 'flex-1 bg-cyan-600 hover:bg-cyan-700' : 'flex-1'}
                  onClick={() => setAutoRotate(!autoRotate)}
                >
                  Auto Rotate
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
