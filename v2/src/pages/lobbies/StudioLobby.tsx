import { useState } from 'react'
import { GameLobby } from '@/components/lobby/GameLobby'
import { useLobbyNavigation } from '@/hooks/useLobbyNavigation'
import { DifficultySelector } from '@/components/lobby/DifficultySelector'
import { SliderControl } from '@/components/lobby/SliderControl'
import { CheckboxControl } from '@/components/lobby/CheckboxControl'

export function StudioLobby() {
  const [gridSize, setGridSize] = useState(10)
  const [snap, setSnap] = useState(true)
  const [axisHelpers, setAxisHelpers] = useState(true)
  const [autoSave, setAutoSave] = useState(true)
  
  const { handleStartGame, handleBack } = useLobbyNavigation('studio')

  return (
    <GameLobby
      mode="Studio"
      title="Studio Mode"
      description="Creative building mode with grid and helpers"
      onStartGame={() => handleStartGame({
        studioGridSize: gridSize,
        studioSnap: snap,
        studioHelpers: axisHelpers,
        studioAutoSave: autoSave,
      })}
      onBack={handleBack}
    >
      <div className="space-y-6">
        <SliderControl
          label="Grid Size"
          value={gridSize}
          onChange={setGridSize}
          min={1}
          max={50}
        />

        <CheckboxControl
          label="Snap to Grid"
          checked={snap}
          onChange={setSnap}
        />

        <CheckboxControl
          label="Show Axis Helpers"
          checked={axisHelpers}
          onChange={setAxisHelpers}
        />

        <CheckboxControl
          label="Auto Save"
          checked={autoSave}
          onChange={setAutoSave}
        />
      </div>
    </GameLobby>
  )
}
