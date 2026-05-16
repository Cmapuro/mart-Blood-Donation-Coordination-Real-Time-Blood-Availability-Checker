import React from 'react'
import HospitalLayout from '../../components/layout/HospitalLayout'
import { TableComponent } from '../../components/ui/TableComponent'

/**
 * DonorEligibilityPage Component
 * Check donor eligibility
 */
export function DonorEligibilityPage() {
  const donors = [
    { id: 1, name: 'John Doe', bloodType: 'O+', age: 28, eligible: true, reason: 'Eligible' },
    { id: 2, name: 'Jane Smith', bloodType: 'A+', age: 32, eligible: true, reason: 'Eligible' },
    { id: 3, name: 'Michael Johnson', bloodType: 'B-', age: 45, eligible: false, reason: 'Too recent donation' },
  ]

  const columns = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'bloodType', label: 'Blood Type', sortable: true },
    { key: 'age', label: 'Age', sortable: true },
    { key: 'eligible', label: 'Eligible', render: (value) => <span className={`badge ${value ? 'badge-success' : 'bg-red-100 text-red-800'}`}>{value ? 'Yes' : 'No'}</span> },
    { key: 'reason', label: 'Reason', sortable: true },
  ]

  return (
    <HospitalLayout>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Donor Eligibility Check</h1>
      <div className="card">
        <TableComponent columns={columns} data={donors} searchable />
      </div>
    </HospitalLayout>
  )
}

export default DonorEligibilityPage
