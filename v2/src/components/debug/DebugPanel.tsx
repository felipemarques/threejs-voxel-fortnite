import { useEffect, useState } from 'react'
import { useDebugStore } from '@/stores/debugStore'
import { CheckboxControl } from '@/components/lobby/CheckboxControl'
import { Button } from '@/components/ui/button'

/**
 * Debug Panel - Toggleable panel for debug features
 * Press F3 to open/close
 */
export function DebugPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const debug = useDebugStore()

  // F3 to toggle panel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'F3') {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-gray-900/50 backdrop-blur-sm px-3 py-1 rounded text-xs text-gray-400">
          Press <kbd className="bg-gray-700 px-1 rounded">F3</kbd> for debug
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-900/95 backdrop-blur-md border border-white/20 rounded-lg p-4 min-w-[280px] z-50 shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-bold text-lg">🛠️ Debug Tools</h3>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ✕
        </button>
      </div>

      <div className="space-y-3">
        <CheckboxControl
          label="Show FPS Counter"
          checked={debug.showFPS}
          onChange={debug.toggleFPS}
        />

        <CheckboxControl
          label="Show Bounding Boxes"
          checked={debug.showBoundingBox}
          onChange={debug.toggleBoundingBox}
        />

        <CheckboxControl
          label="Show Grid"
          checked={debug.showGrid}
          onChange={debug.toggleGrid}
        />

        <CheckboxControl
          label="Show Stats"
          checked={debug.showStats}
          onChange={debug.toggleStats}
        />

        <CheckboxControl
          label="God Mode"
          checked={debug.godMode}
          onChange={debug.toggleGodMode}
        />

        <CheckboxControl
          label="Show Coordinates"
          checked={debug.showCoordinates}
          onChange={debug.toggleCoordinates}
        />
      </div>

      <div className="mt-4 pt-4 border-t border-white/10">
        <Button
          onClick={debug.reset}
          variant="destructive"
          size="sm"
          className="w-full"
        >
          Reset All
        </Button>
      </div>

      <div className="mt-3 text-xs text-gray-500 text-center">
        Press <kbd className="bg-gray-700 px-1 rounded">F3</kbd> to close
      </div>
    </div>
  )
}
