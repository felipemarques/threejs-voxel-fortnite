import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { DifficultySelector } from '../DifficultySelector'

describe('DifficultySelector', () => {
  const options = ['easy', 'normal', 'hard'] as const
  
  it('should render all options as buttons', () => {
    render(
      <DifficultySelector
        value="normal"
        onChange={vi.fn()}
        options={options}
      />
    )
    
    expect(screen.getByRole('button', { name: /easy/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /normal/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /hard/i })).toBeInTheDocument()
  })

  it('should highlight selected option', () => {
    render(
      <DifficultySelector
        value="hard"
        onChange={vi.fn()}
        options={options}
      />
    )
    
    const hardButton = screen.getByRole('button', { name: /hard/i })
    expect(hardButton).toHaveClass('bg-[#00cec9]')
  })

  it('should call onChange when option is clicked', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    
    render(
      <DifficultySelector
        value="normal"
        onChange={onChange}
        options={options}
      />
    )
    
    const easyButton = screen.getByRole('button', { name: /easy/i })
    await user.click(easyButton)
    
    expect(onChange).toHaveBeenCalledWith('easy')
  })

  it('should display custom label', () => {
    render(
      <DifficultySelector
        label="AI Level"
        value="normal"
        onChange={vi.fn()}
        options={options}
      />
    )
    
    expect(screen.getByText('AI Level')).toBeInTheDocument()
  })
})
