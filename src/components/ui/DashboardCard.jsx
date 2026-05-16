import React from 'react'
import { LogoMark } from '../common/LogoMark'

/**
 * DashboardCard Component
 * Reusable card for displaying dashboard statistics and information
 * Features: icon, title, value, trend indicator, click handler
 */
export function DashboardCard({
  title = '',
  value = '0',
  icon = 'ST',
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
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-sm text-gray-600 font-medium">{title}</p>
          <h3 className="text-3xl font-extrabold text-gray-900 mt-2 tracking-tight">{value}</h3>
        </div>
        <div className="flex flex-col items-end">
          <LogoMark size="md" rounded="rounded-lg" className="border border-red-100 mb-2" alt={`${title} logo`} />
          {trend && (
            <div className={`text-sm font-semibold ${trend.direction === 'up' ? 'text-green-600' : 'text-red-600'}`}>
              {trend.direction === 'up' ? '▲' : '▼'} {trend.percentage}%
            </div>
          )}
        </div>
      </div>

      {/** optional description area */}
      {onClick && <div className="text-sm text-gray-600 mt-2">Click for details</div>}
    </div>
  )
}

export default DashboardCard
