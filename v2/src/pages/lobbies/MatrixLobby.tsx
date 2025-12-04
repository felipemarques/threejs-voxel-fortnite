import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GameLobby, GameConfig } from '@/components/lobby/GameLobby'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

export function MatrixLobby() {
  const navigate = useNavigate()
  const [density, setDensity] = useState(50)
  const [speed, setSpeed] = useState(1.0)
  const [camera, setCamera] = useState<'follow' | 'free' | 'topdown'>('follow')
  const [effects, setEffects] = useState(true)

  const handleStartGame = (baseConfig: GameConfig) => {
    const config: GameConfig = {
      ...baseConfig,
      matrixDensity: density,
      matrixSpeed: speed,
      matrixCamera: camera,
      matrixEffects: effects,
    }
    navigate('/matrix', { state: { config, fromLobby: true } })
  }

  return (
    <GameLobby
      mode="Matrix"
      title="Matrix Mode"
      description="Intense bullet-time action with slow-motion mechanics!"
      onStartGame={handleStartGame}
      onBack={() => navigate('/')}
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium text-gray-300">Enemy Density</Label>
          <span className="text-sm font-bold text-[#00cec9]">{density}%</span>
        </div>
        <Slider value={[density]} onValueChange={([v]) => setDensity(v)} min={0} max={100} step={5} />
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium text-gray-300">Game Speed</Label>
          <span className="text-sm font-bold text-[#00cec9]">{speed.toFixed(1)}x</span>
        </div>
        <Slider value={[speed * 10]} onValueChange={([v]) => setSpeed(v / 10)} min={5} max={20} step={1} />
      </div>

      <div className="space-y-3">
        <Label className="text-sm font-medium text-gray-300">Camera Mode</Label>
        <div className="flex gap-2">
          {(['follow', 'free', 'topdown'] as const).map((mode) => (
            <Button
              key={mode}
              onClick={() => setCamera(mode)}
              variant={camera === mode ? 'default' : 'outline'}
              className={camera === mode ? 'bg-[#00cec9] text-black' : 'border-white/20 bg-white/5 text-white'}
            >
              {mode === 'topdown' ? 'Top-Down' : mode.charAt(0).toUpperCase() + mode.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <Checkbox id="effects" checked={effects} onCheckedChange={(c) => setEffects(c as boolean)} />
        <Label htmlFor="effects" className="cursor-pointer text-sm font-medium text-gray-300">
          Enable Visual Effects
        </Label>
      </div>
    </GameLobby>
  )
}
