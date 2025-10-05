// src/components/Header.jsx - Enhanced Detached/Attached Feel
import { useState, useEffect, useRef } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState('up')

  // Refs to track scroll behavior
  const scrollTimeoutRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down')
      } else {
        setScrollDirection('up')
      }

      // Clear any existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }

      // Hide navbar when scrolling down, show when scrolling up
      if (scrollDirection === 'down' && currentScrollY > 100 && !isHidden) {
        setIsHidden(true)
      } else if (scrollDirection === 'up' && isHidden) {
        setIsHidden(false)
      }

      // Set scrolled state for visual changes
      setIsScrolled(currentScrollY > 30)

      // Update last scroll position
      setLastScrollY(currentScrollY)

      // Auto-show navbar when scrolling stops
      scrollTimeoutRef.current = setTimeout(() => {
        if (scrollDirection === 'down' && currentScrollY > 100) {
          setIsHidden(true)
        } else {
          setIsHidden(false)
        }
      }, 1000)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [lastScrollY, scrollDirection, isHidden])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const handleNameClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className={`fixed w-full z-50 transition-all duration-700 ease-in-out ${
      isHidden 
        ? '-translate-y-full opacity-0 pointer-events-none' 
        : 'translate-y-0 opacity-100 shadow-2xl'
    } ${
      isScrolled 
        ? 'bg-white/97 backdrop-blur-2xl border-b border-blue-200/40 py-2 shadow-2xl' 
        : 'bg-white/85 backdrop-blur-xl border-b border-blue-200/20 py-4 shadow-lg'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Name with enhanced hover effects */}
          <div 
            className={`text-xl font-bold cursor-pointer transition-all duration-500 ${
              isScrolled 
                ? 'text-blue-800 hover:text-blue-600 scale-105 tracking-tight' 
                : 'text-blue-800 hover:text-blue-700 tracking-normal'
            }`}
            onClick={handleNameClick}
          >
            Prerak Ghimire
            <div className={`h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-500 ${
              isScrolled ? 'w-full mt-1' : 'w-0 mt-1'
            }`}></div>
          </div>
          
          {/* Desktop Navigation with enhanced effects */}
          <nav className="hidden md:flex space-x-10">
            {['about', 'skills', 'experience', 'education', 'contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)} 
                className={`relative transition-all duration-500 font-medium capitalize group ${
                  isScrolled 
                    ? 'text-gray-900 hover:text-blue-700 py-1' 
                    : 'text-gray-800 hover:text-blue-600 py-2'
                }`}
              >
                {item}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-500 ${
                  isScrolled 
                    ? 'w-0 group-hover:w-full' 
                    : 'w-0 group-hover:w-3/4'
                }`}></span>
                <span className={`absolute -bottom-1 -inset-x-1 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent transition-all duration-700 ${
                  isScrolled ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
                }`}></span>
              </button>
            ))}
          </nav>
          
          {/* Mobile Menu Button with enhanced animation */}
          <button 
            className={`md:hidden focus:outline-none transition-all duration-500 p-2 rounded-lg ${
              isScrolled 
                ? 'text-gray-900 hover:text-blue-700 bg-white/50 hover:bg-blue-50/80' 
                : 'text-gray-800 hover:text-blue-600 bg-white/30 hover:bg-blue-50/60'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className={`w-6 h-6 transition-transform duration-500 ${isMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        
        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden mt-4 mb-2 rounded-2xl border transition-all duration-700 overflow-hidden ${
            isScrolled 
              ? 'bg-white/95 backdrop-blur-2xl border-gray-300/50 shadow-2xl' 
              : 'bg-white/90 backdrop-blur-xl border-gray-300/30 shadow-xl'
          }`}>
            <div className="flex flex-col p-2">
              {['about', 'skills', 'experience', 'education', 'contact'].map((item, index) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item)} 
                  className={`text-left transition-all duration-500 py-4 px-6 font-medium rounded-xl capitalize border-b border-gray-200/30 last:border-b-0 group ${
                    isScrolled 
                      ? 'text-gray-900 hover:text-blue-700 hover:bg-blue-50/90 transform hover:translate-x-3 hover:scale-105' 
                      : 'text-gray-800 hover:text-blue-600 hover:bg-blue-50/70 transform hover:translate-x-2'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <span className="flex items-center">
                    <span className={`w-2 h-2 bg-blue-500 rounded-full mr-3 transition-all duration-500 ${
                      isScrolled ? 'group-hover:scale-150' : 'group-hover:scale-125'
                    } group-hover:bg-blue-600`}></span>
                    {item}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header