import React from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import { TableComponent } from '../../components/ui/TableComponent'

/**
 * EmergencyRequestsMonitoringPage Component
 * Monitor emergency blood requests
 */
export function EmergencyRequestsMonitoringPage() {
  const emergencyRequests = [
    { id: 1, hospital: 'Tagum Medical City', bloodType: 'O+', quantity: 5, urgency: 'Critical', date: '2026-05-15', status: 'Fulfilled' },
    { id: 2, hospital: 'Christ the King', bloodType: 'AB-', quantity: 2, urgency: 'High', date: '2026-05-14', status: 'Pending' },
  ]

  const columns = [
    { key: 'hospital', label: 'Hospital', sortable: true },
    { key: 'bloodType', label: 'Blood Type', sortable: true },
    { key: 'quantity', label: 'Quantity', sortable: true },
    { key: 'urgency', label: 'Urgency', render: (val) => <span className={`badge ${val === 'Critical' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>{val}</span> },
    { key: 'status', label: 'Status', render: (val) => <span className={`badge ${val === 'Fulfilled' ? 'badge-success' : 'bg-yellow-100 text-yellow-800'}`}>{val}</span> },
  ]

  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Emergency Requests</h1>
      <div className="card">
        <TableComponent columns={columns} data={emergencyRequests} searchable />
      </div>
    </AdminLayout>
  )
}

export default EmergencyRequestsMonitoringPage
