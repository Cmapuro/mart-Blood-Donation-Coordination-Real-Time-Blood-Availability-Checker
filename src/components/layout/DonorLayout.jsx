import React from 'react'
import { Navbar } from '../common/Navbar'
import { Sidebar } from '../common/Sidebar'
import { Footer } from '../common/Footer'
import { NotificationAlert } from '../common/NotificationAlert'

/**
 * DonorLayout Component
 * Layout for donor pages (requires donor authentication)
 * Includes: Navbar, Sidebar, Footer, NotificationAlert
 */
export function DonorLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Notification System */}
      <NotificationAlert />

      {/* Main Content with Sidebar */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <main className="flex-1 ml-20 md:ml-64">
          <div className="p-6 max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default DonorLayout
