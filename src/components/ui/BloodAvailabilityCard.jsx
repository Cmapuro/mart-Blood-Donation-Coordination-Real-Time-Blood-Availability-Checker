import React from 'react'

/**
 * BloodAvailabilityCard Component
 * Displays blood type availability status
 * Features: blood type badge, quantity, status indicator, expiry date
 */
export function BloodAvailabilityCard({ blood }) {
  // Status colors
  const getStatusColor = (status) => {
    switch (status) {
      case 'Available':
        return 'bg-green-100 text-green-800 border-green-300'
      case 'Critical':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300'
      case 'Unavailable':
        return 'bg-red-100 text-red-800 border-red-300'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300'
    }
  }

  // Quantity status label
  const getQuantityLabel = (quantity) => {
    if (quantity === 0) return 'Empty'
    if (quantity < 5) return 'Low'
    return 'In stock'
  }

  const statusClass = getStatusColor(blood.status)

  return (
    <div className="card hover:shadow-medium transition-all">
      {/* Header with Blood Type */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blood-red rounded-full flex items-center justify-center text-white font-bold text-lg">
            {blood.bloodType}
          </div>
          <div>
            <h4 className="font-bold text-gray-900">
              Blood Type {blood.bloodType}
            </h4>
            <p className="text-xs text-gray-500">{blood.bloodType}</p>
          </div>
        </div>
      </div>

      {/* Status Badge */}
      <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 border ${statusClass}`}>
        {blood.status}
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Quantity */}
        <div>
          <p className="text-xs text-gray-500 mb-1">Available Quantity</p>
          <p className="text-xl font-bold text-gray-900">
            {blood.quantity} {blood.unit}
          </p>
          <p className="text-xs text-gray-500 mt-1">{getQuantityLabel(blood.quantity)}</p>
        </div>

        {/* Expiry Date */}
        <div>
          <p className="text-xs text-gray-500 mb-1">Expiry Date</p>
          <p className="text-sm font-semibold text-gray-700">
            {new Date(blood.expiryDate).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Last Updated */}
      <p className="text-xs text-gray-400">
        Last updated: {new Date(blood.lastUpdated).toLocaleDateString()}
      </p>
    </div>
  )
}

export default BloodAvailabilityCard
