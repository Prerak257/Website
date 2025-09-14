// src/components/PrivacyPolicy.jsx
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <Link to="/" className="text-blue-600 hover:text-blue-800 text-sm mb-4 inline-block">
              ← Back to Home
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: September 2025</p>
          </div>

          <div className="prose prose-gray max-w-none">
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                Welcome to Prerak Ghimire's portfolio website. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you visit our website or contact us through 
                our contact form.
              </p>
              <p className="text-gray-700">
                By using our website, you consent to the data practices described in this policy. If you do not 
                agree with the data practices described, you should not use our website.
              </p>
            </section>

            {/* Information Collection */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-medium text-gray-700 mb-3">Personal Information</h3>
              <p className="text-gray-700 mb-4">
                When you use our contact form, we may collect the following personal information:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>Full name</li>
                <li>Email address</li>
                <li>Subject of your message</li>
                <li>Message content</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mb-3">Automatically Collected Information</h3>
              <p className="text-gray-700">
                We may automatically collect certain information about your device and usage of our website, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Operating system</li>
                <li>Pages visited and time spent</li>
                <li>Referring websites</li>
              </ul>
            </section>

            {/* Use of Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect for various purposes, including to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Communicate with you about our services</li>
                <li>Improve our website and user experience</li>
                <li>Prevent fraud and enhance security</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            {/* Data Storage and Security */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Storage and Security</h2>
              <p className="text-gray-700 mb-4">
                Your personal information is stored in Google Sheets through Google Apps Script. We implement 
                appropriate security measures to protect your personal information from unauthorized access, 
                alteration, disclosure, or destruction.
              </p>
              <p className="text-gray-700">
                However, no method of transmission over the Internet or electronic storage is 100% secure. 
                While we strive to use commercially acceptable means to protect your personal information, 
                we cannot guarantee its absolute security.
              </p>
            </section>

            {/* Data Retention */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Data Retention</h2>
              <p className="text-gray-700">
                We will retain your personal information only for as long as necessary to fulfill the purposes 
                for which it was collected, including to satisfy any legal, accounting, or reporting requirements.
              </p>
            </section>

            {/* Your Rights */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Your Rights</h2>
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>Right to access your personal information</li>
                <li>Right to correct inaccurate information</li>
                <li>Right to request deletion of your information</li>
                <li>Right to restrict or object to processing</li>
                <li>Right to data portability</li>
              </ul>
              <p className="text-gray-700">
                To exercise these rights, please contact us at prerakghimire123@gmail.com.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg mt-4">
                <p className="text-gray-700">Email: prerakghimire123@gmail.com</p>
                <p className="text-gray-700">Phone: +977 (98) 62274149</p>
                <p className="text-gray-700">Address: Koteshwor, Kathmandu, Nepal</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy