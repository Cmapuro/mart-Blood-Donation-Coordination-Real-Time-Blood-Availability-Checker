import React from 'react'
import DonorLayout from '../../components/layout/DonorLayout'
import { DashboardCard } from '../../components/ui/DashboardCard'
import { useAuth } from '../../hooks/useAuth'

/**
 * DonorDashboard Component
 * Main dashboard for donors showing their statistics and quick actions
 */
export function DonorDashboard() {
  const { user } = useAuth()

  return (
    <DonorLayout>
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Welcome, {user?.name}!
        </h1>
        <p className="text-gray-600">Here's your donation overview</p>
      </div>

      {/* Stats Cards */}
      <div className="grid-responsive mb-12">
        <DashboardCard
          title="Total Donations"
          value="5"
          icon="🩸"
          trend={{ direction: 'up', percentage: 20 }}
          color="blood-red"
        />
        <DashboardCard
          title="Lives Saved"
          value="15"
          icon="❤️"
          color="green"
        />
        <DashboardCard
          title="Next Eligible Date"
          value="June 20"
          icon="📅"
          color="blue"
        />
      </div>

      {/* Quick Actions */}
      <div className="card mb-8">
        <h2 className="text-xl font-bold mb-4 text-gray-900">Quick Actions</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <button className="btn-primary">Schedule Appointment</button>
          <button className="btn-secondary">View History</button>
          <button className="btn-secondary">My Profile</button>
        </div>
      </div>

      {/* Recent Donations */}
      <div className="card">
        <h2 className="text-xl font-bold mb-4 text-gray-900">Recent Donations</h2>
        <div className="space-y-3">
          {[
            { date: 'May 15, 2026', hospital: 'Tagum Medical City', status: 'Completed' },
            { date: 'April 20, 2026', hospital: 'Christ the King Hospital', status: 'Completed' },
            { date: 'March 25, 2026', hospital: 'Davao Regional Medical Center', status: 'Completed' },
          ].map((donation, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold text-gray-900">{donation.hospital}</p>
                <p className="text-sm text-gray-600">{donation.date}</p>
              </div>
              <span className="badge badge-success">{donation.status}</span>
            </div>
          ))}
        </div>
      </div>
    </DonorLayout>
  )
}

export default DonorDashboard
