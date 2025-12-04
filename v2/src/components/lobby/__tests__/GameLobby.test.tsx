import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { GameLobby } from '../GameLobby'

describe('GameLobby', () => {
  const defaultProps = {
    mode: 'arcade',
    title: 'Arcade Mode',
    description: 'Test description',
    onStartGame: vi.fn(),
    onBack: vi.fn(),
    children: <div>Test children</div>,
  }

  it('should render title and description', () => {
    render(<GameLobby {...defaultProps} />)
    
    expect(screen.getByText('Arcade Mode')).toBeInTheDocument()
    expect(screen.getByText('Test description')).toBeInTheDocument()
  })

  it('should render mode badge', () => {
    render(<GameLobby {...defaultProps} />)
    
    expect(screen.getByText('arcade')).toBeInTheDocument()
  })

  it('should render children content', () => {
    render(<GameLobby {...defaultProps} />)
    
    expect(screen.getByText('Test children')).toBeInTheDocument()
  })

  it('should call onBack when Back button is clicked', async () => {
    const onBack = vi.fn()
    const user = userEvent.setup()
    
    render(<GameLobby {...defaultProps} onBack={onBack} />)
    
    const backButton = screen.getByRole('button', { name: /back to menu/i })
    await user.click(backButton)
    
    expect(onBack).toHaveBeenCalledTimes(1)
  })

  it('should call onStartGame when Start button is clicked', async () => {
    const onStartGame = vi.fn()
    const user = userEvent.setup()
    
    render(<GameLobby {...defaultProps} onStartGame={onStartGame} />)
    
    const startButton = screen.getByRole('button', { name: /start game/i })
    await user.click(startButton)
    
    expect(onStartGame).toHaveBeenCalledTimes(1)
    expect(onStartGame).toHaveBeenCalledWith({})
  })

  it('should have both action buttons', () => {
    render(<GameLobby {...defaultProps} />)
    
    expect(screen.getByRole('button', { name: /back to menu/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /start game/i })).toBeInTheDocument()
  })
})
