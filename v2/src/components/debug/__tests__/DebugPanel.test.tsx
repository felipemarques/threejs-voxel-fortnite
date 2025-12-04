import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { DebugPanel } from '../DebugPanel'

// Mock the debug store
vi.mock('@/stores/debugStore', () => ({
  useDebugStore: () => ({
    showFPS: false,
    showBoundingBox: false,
    showGrid: false,
    showStats: false,
    godMode: false,
    showCoordinates: false,
    toggleFPS: vi.fn(),
    toggleBoundingBox: vi.fn(),
    toggleGrid: vi.fn(),
    toggleStats: vi.fn(),
    toggleGodMode: vi.fn(),
    toggleCoordinates: vi.fn(),
    reset: vi.fn(),
  }),
}))

describe('DebugPanel', () => {
  it('should show hint when closed', () => {
    render(<DebugPanel />)
    
    expect(screen.getByText(/Press/i)).toBeInTheDocument()
    expect(screen.getByText(/F3/i)).toBeInTheDocument()
  })

  it('should open when F3 is pressed', async () => {
    render(<DebugPanel />)
    
    // Simulate F3 press
    const event = new KeyboardEvent('keydown', { key: 'F3' })
    window.dispatchEvent(event)
    
    // Panel should now be visible
    await screen.findByText(/Debug Tools/i)
    expect(screen.getByText(/Debug Tools/i)).toBeInTheDocument()
  })

  it('should show all debug options when open', async () => {
    render(<DebugPanel />)
    
    // Open panel
    const event = new KeyboardEvent('keydown', { key: 'F3' })
    window.dispatchEvent(event)
    
    // Check for all options
    await screen.findByText(/Show FPS Counter/i)
    expect(screen.getByText(/Show Bounding Boxes/i)).toBeInTheDocument()
    expect(screen.getByText(/Show Grid/i)).toBeInTheDocument()
    expect(screen.getByText(/Show Stats/i)).toBeInTheDocument()
    expect(screen.getByText(/God Mode/i)).toBeInTheDocument()
    expect(screen.getByText(/Show Coordinates/i)).toBeInTheDocument()
  })

  it('should have reset button', async () => {
    render(<DebugPanel />)
    
    // Open panel
    const event = new KeyboardEvent('keydown', { key: 'F3' })
    window.dispatchEvent(event)
    
    await screen.findByText(/Reset All/i)
    expect(screen.getByRole('button', { name: /Reset All/i })).toBeInTheDocument()
  })
})
