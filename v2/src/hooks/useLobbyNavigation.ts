import { useNavigate } from 'react-router-dom'
import { GameConfig } from '@/components/lobby/GameLobby'

/**
 * Hook for lobby navigation logic
 * Provides consistent navigation handlers for all game mode lobbies
 */
export function useLobbyNavigation(mode: string) {
  const navigate = useNavigate()
  
  const handleStartGame = (config: GameConfig) => {
    navigate(`/${mode}`, { state: { config, fromLobby: true } })
  }
  
  const handleBack = () => {
    navigate('/')
  }
  
  return { handleStartGame, handleBack }
}
