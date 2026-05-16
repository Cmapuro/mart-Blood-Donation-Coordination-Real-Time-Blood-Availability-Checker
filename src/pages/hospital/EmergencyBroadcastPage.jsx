import React, { useState } from 'react'
import HospitalLayout from '../../components/layout/HospitalLayout'
import { EmergencyRequestForm } from '../../components/ui/EmergencyRequestForm'
import { Modal } from '../../components/common/Modal'

/**
 * EmergencyBroadcastPage Component
 * Page for hospitals to broadcast emergency blood requests
 */
export function EmergencyBroadcastPage() {
  const [showConfirm, setShowConfirm] = useState(false)

  const handleSubmit = async (formData) => {
    console.log('Emergency broadcast:', formData)
    setShowConfirm(true)
  }

  return (
    <HospitalLayout>
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Emergency Blood Request</h1>
      <p className="text-gray-600 mb-8">Broadcast urgent blood requests to donor network</p>

      <div className="max-w-2xl">
        <div className="card">
          <EmergencyRequestForm onSubmit={handleSubmit} />
        </div>
      </div>

      <Modal
        isOpen={showConfirm}
        title="Request Broadcast Successfully"
        onClose={() => setShowConfirm(false)}
        onConfirm={() => setShowConfirm(false)}
      >
        <div className="text-center">
          <div className="text-5xl mb-4">✅</div>
          <p className="text-gray-600">Your emergency request has been sent to all eligible donors.</p>
        </div>
      </Modal>
    </HospitalLayout>
  )
}

export default EmergencyBroadcastPage
