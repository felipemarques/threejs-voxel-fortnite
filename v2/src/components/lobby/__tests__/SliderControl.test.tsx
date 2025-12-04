import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { SliderControl } from '../SliderControl'

describe('SliderControl', () => {
  it('should display label and value', () => {
    render(
      <SliderControl
        label="Lives"
        value={5}
        onChange={vi.fn()}
        min={1}
        max={10}
      />
    )
    
    expect(screen.getByText('Lives')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
  })

  it('should show unit when provided', () => {
    render(
      <SliderControl
        label="Time"
        value={30}
        onChange={vi.fn()}
        min={0}
        max={60}
        unit=" min"
      />
    )
    
    expect(screen.getByText('30 min')).toBeInTheDocument()
  })

  it('should use custom formatValue function', () => {
    render(
      <SliderControl
        label="Speed"
        value={1.5}
        onChange={vi.fn()}
        min={0.5}
        max={2.0}
        step={0.1}
        formatValue={(v) => `${v.toFixed(1)}x`}
      />
    )
    
    expect(screen.getByText('1.5x')).toBeInTheDocument()
  })

  it('should call onChange when slider moves', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    
    render(
      <SliderControl
        label="Volume"
        value={50}
        onChange={onChange}
        min={0}
        max={100}
      />
    )
    
    const slider = screen.getByRole('slider')
    await user.click(slider)
    
    // Slider component should trigger onChange
    expect(onChange).toHaveBeenCalled()
  })
})
