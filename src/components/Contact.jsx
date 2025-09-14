// src/components/Contact.jsx
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [lastSubmissionTime, setLastSubmissionTime] = useState(null)

  // Check localStorage for last submission time on component mount
  useEffect(() => {
    const storedTime = localStorage.getItem('lastContactSubmission')
    if (storedTime) {
      setLastSubmissionTime(parseInt(storedTime))
    }
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Validation functions
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return false
    }

    // Block test email domains
    const testDomains = [
      'test.com', 'example.com', 'demo.com', 'fake.com', 
      'mailinator.com', 'tempmail.com', 'guerrillamail.com',
      '10minutemail.com', 'throwawaymail.com', 'yopmail.com'
    ]
    
    const domain = email.split('@')[1].toLowerCase()
    return !testDomains.some(testDomain => domain.includes(testDomain))
  }

  const isValidName = (name) => {
    // Block common test names and usernames
    const testNames = [
      'test', 'demo', 'user', 'admin', 'guest', 'example',
      'john doe', 'jane doe', 'foo bar', 'lorem ipsum'
    ]
    
    const lowerName = name.toLowerCase().trim()
    return !testNames.some(testName => lowerName.includes(testName)) && 
           name.trim().length >= 2
  }

  const canSubmit = () => {
    if (!lastSubmissionTime) return true
    
    const fiveMinutes = 5 * 60 * 1000
    const currentTime = Date.now()
    return (currentTime - lastSubmissionTime) >= fiveMinutes
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate cooldown period
    if (!canSubmit()) {
      toast.error('Please wait 5 minutes before sending another message.')
      return
    }

    // Validate name
    if (!isValidName(formData.name)) {
      toast.error('Please provide a valid name.')
      return
    }

    // Validate email
    if (!isValidEmail(formData.email)) {
      toast.error('Please provide a valid email address.')
      return
    }

    // Validate message content
    if (formData.message.trim().length < 10) {
      toast.error('Message must be at least 10 characters long.')
      return
    }

    setIsSubmitting(true)

    try {
      // Replace with your Google Apps Script URL
      const scriptURL = 'https://script.google.com/macros/s/AKfycby1hWQic8m-fM_PjCP6wz3YlLGlETYzcxjrb-3lTwlWyuz04dDlAHiSFdyjzBNi5Rui/exec'
      
      const response = await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      
      // Store submission time
      const currentTime = Date.now()
      setLastSubmissionTime(currentTime)
      localStorage.setItem('lastContactSubmission', currentTime.toString())
      
      toast.success('Thank you for your message! I will get back to you soon.')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      console.error('Error:', error)
      toast.error('There was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Calculate remaining cooldown time
  const getRemainingTime = () => {
    if (!lastSubmissionTime) return 0
    
    const fiveMinutes = 5 * 60 * 1000
    const currentTime = Date.now()
    const elapsed = currentTime - lastSubmissionTime
    const remaining = Math.max(0, fiveMinutes - elapsed)
    
    return Math.ceil(remaining / 1000) // Return seconds
  }

  const remainingSeconds = getRemainingTime()
  const isOnCooldown = remainingSeconds > 0

  return (
    <section id="contact" className="py-20 bg-white">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Get In Touch</h2>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="What is this regarding?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Please write your message here (minimum 10 characters)"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || isOnCooldown}
                className={`${
                  isSubmitting || isOnCooldown
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-700 hover:bg-blue-800'
                } text-white px-6 py-3 rounded-lg transition-colors shadow-md flex items-center justify-center min-w-[140px]`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : isOnCooldown ? (
                  `Wait ${remainingSeconds}s`
                ) : (
                  'Send Message'
                )}
              </button>

              {isOnCooldown && (
                <div className="text-sm text-gray-600 mt-2">
                  <p>Please wait {Math.floor(remainingSeconds / 60)} minutes and {remainingSeconds % 60} seconds before sending another message.</p>
                </div>
              )}
            </form>
          </div>
          
          <div className="md:w-1/2 bg-blue-50 p-8 rounded-lg shadow-md h-fit">
            <h3 className="text-xl font-semibold text-blue-800 mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-blue-700 mr-3 mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-600">Email</p>
                  <p className="text-gray-800">prerakghimire123@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-blue-700 mr-3 mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-600">Phone</p>
                  <p className="text-gray-800">+977 (98) 62274149</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-blue-700 mr-3 mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-600">Location</p>
                  <p className="text-gray-800">Koteshwor, Kathmandu, Nepal</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-blue-700 mr-3 mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-600">Response Time</p>
                  <p className="text-gray-800">Within 24 hours</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-blue-800 mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/prerak.ghimire.5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/ghimire_prerak1/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-800 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/prerak-ghimire-46226b1a1/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact