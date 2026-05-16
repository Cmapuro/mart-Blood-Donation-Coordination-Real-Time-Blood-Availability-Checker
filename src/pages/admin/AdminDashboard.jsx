import React from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import { DashboardCard } from '../../components/ui/DashboardCard'

/**
 * AdminDashboard Component
 * Main admin dashboard
 */
export function AdminDashboard() {
  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
      <p className="text-gray-600 mb-8">System overview and management</p>

      <div className="grid-responsive mb-12">
        <DashboardCard title="Total Donors" value="2,500" icon="👥" trend={{ direction: 'up', percentage: 15 }} color="blood-red" />
        <DashboardCard title="Partner Hospitals" value="50" icon="🏥" trend={{ direction: 'up', percentage: 5 }} color="blue" />
        <DashboardCard title="Total Donations" value="10,000" icon="🩸" trend={{ direction: 'up', percentage: 23 }} color="green" />
        <DashboardCard title="Emergency Requests" value="156" icon="🚨" trend={{ direction: 'down', percentage: 8 }} color="yellow" />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="card">
          <h2 className="text-xl font-bold mb-4">Recent Activities</h2>
          <div className="space-y-3">
            {['New donor registered', 'Blood request fulfilled', 'Hospital added', 'Donation completed'].map((activity, idx) => (
              <p key={idx} className="text-gray-600 text-sm py-2 border-b last:border-0">✓ {activity}</p>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold mb-4">System Status</h2>
          <div className="space-y-3">
            {[
              { name: 'API Server', status: 'Online' },
              { name: 'Database', status: 'Online' },
              { name: 'Email Service', status: 'Online' },
              { name: 'Notification Service', status: 'Online' },
            ].map((service, idx) => (
              <div key={idx} className="flex items-center justify-between py-2 border-b last:border-0">
                <span className="text-gray-700">{service.name}</span>
                <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-800 rounded">
                  {service.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default AdminDashboard
