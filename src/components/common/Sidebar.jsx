import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

/**
 * Sidebar Component
 * Side navigation panel for authenticated users
 * Features: role-based navigation, collapsible menu, active link highlighting
 */
export function Sidebar() {
  // Track sidebar open/close state
  const [isOpen, setIsOpen] = useState(true)

  // Get authentication context
  const { user } = useAuth()

  // Get current location
  const location = useLocation()

  // Define menu items based on user role
  const getMenuItems = () => {
    const baseItem = {
      icon: '📊',
      label: 'Dashboard',
      path: `/${user?.role}/dashboard`,
    }

    const menusByRole = {
      donor: [
        baseItem,
        {
          icon: '📅',
          label: 'Schedule Appointment',
          path: '/donor/schedule-appointment',
        },
        {
          icon: '📋',
          label: 'Donation History',
          path: '/donor/donation-history',
        },
        {
          icon: '🔔',
          label: 'Notifications',
          path: '/donor/notifications',
        },
        {
          icon: '👤',
          label: 'Profile',
          path: '/donor/profile',
        },
      ],
      hospital: [
        baseItem,
        {
          icon: '🩸',
          label: 'Blood Inventory',
          path: '/hospital/update-blood-availability',
        },
        {
          icon: '🚨',
          label: 'Emergency Request',
          path: '/hospital/emergency-broadcast',
        },
        {
          icon: '✅',
          label: 'Verify Donors',
          path: '/hospital/donor-schedule-verification',
        },
      ],
      admin: [
        baseItem,
        {
          icon: '🏥',
          label: 'Hospitals',
          path: '/admin/manage-hospitals',
        },
        {
          icon: '👥',
          label: 'Donors',
          path: '/admin/manage-donors',
        },
        {
          icon: '📊',
          label: 'Inventory',
          path: '/admin/blood-inventory',
        },
        {
          icon: '🚨',
          label: 'Emergency Requests',
          path: '/admin/emergency-requests',
        },
        {
          icon: '📈',
          label: 'Reports',
          path: '/admin/reports',
        },
      ],
    }

    return menusByRole[user?.role] || []
  }

  const menuItems = getMenuItems()

  // Check if link is active
  const isActive = (path) => location.pathname === path

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`bg-blood-dark text-white transition-all duration-300 ${
          isOpen ? 'w-64' : 'w-20'
        } min-h-screen fixed left-0 top-16 z-40`}
      >
        {/* Toggle Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:bg-blood-red p-2 rounded"
            title={isOpen ? 'Collapse' : 'Expand'}
          >
            {isOpen ? '❮' : '❯'}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="space-y-2 px-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive(item.path)
                  ? 'bg-blood-red text-white'
                  : 'text-gray-200 hover:bg-blood-red hover:text-white'
              }`}
              title={!isOpen ? item.label : ''}
            >
              <span className="text-lg">{item.icon}</span>
              {isOpen && <span className="font-medium">{item.label}</span>}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Spacer for sidebar */}
      <div className={isOpen ? 'w-64' : 'w-20'} />
    </>
  )
}

export default Sidebar
