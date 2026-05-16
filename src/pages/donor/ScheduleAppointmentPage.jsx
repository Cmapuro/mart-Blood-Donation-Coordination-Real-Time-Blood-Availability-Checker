import React, { useState } from 'react'
import DonorLayout from '../../components/layout/DonorLayout'
import { AppointmentForm } from '../../components/ui/AppointmentForm'
import { Loader } from '../../components/common/Loader'
import { Modal } from '../../components/common/Modal'
import hospitalsData from '../../data/hospitals.json'
import { LogoMark } from '../../components/common/LogoMark'

/**
 * ScheduleAppointmentPage Component
 * Page for donors to schedule blood donation appointments
 */
export function ScheduleAppointmentPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const handleSubmit = async (formData) => {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log('Appointment scheduled:', formData)
    setIsSubmitting(false)
    setShowConfirm(true)
  }

  return (
    <DonorLayout>
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Schedule Appointment</h1>
      <p className="text-gray-600 mb-8">Book your blood donation appointment</p>

      <div className="max-w-2xl">
        <div className="card">
          <AppointmentForm
            onSubmit={handleSubmit}
            hospitals={hospitalsData}
            loading={isSubmitting}
          />
        </div>
      </div>

      <Modal
        isOpen={showConfirm}
        title="Appointment Scheduled"
        onClose={() => setShowConfirm(false)}
        onConfirm={() => setShowConfirm(false)}
        confirmText="Close"
      >
        <div className="text-center">
          <LogoMark size="lg" className="mx-auto mb-4" alt="Appointment confirmed logo" />
          <h3 className="text-lg font-bold mb-2">Appointment Confirmed!</h3>
          <p className="text-gray-600">You will receive a confirmation via email and SMS.</p>
        </div>
      </Modal>
    </DonorLayout>
  )
}

export default ScheduleAppointmentPage
