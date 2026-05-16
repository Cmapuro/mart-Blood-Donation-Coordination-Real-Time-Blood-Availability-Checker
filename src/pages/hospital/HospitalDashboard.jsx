import React from 'react'
import HospitalLayout from '../../components/layout/HospitalLayout'
import { DashboardCard } from '../../components/ui/DashboardCard'
import { BloodAvailabilityCard } from '../../components/ui/BloodAvailabilityCard'
import bloodInventoryData from '../../data/bloodInventory.json'

/**
 * HospitalDashboard Component
 * Main dashboard for hospitals
 */
export function HospitalDashboard() {
  return (
    <HospitalLayout>
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Hospital Dashboard</h1>
      <p className="text-gray-600 mb-8">Blood inventory and donation overview</p>

      <div className="grid-responsive mb-12">
        <DashboardCard title="Total Blood Units" value="75" icon="🩸" color="blood-red" />
        <DashboardCard title="Requests Today" value="12" icon="🚨" color="blue" />
        <DashboardCard title="Critical Blood Types" value="3" icon="⚠️" color="yellow" />
      </div>

      <h2 className="text-2xl font-bold mb-6 text-gray-900">Blood Inventory</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bloodInventoryData.map((blood) => (
          <BloodAvailabilityCard key={blood.id} blood={blood} />
        ))}
      </div>
    </HospitalLayout>
  )
}

export default HospitalDashboard
