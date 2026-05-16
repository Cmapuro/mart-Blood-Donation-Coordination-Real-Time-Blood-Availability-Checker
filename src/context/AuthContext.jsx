import React, { createContext, useState, useCallback } from 'react'

/**
 * AuthContext - Manages authentication state across the application
 * Provides user data, authentication status, and login/logout functionality
 */
export const AuthContext = createContext()

/**
 * AuthProvider Component - Wraps the application to provide authentication context
 * @component
 */
export function AuthProvider({ children }) {
  // State to store currently authenticated user
  const [user, setUser] = useState(null)

  // State to track loading during authentication
  const [loading, setLoading] = useState(false)

  // State to store authentication errors
  const [error, setError] = useState(null)

  /**
   * Login function - Authenticates user
   * In a real app, this would call an API endpoint
   * For now, we're using dummy data
   * @param {string} email - User email
   * @param {string} password - User password
   * @param {string} role - User role (donor, hospital, admin)
   * @returns {Promise} Authentication result
   */
  const login = useCallback(async (email, password, role) => {
    setLoading(true)
    setError(null)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500))

      // Dummy authentication - accepts any email/password combination
      const userData = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        role,
        name: email.split('@')[0],
        loginTime: new Date(),
      }

      setUser(userData)
      // Store in localStorage for session persistence
      localStorage.setItem('user', JSON.stringify(userData))
      return userData
    } catch (err) {
      const errorMsg = err.message || 'Login failed'
      setError(errorMsg)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  /**
   * Logout function - Clears user data
   */
  const logout = useCallback(() => {
    setUser(null)
    localStorage.removeItem('user')
    setError(null)
  }, [])

  /**
   * Check if user is authenticated
   * @returns {boolean} True if user is logged in
   */
  const isAuthenticated = useCallback(() => {
    return user !== null
  }, [user])

  /**
   * Check if user has a specific role
   * @param {string} role - Role to check
   * @returns {boolean} True if user has the role
   */
  const hasRole = useCallback(
    (role) => {
      return user && user.role === role
    },
    [user]
  )

  // Initialize user from localStorage on mount
  React.useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  // Context value to be provided
  const value = {
    user,
    loading,
    error,
    login,
    logout,
    isAuthenticated,
    hasRole,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
