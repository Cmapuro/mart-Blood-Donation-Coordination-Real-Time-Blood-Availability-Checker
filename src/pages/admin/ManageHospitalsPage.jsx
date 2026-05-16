import React from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import { TableComponent } from '../../components/ui/TableComponent'
import hospitalsData from '../../data/hospitals.json'

/**
 * ManageHospitalsPage Component
 * Manage partner hospitals
 */
export function ManageHospitalsPage() {
  const columns = [
    { key: 'name', label: 'Hospital Name', sortable: true },
    { key: 'city', label: 'City', sortable: true },
    { key: 'phone', label: 'Phone', sortable: false },
    { key: 'type', label: 'Type', sortable: true },
  ]

  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Manage Hospitals</h1>
      <div className="card">
        <TableComponent columns={columns} data={hospitalsData} searchable actions={[{ label: 'Edit', onClick: () => {} }, { label: 'Delete', onClick: () => {}, variant: 'danger' }]} />
      </div>
    </AdminLayout>
  )
}

export default ManageHospitalsPage
