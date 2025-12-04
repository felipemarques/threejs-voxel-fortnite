import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GameLobby, GameConfig } from '@/components/lobby/GameLobby'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Checkbox } from '@/components/ui/checkbox'

export function StudioLobby() {
  const navigate = useNavigate()
  const [gridSize, setGridSize] = useState(10)
  const [snap, setSnap] = useState(true)
  const [axisHelpers, setAxisHelpers] = useState(true)
  const [autoSave, setAutoSave] = useState(true)

  const handleStartGame = (baseConfig: GameConfig) => {
    const config: GameConfig = {
      ...baseConfig,
      studioGridSize: gridSize,
      studioSnap: snap,
      studioAxisHelpers: axisHelpers,
      studioAutoSave: autoSave,
    }
    navigate('/studio', { state: { config, fromLobby: true } })
  }

  return (
    <GameLobby
      mode="Studio"
      title="Studio Mode"
      description="Level editor and creative sandbox for building your worlds!"
      onStartGame={handleStartGame}
      onBack={() => navigate('/')}
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium text-gray-300">Grid Size</Label>
          <span className="text-sm font-bold text-[#00cec9]">{gridSize}</span>
        </div>
        <Slider value={[gridSize]} onValueChange={([v]) => setGridSize(v)} min={1} max={50} step={1} />
      </div>

      <div className="flex items-center space-x-3">
        <Checkbox id="snap" checked={snap} onCheckedChange={(c) => setSnap(c as boolean)} />
        <Label htmlFor="snap" className="cursor-pointer text-sm font-medium text-gray-300">
          Snap to Grid
        </Label>
      </div>

      <div className="flex items-center space-x-3">
        <Checkbox id="axis" checked={axisHelpers} onCheckedChange={(c) => setAxisHelpers(c as boolean)} />
        <Label htmlFor="axis" className="cursor-pointer text-sm font-medium text-gray-300">
          Show Axis Helpers
        </Label>
      </div>

      <div className="flex items-center space-x-3">
        <Checkbox id="autosave" checked={autoSave} onCheckedChange={(c) => setAutoSave(c as boolean)} />
        <Label htmlFor="autosave" className="cursor-pointer text-sm font-medium text-gray-300">
          Auto-save
        </Label>
      </div>
    </GameLobby>
  )
}
