import React from 'react'
import PublicLayout from '../../components/layout/PublicLayout'
import { LogoMark } from '../../components/common/LogoMark'
import lagundayImg from '../../assets/image/lagunday.jpg'
import raramaImg from '../../assets/image/blooddonation.png'
import mapuroImg from '../../assets/image/mapuro.jpg'

function ValueIcon({ name }) {
  const common = 'w-12 h-12'
  if (name === 'Compassion') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <path d="M12 21s-7-4.35-9-6.5C-0.5 10.5 3 6 6 6c2.4 0 3.9 2.1 6 4.1C13.9 8.1 15.4 6 17.8 6c3 0 6.5 4.5 3 8.5-2 2.15-9 6.5-9 6.5z" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    )
  }
  if (name === 'Trust & Safety') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <path d="M12 2l7 4v5c0 5-4 9-7 11-3-2-7-6-7-11V6l7-4z" stroke="currentColor" strokeWidth="1.2" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (name === 'Efficiency') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="1.2" />
        <path d="M19.4 15a7.9 7.9 0 00.6-1l-2-1-1 1-1-1" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    )
  }
  if (name === 'Collaboration') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <circle cx="7" cy="12" r="2" stroke="currentColor" />
        <circle cx="17" cy="8" r="2" stroke="currentColor" />
        <circle cx="17" cy="16" r="2" stroke="currentColor" />
        <path d="M9 12l6-4" stroke="currentColor" />
        <path d="M9 12l6 4" stroke="currentColor" />
      </svg>
    )
  }
  if (name === 'Transparency') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="12" cy="12" r="2" stroke="currentColor" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" />
    </svg>
  )
}

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
            <div className="text-center">
              <LogoMark size="xl" className="mx-auto shadow-lg w-48 h-48" alt="Mission logo" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <LogoMark size="xl" className="mx-auto shadow-lg w-48 h-48" alt="Vision logo" />
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
            {[
              'Compassion',
              'Trust & Safety',
              'Efficiency',
              'Collaboration',
              'Transparency',
              'Innovation',
            ].map((val) => (
              <div key={val} className="card text-center">
                <div className="mx-auto mb-4 text-blood-red">
                  <ValueIcon name={val} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{val}</h3>
                <p className="text-gray-600">
                  {val === 'Compassion' && 'We believe in helping others and saving lives through the simple act of blood donation.'}
                  {val === 'Trust & Safety' && 'Protecting donor and recipient information with highest security standards and quality assurance.'}
                  {val === 'Efficiency' && 'Using technology to streamline blood coordination and emergency response processes.'}
                  {val === 'Collaboration' && 'Partnering with hospitals, blood banks, and donors to create a unified blood donation network.'}
                  {val === 'Transparency' && 'Providing clear, accurate information about blood availability and donation impact.'}
                  {val === 'Innovation' && 'Continuously improving our platform with cutting-edge technology and user feedback.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blood-red mb-12">Our Team</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Christian Lagunday', title: 'BSIT Student', img: lagundayImg },
              { name: 'Chrison Lloydfer Rarama', title: 'BSIT Student', img: raramaImg },
              { name: 'ChiedYusof Mapuro', title: 'BSIT Student', img: mapuroImg },
            ].map((member, idx) => (
              <div key={idx} className="card text-center">
                <div className="mx-auto mb-4 flex items-center justify-center">
                  <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md mx-auto" />
                </div>
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
