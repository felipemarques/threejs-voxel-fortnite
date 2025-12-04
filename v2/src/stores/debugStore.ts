import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface DebugState {
  // Debug flags
  showFPS: boolean
  showBoundingBox: boolean
  showGrid: boolean
  showStats: boolean
  godMode: boolean
  showCoordinates: boolean
  
  // Toggle functions
  toggleFPS: () => void
  toggleBoundingBox: () => void
  toggleGrid: () => void
  toggleStats: () => void
  toggleGodMode: () => void
  toggleCoordinates: () => void
  
  // Reset all
  reset: () => void
}

const defaultState = {
  showFPS: false,
  showBoundingBox: false,
  showGrid: false,
  showStats: false,
  godMode: false,
  showCoordinates: false,
}

export const useDebugStore = create<DebugState>()(
  persist(
    (set) => ({
      ...defaultState,
      
      toggleFPS: () => set((state) => ({ showFPS: !state.showFPS })),
      toggleBoundingBox: () => set((state) => ({ showBoundingBox: !state.showBoundingBox })),
      toggleGrid: () => set((state) => ({ showGrid: !state.showGrid })),
      toggleStats: () => set((state) => ({ showStats: !state.showStats })),
      toggleGodMode: () => set((state) => ({ godMode: !state.godMode })),
      toggleCoordinates: () => set((state) => ({ showCoordinates: !state.showCoordinates })),
      
      reset: () => set(defaultState),
    }),
    {
      name: 'voxel-firecraft-debug',
    }
  )
)
