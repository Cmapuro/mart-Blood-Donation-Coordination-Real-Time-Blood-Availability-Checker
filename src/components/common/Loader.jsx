import React from 'react'

/**
 * Loader Component
 * Loading spinner indicator for async operations
 * Shows while data is being fetched or processed
 */
export function Loader({ size = 'medium', fullScreen = false }) {
  // Size classes for different loader sizes
  const sizeClasses = {
    small: 'w-8 h-8 border-2',
    medium: 'w-12 h-12 border-4',
    large: 'w-16 h-16 border-4',
  }

  const loaderClass = sizeClasses[size] || sizeClasses.medium

  const loaderContent = (
    <div className="flex items-center justify-center">
      <div className={`${loaderClass} border-blood-light border-t-blood-red rounded-full animate-spin`} />
    </div>
  )

  // Full screen loader
  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg">
          {loaderContent}
          <p className="text-center mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  // Regular loader
  return loaderContent
}

export default Loader
