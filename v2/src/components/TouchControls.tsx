import { useEffect, useRef, useState } from 'react'

interface TouchControlsProps {
  onMove: (x: number, y: number) => void
  onLook: (dx: number, dy: number) => void
  onJump: () => void
  onSprint: (active: boolean) => void
  onFire: (active: boolean) => void
}

export function TouchControls({ onMove, onLook, onJump, onSprint, onFire }: TouchControlsProps) {
  const joystickRef = useRef<HTMLDivElement>(null)
  const stickRef = useRef<HTMLDivElement>(null)
  const lookAreaRef = useRef<HTMLDivElement>(null)
  
  // Joystick state
  // Use ref instead of state to avoid stale closures in event listeners
  const joystickActive = useRef(false)
  const joystickStartPos = useRef({ x: 0, y: 0 })
  const maxRadius = 50

  // Look state
  const lookTouchId = useRef<number | null>(null)
  const lookLastPos = useRef({ x: 0, y: 0 })

  // Sprint state
  const [isSprinting, setIsSprinting] = useState(false)

  // --- Joystick Logic ---
  // V1-style implementation: Bind listeners to invalid element and rely on implicit capture.
  // Using refs for internal handlers avoids dependency on state/props in the effect
  // --- Joystick Logic ---
  // ROBUST IMPLEMENTATION: Window listeners + Identifier Tracking
  // This ensures we never lose the specific finger tracking even if it leaves the element/container.
  
  const handleJoystickStart = useRef<(e: TouchEvent) => void>(() => {})
  const handleJoystickMove = useRef<(e: TouchEvent) => void>(() => {})
  const handleJoystickEnd = useRef<(e: TouchEvent) => void>(() => {})
  const joystickTouchId = useRef<number | null>(null)

  useEffect(() => {
    const joystick = joystickRef.current
    if (!joystick) return

    handleJoystickStart.current = (e: TouchEvent) => {
      e.preventDefault()
      // If already active with another finger, ignore new touches
      if (joystickActive.current) return

      const touch = e.changedTouches[0]
      joystickTouchId.current = touch.identifier
      joystickStartPos.current = { x: touch.clientX, y: touch.clientY }
      joystickActive.current = true
      
      // Reset stick position to center initially (optional, but good visual feedback)
      if (stickRef.current) {
        stickRef.current.style.transform = ''
      }
    }

    handleJoystickMove.current = (e: TouchEvent) => {
      if (!joystickActive.current || joystickTouchId.current === null) return
      
      // Find our specific touch in the changed list
      let touch: Touch | undefined
      for (let i = 0; i < e.changedTouches.length; i++) {
        if (e.changedTouches[i].identifier === joystickTouchId.current) {
          touch = e.changedTouches[i]
          break
        }
      }

      if (!touch) return // Not our finger moving

      e.preventDefault()
      
      // Calculate delta from start
      const dx = touch.clientX - joystickStartPos.current.x
      const dy = touch.clientY - joystickStartPos.current.y
      
      const dist = Math.sqrt(dx * dx + dy * dy)
      const angle = Math.atan2(dy, dx)
      const r = Math.min(maxRadius, dist)
      
      const nx = Math.cos(angle) * r
      const ny = Math.sin(angle) * r
      
      if (stickRef.current) {
        // Fix: Preserve the CSS centering (-translate-x-1/2 -translate-y-1/2)
        // Tailwind uses translate(-50%, -50%) effectively.
        stickRef.current.style.transform = `translate(-50%, -50%) translate(${nx}px, ${ny}px)`
      }

      const normX = nx / maxRadius
      const normY = ny / maxRadius
      
      onMove(normX, normY) 
    }

    handleJoystickEnd.current = (e: TouchEvent) => {
      if (!joystickActive.current || joystickTouchId.current === null) return

      // Did our finger end?
      let found = false
      for (let i = 0; i < e.changedTouches.length; i++) {
        if (e.changedTouches[i].identifier === joystickTouchId.current) {
          found = true
          break
        }
      }

      if (!found) return 

      e.preventDefault()
      
      joystickActive.current = false
      joystickTouchId.current = null
      
      // Force visual reset on next frame to ensure it paints
      requestAnimationFrame(() => {
        if (stickRef.current) {
          // Clear inline transform to let Tailwind CSS take over (centering)
          stickRef.current.style.transform = ''
        }
      })
      
      onMove(0, 0)
    }

    const onStart = (e: TouchEvent) => handleJoystickStart.current(e)
    const onMoveHandler = (e: TouchEvent) => handleJoystickMove.current(e)
    const onEnd = (e: TouchEvent) => handleJoystickEnd.current(e)

    // Touchstart is local
    joystick.addEventListener('touchstart', onStart, { passive: false })
    // Move/End are global to catch dragging out
    window.addEventListener('touchmove', onMoveHandler, { passive: false })
    window.addEventListener('touchend', onEnd)
    window.addEventListener('touchcancel', onEnd)

    // Prevent gestures
    const originalTouchAction = document.body.style.touchAction
    document.body.style.touchAction = 'none'

    return () => {
      joystick.removeEventListener('touchstart', onStart)
      window.removeEventListener('touchmove', onMoveHandler)
      window.removeEventListener('touchend', onEnd)
      window.removeEventListener('touchcancel', onEnd)
      document.body.style.touchAction = originalTouchAction
    }
  }, [])

  // --- Look Logic ---
  useEffect(() => {
    const area = lookAreaRef.current
    if (!area) return

    const handleStart = (e: TouchEvent) => {
      if (lookTouchId.current !== null) return
      e.preventDefault()
      
      const touch = e.changedTouches[0]
      lookTouchId.current = touch.identifier
      lookLastPos.current = { x: touch.clientX, y: touch.clientY }
    }

    const handleMove = (e: TouchEvent) => {
      if (lookTouchId.current === null) return
      e.preventDefault()

      for (let i = 0; i < e.changedTouches.length; i++) {
        if (e.changedTouches[i].identifier === lookTouchId.current) {
          const t = e.changedTouches[i]
          const dx = t.clientX - lookLastPos.current.x
          const dy = t.clientY - lookLastPos.current.y
          
          lookLastPos.current = { x: t.clientX, y: t.clientY }
          onLook(dx, dy)
          break
        }
      }
    }

    const handleEnd = (e: TouchEvent) => {
      if (lookTouchId.current === null) return
      
      for (let i = 0; i < e.changedTouches.length; i++) {
        if (e.changedTouches[i].identifier === lookTouchId.current) {
          lookTouchId.current = null
          break
        }
      }
    }

    // Attach look events to the area itself for start, but window for move/end is safer?
    // v1 attached to window for move/end? 
    // v1: lookArea.addEventListener('touchmove'...) 
    // v1 attached everything to lookArea. If finger slides off lookArea (50% screen), tracking stops?
    // v1 code: "Create an invisible touch area... width='100%'"?
    // Ah, v1 lookArea was width=100%!
    // My v2 lookArea is Right 50%.
    // So if I drag left past the middle, I might lose tracking.
    // For Look, it's better to track globally after start too.

    area.addEventListener('touchstart', handleStart, { passive: false })
    window.addEventListener('touchmove', handleMove, { passive: false })
    window.addEventListener('touchend', handleEnd)
    window.addEventListener('touchcancel', handleEnd)

    return () => {
      area.removeEventListener('touchstart', handleStart)
      window.removeEventListener('touchmove', handleMove)
      window.removeEventListener('touchend', handleEnd)
      window.removeEventListener('touchcancel', handleEnd)
    }
  }, [onLook])

  const toggleSprint = () => {
    const newState = !isSprinting
    setIsSprinting(newState)
    onSprint(newState)
  }

  return (
    <div className="absolute inset-0 z-[200] pointer-events-none select-none touch-none">
      {/* Joystick Area */}
      <div 
        ref={joystickRef}
        className="absolute bottom-[10vh] left-[10vw] w-[120px] h-[120px] bg-white/10 rounded-full border-2 border-white/20 pointer-events-auto backdrop-blur-sm"
      >
        <div 
          ref={stickRef}
          className="absolute top-1/2 left-1/2 w-[50px] h-[50px] bg-white/40 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg"
        />
      </div>

      {/* Look Area (Right side of screen) */}
      <div 
        ref={lookAreaRef}
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-auto bg-transparent z-[190]"
      />

      {/* Buttons */}
      <div className="absolute bottom-[12vh] right-[8vw] z-[210] flex flex-col gap-4 pointer-events-auto">
        {/* Fire Button (Big) */}
        <button
          className="w-16 h-16 rounded-full bg-red-500/80 border-2 border-white/50 text-white font-bold shadow-lg active:scale-95 active:bg-red-600 transition-transform mb-4 ml-8"
          onTouchStart={(e) => { e.preventDefault(); onFire(true) }}
          onTouchEnd={(e) => { e.preventDefault(); onFire(false) }}
        >
          FIRE
        </button>

        <div className="flex gap-4">
          <button
            className={`w-14 h-14 rounded-full border-2 border-white/50 text-white font-bold shadow-lg transition-colors ${
              isSprinting ? 'bg-green-500/80' : 'bg-yellow-500/80'
            }`}
            onTouchStart={(e) => { e.preventDefault(); toggleSprint() }}
          >
            RUN
          </button>

          <button
            className="w-14 h-14 rounded-full bg-blue-500/80 border-2 border-white/50 text-white font-bold shadow-lg active:scale-95 active:bg-blue-600 transition-transform mt-[-20px]"
            onTouchStart={(e) => { e.preventDefault(); onJump() }}
          >
            JUMP
          </button>
        </div>
      </div>
    </div>
  )
}
