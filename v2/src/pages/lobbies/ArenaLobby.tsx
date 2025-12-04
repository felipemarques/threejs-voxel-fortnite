import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GameLobby, GameConfig } from '@/components/lobby/GameLobby'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'

export function ArenaLobby() {
  const navigate = useNavigate()
  const [mapSize, setMapSize] = useState<'small' | 'medium' | 'large'>('medium')
  const [rounds, setRounds] = useState(5)
  const [roundTime, setRoundTime] = useState(5)

  const handleStartGame = (baseConfig: GameConfig) => {
    const config: GameConfig = {
      ...baseConfig,
      arenaMapSize: mapSize,
      arenaRounds: rounds,
      arenaRoundTime: roundTime,
    }

    navigate('/arena', { state: { config, fromLobby: true } })
  }

  const handleBack = () => {
    navigate('/')
  }

  return (
    <GameLobby
      mode="Arena"
      title="Arena Mode"
      description="Battle in rounds with limited time. Last one standing wins!"
      onStartGame={handleStartGame}
      onBack={handleBack}
    >
      {/* Map Size */}
      <div className="space-y-3">
        <Label className="text-sm font-medium text-gray-300">Map Size</Label>
        <div className="flex gap-2">
          {(['small', 'medium', 'large'] as const).map((size) => (
            <Button
              key={size}
              onClick={() => setMapSize(size)}
              variant={mapSize === size ? 'default' : 'outline'}
              className={
                mapSize === size
                  ? 'bg-[#00cec9] text-black hover:bg-[#00b4b4]'
                  : 'border-white/20 bg-white/5 text-white hover:bg-white/10'
              }
            >
              {size.charAt(0).toUpperCase() + size.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      {/* Number of Rounds */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium text-gray-300">Number of Rounds</Label>
          <span className="text-sm font-bold text-[#00cec9]">{rounds}</span>
        </div>
        <Slider
          value={[rounds]}
          onValueChange={([value]) => setRounds(value)}
          min={1}
          max={10}
          step={1}
          className="w-full"
        />
      </div>

      {/* Round Time */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium text-gray-300">Time per Round</Label>
          <span className="text-sm font-bold text-[#00cec9]">{roundTime} min</span>
        </div>
        <Slider
          value={[roundTime]}
          onValueChange={([value]) => setRoundTime(value)}
          min={1}
          max={10}
          step={1}
          className="w-full"
        />
      </div>
    </GameLobby>
  )
}
