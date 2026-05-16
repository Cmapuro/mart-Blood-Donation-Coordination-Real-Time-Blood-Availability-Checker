import React, { useState } from 'react'
import DonorLayout from '../../components/layout/DonorLayout'

/**
 * DonorProfilePage Component
 * Donor profile management page
 */
export function DonorProfilePage() {
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '+63-9123456789',
    age: 28,
    gender: 'Male',
    bloodType: 'O+',
    address: '123 Main Street, Tagum',
  })

  const [isEditing, setIsEditing] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setProfileData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <DonorLayout>
      <h1 className="text-4xl font-bold text-gray-900 mb-2">My Profile</h1>
      <p className="text-gray-600 mb-8">Manage your donor profile information</p>

      <div className="max-w-2xl">
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Profile Information</h2>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="btn-secondary text-sm"
            >
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(profileData).map(([key, value]) => (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
                  {key.replace(/([A-Z])/g, ' $1')}
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name={key}
                    value={value}
                    onChange={handleChange}
                    className="form-control"
                  />
                ) : (
                  <p className="text-gray-700 py-2">{value}</p>
                )}
              </div>
            ))}
          </div>

          {isEditing && (
            <button className="btn-primary mt-6 w-full">
              Save Changes
            </button>
          )}
        </div>
      </div>
    </DonorLayout>
  )
}

export default DonorProfilePage
