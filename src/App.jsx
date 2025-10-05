import { LanguageProvider } from './context/LanguageContext';
import CRTEffect from './components/CRTEffect';
import Navigation from './components/Navigation';
import SEOHead from './components/SEOHead';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import PricingSection from './components/PricingSection';
import StatsSection from './components/StatsSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="relative">
        <SEOHead />
        <CRTEffect />
        <Navigation />

        <div className="relative z-[4]">
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <PortfolioSection />
          <StatsSection />
          <PricingSection />
          <BlogSection />
          <ContactSection />
          <CTASection />
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
