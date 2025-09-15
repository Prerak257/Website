import { useState, useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loading from './components/Loading'

// Lazy load the policy pages
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicyPage'))
const TermsOfService = lazy(() => import('./components/TermsOfServicePage'))
const CookiePolicy = lazy(() => import('./components/CookiePolicyPage'))
const NotFound = lazy(() => import('./components/NotFound'))

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <Router>
      <div className="App">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={
              <>
                <Header />
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Education />
                <Contact />
                <Footer />
              </>
            } />
            
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  )
}

export default App
