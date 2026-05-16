import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { Loader } from './Loader'

/**
 * ProtectedRoute Component
 * Higher-order component that restricts access to routes based on authentication and role
 * Redirects unauthenticated users to login page
 * Redirects unauthorized users (wrong role) to their role's dashboard
 */
export function ProtectedRoute({ children, requiredRole }) {
  // Get auth context
  const { isAuthenticated, hasRole, user, loading } = useAuth()

  // Show loader while checking authentication
  if (loading) {
    return <Loader fullScreen size="large" />
  }

  // Not authenticated - redirect to appropriate login page
  if (!isAuthenticated()) {
    return <Navigate to="/donor/login" replace />
  }

  // Authenticated but wrong role - redirect to user's dashboard
  if (requiredRole && !hasRole(requiredRole)) {
    return <Navigate to={`/${user?.role}/dashboard`} replace />
  }

  // All checks passed - render protected component
  return children
}

export default ProtectedRoute
