import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LoadingScreen } from '../LoadingScreen'

describe('LoadingScreen', () => {
  it('should render when isLoading is true', () => {
    render(<LoadingScreen isLoading={true} />)
    
    // Should render the loading container
    const loadingDiv = screen.getByRole('generic')
    expect(loadingDiv).toBeInTheDocument()
  })

  it('should not render when isLoading is false', () => {
    const { container } = render(<LoadingScreen isLoading={false} />)
    
    // Should return null and have empty container
    expect(container.firstChild).toBeNull()
  })

  it('should display custom message when provided', () => {
    const message = 'Loading game assets...'
    render(<LoadingScreen isLoading={true} message={message} />)
    
    expect(screen.getByText(message)).toBeInTheDocument()
  })

  it('should not display message when not provided', () => {
    render(<LoadingScreen isLoading={true} />)
    
    // Only the spinner should be present, no text
    const text = screen.queryByRole('paragraph')
    expect(text).not.toBeInTheDocument()
  })

  it('should have correct background color', () => {
    const { container } = render(<LoadingScreen isLoading={true} />)
    
    const loadingDiv = container.firstChild as HTMLElement
    expect(loadingDiv).toHaveStyle({ backgroundColor: 'rgb(45, 52, 54)' })
  })

  it('should have spinner element', () => {
    const { container } = render(<LoadingScreen isLoading={true} />)
    
    // Find the spinner by its styling
    const spinner = container.querySelector('.animate-spin')
    expect(spinner).toBeInTheDocument()
  })
})
