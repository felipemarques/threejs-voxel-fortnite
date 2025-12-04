import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { createMalePlayer } from '@/game/player/MalePlayerObject'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'

export function ObjectViewerPage() {
  const navigate = useNavigate()
  const canvasRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(true)
  const [selectedObject, setSelectedObject] = useState('Male Character')

  // ESC key handler to go back to menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        navigate('/')
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [navigate])

  useEffect(() => {
    if (!canvasRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x1a1a1a)
    scene.fog = new THREE.Fog(0x1a1a1a, 10, 60)

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      canvasRef.current.clientWidth / canvasRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.set(3, 2, 3)

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

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.0)
    dirLight.position.set(10, 20, 10)
    dirLight.castShadow = true
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
    const playerData = createMalePlayer({
      shirtColor: 0x3498db,
      showHat: true,
      weapon: 'none'
    })
    scene.add(playerData.mesh)
    setLoading(false)

    // Animation loop
    let animationTime = 0
    function animate() {
      requestAnimationFrame(animate)
      animationTime += 0.016

      // Idle animation
      if (playerData.leftArmPivot) {
        playerData.leftArmPivot.rotation.x = Math.sin(animationTime * 10) * 0.1
      }
      if (playerData.rightArmPivot) {
        playerData.rightArmPivot.rotation.x = -Math.sin(animationTime * 10) * 0.1
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
  }, [])

  return (
    <div className="w-screen h-screen bg-black flex">
      {/* Sidebar */}
      <div className="w-80 h-full bg-slate-950 border-r border-slate-800 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-cyan-400">Object Viewer</h2>
          <p className="text-sm text-slate-400 mt-1">Asset Inspector</p>
        </div>

        {/* Categories */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="mb-4">
            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-2">
              Characters
            </h3>
            <Card
              className={`cursor-pointer transition-all ${
                selectedObject === 'Male Character'
                  ? 'bg-blue-600 border-blue-500'
                  : 'bg-slate-900 border-slate-800 hover:bg-slate-800'
              }`}
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
        <div className="p-4 border-t border-slate-800">
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
        <div className="absolute bottom-6 right-6 w-72 bg-slate-950/90 backdrop-blur-sm border border-slate-800 rounded-lg p-4">
          <div className="space-y-4">
            <div>
              <label className="text-sm text-slate-400 block mb-2">Camera</label>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">
                  Reset View
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  Auto Rotate
                </Button>
              </div>
            </div>

            <div>
              <label className="text-sm text-slate-400 block mb-2">Animation</label>
              <div className="flex gap-2 flex-wrap">
                <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700">
                  Idle
                </Button>
                <Button size="sm" variant="outline">
                  Walk
                </Button>
                <Button size="sm" variant="outline">
                  Attack
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
