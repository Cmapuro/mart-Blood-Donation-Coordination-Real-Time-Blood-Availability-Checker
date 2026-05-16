import React from 'react'

/**
 * Footer Component
 * Application footer with copyright and links
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-blood-dark text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Smart Blood Donation</h3>
            <p className="text-gray-300 text-sm">
              Coordinating blood donation and availability in real-time for hospitals and donors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/about" className="hover:text-blood-light transition">About Us</a></li>
              <li><a href="/contact" className="hover:text-blood-light transition">Contact</a></li>
              <li><a href="/" className="hover:text-blood-light transition">Privacy Policy</a></li>
              <li><a href="/" className="hover:text-blood-light transition">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>📧 info@blooddonation.com</li>
              <li>📞 +63-84-XXX-XXXX</li>
              <li>📍 Tagum, Davao del Norte</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-600" />

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-300 text-sm">
          <p>
            &copy; {currentYear} Smart Blood Donation Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
