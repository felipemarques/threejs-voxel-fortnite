import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { PauseMenu } from '../PauseMenu'

describe('PauseMenu', () => {
  const defaultProps = {
    onResume: vi.fn(),
    onQuit: vi.fn(),
    settingsOpen: false,
    onSettingsOpenChange: vi.fn(),
  }

  it('should render pause menu', () => {
    render(<PauseMenu {...defaultProps} />)
    
    expect(screen.getByText('PAUSED')).toBeInTheDocument()
    expect(screen.getByText('Game is paused')).toBeInTheDocument()
  })

  it('should have Resume button', () => {
    render(<PauseMenu {...defaultProps} />)
    
    expect(screen.getByRole('button', { name: /resume game/i })).toBeInTheDocument()
  })

  it('should have Settings button', () => {
    render(<PauseMenu {...defaultProps} />)
    
    expect(screen.getByRole('button', { name: /settings/i })).toBeInTheDocument()
  })

  it('should have Quit button', () => {
    render(<PauseMenu {...defaultProps} />)
    
    expect(screen.getByRole('button', { name: /quit to menu/i })).toBeInTheDocument()
  })

  it('should call onResume when Resume button is clicked', async () => {
    const onResume = vi.fn()
    const user = userEvent.setup()
    
    render(<PauseMenu {...defaultProps} onResume={onResume} />)
    
    const resumeButton = screen.getByRole('button', { name: /resume game/i })
    await user.click(resumeButton)
    
    expect(onResume).toHaveBeenCalledTimes(1)
  })

  it('should call onQuit when Quit button is clicked', async () => {
    const onQuit = vi.fn()
    const user = userEvent.setup()
    
    render(<PauseMenu {...defaultProps} onQuit={onQuit} />)
    
    const quitButton = screen.getByRole('button', { name: /quit to menu/i })
    await user.click(quitButton)
    
    expect(onQuit).toHaveBeenCalledTimes(1)
  })

  it('should show Back to Lobby button when onBackToLobby is provided', () => {
    const onBackToLobby = vi.fn()
    
    render(<PauseMenu {...defaultProps} onBackToLobby={onBackToLobby} />)
    
    expect(screen.getByRole('button', { name: /back to lobby/i })).toBeInTheDocument()
  })

  it('should not show Back to Lobby button when onBackToLobby is not provided', () => {
    render(<PauseMenu {...defaultProps} />)
    
    expect(screen.queryByRole('button', { name: /back to lobby/i })).not.toBeInTheDocument()
  })

  it('should call onBackToLobby when Back to Lobby button is clicked', async () => {
    const onBackToLobby = vi.fn()
    const user = userEvent.setup()
    
    render(<PauseMenu {...defaultProps} onBackToLobby={onBackToLobby} />)
    
    const backButton = screen.getByRole('button', { name: /back to lobby/i })
    await user.click(backButton)
    
    expect(onBackToLobby).toHaveBeenCalledTimes(1)
  })

  it('should call onSettingsOpenChange when Settings button is clicked', async () => {
    const onSettingsOpenChange = vi.fn()
    const user = userEvent.setup()
    
    render(<PauseMenu {...defaultProps} onSettingsOpenChange={onSettingsOpenChange} />)
    
    const settingsButton = screen.getByRole('button', { name: /settings/i })
    await user.click(settingsButton)
    
    expect(onSettingsOpenChange).toHaveBeenCalledTimes(1)
    expect(onSettingsOpenChange).toHaveBeenCalledWith(true)
  })
})
