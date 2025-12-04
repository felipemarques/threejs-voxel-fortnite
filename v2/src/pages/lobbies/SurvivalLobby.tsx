import { useState } from 'react'
import { GameLobby } from '@/components/lobby/GameLobby'
import { useLobbyNavigation } from '@/hooks/useLobbyNavigation'
import { DifficultySelector } from '@/components/lobby/DifficultySelector'
import { SliderControl } from '@/components/lobby/SliderControl'
import { CheckboxControl } from '@/components/lobby/CheckboxControl'

export function SurvivalLobby() {
  const [dayLength, setDayLength] = useState(10)
  const [resources, setResources] = useState<'low' | 'medium' | 'high'>('medium')
  const [spawnRate, setSpawnRate] = useState(50)
  const [buildingEnabled, setBuildingEnabled] = useState(true)
  
  const { handleStartGame, handleBack } = useLobbyNavigation('survival')

  return (
    <GameLobby
      mode="Survival"
      title="Survival Mode"
      description="Survive the night with limited resources and building"
      onStartGame={() => handleStartGame({
        survivalDayLength: dayLength,
        survivalResources: resources,
        survivalSpawnRate: spawnRate,
        survivalBuilding: buildingEnabled,
      })}
      onBack={handleBack}
    >
      <div className="space-y-6">
        <SliderControl
          label="Day/Night Cycle Length"
          value={dayLength}
          onChange={setDayLength}
          min={1}
          max={60}
          unit=" min"
        />

        <DifficultySelector
          label="Resource Density"
          value={resources}
          onChange={setResources}
          options={['low', 'medium', 'high'] as const}
        />

        <SliderControl
          label="Enemy Spawn Rate"
          value={spawnRate}
          onChange={setSpawnRate}
          min={0}
          max={100}
          unit="%"
        />

        <CheckboxControl
          label="Enable Building System"
          checked={buildingEnabled}
          onChange={setBuildingEnabled}
        />
      </div>
    </GameLobby>
  )
}
