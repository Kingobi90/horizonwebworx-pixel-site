import CRTEffect from './components/CRTEffect'
import ThreeBackground from './components/ThreeBackground'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import StatsSection from './components/StatsSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white font-arcade overflow-x-hidden">
      {/* CRT Screen Effect */}
      <CRTEffect />
      
      {/* 3D Background */}
      <ThreeBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <CTASection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
