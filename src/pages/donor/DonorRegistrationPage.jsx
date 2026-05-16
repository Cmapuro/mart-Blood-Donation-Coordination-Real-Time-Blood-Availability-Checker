import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PublicLayout from '../../components/layout/PublicLayout'
import { useContext } from 'react'
import { NotificationContext } from '../../context/NotificationContext'
import { generateDonorID } from '../../utils/generateDonorID'
import { Modal } from '../../components/common/Modal'
import { validateEmail, validatePassword, validatePhone, validateName, validateAge } from '../../utils/validators'
import { BLOOD_TYPES } from '../../utils/bloodTypes'

/**
 * DonorRegistrationPage Component
 * Registration page for new donors
 * Features: form validation, auto-generated donor ID, blood type selection
 */
export function DonorRegistrationPage() {
  const navigate = useNavigate()
  const { success, error } = useContext(NotificationContext)

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    age: '',
    gender: '',
    bloodType: '',
    address: '',
    agreeTerms: false,
  })

  // Errors
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [generatedDonorID, setGeneratedDonorID] = useState(null)
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)

  // Handle change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    // If the user is checking the agreeTerms box, show the privacy modal first
    if (name === 'agreeTerms' && type === 'checkbox' && checked) {
      setShowPrivacyModal(true)
      return
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  // Validate form
  const validateForm = () => {
    const newErrors = {}

    if (!validateName(formData.firstName)) {
      newErrors.firstName = 'First name is invalid'
    }
    if (!validateName(formData.lastName)) {
      newErrors.lastName = 'Last name is invalid'
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Phone number is invalid'
    }
    if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }
    if (!validateAge(formData.age)) {
      newErrors.age = 'Age must be between 16 and 65'
    }
    if (!formData.bloodType) {
      newErrors.bloodType = 'Please select your blood type'
    }
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to terms and conditions'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      error('Please fix the errors in the form')
      return
    }

    setIsLoading(true)

    try {
      // Generate donor ID
      const donorID = generateDonorID()
      setGeneratedDonorID(donorID)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log('Registration data:', { ...formData, donorID })

      success(`Registration successful! Your Donor ID: ${donorID}`)

      // Store user data
      const userData = {
        id: Math.random().toString(36).substr(2, 9),
        donorID,
        email: formData.email,
        role: 'donor',
        name: `${formData.firstName} ${formData.lastName}`,
        loginTime: new Date(),
      }

      localStorage.setItem('user', JSON.stringify(userData))
      localStorage.setItem('authToken', 'dummy-token')

      // Redirect to dashboard
      setTimeout(() => {
        navigate('/donor/dashboard')
      }, 1500)
    } catch (err) {
      error('Registration failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <PublicLayout>
      <section className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-blood-red mb-2">Donor Registration</h1>
            <p className="text-gray-600">Join our community and start saving lives</p>
          </div>

          {/* Card */}
          <div className="bg-white rounded-lg shadow-soft p-8">
            {/* Progress Info */}
            <div className="mb-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <span className="font-semibold">Your Donor ID</span> will be auto-generated after registration
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`form-control ${errors.firstName ? 'border-red-500' : ''}`}
                  />
                  {errors.firstName && <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`form-control ${errors.lastName ? 'border-red-500' : ''}`}
                  />
                  {errors.lastName && <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-control ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`form-control ${errors.phone ? 'border-red-500' : ''}`}
                />
                {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
              </div>

              {/* Age and Gender Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    min="16"
                    max="65"
                    className={`form-control ${errors.age ? 'border-red-500' : ''}`}
                  />
                  {errors.age && <p className="text-red-600 text-sm mt-1">{errors.age}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="">-- Select --</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Blood Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Blood Type</label>
                <select
                  name="bloodType"
                  value={formData.bloodType}
                  onChange={handleChange}
                  className={`form-control ${errors.bloodType ? 'border-red-500' : ''}`}
                >
                  <option value="">-- Select blood type --</option>
                  {BLOOD_TYPES.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                {errors.bloodType && <p className="text-red-600 text-sm mt-1">{errors.bloodType}</p>}
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={2}
                  className="form-control"
                />
              </div>

              {/* Password Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`form-control ${errors.password ? 'border-red-500' : ''}`}
                  />
                  {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`form-control ${errors.confirmPassword ? 'border-red-500' : ''}`}
                  />
                  {errors.confirmPassword && <p className="text-red-600 text-sm mt-1">{errors.confirmPassword}</p>}
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="w-4 h-4 mt-1"
                />
                <label className="text-sm text-gray-700">
                  I agree to the Terms and Conditions and Privacy Policy
                </label>
              </div>
              {errors.agreeTerms && <p className="text-red-600 text-sm">{errors.agreeTerms}</p>}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full"
              >
                {isLoading ? 'Creating Account...' : 'Register as Donor'}
              </button>
            </form>

            {/* Login Link */}
            <p className="text-center text-gray-600 mt-6">
              Already have an account?{' '}
              <Link to="/donor/login" className="text-blood-red font-semibold hover:text-blood-dark">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Modal
        isOpen={showPrivacyModal}
        title="Privacy Notice — Data Privacy Act (Philippines)"
        onClose={() => setShowPrivacyModal(false)}
        onConfirm={() => {
          // user accepted the privacy notice
          setFormData((prev) => ({ ...prev, agreeTerms: true }))
          setShowPrivacyModal(false)
        }}
        confirmText="I accept"
        cancelText="Cancel"
      >
        <div className="text-sm text-gray-700 space-y-3">
          <p>
            We collect and process your personal information for the purpose of registering and managing your blood donation records. Your data will be used only for legitimate health and donation-related activities, such as appointment scheduling, donor identification, and emergency notifications.
          </p>
          <p>
            We implement reasonable administrative, technical, and physical safeguards to protect your personal information against unauthorized access, alteration, or disclosure. Only authorized personnel and partner hospitals will have access to the data necessary to perform their duties.
          </p>
          <p>
            You have the right to access, correct, or request deletion of your personal information in accordance with the Data Privacy Act of 2012. To exercise these rights, please contact our data protection officer or reach out through the provided support channels.
          </p>
          <p>
            We retain personal information only for as long as necessary to fulfill the purposes for which it was collected, or as required by law. When your data is no longer needed, we will securely dispose of or anonymize it.
          </p>
          <p>
            By accepting, you consent to the processing of your personal information under the terms described above. You may withdraw consent at any time, subject to legal or contractual restrictions and reasonable notice.
          </p>
          <p>
            For more information about how we handle personal data, or to submit a privacy request, please consult our full Privacy Policy or contact our Data Protection Officer at the email address listed in the footer.
          </p>
        </div>
      </Modal>
    </PublicLayout>
  )
}

export default DonorRegistrationPage
