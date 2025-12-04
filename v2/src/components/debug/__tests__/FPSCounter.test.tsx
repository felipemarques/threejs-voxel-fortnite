import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FPSCounter } from '../FPSCounter'

describe('FPSCounter', () => {
  it('should render FPS display elements', () => {
    render(<FPSCounter />)
    
    // Component renders the FPS labels
    expect(screen.getByText(/FPS:/i)).toBeInTheDocument()
    expect(screen.getByText(/AVG:/i)).toBeInTheDocument()
    expect(screen.getByText(/MIN:/i)).toBeInTheDocument()
    expect(screen.getByText(/MAX:/i)).toBeInTheDocument()
  })

  it('should display initial FPS values', () => {
    const { container } = render(<FPSCounter />)
    
    // Values should be present in the document
    const values = container.querySelectorAll('span')
    expect(values.length).toBeGreaterThan(0)
  })

  it('should have correct styling', () => {
    const { container } = render(<FPSCounter />)
    
    const wrapper = container.firstChild
    expect(wrapper).toHaveClass('fixed', 'top-4', 'right-4')
  })
})
