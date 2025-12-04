import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { CheckboxControl } from '../CheckboxControl'

describe('CheckboxControl', () => {
  it('should render label', () => {
    render(
      <CheckboxControl
        label="Enable Power-ups"
        checked={false}
        onChange={vi.fn()}
      />
    )
    
    expect(screen.getByText('Enable Power-ups')).toBeInTheDocument()
  })

  it('should be checked when checked=true', () => {
    render(
      <CheckboxControl
        label="Auto Save"
        checked={true}
        onChange={vi.fn()}
      />
    )
    
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeChecked()
  })

  it('should not be checked when checked=false', () => {
    render(
      <CheckboxControl
        label="God Mode"
        checked={false}
        onChange={vi.fn()}
      />
    )
    
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()
  })

  it('should call onChange when clicked', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    
    render(
      <CheckboxControl
        label="Debug Mode"
        checked={false}
        onChange={onChange}
      />
    )
    
    const checkbox = screen.getByRole('checkbox')
    await user.click(checkbox)
    
    expect(onChange).toHaveBeenCalledWith(true)
  })

  it('should use custom id when provided', () => {
    render(
      <CheckboxControl
        id="custom-checkbox"
        label="Custom"
        checked={false}
        onChange={vi.fn()}
      />
    )
    
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toHaveAttribute('id', 'custom-checkbox')
  })
})
