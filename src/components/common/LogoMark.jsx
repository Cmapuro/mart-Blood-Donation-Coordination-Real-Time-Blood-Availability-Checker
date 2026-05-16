import React from 'react'
import bloodDonationLogo from '../../assets/image/blooddonation.png'

/**
 * LogoMark
 * Reusable logo image with configurable size and shape.
 */
export function LogoMark({
  size = 'md',
  className = '',
  rounded = 'rounded-full',
  alt = 'Blood Donation Logo',
}) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  }

  const resolvedSizeClass = sizeClasses[size] || sizeClasses.md

  return (
    <img
      src={bloodDonationLogo}
      alt={alt}
      className={`${resolvedSizeClass} ${rounded} object-cover shadow-sm ${className}`}
    />
  )
}

export default LogoMark
