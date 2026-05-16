import React, { useState } from 'react'
import PublicLayout from '../../components/layout/PublicLayout'
import { EmergencyRequestForm } from '../../components/ui/EmergencyRequestForm'
import { Modal } from '../../components/common/Modal'

/**
 * EmergencyRequestPage Component
 * Page for submitting emergency blood requests
 * Features: request form, guidelines, contact information
 */
export function EmergencyRequestPage() {
  // State for form submission modal
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Handle form submission
  const handleFormSubmit = async (formData) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log('Emergency request submitted:', formData)
    setIsSubmitting(false)
    setShowConfirmation(true)
  }

  return (
    <PublicLayout>
      {/* Header */}
      <section className="bg-red-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">
            🚨 Emergency Blood Request
          </h1>
          <p className="text-lg text-red-100">
            Quickly request blood units for emergency situations
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <div className="card">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Submit Request
                </h2>
                <EmergencyRequestForm
                  onSubmit={handleFormSubmit}
                  loading={isSubmitting}
                />
              </div>
            </div>

            {/* Info Section */}
            <div className="space-y-6">
              {/* Guidelines */}
              <div className="card">
                <h3 className="text-lg font-bold mb-4 text-blood-red">
                  📋 Guidelines
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Provide accurate patient information</li>
                  <li>✓ Specify exact blood type needed</li>
                  <li>✓ Include urgency level</li>
                  <li>✓ Provide contact information</li>
                  <li>✓ Our team will respond within 5 minutes</li>
                </ul>
              </div>

              {/* Emergency Numbers */}
              <div className="card bg-red-50 border-l-4 border-red-600">
                <h3 className="text-lg font-bold mb-4 text-red-600">
                  🔴 Emergency Hotline
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  For immediate assistance:
                </p>
                <p className="text-2xl font-bold text-red-600">
                  1-800-BLOOD-911
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  24/7 Emergency Support
                </p>
              </div>

              {/* Urgency Levels */}
              <div className="card">
                <h3 className="text-lg font-bold mb-4 text-blood-red">
                  ⚡ Urgency Levels
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    <span className="text-gray-700">Low - Planned procedure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                    <span className="text-gray-700">Medium - Scheduled surgery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                    <span className="text-gray-700">High - Urgent need</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-red-600 rounded-full"></span>
                    <span className="text-gray-700">Critical - Life-threatening</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">How It Works</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-blood-red text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                1
              </div>
              <h3 className="font-bold mb-2">Submit Request</h3>
              <p className="text-sm text-gray-600">
                Fill out the emergency request form
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-blood-red text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                2
              </div>
              <h3 className="font-bold mb-2">Verification</h3>
              <p className="text-sm text-gray-600">
                Our team verifies the request
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-blood-red text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                3
              </div>
              <h3 className="font-bold mb-2">Broadcast</h3>
              <p className="text-sm text-gray-600">
                Request sent to available donors
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-blood-red text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                4
              </div>
              <h3 className="font-bold mb-2">Fulfillment</h3>
              <p className="text-sm text-gray-600">
                Blood units delivered to facility
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Confirmation Modal */}
      <Modal
        isOpen={showConfirmation}
        title="Request Submitted Successfully"
        onClose={() => setShowConfirmation(false)}
        onConfirm={() => setShowConfirmation(false)}
        confirmText="Close"
      >
        <div className="text-center">
          <div className="text-5xl mb-4">✅</div>
          <h3 className="text-lg font-bold mb-2 text-gray-900">
            Your emergency blood request has been submitted!
          </h3>
          <p className="text-gray-600 mb-4">
            Our team will start matching donors immediately. You will receive updates via phone and email.
          </p>
          <p className="text-sm text-blood-red font-semibold">
            Request ID: REQ-{Math.random().toString().substr(2, 8).toUpperCase()}
          </p>
        </div>
      </Modal>
    </PublicLayout>
  )
}

export default EmergencyRequestPage
