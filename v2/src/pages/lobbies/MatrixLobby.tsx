import { useState } from 'react'
import { GameLobby } from '@/components/lobby/GameLobby'
import { useLobbyNavigation } from '@/hooks/useLobbyNavigation'
import { DifficultySelector } from '@/components/lobby/DifficultySelector'
import { SliderControl } from '@/components/lobby/SliderControl'
import { CheckboxControl } from '@/components/lobby/CheckboxControl'

export function MatrixLobby() {
  const [density, setDensity] = useState(50)
  const [speed, setSpeed] = useState(1.0)
  const [camera, setCamera] = useState<'follow' | 'free' | 'topdown'>('follow')
  const [effects, setEffects] = useState(true)
  
  const { handleStartGame, handleBack } = useLobbyNavigation('matrix')

  return (
    <GameLobby
      mode="Matrix"
      title="Matrix Mode"
      description="Sandbox testing environment without enemies"
      onStartGame={() => handleStartGame({
        matrixDensity: density,
        matrixSpeed: speed,
        matrixCamera: camera,
        matrixEffects: effects,
      })}
      onBack={handleBack}
    >
      <div className="space-y-6">
        <SliderControl
          label="Enemy Density"
          value={density}
          onChange={setDensity}
          min={0}
          max={100}
          unit="%"
        />

        <SliderControl
          label="Game Speed"
          value={speed}
          onChange={setSpeed}
          min={0.5}
          max={2.0}
          step={0.1}
          formatValue={(v) => `${v.toFixed(1)}x`}
        />

        <DifficultySelector
          label="Camera Mode"
          value={camera}
          onChange={setCamera}
          options={['follow', 'free', 'topdown'] as const}
        />

        <CheckboxControl
          label="Visual Effects"
          checked={effects}
          onChange={setEffects}
        />
      </div>
    </GameLobby>
  )
}
