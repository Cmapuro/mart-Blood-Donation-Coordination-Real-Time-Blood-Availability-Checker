import React from 'react'
import { LogoMark } from '../common/LogoMark'

/**
 * HospitalCard Component
 * Displays hospital/facility information in a card format
 * Features: hospital name, type badge, location, contact info
 */
export function HospitalCard({ hospital, onClick }) {
  return (
    <div
      onClick={onClick}
      className="card hover:shadow-medium transition-all cursor-pointer h-full flex flex-col"
    >
      {/* Hospital Header */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          {hospital.name}
        </h3>
        <span className="badge badge-blood text-xs">
          {hospital.type}
        </span>
      </div>

      {/* Hospital Info */}
      <div className="space-y-3 flex-1">
        {/* Location */}
        <div className="flex items-start gap-3">
          <LogoMark size="sm" rounded="rounded-md" className="border border-red-100" alt="Location logo" />
          <div>
            <p className="text-xs text-gray-500">Location</p>
            <p className="text-sm text-gray-700">
              {hospital.city}, {hospital.province}
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-3">
          <LogoMark size="sm" rounded="rounded-md" className="border border-red-100" alt="Phone logo" />
          <div>
            <p className="text-xs text-gray-500">Phone</p>
            <p className="text-sm text-gray-700">{hospital.phone}</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-3">
          <LogoMark size="sm" rounded="rounded-md" className="border border-red-100" alt="Email logo" />
          <div>
            <p className="text-xs text-gray-500">Email</p>
            <p className="text-sm text-gray-700 truncate">{hospital.email}</p>
          </div>
        </div>

        {/* Full Address */}
        <div className="flex items-start gap-3">
          <LogoMark size="sm" rounded="rounded-md" className="border border-red-100" alt="Address logo" />
          <div>
            <p className="text-xs text-gray-500">Address</p>
            <p className="text-sm text-gray-700">{hospital.address}</p>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <button className="btn-primary mt-4 w-full text-sm">
        View Details
      </button>
    </div>
  )
}

export default HospitalCard
