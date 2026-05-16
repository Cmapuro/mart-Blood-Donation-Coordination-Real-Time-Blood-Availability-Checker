import React, { useState } from 'react'
import HospitalLayout from '../../components/layout/HospitalLayout'
import { TableComponent } from '../../components/ui/TableComponent'
import { Modal } from '../../components/common/Modal'

/**
 * UpdateBloodAvailabilityPage Component
 * Page for hospitals to update blood availability
 */
export function UpdateBloodAvailabilityPage() {
  const [showModal, setShowModal] = useState(false)

  const bloodData = [
    { id: 1, bloodType: 'O+', quantity: 25, unit: 'units', status: 'Available', expiry: '2026-06-15' },
    { id: 2, bloodType: 'A+', quantity: 18, unit: 'units', status: 'Available', expiry: '2026-06-14' },
    { id: 3, bloodType: 'B+', quantity: 5, unit: 'units', status: 'Critical', expiry: '2026-06-15' },
    { id: 4, bloodType: 'AB+', quantity: 0, unit: 'units', status: 'Unavailable', expiry: '2026-06-15' },
  ]

  const columns = [
    { key: 'bloodType', label: 'Blood Type', sortable: true },
    { key: 'quantity', label: 'Quantity', sortable: true },
    { key: 'status', label: 'Status', render: (value) => <span className={`badge ${value === 'Available' ? 'badge-success' : value === 'Critical' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>{value}</span> },
    { key: 'expiry', label: 'Expiry Date', sortable: true },
  ]

  return (
    <HospitalLayout>
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Blood Inventory Management</h1>
          <p className="text-gray-600">Update and manage blood availability</p>
        </div>
        <button onClick={() => setShowModal(true)} className="btn-primary">
          + Add Blood
        </button>
      </div>

      <div className="card">
        <TableComponent
          columns={columns}
          data={bloodData}
          searchable
          actions={[{ label: 'Edit', onClick: () => {} }, { label: 'Delete', onClick: () => {}, variant: 'danger' }]}
        />
      </div>

      <Modal
        isOpen={showModal}
        title="Add Blood Unit"
        onClose={() => setShowModal(false)}
        onConfirm={() => setShowModal(false)}
        confirmText="Add"
      >
        <form className="space-y-4">
          <input type="text" placeholder="Blood Type" className="form-control" />
          <input type="number" placeholder="Quantity" className="form-control" />
          <input type="date" className="form-control" />
        </form>
      </Modal>
    </HospitalLayout>
  )
}

export default UpdateBloodAvailabilityPage
