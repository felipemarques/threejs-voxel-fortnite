import { useEffect, useState } from 'react'

/**
 * FPS Counter component with average, min, and max tracking
 * Displays in non-intrusive fixed position
 */
export function FPSCounter() {
  const [fps, setFps] = useState(0)
  const [avgFps, setAvgFps] = useState(0)
  const [minFps, setMinFps] = useState(Infinity)
  const [maxFps, setMaxFps] = useState(0)

  useEffect(() => {
    let frameCount = 0
    let lastTime = performance.now()
    let fpsHistory: number[] = []
    let animationId: number

    function tick() {
      frameCount++
      const now = performance.now()
      const delta = now - lastTime

      if (delta >= 1000) {
        const currentFps = Math.round((frameCount * 1000) / delta)
        
        setFps(currentFps)
        
        // Update min/max
        setMinFps((prev) => Math.min(prev, currentFps))
        setMaxFps((prev) => Math.max(prev, currentFps))
        
        // Calculate average (last 10 samples)
        fpsHistory.push(currentFps)
        if (fpsHistory.length > 10) fpsHistory.shift()
        const avg = Math.round(fpsHistory.reduce((a, b) => a + b, 0) / fpsHistory.length)
        setAvgFps(avg)
        
        frameCount = 0
        lastTime = now
      }

      animationId = requestAnimationFrame(tick)
    }

    animationId = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div className="fixed top-4 right-4 bg-black/90 border border-green-500/50 rounded-lg px-4 py-3 font-mono text-xs z-50 shadow-lg">
      <div className="space-y-1">
        <div className="flex items-center justify-between gap-4">
          <span className="text-gray-400">FPS:</span>
          <span className="text-green-400 font-bold text-lg">{fps}</span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-gray-400">AVG:</span>
          <span className="text-green-300">{avgFps}</span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-gray-400">MIN:</span>
          <span className="text-yellow-400">{minFps === Infinity ? 0 : minFps}</span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-gray-400">MAX:</span>
          <span className="text-cyan-400">{maxFps}</span>
        </div>
      </div>
    </div>
  )
}
