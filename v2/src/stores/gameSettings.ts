import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type GameMode = 'arcade' | 'survival' | 'arena' | 'matrix' | 'matrix-ai' | 'multiplayer' | 'studio'
export type Difficulty = 'easy' | 'medium' | 'hard'
export type CameraMode = 'TPS' | 'FPS'

interface GameSettings {
  // General
  enemyCount: number
  mapSize: number
  stormEnabled: boolean
  stormTime: number
  cameraMode: CameraMode
  cameraZoom: number
  
  // Graphics
  performanceMode: boolean
  renderScale: number
  showFPS: boolean
  showMinimap: boolean
  
  // Audio
  musicEnabled: boolean
  musicVolume: number
  sfxVolume: number
  
  // Game Mode
  gameMode: GameMode
  difficulty: Difficulty
  
  // Multiplayer
  mpServer: string
  mpNickname: string
  mpColor: string
  mpRoom: string
  mpZombies: boolean
  
  // Actions
  updateSetting: <K extends keyof Omit<GameSettings, 'updateSetting' | 'resetToDefaults'>>(
    key: K,
    value: GameSettings[K]
  ) => void
  resetToDefaults: () => void
}

const defaultSettings: Omit<GameSettings, 'updateSetting' | 'resetToDefaults'> = {
  // General
  enemyCount: 15,
  mapSize: 400,
  stormEnabled: true,
  stormTime: 180,
  cameraMode: 'TPS',
  cameraZoom: 3.4,
  
  // Graphics
  performanceMode: false,
  renderScale: 100,
  showFPS: false,
  showMinimap: true,
  
  // Audio
  musicEnabled: true,
  musicVolume: 50,
  sfxVolume: 70,
  
  // Game Mode
  gameMode: 'arcade',
  difficulty: 'medium',
  
  // Multiplayer
  mpServer: 'wss://game-server01.voxelfirecraft.com/socket',
  mpNickname: 'Player',
  mpColor: '#29b6f6',
  mpRoom: '',
  mpZombies: true,
}

export const useGameSettings = create<GameSettings>()(
  persist(
    (set) => ({
      ...defaultSettings,
      
      updateSetting: (key, value) =>
        set((state) => ({
          ...state,
          [key]: value,
        })),
      
      resetToDefaults: () => set(defaultSettings),
    }),
    {
      name: 'voxel-firecraft-settings',
    }
  )
)
