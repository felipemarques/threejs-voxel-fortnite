import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GameLobby, GameConfig } from '@/components/lobby/GameLobby'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Checkbox } from '@/components/ui/checkbox'

export function MatrixAILobby() {
  const navigate = useNavigate()
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard' | 'insane'>('medium')
  const [aiCount, setAiCount] = useState(20)
  const [spawnPattern, setSpawnPattern] = useState<'random' | 'wave' | 'circle'>('random')
  const [handicap, setHandicap] = useState(false)

  const handleStartGame = (baseConfig: GameConfig) => {
    const config: GameConfig = {
      ...baseConfig,
      aiDifficulty: difficulty,
      aiCount,
      aiSpawnPattern: spawnPattern,
      playerHandicap: handicap,
    }
    navigate('/matrix-ai', { state: { config, fromLobby: true } })
  }

  return (
    <GameLobby
      mode="Matrix AI"
      title="Matrix AI Mode"
      description="Face intelligent AI opponents with advanced tactics!"
      onStartGame={handleStartGame}
      onBack={() => navigate('/')}
    >
      <div className="space-y-3">
        <Label className="text-sm font-medium text-gray-300">AI Difficulty</Label>
        <div className="grid grid-cols-2 gap-2">
          {(['easy', 'medium', 'hard', 'insane'] as const).map((diff) => (
            <Button
              key={diff}
              onClick={() => setDifficulty(diff)}
              variant={difficulty === diff ? 'default' : 'outline'}
              className={difficulty === diff ? 'bg-[#00cec9] text-black' : 'border-white/20 bg-white/5 text-white'}
            >
              {diff.charAt(0).toUpperCase() + diff.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium text-gray-300">AI Count</Label>
          <span className="text-sm font-bold text-[#00cec9]">{aiCount}</span>
        </div>
        <Slider value={[aiCount]} onValueChange={([v]) => setAiCount(v)} min={1} max={100} step={1} />
      </div>

      <div className="space-y-3">
        <Label className="text-sm font-medium text-gray-300">Spawn Pattern</Label>
        <div className="flex gap-2">
          {(['random', 'wave', 'circle'] as const).map((pattern) => (
            <Button
              key={pattern}
              onClick={() => setSpawnPattern(pattern)}
              variant={spawnPattern === pattern ? 'default' : 'outline'}
              className={spawnPattern === pattern ? 'bg-[#00cec9] text-black' : 'border-white/20 bg-white/5 text-white'}
            >
              {pattern.charAt(0).toUpperCase() + pattern.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <Checkbox id="handicap" checked={handicap} onCheckedChange={(c) => setHandicap(c as boolean)} />
        <Label htmlFor="handicap" className="cursor-pointer text-sm font-medium text-gray-300">
          Player Handicap (Extra Challenge)
        </Label>
      </div>
    </GameLobby>
  )
}
