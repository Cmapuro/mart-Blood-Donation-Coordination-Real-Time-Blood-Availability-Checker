import React, { useState } from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import { TableComponent } from '../../components/ui/TableComponent'
import hospitalsJson from '../../data/hospitals.json'
import { Modal } from '../../components/common/Modal'

/**
 * ManageHospitalsPage Component
 * Manage partner hospitals
 */
export function ManageHospitalsPage() {
  const [hospitals, setHospitals] = useState(() => {
    const stored = localStorage.getItem('hospitals')
    return stored ? JSON.parse(stored) : hospitalsJson
  })
  const [editing, setEditing] = useState(null)

  const columns = [
    { key: 'name', label: 'Hospital Name', sortable: true },
    { key: 'city', label: 'City', sortable: true },
    { key: 'phone', label: 'Phone', sortable: false },
    { key: 'type', label: 'Type', sortable: true },
  ]

  const saveHospitals = (updated) => {
    setHospitals(updated)
    localStorage.setItem('hospitals', JSON.stringify(updated))
    // Notify other parts of the app that hospitals data changed
    try {
      window.dispatchEvent(new CustomEvent('hospitals-updated', { detail: { hospitals: updated } }))
    } catch (e) {
      // ignore
    }
  }

  const handleEdit = (row) => {
    setEditing({ ...row })
  }

  const handleDelete = (row) => {
    if (!confirm(`Delete hospital "${row.name}"?`)) return
    const updated = hospitals.filter((h) => h.id !== row.id)
    saveHospitals(updated)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setEditing((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    const updated = hospitals.map((h) => (h.id === editing.id ? editing : h))
    saveHospitals(updated)
    setEditing(null)
  }

  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Manage Hospitals</h1>
      <div className="card">
        <TableComponent
          columns={columns}
          data={hospitals}
          searchable
          actions={[
            { label: 'Edit', onClick: handleEdit, icon: (<svg viewBox="0 0 24 24" className="w-4 h-4" fill="none"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z" stroke="currentColor" strokeWidth="1.2"/></svg>) },
            { label: 'Delete', onClick: handleDelete, variant: 'danger', icon: (<svg viewBox="0 0 24 24" className="w-4 h-4" fill="none"><path d="M3 6h18" stroke="currentColor" strokeWidth="1.2"/><path d="M8 6v12a2 2 0 002 2h4a2 2 0 002-2V6" stroke="currentColor" strokeWidth="1.2"/></svg>) },
          ]}
        />
      </div>

      <Modal isOpen={!!editing} title={editing ? `Edit ${editing.name}` : ''} onClose={() => setEditing(null)} onConfirm={handleSave} confirmText="Save">
        {editing && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input name="name" value={editing.name} onChange={handleChange} className="form-control" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
              <input name="type" value={editing.type} onChange={handleChange} className="form-control" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input name="city" value={editing.city} onChange={handleChange} className="form-control" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input name="phone" value={editing.phone} onChange={handleChange} className="form-control" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input name="email" value={editing.email || ''} onChange={handleChange} className="form-control" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input name="address" value={editing.address || ''} onChange={handleChange} className="form-control" />
            </div>
          </div>
        )}
      </Modal>
    </AdminLayout>
  )
}

export default ManageHospitalsPage
