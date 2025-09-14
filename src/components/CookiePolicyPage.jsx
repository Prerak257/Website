// src/components/CookiePolicy.jsx
import { Link } from 'react-router-dom'

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <Link to="/" className="text-blue-600 hover:text-blue-800 text-sm mb-4 inline-block">
              ← Back to Home
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
            <p className="text-gray-600">Last updated: September 2025</p>
          </div>

          <div className="prose prose-gray max-w-none">
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. What Are Cookies</h2>
              <p className="text-gray-700">
                Cookies are small text files that are placed on your device when you visit our website. 
                They are widely used to make websites work more efficiently and provide information to the 
                website owners.
              </p>
            </section>

            {/* Types of Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-medium text-gray-700 mb-3">Essential Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies are necessary for the website to function properly. They enable basic functions 
                like page navigation and access to secure areas of the website.
              </p>

              <h3 className="text-xl font-medium text-gray-700 mb-3">Analytical/Performance Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies allow us to recognize and count the number of visitors and see how visitors 
                move around our website. This helps us improve the way our website works.
              </p>

              <h3 className="text-xl font-medium text-gray-700 mb-3">Functionality Cookies</h3>
              <p className="text-gray-700">
                These cookies enable the website to provide enhanced functionality and personalization.
              </p>
            </section>

            {/* Cookie Usage */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Cookies</h2>
              <p className="text-gray-700 mb-4">We use cookies for the following purposes:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>To analyze website traffic and user behavior</li>
                <li>To remember your preferences and settings</li>
                <li>To improve website performance</li>
                <li>To prevent fraudulent activity</li>
                <li>To understand how users interact with our content</li>
              </ul>
            </section>

            {/* Third-Party Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Third-Party Cookies</h2>
              <p className="text-gray-700">
                We may use third-party services that place cookies on your device. These services help us 
                with analytics, performance monitoring, and other website functions.
              </p>
            </section>

            {/* Cookie Control */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Managing Cookies</h2>
              <p className="text-gray-700 mb-4">
                You can control and manage cookies in various ways. Please note that removing or blocking 
                cookies may impact your user experience.
              </p>
              
              <h3 className="text-xl font-medium text-gray-700 mb-3">Browser Controls</h3>
              <p className="text-gray-700 mb-4">
                Most browsers allow you to control cookies through their settings preferences. You can usually 
                find these settings in the "options" or "preferences" menu of your browser.
              </p>

              <h3 className="text-xl font-medium text-gray-700 mb-3">Opt-out Tools</h3>
              <p className="text-gray-700">
                You can opt out of certain types of cookies, particularly those used for advertising purposes, 
                through various online tools and resources.
              </p>
            </section>

            {/* Changes to Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Changes to This Policy</h2>
              <p className="text-gray-700">
                We may update this Cookie Policy from time to time. We will notify you of any changes by 
                posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about our use of cookies, please contact us at:
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

export default CookiePolicy