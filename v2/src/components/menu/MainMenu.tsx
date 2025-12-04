import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGameSettings, type GameMode } from '@/stores/gameSettings'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { SettingsDialog } from './SettingsDialog'

const gameModes: Array<{
  id: GameMode
  title: string
  emoji: string
  description: string
  route: string
}> = [
  {
    id: 'arcade',
    title: 'Arcade',
    emoji: '🎯',
    description: 'Modo clássico com tempestade, drops e progressão',
    route: '/arcade',
  },
  {
    id: 'survival',
    title: 'Survival',
    emoji: '⚔️',
    description: 'Sobreviva sem tempestade, hardcore mode',
    route: '/survival',
  },
  {
    id: 'arena',
    title: 'Arena',
    emoji: '⚡',
    description: 'Partidas rápidas, ação intensa',
    route: '/arena',
  },
  {
    id: 'matrix',
    title: 'Matrix',
    emoji: '🧪',
    description: 'Sandbox sem inimigos para testes',
    route: '/matrix',
  },
  {
    id: 'multiplayer',
    title: 'Multiplayer',
    emoji: '🌐',
    description: 'Jogue online com amigos',
    route: '/multiplayer',
  },
  {
    id: 'studio',
    title: 'Studio',
    emoji: '🏗️',
    description: 'Modo criativo com construção',
    route: '/studio',
  },
  {
    id: 'matrix-ai',
    title: 'Matrix AI',
    emoji: '🤖',
    description: 'Builder com IA',
    route: '/matrix-ai',
  },
]

export function MainMenu() {
  const navigate = useNavigate()
  const { gameMode, updateSetting } = useGameSettings()
  const [selectedMode, setSelectedMode] = useState<GameMode>(gameMode)
  const [settingsOpen, setSettingsOpen] = useState(false)

  const handleSelectMode = (mode: GameMode) => {
    setSelectedMode(mode)
    updateSetting('gameMode', mode)
  }

  const handleStartGame = () => {
    updateSetting('gameMode', selectedMode)
    const modeData = gameModes.find(m => m.id === selectedMode)
    if (modeData) {
      navigate(modeData.route)
    }
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
      {/* Title */}
      <h1 className="text-6xl font-bold text-white mb-2 tracking-tight">
        VOXEL FIRECRAFT
      </h1>
      <p className="text-slate-400 mb-16 text-sm uppercase tracking-widest">
        Escolha seu modo de jogo
      </p>

      {/* Game Mode Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-12 max-w-7xl">
        {gameModes.map((mode) => (
          <Card
            key={mode.id}
            className={`
              cursor-pointer transition-all duration-200 
              bg-slate-950 border-slate-800
              hover:border-white hover:shadow-lg hover:shadow-white/10
              ${selectedMode === mode.id 
                ? 'ring-2 ring-white border-white shadow-xl shadow-white/20' 
                : ''
              }
            `}
            onClick={() => handleSelectMode(mode.id)}
          >
            <CardHeader className="space-y-3">
              <div className="text-4xl">{mode.emoji}</div>
              <CardTitle className="text-white text-xl font-semibold">
                {mode.title}
              </CardTitle>
              <CardDescription className="text-slate-400 text-sm">
                {mode.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <Button
          onClick={handleStartGame}
          size="lg"
          className="text-lg px-10 py-6 bg-white text-black hover:bg-slate-200 font-semibold"
        >
          PLAY GAME
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-black"
          onClick={() => setSettingsOpen(true)}
        >
          Settings
        </Button>
      </div>

      {/* Footer */}
      <p className="text-slate-600 mt-16 text-xs uppercase tracking-wider">
        Press ESC during game to pause
      </p>

      {/* Settings Dialog */}
      <SettingsDialog open={settingsOpen} onOpenChange={setSettingsOpen} />
    </div>
  )
}
