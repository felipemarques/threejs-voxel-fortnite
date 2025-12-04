import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GameLobby, GameConfig } from '@/components/lobby/GameLobby'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function MultiplayerLobby() {
  const navigate = useNavigate()
  const [playerName, setPlayerName] = useState('Player')
  const [server, setServer] = useState('localhost:3000')
  const [team, setTeam] = useState<'red' | 'blue' | 'auto'>('auto')

  const handleStartGame = (baseConfig: GameConfig) => {
    const config: GameConfig = {
      ...baseConfig,
      playerName,
      serverAddress: server,
      team,
    }
    navigate('/multiplayer', { state: { config, fromLobby: true } })
  }

  return (
    <GameLobby
      mode="Multiplayer"
      title="Multiplayer Mode"
      description="Join online matches and compete with players worldwide!"
      onStartGame={handleStartGame}
      onBack={() => navigate('/')}
    >
      <div className="space-y-3">
        <Label className="text-sm font-medium text-gray-300">Player Name</Label>
        <Input
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="Enter your name"
          className="border-white/20 bg-white/5 text-white"
        />
      </div>

      <div className="space-y-3">
        <Label className="text-sm font-medium text-gray-300">Server Address</Label>
        <Input
          value={server}
          onChange={(e) => setServer(e.target.value)}
          placeholder="server:port"
          className="border-white/20 bg-white/5 text-white"
        />
      </div>

      <div className="space-y-3">
        <Label className="text-sm font-medium text-gray-300">Team</Label>
        <div className="flex gap-2">
          {(['red', 'blue', 'auto'] as const).map((t) => (
            <Button
              key={t}
              onClick={() => setTeam(t)}
              variant={team === t ? 'default' : 'outline'}
              className={team === t ? 'bg-[#00cec9] text-black' : 'border-white/20 bg-white/5 text-white'}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </Button>
          ))}
        </div>
      </div>
    </GameLobby>
  )
}
