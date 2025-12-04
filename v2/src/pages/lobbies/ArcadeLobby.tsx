import { useState } from 'react'
import { GameLobby } from '@/components/lobby/GameLobby'
import { useLobbyNavigation } from '@/hooks/useLobbyNavigation'
import { DifficultySelector } from '@/components/lobby/DifficultySelector'
import { SliderControl } from '@/components/lobby/SliderControl'
import { CheckboxControl } from '@/components/lobby/CheckboxControl'

export function ArcadeLobby() {
  const [difficulty, setDifficulty] = useState<'easy' | 'normal' | 'hard'>('normal')
  const [startWave, setStartWave] = useState(1)
  const [lives, setLives] = useState(3)
  const [powerUpsEnabled, setPowerUpsEnabled] = useState(true)
  
  const { handleStartGame, handleBack } = useLobbyNavigation('arcade')

  return (
    <GameLobby
      mode="Arcade"
      title="Arcade Mode"
      description="Wave-based survival with increasing difficulty"
      onStartGame={() => handleStartGame({
        arcadeDifficulty: difficulty,
        arcadeWave: startWave,
        arcadeLives: lives,
        arcadePowerUps: powerUpsEnabled,
      })}
      onBack={handleBack}
    >
      <div className="space-y-6">
        <DifficultySelector
          value={difficulty}
          onChange={setDifficulty}
          options={['easy', 'normal', 'hard'] as const}
        />

        <SliderControl
          label="Starting Wave"
          value={startWave}
          onChange={setStartWave}
          min={1}
          max={10}
        />

        <SliderControl
          label="Lives"
          value={lives}
          onChange={setLives}
          min={1}
          max={10}
        />

        <CheckboxControl
          label="Enable Power-ups"
          checked={powerUpsEnabled}
          onChange={setPowerUpsEnabled}
        />
      </div>
    </GameLobby>
  )
}
