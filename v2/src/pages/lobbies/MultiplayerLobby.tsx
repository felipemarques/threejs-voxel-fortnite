import { useState } from 'react'
import { GameLobby } from '@/components/lobby/GameLobby'
import { useLobbyNavigation } from '@/hooks/useLobbyNavigation'
import { DifficultySelector } from '@/components/lobby/DifficultySelector'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

export function MultiplayerLobby() {
  const [playerName, setPlayerName] = useState('Player')
  const [server, setServer] = useState('localhost:3000')
  const [team, setTeam] = useState<'red' | 'blue' | 'auto'>('auto')
  
  const { handleStartGame, handleBack } = useLobbyNavigation('multiplayer')

  return (
    <GameLobby
      mode="Multiplayer"
      title="Multiplayer Mode"
      description="Connect to online servers and play with friends"
      onStartGame={() => handleStartGame({
        multiplayerName: playerName,
        multiplayerServer: server,
        multiplayerTeam: team,
      })}
      onBack={handleBack}
    >
      <div className="space-y-6">
        <div className="space-y-3">
          <Label className="text-sm font-medium text-gray-300">Player Name</Label>
          <Input
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="Enter your name"
            className="bg-white/5 border-white/20 text-white"
          />
        </div>

        <div className="space-y-3">
          <Label className="text-sm font-medium text-gray-300">Server Address</Label>
          <Input
            value={server}
            onChange={(e) => setServer(e.target.value)}
            placeholder="localhost:3000"
            className="bg-white/5 border-white/20 text-white"
          />
        </div>

        <DifficultySelector
          label="Team"
          value={team}
          onChange={setTeam}
          options={['red', 'blue', 'auto'] as const}
        />
      </div>
    </GameLobby>
  )
}
