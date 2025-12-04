import { useState } from 'react'
import { useGameSettings } from './stores/gameSettings'
import { MainMenu } from './components/menu/MainMenu'
import { GameCanvas } from './components/GameCanvas'

function App() {
  const [gameStarted, setGameStarted] = useState(false)
  const { gameMode } = useGameSettings()

  if (!gameStarted) {
    return <MainMenu onStartGame={() => setGameStarted(true)} />
  }

  return (
    <div className="relative w-full h-full bg-black">
      {/* Three.js Canvas */}
      <GameCanvas color="#ff6600" />
      
      {/* Game UI Overlay */}
      <div className="absolute top-4 left-4 pointer-events-auto">
        <div className="bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white">
          <h2 className="text-xl font-bold mb-2">Game Mode: {gameMode.toUpperCase()}</h2>
          <p className="text-sm text-gray-300">Game is running...</p>
        </div>
      </div>
    </div>
  )
}

export default App
