// src/components/NotFound.jsx
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* Animated 404 Text */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-800 mb-4 relative">
            <span className="text-blue-600">4</span>
            <span className="text-gray-400">0</span>
            <span className="text-blue-600">4</span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </h1>
        </div>

        {/* Message */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            The page you're looking for seems to have wandered off into the digital wilderness. 
            Don't worry, let's get you back on track.
          </p>
        </div>

        {/* Illustration/SVG */}
        <div className="mb-8">
          <svg 
            className="w-64 h-64 mx-auto text-gray-400" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5"
          >
            <path 
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M12 2a10 10 0 00-10 10" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-blue-400"
            />
            <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Go Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Go Back
          </button>
        </div>

        {/* Additional Help */}
        <div className="mt-8 p-4 bg-white rounded-lg shadow-sm">
          <p className="text-gray-600 text-sm mb-2">Still lost? Try these:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/about" className="text-blue-600 hover:text-blue-800 text-sm">
              About Me
            </Link>
            <Link to="/contact" className="text-blue-600 hover:text-blue-800 text-sm">
              Contact
            </Link>
            <Link to="/skills" className="text-blue-600 hover:text-blue-800 text-sm">
              Skills
            </Link>
          </div>
        </div>

        {/* Fun Message */}
        <div className="mt-8">
          <p className="text-gray-500 text-xs">
            "Not all who wander are lost, but this page definitely is."
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotFound