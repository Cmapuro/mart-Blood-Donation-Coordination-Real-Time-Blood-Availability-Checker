import React, { createContext, useState, useCallback } from 'react'

/**
 * NotificationContext - Manages application notifications
 * Provides functionality to display toast notifications, alerts, and modals
 */
export const NotificationContext = createContext()

/**
 * NotificationProvider Component - Wraps the application to provide notification context
 * @component
 */
export function NotificationProvider({ children }) {
  // State to store active notifications
  const [notifications, setNotifications] = useState([])

  /**
   * Add a new notification
   * @param {object} notification - Notification object
   * @param {string} notification.type - Type of notification (success, error, warning, info)
   * @param {string} notification.message - Notification message
   * @param {number} notification.duration - Duration to show (ms), 0 = persistent
   * @returns {string} Notification ID
   */
  const addNotification = useCallback((notification) => {
    const id = `notif-${Date.now()}-${Math.random()}`
    const newNotification = {
      id,
      type: notification.type || 'info',
      message: notification.message,
      duration: notification.duration || 3000,
    }

    setNotifications((prev) => [...prev, newNotification])

    // Auto-remove notification after duration (if duration > 0)
    if (newNotification.duration > 0) {
      setTimeout(() => {
        removeNotification(id)
      }, newNotification.duration)
    }

    return id
  }, [])

  /**
   * Remove a notification
   * @param {string} id - Notification ID to remove
   */
  const removeNotification = useCallback((id) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id))
  }, [])

  /**
   * Show success notification
   * @param {string} message - Success message
   * @param {number} duration - Duration to show (ms)
   */
  const success = useCallback(
    (message, duration = 3000) => {
      addNotification({
        type: 'success',
        message,
        duration,
      })
    },
    [addNotification]
  )

  /**
   * Show error notification
   * @param {string} message - Error message
   * @param {number} duration - Duration to show (ms)
   */
  const error = useCallback(
    (message, duration = 3000) => {
      addNotification({
        type: 'error',
        message,
        duration,
      })
    },
    [addNotification]
  )

  /**
   * Show warning notification
   * @param {string} message - Warning message
   * @param {number} duration - Duration to show (ms)
   */
  const warning = useCallback(
    (message, duration = 3000) => {
      addNotification({
        type: 'warning',
        message,
        duration,
      })
    },
    [addNotification]
  )

  /**
   * Show info notification
   * @param {string} message - Info message
   * @param {number} duration - Duration to show (ms)
   */
  const info = useCallback(
    (message, duration = 3000) => {
      addNotification({
        type: 'info',
        message,
        duration,
      })
    },
    [addNotification]
  )

  /**
   * Clear all notifications
   */
  const clearAll = useCallback(() => {
    setNotifications([])
  }, [])

  // Context value to be provided
  const value = {
    notifications,
    addNotification,
    removeNotification,
    success,
    error,
    warning,
    info,
    clearAll,
  }

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  )
}
