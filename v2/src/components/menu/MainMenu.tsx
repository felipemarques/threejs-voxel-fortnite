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
  color: string
  route: string
}> = [
  {
    id: 'arcade',
    title: 'Arcade',
    emoji: '🎯',
    description: 'Modo clássico com tempestade, drops e progressão',
    color: 'from-orange-500 to-red-500',
    route: '/arcade',
  },
  {
    id: 'survival',
    title: 'Survival',
    emoji: '⚔️',
    description: 'Sobreviva sem tempestade, hardcore mode',
    color: 'from-green-500 to-emerald-500',
    route: '/survival',
  },
  {
    id: 'arena',
    title: 'Arena',
    emoji: '⚡',
    description: 'Partidas rápidas, ação intensa',
    color: 'from-red-500 to-pink-500',
    route: '/arena',
  },
  {
    id: 'matrix',
    title: 'Matrix',
    emoji: '🧪',
    description: 'Sandbox sem inimigos para testes',
    color: 'from-blue-500 to-cyan-500',
    route: '/matrix',
  },
  {
    id: 'multiplayer',
    title: 'Multiplayer',
    emoji: '🌐',
    description: 'Jogue online com amigos',
    color: 'from-purple-500 to-pink-500',
    route: '/multiplayer',
  },
  {
    id: 'studio',
    title: 'Studio',
    emoji: '🏗️',
    description: 'Modo criativo com construção',
    color: 'from-yellow-500 to-orange-500',
    route: '/studio',
  },
  {
    id: 'matrix-ai',
    title: 'Matrix AI',
    emoji: '🤖',
    description: 'Builder com IA',
    color: 'from-indigo-500 to-blue-500',
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-8">
      {/* Title */}
      <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">
        VOXEL FIRECRAFT
      </h1>
      <p className="text-slate-400 mb-12 text-lg">Escolha seu modo de jogo</p>

      {/* Game Mode Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 max-w-7xl">
        {gameModes.map((mode) => (
          <Card
            key={mode.id}
            className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
              selectedMode === mode.id
                ? 'ring-2 ring-white shadow-2xl'
                : 'hover:shadow-xl'
            } bg-gradient-to-br ${mode.color} border-0`}
            onClick={() => handleSelectMode(mode.id)}
          >
            <CardHeader>
              <div className="text-5xl mb-2">{mode.emoji}</div>
              <CardTitle className="text-white text-2xl">
                {mode.title}
              </CardTitle>
              <CardDescription className="text-white/80">
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
          className="text-xl px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
        >
          🎮 PLAY GAME
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="text-xl px-8 py-6"
          onClick={() => setSettingsOpen(true)}
        >
          ⚙️ Settings
        </Button>
      </div>

      {/* Footer */}
      <p className="text-slate-500 mt-12 text-sm">
        Press ESC during game to pause
      </p>

      {/* Settings Dialog */}
      <SettingsDialog open={settingsOpen} onOpenChange={setSettingsOpen} />
    </div>
  )
}
