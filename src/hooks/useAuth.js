import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

/**
 * Custom hook to access authentication context
 * Provides access to user data, authentication status, and auth functions
 * Must be used inside AuthProvider
 *
 * @returns {object} Authentication context
 * @throws {Error} If used outside AuthProvider
 *
 * @example
 * const { user, login, logout } = useAuth()
 */
export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }

  return context
}

export default useAuth
