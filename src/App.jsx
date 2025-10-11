import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CRTEffect from './components/CRTEffect'
import Navigation from './components/Navigation'
import SEO from './components/SEO'
import HomePage from './components/HomePage'
import ContactPage from './components/ContactPage'
import BlogPage from './components/BlogPage'
import PricingPage from './components/PricingPage'
import AboutPage from './components/AboutPage'
import PortfolioPage from './components/PortfolioPage'

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-black text-white font-arcade overflow-x-hidden">
        {/* SEO Component */}
        <SEO />
        
        {/* CRT Screen Effect */}
        <CRTEffect />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
