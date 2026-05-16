import React from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import { TableComponent } from '../../components/ui/TableComponent'
import donorsData from '../../data/donors.json'

/**
 * ManageDonorsPage Component
 * Manage registered donors
 */
export function ManageDonorsPage() {
  const columns = [
    { key: 'donorID', label: 'Donor ID', sortable: true },
    { key: 'firstName', label: 'Name', render: (val, row) => `${row.firstName} ${row.lastName}` },
    { key: 'bloodType', label: 'Blood Type', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { key: 'isEligible', label: 'Eligible', render: (val) => <span className={`badge ${val ? 'badge-success' : 'bg-red-100 text-red-800'}`}>{val ? 'Yes' : 'No'}</span> },
  ]

  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Manage Donors</h1>
      <div className="card">
        <TableComponent columns={columns} data={donorsData} searchable actions={[{ label: 'Suspend', onClick: () => {}, variant: 'danger' }]} />
      </div>
    </AdminLayout>
  )
}

export default ManageDonorsPage
