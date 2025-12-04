import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useGameSettings } from '@/stores/gameSettings'
import { GameCanvas } from '@/components/GameCanvas'
import { PauseMenu } from '@/components/PauseMenu'

export function GamePage() {
  const { mode } = useParams<{ mode: string }>()
  const navigate = useNavigate()
  const [settingsOpen, setSettingsOpen] = useState(false)
  const { updateSetting } = useGameSettings()

  // Update game mode in store when route changes
  useState(() => {
    if (mode) {
      updateSetting('gameMode', mode as any)
    }
  })

  return (
    <div className="relative w-full h-full bg-black">
      {/* Three.js Canvas */}
      <GameCanvas color="#ff6600" paused={false} />
      
      {/* Game UI Overlay */}
      <div className="absolute top-4 left-4 pointer-events-auto">
        <div className="bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white">
          <h2 className="text-xl font-bold mb-2">Game Mode: {mode?.toUpperCase()}</h2>
          <p className="text-sm text-gray-300">Game is running...</p>
          <p className="text-xs text-gray-500 mt-2">Press ESC to pause</p>
        </div>
      </div>

      {/* Pause Menu */}
      <PauseMenu
        settingsOpen={settingsOpen}
        onSettingsOpenChange={setSettingsOpen}
      />
    </div>
  )
}
