import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GameLobby, GameConfig } from '@/components/lobby/GameLobby'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Checkbox } from '@/components/ui/checkbox'

export function SurvivalLobby() {
  const navigate = useNavigate()
  const [dayLength, setDayLength] = useState(10)
  const [resources, setResources] = useState<'low' | 'medium' | 'high'>('medium')
  const [spawnRate, setSpawnRate] = useState(50)
  const [buildingEnabled, setBuildingEnabled] = useState(true)

  const handleStartGame = (baseConfig: GameConfig) => {
    const config: GameConfig = {
      ...baseConfig,
      survivalDayLength: dayLength,
      survivalResources: resources,
      survivalSpawnRate: spawnRate,
      survivalBuilding: buildingEnabled,
    }

    navigate('/survival', { state: { config, fromLobby: true } })
  }

  const handleBack = () => {
    navigate('/')
  }

  return (
    <GameLobby
      mode="Survival"
      title="Survival Mode"
      description="Survive the night, gather resources, and build your defenses!"
      onStartGame={handleStartGame}
      onBack={handleBack}
    >
      {/* Day/Night Cycle Length */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium text-gray-300">Day/Night Cycle</Label>
          <span className="text-sm font-bold text-[#00cec9]">{dayLength} min</span>
        </div>
        <Slider
          value={[dayLength]}
          onValueChange={([value]) => setDayLength(value)}
          min={1}
          max={60}
          step={1}
          className="w-full"
        />
      </div>

      {/* Resource Density */}
      <div className="space-y-3">
        <Label className="text-sm font-medium text-gray-300">Resource Density</Label>
        <div className="flex gap-2">
          {(['low', 'medium', 'high'] as const).map((res) => (
            <Button
              key={res}
              onClick={() => setResources(res)}
              variant={resources === res ? 'default' : 'outline'}
              className={
                resources === res
                  ? 'bg-[#00cec9] text-black hover:bg-[#00b4b4]'
                  : 'border-white/20 bg-white/5 text-white hover:bg-white/10'
              }
            >
              {res.charAt(0).toUpperCase() + res.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      {/* Enemy Spawn Rate */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium text-gray-300">Enemy Spawn Rate</Label>
          <span className="text-sm font-bold text-[#00cec9]">{spawnRate}%</span>
        </div>
        <Slider
          value={[spawnRate]}
          onValueChange={([value]) => setSpawnRate(value)}
          min={0}
          max={100}
          step={5}
          className="w-full"
        />
      </div>

      {/* Building Toggle */}
      <div className="flex items-center space-x-3">
        <Checkbox
          id="building"
          checked={buildingEnabled}
          onCheckedChange={(checked) => setBuildingEnabled(checked as boolean)}
        />
        <Label
          htmlFor="building"
          className="cursor-pointer text-sm font-medium text-gray-300"
        >
          Enable Building System
        </Label>
      </div>
    </GameLobby>
  )
}
