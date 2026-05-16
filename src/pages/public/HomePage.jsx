import React from 'react'
import { Link } from 'react-router-dom'
import PublicLayout from '../../components/layout/PublicLayout'

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
            <div className="text-center text-6xl">
              🩸
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
            {/* Feature 1 */}
            <div className="card text-center">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Real-Time Search</h3>
              <p className="text-gray-600">
                Search blood availability across all partner hospitals and blood centers instantly.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card text-center">
              <div className="text-5xl mb-4">🩸</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Easy Donation</h3>
              <p className="text-gray-600">
                Schedule appointments, track donation history, and manage your donor profile effortlessly.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card text-center">
              <div className="text-5xl mb-4">🚨</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Emergency Requests</h3>
              <p className="text-gray-600">
                Instantly broadcast emergency blood requests to available donors in your network.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="card text-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Analytics</h3>
              <p className="text-gray-600">
                Track blood inventory, donation trends, and generate comprehensive reports.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="card text-center">
              <div className="text-5xl mb-4">🏥</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Hospital Network</h3>
              <p className="text-gray-600">
                Connect with trusted partner hospitals and blood centers nationwide.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="card text-center">
              <div className="text-5xl mb-4">🔔</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Notifications</h3>
              <p className="text-gray-600">
                Get real-time notifications about appointments, eligibility, and blood requests.
              </p>
            </div>
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
            <div>
              <div className="text-5xl font-bold text-blood-red mb-2">2500+</div>
              <p className="text-gray-700 font-medium">Active Donors</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-blood-red mb-2">50+</div>
              <p className="text-gray-700 font-medium">Partner Hospitals</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-blood-red mb-2">10000+</div>
              <p className="text-gray-700 font-medium">Successful Donations</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-blood-red mb-2">15000+</div>
              <p className="text-gray-700 font-medium">Lives Saved</p>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  )
}

export default HomePage
