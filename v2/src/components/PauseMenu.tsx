import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { SettingsDialog } from './menu/SettingsDialog'

interface PauseMenuProps {
  onResume: () => void
  onQuit: () => void
  onBackToLobby?: () => void
  settingsOpen: boolean
  onSettingsOpenChange: (open: boolean) => void
}

export function PauseMenu({ 
  onResume,
  onQuit,
  onBackToLobby,
  settingsOpen, 
  onSettingsOpenChange 
}: PauseMenuProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !settingsOpen) {
        onResume()
      }
    }
    
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onResume, settingsOpen])

  return (
    <>
      {/* Translucent backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-slate-900/90 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl min-w-[400px]">
          <h2 className="text-4xl font-bold text-white mb-2 text-center">PAUSED</h2>
          <p className="text-slate-400 text-center mb-8">Game is paused</p>
          
          <div className="flex flex-col gap-4">
            <Button
              size="lg"
              className="text-xl py-6 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
              onClick={onResume}
            >
              ▶️ Resume Game
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="text-xl py-6"
              onClick={() => onSettingsOpenChange(true)}
            >
              ⚙️ Settings
            </Button>
            
            {onBackToLobby && (
              <Button
                size="lg"
                variant="outline"
                className="text-xl py-6 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500"
                onClick={onBackToLobby}
              >
                🔄 Back to Lobby
              </Button>
            )}
            
            <Button
              size="lg"
              variant="destructive"
              className="text-xl py-6"
              onClick={onQuit}
            >
              🚪 Quit to Menu
            </Button>
          </div>
          
          <p className="text-slate-500 text-sm text-center mt-6">
            Press ESC to resume
          </p>
        </div>
      </div>

      {/* Settings Dialog */}
      <SettingsDialog open={settingsOpen} onOpenChange={onSettingsOpenChange} />
    </>
  )
}
