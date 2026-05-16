import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import bloodDonationLogo from '../../assets/image/blooddonation.png'

/**
 * Navbar Component
 * Top navigation bar for the application
 * Displays different navigation options based on user role
 * Features: logo, navigation links, user menu, logout functionality
 */
export function Navbar() {
  // Get authentication context
  const { user, logout, isAuthenticated } = useAuth()

  // Get current location to highlight active link
  const location = useLocation()

  // Handle logout
  const handleLogout = () => {
    logout()
  }

  // Public navigation links
  const publicLinks = [
    { path: '/', label: 'Home' },
    { path: '/search-blood', label: 'Search Blood' },
    { path: '/hospitals', label: 'Hospitals' },
    { path: '/emergency-request', label: 'Emergency' },
    { path: '/about', label: 'About' },
  ]

  // Donor navigation links
  const donorLinks = [
    { path: '/donor/dashboard', label: 'Dashboard' },
    { path: '/donor/schedule-appointment', label: 'Schedule' },
    { path: '/donor/donation-history', label: 'History' },
    { path: '/donor/notifications', label: 'Notifications' },
  ]

  // Hospital navigation links
  const hospitalLinks = [
    { path: '/hospital/dashboard', label: 'Dashboard' },
    { path: '/hospital/update-blood-availability', label: 'Blood Inventory' },
    { path: '/hospital/emergency-broadcast', label: 'Emergency' },
  ]

  // Admin navigation links
  const adminLinks = [
    { path: '/admin/dashboard', label: 'Dashboard' },
    { path: '/admin/manage-hospitals', label: 'Hospitals' },
    { path: '/admin/manage-donors', label: 'Donors' },
    { path: '/admin/blood-inventory', label: 'Inventory' },
  ]

  // Determine which links to show based on user role
  const getNavLinks = () => {
    if (!isAuthenticated()) return publicLinks

    if (user?.role === 'donor') return donorLinks
    if (user?.role === 'hospital') return hospitalLinks
    if (user?.role === 'admin') return adminLinks

    return publicLinks
  }

  const navLinks = getNavLinks()

  // Check if link is active
  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white shadow-soft sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={bloodDonationLogo}
              alt="Blood Donation Logo"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="hidden sm:inline text-lg font-bold text-blood-red">
              Blood Donation
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-blood-red border-b-2 border-blood-red'
                    : 'text-gray-600 hover:text-blood-red'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* User Menu */}
          <div className="flex items-center gap-4">
            {isAuthenticated() ? (
              <>
                <span className="hidden sm:inline text-sm text-gray-600">
                  {user?.email}
                </span>
                <button
                  onClick={handleLogout}
                  className="btn-primary text-sm"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/donor/login" className="btn-secondary text-sm">
                  Donor Login
                </Link>
                <Link to="/hospital/login" className="btn-primary text-sm">
                  Hospital Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
