import { HashRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { MainMenu } from './components/menu/MainMenu'
import { GameCanvas } from './components/GameCanvas'
import { PauseMenu } from './components/PauseMenu'
import { ObjectViewerPage } from './pages/ObjectViewerPage'
import { ArcadePage } from './pages/ArcadePage'
import { LoadingScreen } from './components/ui/LoadingScreen'
import { useGameSettings } from './stores/gameSettings'
import { useDebugStore } from './stores/debugStore'
import { FPSCounter } from './components/debug/FPSCounter'
import { DebugPanel } from './components/debug/DebugPanel'

// Lobby imports
import { ArcadeLobby } from './pages/lobbies/ArcadeLobby'
import { SurvivalLobby } from './pages/lobbies/SurvivalLobby'
import { ArenaLobby } from './pages/lobbies/ArenaLobby'
import { MatrixLobby } from './pages/lobbies/MatrixLobby'
import { MultiplayerLobby } from './pages/lobbies/MultiplayerLobby'
import { StudioLobby } from './pages/lobbies/StudioLobby'
import { MatrixAILobby } from './pages/lobbies/MatrixAILobby'

function GamePage() {
  const location = useLocation()
  const navigate = useNavigate()
  const [isPaused, setIsPaused] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { updateSetting } = useGameSettings()
  const debug = useDebugStore()
  
  // Extract mode from URL
  const mode = location.pathname.substring(1) // Remove leading /
  
  // Get config from lobby if coming from there
  const state = location.state as { config?: any; fromLobby?: boolean } | null
  const config = state?.config
  const fromLobby = state?.fromLobby || false
  
  // Update game mode in store when route changes
  useEffect(() => {
    if (mode && mode !== '') {
      updateSetting('gameMode', mode as any)
    }
  }, [mode, updateSetting])

  // Show loading when coming from lobby
  useEffect(() => {
    if (fromLobby) {
      setIsLoading(true)
      // Simulate game initialization
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 2000) // 2 seconds loading
      return () => clearTimeout(timer)
    }
  }, [fromLobby])

  // ESC key handler for pause
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !settingsOpen && !isLoading) {
        setIsPaused(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [settingsOpen, isLoading])

  const handleResume = () => setIsPaused(false)
  const handleQuit = () => navigate('/')
  const handleBackToLobby = () => navigate(`/${mode}/lobby`)

  return (
    <div className="relative w-full h-full bg-black">
      {/* Loading Screen */}
      <LoadingScreen isLoading={isLoading} message="Initializing game..." />
      
      {/* Three.js Canvas */}
      <GameCanvas color="#ff6600" paused={isPaused} />
      
      {/* Game UI Overlay */}
      {!isPaused && !isLoading && (
        <div className="absolute top-4 left-4 pointer-events-auto">
          <div className="bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white">
            <h2 className="text-xl font-bold mb-2">Game Mode: {mode?.toUpperCase()}</h2>
            <p className="text-sm text-gray-300">Game is running...</p>
            {config && (
              <p className="text-xs text-gray-500 mt-1">Custom config loaded</p>
            )}
            <p className="text-xs text-gray-500 mt-2">Press ESC to pause</p>
          </div>
        </div>
      )}

      {/* Pause Menu */}
      {isPaused && !isLoading && (
        <PauseMenu
          onResume={handleResume}
          onQuit={handleQuit}
          onBackToLobby={handleBackToLobby}
          settingsOpen={settingsOpen}
          onSettingsOpenChange={setSettingsOpen}
        />
      )}

      {/* Debug Tools */}
      {debug.showFPS && <FPSCounter />}
      <DebugPanel />
    </div>
  )
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/object-viewer" element={<ObjectViewerPage />} />
        
        {/* Direct game routes (backward compatible) */}
        <Route path="/arcade" element={<ArcadePage />} />
        <Route path="/survival" element={<GamePage />} />
        <Route path="/arena" element={<GamePage />} />
        <Route path="/matrix" element={<GamePage />} />
        <Route path="/multiplayer" element={<GamePage />} />
        <Route path="/studio" element={<GamePage />} />
        <Route path="/matrix-ai" element={<GamePage />} />
        
        {/* New lobby routes (optional) */}
        <Route path="/arcade/lobby" element={<ArcadeLobby />} />
        <Route path="/survival/lobby" element={<SurvivalLobby />} />
        <Route path="/arena/lobby" element={<ArenaLobby />} />
        <Route path="/matrix/lobby" element={<MatrixLobby />} />
        <Route path="/multiplayer/lobby" element={<MultiplayerLobby />} />
        <Route path="/studio/lobby" element={<StudioLobby />} />
        <Route path="/matrix-ai/lobby" element={<MatrixAILobby />} />
      </Routes>
    </HashRouter>
  )
}

export default App
