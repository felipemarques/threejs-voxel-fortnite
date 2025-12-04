import { useState, useEffect } from 'react'
import { useGameSettings } from './stores/gameSettings'
import { MainMenu } from './components/menu/MainMenu'
import { GameCanvas } from './components/GameCanvas'
import { PauseMenu } from './components/PauseMenu'

function App() {
  const [gameStarted, setGameStarted] = useState(false)
  const [gamePaused, setGamePaused] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const { gameMode } = useGameSettings()

  // ESC key handler for pause
  useEffect(() => {
    if (!gameStarted) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !settingsOpen) {
        setGamePaused(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [gameStarted, settingsOpen])

  // Main Menu
  if (!gameStarted) {
    return <MainMenu onStartGame={() => setGameStarted(true)} />
  }

  // Game View
  return (
    <div className="relative w-full h-full bg-black">
      {/* Three.js Canvas */}
      <GameCanvas color="#ff6600" />
      
      {/* Game UI Overlay */}
      {!gamePaused && (
        <div className="absolute top-4 left-4 pointer-events-auto">
          <div className="bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white">
            <h2 className="text-xl font-bold mb-2">Game Mode: {gameMode.toUpperCase()}</h2>
            <p className="text-sm text-gray-300">Game is running...</p>
            <p className="text-xs text-gray-500 mt-2">Press ESC to pause</p>
          </div>
        </div>
      )}

      {/* Pause Menu */}
      {gamePaused && (
        <PauseMenu
          onResume={() => setGamePaused(false)}
          onQuit={() => {
            setGameStarted(false)
            setGamePaused(false)
          }}
          settingsOpen={settingsOpen}
          onSettingsOpenChange={setSettingsOpen}
        />
      )}
    </div>
  )
}

export default App
