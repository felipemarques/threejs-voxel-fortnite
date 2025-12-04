import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { MainMenu } from './components/menu/MainMenu'
import { GameCanvas } from './components/GameCanvas'
import { PauseMenu } from './components/PauseMenu'
import { useGameSettings } from './stores/gameSettings'

function GamePage() {
  const location = useLocation()
  const navigate = useNavigate()
  const [isPaused, setIsPaused] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const { updateSetting } = useGameSettings()
  
  // Extract mode from URL
  const mode = location.pathname.substring(1) // Remove leading /
  
  // Update game mode in store when route changes
  useEffect(() => {
    if (mode && mode !== '') {
      updateSetting('gameMode', mode as any)
    }
  }, [mode, updateSetting])

  // ESC key handler for pause
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !settingsOpen) {
        setIsPaused(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [settingsOpen])

  const handleResume = () => setIsPaused(false)
  const handleQuit = () => navigate('/')

  return (
    <div className="relative w-full h-full bg-black">
      {/* Three.js Canvas */}
      <GameCanvas color="#ff6600" paused={isPaused} />
      
      {/* Game UI Overlay */}
      {!isPaused && (
        <div className="absolute top-4 left-4 pointer-events-auto">
          <div className="bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white">
            <h2 className="text-xl font-bold mb-2">Game Mode: {mode?.toUpperCase()}</h2>
            <p className="text-sm text-gray-300">Game is running...</p>
            <p className="text-xs text-gray-500 mt-2">Press ESC to pause</p>
          </div>
        </div>
      )}

      {/* Pause Menu */}
      {isPaused && (
        <PauseMenu
          onResume={handleResume}
          onQuit={handleQuit}
          settingsOpen={settingsOpen}
          onSettingsOpenChange={setSettingsOpen}
        />
      )}
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/arcade" element={<GamePage />} />
        <Route path="/survival" element={<GamePage />} />
        <Route path="/arena" element={<GamePage />} />
        <Route path="/matrix" element={<GamePage />} />
        <Route path="/multiplayer" element={<GamePage />} />
        <Route path="/studio" element={<GamePage />} />
        <Route path="/matrix-ai" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
