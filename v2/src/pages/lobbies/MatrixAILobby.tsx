import { useState } from 'react'
import { GameLobby } from '@/components/lobby/GameLobby'
import { useLobbyNavigation } from '@/hooks/useLobbyNavigation'
import { DifficultySelector } from '@/components/lobby/DifficultySelector'
import { SliderControl } from '@/components/lobby/SliderControl'
import { CheckboxControl } from '@/components/lobby/CheckboxControl'

export function MatrixAILobby() {
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard' | 'insane'>('medium')
  const [aiCount, setAiCount] = useState(20)
  const [spawnPattern, setSpawnPattern] = useState<'random' | 'wave' | 'circle'>('random')
  const [handicap, setHandicap] = useState(false)
  
  const { handleStartGame, handleBack } = useLobbyNavigation('matrix-ai')

  return (
    <GameLobby
      mode="Matrix AI"
      title="Matrix AI Mode"
      description="Test against AI opponents with configurable difficulty"
      onStartGame={() => handleStartGame({
        matrixAIDifficulty: difficulty,
        matrixAICount: aiCount,
        matrixAISpawn: spawnPattern,
        matrixAIHandicap: handicap,
      })}
      onBack={handleBack}
    >
      <div className="space-y-6">
        <DifficultySelector
          label="AI Difficulty"
          value={difficulty}
          onChange={setDifficulty}
          options={['easy', 'medium', 'hard', 'insane'] as const}
        />

        <SliderControl
          label="AI Count"
          value={aiCount}
          onChange={setAiCount}
          min={1}
          max={100}
        />

        <DifficultySelector
          label="Spawn Pattern"
          value={spawnPattern}
          onChange={setSpawnPattern}
          options={['random', 'wave', 'circle'] as const}
        />

        <CheckboxControl
          label="Player Handicap"
          checked={handicap}
          onChange={setHandicap}
        />
      </div>
    </GameLobby>
  )
}
