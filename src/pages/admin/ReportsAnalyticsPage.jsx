import React from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import { DashboardCard } from '../../components/ui/DashboardCard'

/**
 * ReportsAnalyticsPage Component
 * System reports and analytics
 */
export function ReportsAnalyticsPage() {
  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Reports & Analytics</h1>

      <div className="grid-responsive mb-12">
        <DashboardCard title="Avg Response Time" value="12 min" icon="⏱️" />
        <DashboardCard title="Success Rate" value="98.5%" icon="📈" />
        <DashboardCard title="Blood Saved Lives" value="15,000+" icon="❤️" />
        <DashboardCard title="Donor Satisfaction" value="96%" icon="⭐" />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="card">
          <h2 className="text-xl font-bold mb-4">Monthly Statistics</h2>
          <div className="space-y-3">
            {[
              { label: 'Total Donations', value: '850' },
              { label: 'New Donors', value: '125' },
              { label: 'Blood Requests', value: '45' },
              { label: 'Fulfilled Requests', value: '43' },
            ].map((stat, idx) => (
              <div key={idx} className="flex justify-between py-2 border-b last:border-0">
                <span className="text-gray-700">{stat.label}</span>
                <span className="font-bold text-blood-red">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold mb-4">Blood Type Distribution</h2>
          <div className="space-y-3">
            {[
              { type: 'O+', count: 250 },
              { type: 'A+', count: 180 },
              { type: 'B+', count: 120 },
              { type: 'AB+', count: 60 },
            ].map((blood, idx) => (
              <div key={idx} className="flex items-center gap-2 py-2">
                <span className="w-12 font-bold text-blood-red">{blood.type}</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div className="bg-blood-red h-2 rounded-full" style={{ width: `${(blood.count / 250) * 100}%` }}></div>
                </div>
                <span className="text-sm text-gray-600">{blood.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default ReportsAnalyticsPage
