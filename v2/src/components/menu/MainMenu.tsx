import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGameSettings, type GameMode } from '@/stores/gameSettings'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { SettingsDialog } from './SettingsDialog'

const gameModes: Array<{
  id: GameMode | 'object-viewer'
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
    route: '/arcade/lobby',
  },
  {
    id: 'survival',
    title: 'Survival',
    emoji: '⚔️',
    description: 'Sobreviva sem tempestade, hardcore mode',
    route: '/survival/lobby',
  },
  {
    id: 'arena',
    title: 'Arena',
    emoji: '⚡',
    description: 'Partidas rápidas, ação intensa',
    route: '/arena/lobby',
  },
  {
    id: 'matrix',
    title: 'Matrix',
    emoji: '🧪',
    description: 'Sandbox sem inimigos para testes',
    route: '/matrix/lobby',
  },
  {
    id: 'multiplayer',
    title: 'Multiplayer',
    emoji: '🌐',
    description: 'Jogue online com amigos',
    route: '/multiplayer/lobby',
  },
  {
    id: 'studio',
    title: 'Studio',
    emoji: '🏗️',
    description: 'Modo criativo com construção',
    route: '/studio/lobby',
  },
  {
    id: 'matrix-ai',
    title: 'Matrix AI',
    emoji: '🤖',
    description: 'Builder com IA',
    route: '/matrix-ai/lobby',
  },
  {
    id: 'object-viewer',
    title: 'Object Viewer',
    emoji: '📦',
    description: 'Visualizador de objetos e modelos 3D',
    route: '/object-viewer',
  },
]

export function MainMenu() {
  const navigate = useNavigate()
  const { updateSetting } = useGameSettings()
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [clickedCard, setClickedCard] = useState<string | null>(null)

  const handleModeClick = (mode: GameMode | 'object-viewer', route: string) => {
    // Visual feedback
    setClickedCard(mode)
    if (mode !== 'object-viewer') {
      updateSetting('gameMode', mode as GameMode)
    }
    
    // Short delay for visual effect, then navigate
    setTimeout(() => {
      navigate(route)
    }, 150)
  }

  const handleSettingsClick = () => {
    setClickedCard('settings')
    setTimeout(() => {
      setSettingsOpen(true)
      setClickedCard(null)
    }, 150)
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

      {/* Game Mode Grid + Settings + Object Viewer */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8 max-w-6xl">
        {/* Game Mode & Tool Cards */}
        {gameModes.map((mode) => (
          <Card
            key={mode.id}
            className={`
              cursor-pointer transition-all duration-150
              bg-slate-950 border-slate-800
              hover:border-white hover:shadow-lg hover:shadow-white/10
              active:scale-95
              ${clickedCard === mode.id 
                ? 'scale-95 border-white shadow-xl shadow-white/30' 
                : ''
              }
            `}
            onClick={() => handleModeClick(mode.id, mode.route)}
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

        {/* Settings Card */}
        <Card
          className={`
            cursor-pointer transition-all duration-150
            bg-slate-950 border-slate-800
            hover:border-white hover:shadow-lg hover:shadow-white/10
            active:scale-95
            ${clickedCard === 'settings' 
              ? 'scale-95 border-white shadow-xl shadow-white/30' 
              : ''
            }
          `}
          onClick={handleSettingsClick}
        >
          <CardHeader className="space-y-3">
            <div className="text-4xl">⚙️</div>
            <CardTitle className="text-white text-xl font-semibold">
              Settings
            </CardTitle>
            <CardDescription className="text-slate-400 text-sm">
              Configure game options and preferences
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Footer */}
      <p className="text-slate-600 mt-8 text-xs uppercase tracking-wider">
        Press ESC during game to pause
      </p>

      {/* Settings Dialog */}
      <SettingsDialog open={settingsOpen} onOpenChange={setSettingsOpen} />
    </div>
  )
}
