// src/components/TermsOfService.jsx
import { Link } from 'react-router-dom'

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <Link to="/" className="text-blue-600 hover:text-blue-800 text-sm mb-4 inline-block">
              ← Back to Home
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-gray-600">Last updated: September 2025</p>
          </div>

          <div className="prose prose-gray max-w-none">
            {/* Agreement */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700">
                By accessing or using Prerak Ghimire's portfolio website, you agree to be bound by these 
                Terms of Service. If you do not agree to these terms, please do not use our website.
              </p>
            </section>

            {/* Use of Website */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Use of Website</h2>
              <p className="text-gray-700 mb-4">You may use our website only for lawful purposes and in accordance with these terms.</p>
              
              <h3 className="text-xl font-medium text-gray-700 mb-3">You agree not to:</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>Use the website in any way that violates applicable laws or regulations</li>
                <li>Engage in any conduct that restricts or inhibits anyone's use of the website</li>
                <li>Attempt to gain unauthorized access to any part of the website</li>
                <li>Use the website to send spam or unsolicited messages</li>
                <li>Impersonate any person or entity</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                The website and its entire contents, features, and functionality are owned by Prerak Ghimire 
                and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-700">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, 
                or otherwise exploit any of the content without prior written permission.
              </p>
            </section>

            {/* User Content */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. User Content</h2>
              <p className="text-gray-700 mb-4">
                When you submit messages through our contact form, you represent and warrant that:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>You own or have the necessary rights to the content</li>
                <li>The content is accurate and not misleading</li>
                <li>The content does not violate any third-party rights</li>
                <li>The content is not illegal, obscene, threatening, or defamatory</li>
              </ul>
            </section>

            {/* Disclaimer */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Disclaimer</h2>
              <p className="text-gray-700 mb-4">
                The website is provided on an "as-is" and "as-available" basis. We make no warranties, 
                expressed or implied, regarding the operation or availability of the website.
              </p>
              <p className="text-gray-700">
                We are not responsible for any damages resulting from your use of the website or any content 
                available through it.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-700">
                To the fullest extent permitted by law, Prerak Ghimire shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages resulting from your access to or use 
                of the website.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Changes to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify these terms at any time. We will notify users of any material 
                changes by posting the new terms on this page. Your continued use of the website after any 
                changes constitutes acceptance of the new terms.
              </p>
            </section>

            {/* Governing Law */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Governing Law</h2>
              <p className="text-gray-700">
                These terms shall be governed by and construed in accordance with the laws of Nepal, without 
                regard to its conflict of law provisions.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Contact Information</h2>
              <p className="text-gray-700">
                For any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg mt-4">
                <p className="text-gray-700">Email: prerakghimire123@gmail.com</p>
                <p className="text-gray-700">Phone: +977 (98) 62274149</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService