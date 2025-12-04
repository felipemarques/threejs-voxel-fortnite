import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GameLobby, GameConfig } from '@/components/lobby/GameLobby'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Checkbox } from '@/components/ui/checkbox'

export function ArcadeLobby() {
  const navigate = useNavigate()
  const [difficulty, setDifficulty] = useState<'easy' | 'normal' | 'hard'>('normal')
  const [startWave, setStartWave] = useState(1)
  const [lives, setLives] = useState(3)
  const [powerUpsEnabled, setPowerUpsEnabled] = useState(true)

  const handleStartGame = (baseConfig: GameConfig) => {
    const config: GameConfig = {
      ...baseConfig,
      arcadeDifficulty: difficulty,
      arcadeWave: startWave,
      arcadeLives: lives,
      arcadePowerUps: powerUpsEnabled,
    }

    // Navigate to game with loading state
    navigate('/arcade', { state: { config, fromLobby: true } })
  }

  const handleBack = () => {
    navigate('/')
  }

  return (
    <GameLobby
      mode="Arcade"
      title="Arcade Mode"
      description="Wave-based survival with increasing difficulty. Defend against endless hordes!"
      onStartGame={handleStartGame}
      onBack={handleBack}
    >
      {/* Difficulty Selection */}
      <div className="space-y-3">
        <Label className="text-sm font-medium text-gray-300">Difficulty</Label>
        <div className="flex gap-2">
          {(['easy', 'normal', 'hard'] as const).map((diff) => (
            <Button
              key={diff}
              onClick={() => setDifficulty(diff)}
              variant={difficulty === diff ? 'default' : 'outline'}
              className={
                difficulty === diff
                  ? 'bg-[#00cec9] text-black hover:bg-[#00b4b4]'
                  : 'border-white/20 bg-white/5 text-white hover:bg-white/10'
              }
            >
              {diff.charAt(0).toUpperCase() + diff.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      {/* Starting Wave */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium text-gray-300">Starting Wave</Label>
          <span className="text-sm font-bold text-[#00cec9]">{startWave}</span>
        </div>
        <Slider
          value={[startWave]}
          onValueChange={([value]) => setStartWave(value)}
          min={1}
          max={10}
          step={1}
          className="w-full"
        />
      </div>

      {/* Lives */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium text-gray-300">Lives</Label>
          <span className="text-sm font-bold text-[#00cec9]">{lives}</span>
        </div>
        <Slider
          value={[lives]}
          onValueChange={([value]) => setLives(value)}
          min={1}
          max={10}
          step={1}
          className="w-full"
        />
      </div>

      {/* Power-ups */}
      <div className="flex items-center space-x-3">
        <Checkbox
          id="powerups"
          checked={powerUpsEnabled}
          onCheckedChange={(checked) => setPowerUpsEnabled(checked as boolean)}
        />
        <Label
          htmlFor="powerups"
          className="cursor-pointer text-sm font-medium text-gray-300"
        >
          Enable Power-ups
        </Label>
      </div>
    </GameLobby>
  )
}
