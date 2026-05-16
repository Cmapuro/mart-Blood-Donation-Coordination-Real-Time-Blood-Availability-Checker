import React from 'react'
import DonorLayout from '../../components/layout/DonorLayout'
import { TableComponent } from '../../components/ui/TableComponent'

/**
 * DonationHistoryPage Component
 * Shows donor's past donation history
 */
export function DonationHistoryPage() {
  const donationData = [
    { id: 1, date: '2026-05-15', hospital: 'Tagum Medical City', bloodType: 'O+', units: 1, status: 'Completed' },
    { id: 2, date: '2026-04-20', hospital: 'Christ the King Hospital', bloodType: 'O+', units: 1, status: 'Completed' },
    { id: 3, date: '2026-03-25', hospital: 'Davao Regional Medical Center', bloodType: 'O+', units: 1, status: 'Completed' },
  ]

  const columns = [
    { key: 'date', label: 'Date', sortable: true },
    { key: 'hospital', label: 'Hospital', sortable: true },
    { key: 'bloodType', label: 'Blood Type', sortable: true },
    { key: 'units', label: 'Units', sortable: true },
    { key: 'status', label: 'Status', render: (value) => <span className="badge badge-success">{value}</span> },
  ]

  return (
    <DonorLayout>
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Donation History</h1>
      <p className="text-gray-600 mb-8">Your blood donation records</p>

      <div className="card">
        <TableComponent
          columns={columns}
          data={donationData}
          searchable
          paginated
          itemsPerPage={10}
        />
      </div>
    </DonorLayout>
  )
}

export default DonationHistoryPage
