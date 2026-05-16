import React from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import { DashboardCard } from '../../components/ui/DashboardCard'
import { AnalyticsBarChart } from '../../components/ui/AnalyticsBarChart'
import donorsJson from '../../data/donors.json'
import hospitalsJson from '../../data/hospitals.json'

function useTotals() {
  const storedDonors = localStorage.getItem('donors')
  const storedHospitals = localStorage.getItem('hospitals')
  const donors = storedDonors ? JSON.parse(storedDonors) : donorsJson
  const hospitals = storedHospitals ? JSON.parse(storedHospitals) : hospitalsJson
  const totalDonations = donors.reduce((s, d) => s + (d.totalDonations || 0), 0)
  return { donorsCount: donors.length, hospitalsCount: hospitals.length, totalDonations }
}

/**
 * AdminDashboard Component
 * Main admin dashboard
 */
export function AdminDashboard() {
  const totals = useTotals()
  const weeklyActivity = [
    { label: 'Mon', value: 18 },
    { label: 'Tue', value: 25 },
    { label: 'Wed', value: 20 },
    { label: 'Thu', value: 30 },
    { label: 'Fri', value: 27 },
    { label: 'Sat', value: 34 },
    { label: 'Sun', value: 22 },
  ]

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">System overview and management</p>
      </div>

      <div className="grid-responsive mb-12">
        <DashboardCard title="Total Donors" value={totals.donorsCount.toLocaleString()} icon="DN" trend={{ direction: 'up', percentage: 15 }} color="blood-red" />
        <DashboardCard title="Partner Hospitals" value={totals.hospitalsCount.toLocaleString()} icon="HP" trend={{ direction: 'up', percentage: 5 }} color="blue" />
        <DashboardCard title="Total Donations" value={totals.totalDonations.toLocaleString()} icon="BD" trend={{ direction: 'up', percentage: 23 }} color="green" />
        <DashboardCard title="Emergency Requests" value="156" icon="ER" trend={{ direction: 'down', percentage: 8 }} color="yellow" />
      </div>

      <div className="grid xl:grid-cols-2 gap-8 mb-8">
        <AnalyticsBarChart
          title="Weekly Activity"
          subtitle="Daily engagement and request volume"
          data={weeklyActivity}
          formatter={(value) => `${value}`}
          colorClass="bg-gradient-to-t from-blood-dark to-blood-red"
        />

        <div className="card">
          <h2 className="text-xl font-bold mb-4">Recent Activities</h2>
          <div className="space-y-3">
            {['New donor registered', 'Blood request fulfilled', 'Hospital added', 'Donation completed'].map((activity, idx) => (
              <p key={idx} className="text-gray-600 text-sm py-2 border-b last:border-0">{activity}</p>
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
