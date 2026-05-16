import React from 'react'
import HospitalLayout from '../../components/layout/HospitalLayout'
import { TableComponent } from '../../components/ui/TableComponent'

/**
 * DonorScheduleVerificationPage Component
 * Verify donor appointments
 */
export function DonorScheduleVerificationPage() {
  const appointments = [
    { id: 1, donorName: 'John Doe', donorID: 'DONOR-123456', date: '2026-05-16', time: '2:00 PM', status: 'Confirmed' },
    { id: 2, donorName: 'Jane Smith', donorID: 'DONOR-234567', date: '2026-05-17', time: '10:00 AM', status: 'Pending' },
  ]

  const columns = [
    { key: 'donorName', label: 'Donor Name', sortable: true },
    { key: 'donorID', label: 'Donor ID', sortable: true },
    { key: 'date', label: 'Date', sortable: true },
    { key: 'time', label: 'Time', sortable: true },
    { key: 'status', label: 'Status', render: (value) => <span className="badge badge-success">{value}</span> },
  ]

  return (
    <HospitalLayout>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Donor Schedule Verification</h1>
      <div className="card">
        <TableComponent columns={columns} data={appointments} searchable />
      </div>
    </HospitalLayout>
  )
}

export default DonorScheduleVerificationPage
