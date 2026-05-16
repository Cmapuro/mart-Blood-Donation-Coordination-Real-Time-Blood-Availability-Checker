import React from 'react'

/**
 * DashboardCard Component
 * Reusable card for displaying dashboard statistics and information
 * Features: icon, title, value, trend indicator, click handler
 */
export function DashboardCard({
  title = '',
  value = '0',
  icon = '📊',
  trend = null,
  color = 'blood-red',
  onClick,
}) {
  // Background color classes based on color prop
  const bgColors = {
    'blood-red': 'bg-blood-light border-l-4 border-blood-red',
    'blue': 'bg-blue-100 border-l-4 border-blue-500',
    'green': 'bg-green-100 border-l-4 border-green-500',
    'yellow': 'bg-yellow-100 border-l-4 border-yellow-500',
  }

  const bgClass = bgColors[color] || bgColors['blood-red']

  return (
    <div
      onClick={onClick}
      className={`${bgClass} card cursor-pointer hover:shadow-medium transition-shadow`}
    >
      {/* Header with Icon and Title */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-gray-600 font-medium">{title}</p>
          <h3 className="text-3xl font-bold text-gray-900 mt-2">{value}</h3>
        </div>
        <div className="text-3xl">{icon}</div>
      </div>

      {/* Trend Indicator */}
      {trend && (
        <div className={`text-sm font-semibold ${
          trend.direction === 'up' ? 'text-green-600' : 'text-red-600'
        }`}>
          {trend.direction === 'up' ? '↑' : '↓'} {trend.percentage}% from last month
        </div>
      )}
    </div>
  )
}

export default DashboardCard
