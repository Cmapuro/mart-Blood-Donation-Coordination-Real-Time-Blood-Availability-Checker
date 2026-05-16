import React, { useState } from 'react'
import PublicLayout from '../../components/layout/PublicLayout'
import { SearchBar } from '../../components/common/SearchBar'
import { BloodAvailabilityCard } from '../../components/ui/BloodAvailabilityCard'
import { Loader } from '../../components/common/Loader'
import bloodInventoryData from '../../data/bloodInventory.json'
import { BLOOD_TYPES } from '../../utils/bloodTypes'

/**
 * SearchBloodPage Component
 * Page for searching blood availability across hospitals
 * Features: blood type filter, location filter, search results
 */
export function SearchBloodPage() {
  // State for filters
  const [selectedBloodType, setSelectedBloodType] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Filter blood data
  let filteredData = bloodInventoryData

  if (selectedBloodType) {
    filteredData = filteredData.filter((item) => item.bloodType === selectedBloodType)
  }

  return (
    <PublicLayout>
      {/* Header */}
      <section className="bg-blood-light py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-blood-red mb-4">
            Search Blood Availability
          </h1>
          <p className="text-gray-700 text-lg">
            Find available blood units in real-time across partner hospitals
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-soft p-6 mb-8">
            <h2 className="text-xl font-bold mb-6 text-gray-900">Filter Results</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Blood Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Blood Type
                </label>
                <select
                  value={selectedBloodType}
                  onChange={(e) => setSelectedBloodType(e.target.value)}
                  className="form-control"
                >
                  <option value="">-- All Blood Types --</option>
                  {BLOOD_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search Bar */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hospital Name
                </label>
                <SearchBar
                  placeholder="Search by hospital..."
                  value={searchQuery}
                  onChange={setSearchQuery}
                  onClear={() => setSearchQuery('')}
                />
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Available Blood Units: {filteredData.length}
            </h3>
          </div>

          {/* Loading State */}
          {isLoading && <Loader fullScreen />}

          {/* Results Grid */}
          {!isLoading && filteredData.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredData.map((blood) => (
                <BloodAvailabilityCard key={blood.id} blood={blood} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">😔</div>
              <h4 className="text-xl font-semibold text-gray-700 mb-2">
                No blood units available
              </h4>
              <p className="text-gray-600">
                Try changing your search filters or check back later.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Information Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Blood Type Guide</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Donation Compatibility */}
            <div className="card">
              <h3 className="text-lg font-bold mb-4 text-blood-red">🩸 Who Can Donate?</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ O+ & O- can donate to all types (Universal Donors)</li>
                <li>✓ Age: 16-65 years</li>
                <li>✓ Weight: At least 50 kg</li>
                <li>✓ Good health condition</li>
                <li>✓ No communicable diseases</li>
              </ul>
            </div>

            {/* Recipient Compatibility */}
            <div className="card">
              <h3 className="text-lg font-bold mb-4 text-blood-red">🏥 Who Can Receive?</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ AB+ & AB- can receive from all types (Universal Recipients)</li>
                <li>✓ O- is emergency blood (safe for all)</li>
                <li>✓ Always check compatibility before transfusion</li>
                <li>✓ Regular testing ensures safety</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  )
}

export default SearchBloodPage
