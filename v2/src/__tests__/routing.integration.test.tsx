import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { ArcadeLobby } from '../pages/lobbies/ArcadeLobby'
import { SurvivalLobby } from '../pages/lobbies/SurvivalLobby'
import { ArenaLobby } from '../pages/lobbies/ArenaLobby'

describe('Routing Integration', () => {
  it('should render ArcadeLobby on /arcade/lobby route', () => {
    render(
      <MemoryRouter initialEntries={['/arcade/lobby']}>
        <Routes>
          <Route path="/arcade/lobby" element={<ArcadeLobby />} />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByText('Arcade Mode')).toBeInTheDocument()
    expect(screen.getByText(/wave-based survival/i)).toBeInTheDocument()
  })

  it('should render SurvivalLobby on /survival/lobby route', () => {
    render(
      <MemoryRouter initialEntries={['/survival/lobby']}>
        <Routes>
          <Route path="/survival/lobby" element={<SurvivalLobby />} />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByText('Survival Mode')).toBeInTheDocument()
    expect(screen.getByText(/survive the night/i)).toBeInTheDocument()
  })

  it('should render ArenaLobby on /arena/lobby route', () => {
    render(
      <MemoryRouter initialEntries={['/arena/lobby']}>
        <Routes>
          <Route path="/arena/lobby" element={<ArenaLobby />} />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByText('Arena Mode')).toBeInTheDocument()
    expect(screen.getByText(/battle in rounds/i)).toBeInTheDocument()
  })

  it('should have Back to Menu button in all lobbies', () => {
    const lobbies = [
      { path: '/arcade/lobby', element: <ArcadeLobby /> },
      { path: '/survival/lobby', element: <SurvivalLobby /> },
      { path: '/arena/lobby', element: <ArenaLobby /> },
    ]

    lobbies.forEach(({ path, element }) => {
      const { unmount } = render(
        <MemoryRouter initialEntries={[path]}>
          <Routes>
            <Route path={path} element={element} />
          </Routes>
        </MemoryRouter>
      )

      expect(screen.getByRole('button', { name: /back to menu/i })).toBeInTheDocument()
      unmount()
    })
  })

  it('should have Start Game button in all lobbies', () => {
    const lobbies = [
      { path: '/arcade/lobby', element: <ArcadeLobby /> },
      { path: '/survival/lobby', element: <SurvivalLobby /> },
      { path: '/arena/lobby', element: <ArenaLobby /> },
    ]

    lobbies.forEach(({ path, element }) => {
      const { unmount } = render(
        <MemoryRouter initialEntries={[path]}>
          <Routes>
            <Route path={path} element={element} />
          </Routes>
        </MemoryRouter>
      )

      expect(screen.getByRole('button', { name: /start game/i })).toBeInTheDocument()
      unmount()
    })
  })
})
