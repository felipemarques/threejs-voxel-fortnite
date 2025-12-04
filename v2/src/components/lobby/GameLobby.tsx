import { ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Play } from 'lucide-react'

export interface GameConfig {
  // Arcade
  arcadeDifficulty?: 'easy' | 'normal' | 'hard'
  arcadeWave?: number
  arcadeLives?: number
  arcadePowerUps?: boolean

  // Survival
  survivalDayLength?: number
  survivalResources?: 'low' | 'medium' | 'high'
  survivalSpawnRate?: number
  survivalBuilding?: boolean

  // Arena
  arenaMapSize?: 'small' | 'medium' | 'large'
  arenaRounds?: number
  arenaRoundTime?: number
  arenaWeapons?: string[]

  // Matrix
  matrixDensity?: number
  matrixSpeed?: number
  matrixCamera?: 'follow' | 'free' | 'topdown'
  matrixEffects?: boolean

  // Multiplayer
  playerName?: string
  serverAddress?: string
  team?: 'red' | 'blue' | 'auto'
  isReady?: boolean

  // Studio
  studioGridSize?: number
  studioSnap?: boolean
  studioAxisHelpers?: boolean
  studioAutoSave?: boolean

  // MatrixAI
  aiDifficulty?: 'easy' | 'medium' | 'hard' | 'insane'
  aiCount?: number
  aiSpawnPattern?: 'random' | 'wave' | 'circle'
  playerHandicap?: boolean
}

interface GameLobbyProps {
  mode: string
  title: string
  description: string
  onStartGame: (config: GameConfig) => void
  onBack: () => void
  children: ReactNode
}

export function GameLobby({
  mode,
  title,
  description,
  onStartGame,
  onBack,
  children,
}: GameLobbyProps) {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />

      {/* Lobby Container */}
      <div className="relative z-10 w-full max-w-2xl rounded-xl border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-xl">
        {/* Header */}
        <div className="mb-8 border-b border-white/10 pb-6">
          <div className="mb-2 inline-block rounded-md bg-[#00cec9]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#00cec9]">
            {mode}
          </div>
          <h1 className="mb-2 text-3xl font-bold text-white">{title}</h1>
          <p className="text-sm text-gray-400">{description}</p>
        </div>

        {/* Configuration Area (children) */}
        <div className="mb-8 space-y-6">{children}</div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-6">
          <Button
            onClick={onBack}
            variant="outline"
            className="border-white/20 bg-white/5 text-white hover:bg-white/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Menu
          </Button>

          <Button
            onClick={() => onStartGame({})}
            className="bg-[#00cec9] text-black hover:bg-[#00b4b4]"
          >
            <Play className="mr-2 h-4 w-4" />
            Start Game
          </Button>
        </div>
      </div>
    </div>
  )
}
