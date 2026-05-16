import React from 'react'

/**
 * Modal Component
 * Reusable modal dialog component for displaying content in a popup
 * Features: title, content, action buttons, close button, backdrop
 */
export function Modal({
  isOpen = false,
  title = '',
  children,
  onClose,
  onConfirm,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  isDangerous = false,
}) {
  // Don't render if not open
  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="bg-white rounded-lg shadow-lg max-w-md w-full animate-slideUp"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition"
              title="Close"
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="p-6">{children}</div>

          {/* Footer */}
          <div className="flex gap-4 p-6 border-t border-gray-200">
            <button
              onClick={onClose}
              className="btn-secondary flex-1"
            >
              {cancelText}
            </button>
            <button
              onClick={() => {
                onConfirm?.()
                onClose?.()
              }}
              className={`btn-primary flex-1 ${isDangerous ? 'bg-red-600 hover:bg-red-700' : ''}`}
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
