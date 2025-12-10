import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useGameSettings } from '@/stores/gameSettings'

interface SettingsDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SettingsDialog({ open, onOpenChange }: SettingsDialogProps) {
  const settings = useGameSettings()

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto z-[400]">
        <DialogHeader>
          <DialogTitle className="text-2xl">⚙️ Game Settings</DialogTitle>
          <DialogDescription>
            Configure your game experience
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="graphics">Graphics</TabsTrigger>
            <TabsTrigger value="audio">Audio</TabsTrigger>
            <TabsTrigger value="multiplayer">Multiplayer</TabsTrigger>
          </TabsList>

          {/* GENERAL TAB */}
          <TabsContent value="general" className="space-y-6 pt-4">
            {/* Enemy Count */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Enemy Count</Label>
                <span className="text-sm text-muted-foreground">
                  {settings.enemyCount}
                </span>
              </div>
              <Slider
                value={[settings.enemyCount]}
                onValueChange={([value]) => settings.updateSetting('enemyCount', value)}
                min={5}
                max={500}
                step={5}
              />
            </div>
            
            {/* Camera Zoom */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Camera Zoom</Label>
                <span className="text-sm text-muted-foreground">
                  {settings.cameraZoom.toFixed(1)}
                </span>
              </div>
              <Slider
                value={[settings.cameraZoom]}
                onValueChange={([value]) => settings.updateSetting('cameraZoom', value)}
                min={2.0}
                max={10.0}
                step={0.1}
              />
            </div>

            {/* Map Size */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Map Size (meters)</Label>
                <span className="text-sm text-muted-foreground">
                  {settings.mapSize}m
                </span>
              </div>
              <Slider
                value={[settings.mapSize]}
                onValueChange={([value]) => settings.updateSetting('mapSize', value)}
                min={20}
                max={800}
                step={10}
              />
            </div>

            {/* Storm Settings */}
            <div className="flex items-center justify-between">
              <Label htmlFor="storm-enabled">Enable Storm</Label>
              <Switch
                id="storm-enabled"
                checked={settings.stormEnabled}
                onCheckedChange={(checked) =>
                  settings.updateSetting('stormEnabled', checked)
                }
              />
            </div>

            {settings.stormEnabled && (
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Storm Time (seconds)</Label>
                  <span className="text-sm text-muted-foreground">
                    {settings.stormTime}s
                  </span>
                </div>
                <Slider
                  value={[settings.stormTime]}
                  onValueChange={([value]) =>
                    settings.updateSetting('stormTime', value)
                  }
                  min={60}
                  max={1800}
                  step={30}
                />
              </div>
            )}

            {/* Camera Mode */}
            <div className="space-y-2">
              <Label>Camera Mode</Label>
              <Select
                value={settings.cameraMode}
                onValueChange={(value: 'TPS' | 'FPS') =>
                  settings.updateSetting('cameraMode', value)
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="TPS">Third Person (TPS)</SelectItem>
                  <SelectItem value="FPS">First Person (FPS)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Difficulty */}
            <div className="space-y-2">
              <Label>Difficulty</Label>
              <Select
                value={settings.difficulty}
                onValueChange={(value: 'easy' | 'medium' | 'hard') =>
                  settings.updateSetting('difficulty', value)
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="hard">Hard</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </TabsContent>

          {/* GRAPHICS TAB */}
          <TabsContent value="graphics" className="space-y-6 pt-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="perf-mode">Performance Mode</Label>
              <Switch
                id="perf-mode"
                checked={settings.performanceMode}
                onCheckedChange={(checked) =>
                  settings.updateSetting('performanceMode', checked)
                }
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Render Scale</Label>
                <span className="text-sm text-muted-foreground">
                  {settings.renderScale}%
                </span>
              </div>
              <Slider
                value={[settings.renderScale]}
                onValueChange={([value]) =>
                  settings.updateSetting('renderScale', value)
                }
                min={50}
                max={100}
                step={5}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="show-fps">Show FPS Counter</Label>
              <Switch
                id="show-fps"
                checked={settings.showFPS}
                onCheckedChange={(checked) =>
                  settings.updateSetting('showFPS', checked)
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="show-minimap">Show Minimap</Label>
              <Switch
                id="show-minimap"
                checked={settings.showMinimap}
                onCheckedChange={(checked) =>
                  settings.updateSetting('showMinimap', checked)
                }
              />
            </div>
          </TabsContent>

          {/* AUDIO TAB */}
          <TabsContent value="audio" className="space-y-6 pt-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="music-enabled">Background Music</Label>
              <Switch
                id="music-enabled"
                checked={settings.musicEnabled}
                onCheckedChange={(checked) =>
                  settings.updateSetting('musicEnabled', checked)
                }
              />
            </div>

            {settings.musicEnabled && (
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Music Volume</Label>
                  <span className="text-sm text-muted-foreground">
                    {settings.musicVolume}%
                  </span>
                </div>
                <Slider
                  value={[settings.musicVolume]}
                  onValueChange={([value]) =>
                    settings.updateSetting('musicVolume', value)
                  }
                  min={0}
                  max={100}
                  step={5}
                />
              </div>
            )}

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>SFX Volume</Label>
                <span className="text-sm text-muted-foreground">
                  {settings.sfxVolume}%
                </span>
              </div>
              <Slider
                value={[settings.sfxVolume]}
                onValueChange={([value]) =>
                  settings.updateSetting('sfxVolume', value)
                }
                min={0}
                max={100}
                step={5}
              />
            </div>
          </TabsContent>

          {/* MULTIPLAYER TAB */}
          <TabsContent value="multiplayer" className="space-y-6 pt-4">
            <div className="space-y-2">
              <Label htmlFor="mp-server">Server URL</Label>
              <Input
                id="mp-server"
                value={settings.mpServer}
                onChange={(e) =>
                  settings.updateSetting('mpServer', e.target.value)
                }
                placeholder="wss://server.com/socket"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mp-nickname">Nickname</Label>
              <Input
                id="mp-nickname"
                value={settings.mpNickname}
                onChange={(e) =>
                  settings.updateSetting('mpNickname', e.target.value)
                }
                placeholder="Player123"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mp-color">Player Color</Label>
              <div className="flex gap-2">
                <Input
                  id="mp-color"
                  type="color"
                  value={settings.mpColor}
                  onChange={(e) =>
                    settings.updateSetting('mpColor', e.target.value)
                  }
                  className="w-20 h-10"
                />
                <Input
                  value={settings.mpColor}
                  onChange={(e) =>
                    settings.updateSetting('mpColor', e.target.value)
                  }
                  placeholder="#29b6f6"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="mp-room">Room Code</Label>
              <Input
                id="mp-room"
                value={settings.mpRoom}
                onChange={(e) =>
                  settings.updateSetting('mpRoom', e.target.value)
                }
                placeholder="ABCDE"
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="mp-zombies">Enable Zombies in Multiplayer</Label>
              <Switch
                id="mp-zombies"
                checked={settings.mpZombies}
                onCheckedChange={(checked) =>
                  settings.updateSetting('mpZombies', checked)
                }
              />
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-between pt-4 border-t">
          <Button
            variant="outline"
            onClick={() => {
              settings.resetToDefaults()
            }}
          >
            Reset to Defaults
          </Button>
          <Button onClick={() => onOpenChange(false)}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
