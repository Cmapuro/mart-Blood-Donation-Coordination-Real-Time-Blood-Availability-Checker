import React, { useEffect } from 'react'
import { useContext } from 'react'
import { NotificationContext } from '../../context/NotificationContext'

/**
 * Individual Notification Alert Component
 * Displays a single notification with auto-dismiss
 */
function NotificationItem({ notification, onRemove }) {
  useEffect(() => {
    if (notification.duration > 0) {
      const timer = setTimeout(() => {
        onRemove(notification.id)
      }, notification.duration)
      return () => clearTimeout(timer)
    }
  }, [notification, onRemove])

  // Color classes based on notification type
  const typeClasses = {
    success: 'bg-green-100 text-green-800 border-green-300',
    error: 'bg-red-100 text-red-800 border-red-300',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    info: 'bg-blue-100 text-blue-800 border-blue-300',
  }

  const icons = {
    success: 'OK',
    error: 'ERR',
    warning: 'WARN',
    info: 'INFO',
  }

  const notificationClass = typeClasses[notification.type] || typeClasses.info
  const icon = icons[notification.type] || icons.info

  return (
    <div className={`flex items-start gap-4 p-4 mb-3 border-l-4 rounded ${notificationClass} animate-slideUp`}>
      <span className="text-xs font-bold uppercase tracking-wide bg-white/70 rounded px-2 py-1">{icon}</span>
      <div className="flex-1">
        <p className="text-sm">{notification.message}</p>
      </div>
      <button
        onClick={() => onRemove(notification.id)}
        className="text-xs font-semibold hover:opacity-75 transition"
      >
        Close
      </button>
    </div>
  )
}

/**
 * NotificationAlert Component Container
 * Displays all active notifications in the top-right corner
 * Automatically dismisses notifications after their duration
 */
export function NotificationAlert() {
  // Get notification context
  const { notifications, removeNotification } = useContext(NotificationContext)

  return (
    <div className="fixed top-20 right-4 z-50 max-w-sm">
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          notification={notification}
          onRemove={removeNotification}
        />
      ))}
    </div>
  )
}

export default NotificationAlert
