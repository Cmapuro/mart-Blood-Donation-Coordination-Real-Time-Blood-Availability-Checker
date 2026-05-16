import React from 'react'
import { Link } from 'react-router-dom'
import PublicLayout from '../../components/layout/PublicLayout'
import { LogoMark } from '../../components/common/LogoMark'
import donors from '../../data/donors.json'
import hospitals from '../../data/hospitals.json'

function FeatureIcon({ type }) {
  const common = 'w-6 h-6 stroke-[2.2]'

  if (type === 'search') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <circle cx="11" cy="11" r="6" stroke="currentColor" />
        <path d="M20 20L16.2 16.2" stroke="currentColor" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === 'donation') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <path d="M12 4C12 4 7 9 7 12.5C7 15.5 9.2 18 12 18C14.8 18 17 15.5 17 12.5C17 9 12 4 12 4Z" stroke="currentColor" />
        <path d="M12 11V15" stroke="currentColor" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === 'emergency') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <path d="M12 3L20 17H4L12 3Z" stroke="currentColor" />
        <path d="M12 9V12" stroke="currentColor" strokeLinecap="round" />
        <circle cx="12" cy="14.8" r="0.9" fill="currentColor" />
      </svg>
    )
  }

  if (type === 'analytics') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <path d="M5 19V10" stroke="currentColor" strokeLinecap="round" />
        <path d="M12 19V6" stroke="currentColor" strokeLinecap="round" />
        <path d="M19 19V13" stroke="currentColor" strokeLinecap="round" />
        <path d="M3 19H21" stroke="currentColor" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === 'network') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <circle cx="6" cy="12" r="2.2" stroke="currentColor" />
        <circle cx="18" cy="7" r="2.2" stroke="currentColor" />
        <circle cx="18" cy="17" r="2.2" stroke="currentColor" />
        <path d="M8.2 11.2L15.8 7.8" stroke="currentColor" />
        <path d="M8.2 12.8L15.8 16.2" stroke="currentColor" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
      <path d="M6 17L8 15C8.6 14.4 9.4 14.4 10 15L12 17L14 15C14.6 14.4 15.4 14.4 16 15L18 17" stroke="currentColor" strokeLinecap="round" />
      <path d="M12 4V10" stroke="currentColor" strokeLinecap="round" />
      <circle cx="12" cy="13.5" r="1.6" stroke="currentColor" />
    </svg>
  )
}

const features = [
  {
    title: 'Real-Time Search',
    description: 'Search blood availability across all partner hospitals and blood centers instantly.',
    icon: 'search',
  },
  {
    title: 'Easy Donation',
    description: 'Schedule appointments, track donation history, and manage your donor profile effortlessly.',
    icon: 'donation',
  },
  {
    title: 'Emergency Requests',
    description: 'Instantly broadcast emergency blood requests to available donors in your network.',
    icon: 'emergency',
  },
  {
    title: 'Analytics',
    description: 'Track blood inventory, donation trends, and generate comprehensive reports.',
    icon: 'analytics',
  },
  {
    title: 'Hospital Network',
    description: 'Connect with trusted partner hospitals and blood centers nationwide.',
    icon: 'network',
  },
  {
    title: 'Notifications',
    description: 'Get real-time notifications about appointments, eligibility, and blood requests.',
    icon: 'notification',
  },
]

/**
 * HomePage Component
 * Landing page for the application
 * Features: hero section, features, call-to-action buttons
 */
export function HomePage() {
  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blood-red to-blood-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Smart Blood Donation & Real-Time Availability Checker
              </h1>
              <p className="text-xl mb-8 text-blood-light">
                Connect donors, hospitals, and blood centers. Check blood availability in real-time,
                manage donations, and coordinate emergency requests seamlessly.
              </p>
              <div className="flex gap-4">
                <Link to="/donor/register" className="bg-white text-blood-red hover:bg-blood-light font-semibold py-3 px-8 rounded-lg transition">
                  Register as Donor
                </Link>
                <Link to="/search-blood" className="border-2 border-white text-white hover:bg-white hover:text-blood-red font-semibold py-3 px-8 rounded-lg transition">
                  Search Blood
                </Link>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="text-center">
              <LogoMark
                size="xl"
                rounded="rounded-3xl"
                className="mx-auto border-2 border-white/30 bg-white/10 p-4 w-48 h-48"
                alt="Hero logo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-blood-red">
            Key Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="card text-center hover:-translate-y-1">
                <div className="mx-auto mb-5 w-14 h-14 rounded-2xl bg-gradient-to-br from-red-50 to-red-100 text-blood-red flex items-center justify-center border border-red-200 shadow-sm">
                  <FeatureIcon type={feature.icon} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8 text-blood-red">
            Ready to Save Lives?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join our blood donation community today. Whether you're a donor, hospital, or blood center,
            our platform makes coordinating blood donations simple and efficient.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/donor/register" className="btn-primary px-8 py-3 text-lg">
              Get Started as Donor
            </Link>
            <Link to="/hospitals" className="btn-secondary px-8 py-3 text-lg">
              View Partner Hospitals
            </Link>
            <Link to="/contact" className="btn-secondary px-8 py-3 text-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blood-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {(() => {
              const totalDonors = Array.isArray(donors) ? donors.length : 0
              const totalHospitals = Array.isArray(hospitals) ? hospitals.length : 0
              const successfulDonations = Array.isArray(donors)
                ? donors.reduce((s, d) => s + (d.totalDonations || 0), 0)
                : 0
              const livesSaved = Math.round(successfulDonations * 1) // 1:1 mapping (adjust as needed)

              return (
                <>
                  <div>
                    <div className="text-5xl font-bold text-blood-red mb-2">{totalDonors.toLocaleString()}+</div>
                    <p className="text-gray-700 font-medium">Active Donors</p>
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-blood-red mb-2">{totalHospitals.toLocaleString()}+</div>
                    <p className="text-gray-700 font-medium">Partner Hospitals</p>
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-blood-red mb-2">{successfulDonations.toLocaleString()}+</div>
                    <p className="text-gray-700 font-medium">Successful Donations</p>
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-blood-red mb-2">{livesSaved.toLocaleString()}+</div>
                    <p className="text-gray-700 font-medium">Lives Saved</p>
                  </div>
                </>
              )
            })()}
          </div>
        </div>
      </section>
    </PublicLayout>
  )
}

export default HomePage
