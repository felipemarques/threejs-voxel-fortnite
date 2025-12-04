import { useState } from 'react'
import { GameLobby } from '@/components/lobby/GameLobby'
import { useLobbyNavigation } from '@/hooks/useLobbyNavigation'
import { DifficultySelector } from '@/components/lobby/DifficultySelector'
import { SliderControl } from '@/components/lobby/SliderControl'

export function ArenaLobby() {
  const [mapSize, setMapSize] = useState<'small' | 'medium' | 'large'>('medium')
  const [rounds, setRounds] = useState(5)
  const [roundTime, setRoundTime] = useState(5)
  
  const { handleStartGame, handleBack } = useLobbyNavigation('arena')

  return (
    <GameLobby
      mode="Arena"
      title="Arena Mode"
      description="Battle in rounds with time limits and varying map sizes"
      onStartGame={() => handleStartGame({
        arenaMapSize: mapSize,
        arenaRounds: rounds,
        arenaRoundTime: roundTime,
      })}
      onBack={handleBack}
    >
      <div className="space-y-6">
        <DifficultySelector
          label="Map Size"
          value={mapSize}
          onChange={setMapSize}
          options={['small', 'medium', 'large'] as const}
        />

        <SliderControl
          label="Number of Rounds"
          value={rounds}
          onChange={setRounds}
          min={1}
          max={10}
        />

        <SliderControl
          label="Time per Round"
          value={roundTime}
          onChange={setRoundTime}
          min={1}
          max={10}
          unit=" min"
        />
      </div>
    </GameLobby>
  )
}
