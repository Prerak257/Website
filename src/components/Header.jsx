// src/components/Header.jsx
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  // Function to handle name click - scroll to top and redirect to home
  const handleNameClick = () => {
    // Scroll to top with smooth animation
    window.scrollTo({ top: 0, behavior: 'smooth' })
    
    // If you're using React Router, you might want to use:
    // navigate('/') 
    // But for a simple single-page app, scrolling to top is sufficient
  }

  return (
    <header className="fixed w-full bg-white shadow-sm z-10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Updated name with click handler */}
          <div 
            className="text-xl font-bold text-blue-800 cursor-pointer hover:text-blue-600 transition-colors"
            onClick={handleNameClick}
          >
            Prerak Ghimire
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-700 transition-colors">About</button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-blue-700 transition-colors">Skills</button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-600 hover:text-blue-700 transition-colors">Experience</button>
            <button onClick={() => scrollToSection('education')} className="text-gray-600 hover:text-blue-700 transition-colors">Education</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-700 transition-colors">Contact</button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-600 hover:text-blue-700 transition-colors py-2">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-left text-gray-600 hover:text-blue-700 transition-colors py-2">Skills</button>
              <button onClick={() => scrollToSection('experience')} className="text-left text-gray-600 hover:text-blue-700 transition-colors py-2">Experience</button>
              <button onClick={() => scrollToSection('education')} className="text-left text-gray-600 hover:text-blue-700 transition-colors py-2">Education</button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-600 hover:text-blue-700 transition-colors py-2">Contact</button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header