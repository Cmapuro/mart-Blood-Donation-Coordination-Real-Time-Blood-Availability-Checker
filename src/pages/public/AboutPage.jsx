import React from 'react'
import PublicLayout from '../../components/layout/PublicLayout'

/**
 * AboutPage Component
 * Information about the blood donation platform
 */
export function AboutPage() {
  return (
    <PublicLayout>
      {/* Header */}
      <section className="bg-blood-light py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-blood-red mb-4">About Us</h1>
          <p className="text-gray-700 text-lg">
            Learn more about our mission to save lives through coordinated blood donations
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blood-red mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                To revolutionize blood donation coordination by connecting donors, hospitals, and blood centers
                through a seamless digital platform. We aim to ensure that no patient dies due to blood unavailability
                while making the donation process simple and rewarding for donors.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By leveraging technology and real-time coordination, we bridge the gap between blood supply and demand,
                saving thousands of lives every year.
              </p>
            </div>
            <div className="text-center text-6xl">
              ❤️
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center text-6xl">
              🎯
            </div>
            <div>
              <h2 className="text-3xl font-bold text-blood-red mb-6">Our Vision</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A world where blood is always available when needed. We envision a healthcare ecosystem where
                emergency blood requests are fulfilled within minutes, and every blood donation is tracked and
                appreciated.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our vision extends beyond blood donation to create a community of compassionate individuals
                dedicated to saving lives and supporting healthcare systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blood-red mb-12">Our Core Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="card text-center">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Compassion</h3>
              <p className="text-gray-600">
                We believe in helping others and saving lives through the simple act of blood donation.
              </p>
            </div>

            {/* Value 2 */}
            <div className="card text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Trust & Safety</h3>
              <p className="text-gray-600">
                Protecting donor and recipient information with highest security standards and quality assurance.
              </p>
            </div>

            {/* Value 3 */}
            <div className="card text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Efficiency</h3>
              <p className="text-gray-600">
                Using technology to streamline blood coordination and emergency response processes.
              </p>
            </div>

            {/* Value 4 */}
            <div className="card text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Collaboration</h3>
              <p className="text-gray-600">
                Partnering with hospitals, blood banks, and donors to create a unified blood donation network.
              </p>
            </div>

            {/* Value 5 */}
            <div className="card text-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Transparency</h3>
              <p className="text-gray-600">
                Providing clear, accurate information about blood availability and donation impact.
              </p>
            </div>

            {/* Value 6 */}
            <div className="card text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Innovation</h3>
              <p className="text-gray-600">
                Continuously improving our platform with cutting-edge technology and user feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blood-red mb-12">Our Team</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Maria Santos', title: 'Medical Director', icon: '👨‍⚕️' },
              { name: 'John Dela Cruz', title: 'Technology Lead', icon: '👨‍💻' },
              { name: 'Sarah Johnson', title: 'Operations Manager', icon: '👩‍💼' },
            ].map((member, idx) => (
              <div key={idx} className="card text-center">
                <div className="text-5xl mb-4">{member.icon}</div>
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  )
}

export default AboutPage
