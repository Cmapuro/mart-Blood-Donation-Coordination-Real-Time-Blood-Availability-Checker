import React, { useState } from 'react'
import PublicLayout from '../../components/layout/PublicLayout'

/**
 * ContactPage Component
 * Contact information and form for user inquiries
 */
export function ContactPage() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <PublicLayout>
      {/* Header */}
      <section className="bg-blood-light py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-blood-red mb-4">Contact Us</h1>
          <p className="text-gray-700 text-lg">
            Get in touch with us. We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h2>

                {submitted && (
                  <div className="bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded mb-6">
                    Thank you. We will get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-control"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-control"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="form-control"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="form-control"
                    />
                  </div>

                  {/* Submit */}
                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="card">
                <h3 className="text-lg font-bold mb-3 text-blood-red">Phone</h3>
                <p className="text-gray-700 font-semibold">+63-84-123-4567</p>
                <p className="text-sm text-gray-600">Available 24/7 for emergencies</p>
              </div>

              {/* Email */}
              <div className="card">
                <h3 className="text-lg font-bold mb-3 text-blood-red">Email</h3>
                <p className="text-gray-700 font-semibold">info@blooddonation.com</p>
                <p className="text-sm text-gray-600">Response within 24 hours</p>
              </div>

              {/* Address */}
              <div className="card">
                <h3 className="text-lg font-bold mb-3 text-blood-red">Address</h3>
                <p className="text-gray-700 font-semibold">Smart Blood Donation HQ</p>
                <p className="text-sm text-gray-600">
                  123 Medical Street<br/>
                  Tagum, Davao del Norte<br/>
                  Philippines
                </p>
              </div>

              {/* Office Hours */}
              <div className="card">
                <h3 className="text-lg font-bold mb-3 text-blood-red">Office Hours</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li><span className="font-semibold">Mon - Fri:</span> 8:00 AM - 6:00 PM</li>
                  <li><span className="font-semibold">Saturday:</span> 9:00 AM - 3:00 PM</li>
                  <li><span className="font-semibold">Sunday:</span> Emergency Only</li>
                </ul>
              </div>

              {/* Follow Us */}
              <div className="card">
                <h3 className="text-lg font-bold mb-3 text-blood-red">Follow Us</h3>
                <div className="flex gap-3">
                  <a href="#" className="badge badge-blood hover:opacity-80">Facebook</a>
                  <a href="#" className="badge badge-blood hover:opacity-80">X</a>
                  <a href="#" className="badge badge-blood hover:opacity-80">Instagram</a>
                  <a href="#" className="badge badge-blood hover:opacity-80">YouTube</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-blood-red mb-12">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'How do I register as a donor?',
                a: 'Click "Register as Donor" on the home page and fill out the registration form. You will receive a unique Donor ID.',
              },
              {
                q: 'How often can I donate blood?',
                a: 'You can donate blood every 56 days (8 weeks). Each donation takes about 8-10 minutes.',
              },
              {
                q: 'Is my blood data secure?',
                a: 'Yes, we use industry-standard encryption and comply with all healthcare data protection regulations.',
              },
              {
                q: 'How can hospitals request blood?',
                a: 'Hospitals can log in to their dashboard and submit regular or emergency blood requests.',
              },
            ].map((faq, idx) => (
              <details key={idx} className="card cursor-pointer">
                <summary className="font-bold text-gray-900">
                  {faq.q}
                </summary>
                <p className="mt-3 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  )
}

export default ContactPage
