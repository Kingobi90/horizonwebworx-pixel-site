import { lazy, Suspense } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import CRTEffect from './components/CRTEffect';
import Navigation from './components/Navigation';
import SEOHead from './components/SEOHead';
import HeroSection from './components/HeroSection';

// Lazy load non-critical components
const AboutSection = lazy(() => import('./components/AboutSection'));
const ServicesSection = lazy(() => import('./components/ServicesSection'));
const PortfolioSection = lazy(() => import('./components/PortfolioSection'));
const PricingSection = lazy(() => import('./components/PricingSection'));
const StatsSection = lazy(() => import('./components/StatsSection'));
const BlogSection = lazy(() => import('./components/BlogSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const CTASection = lazy(() => import('./components/CTASection'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <LanguageProvider>
      <div className="relative">
        <SEOHead />
        <CRTEffect />
        <Navigation />

        <div className="relative z-[4]">
          <HeroSection />
          <Suspense fallback={<div className="min-h-screen" />}>
            <ServicesSection />
            <AboutSection />
            <PortfolioSection />
            <StatsSection />
            <PricingSection />
            <BlogSection />
            <ContactSection />
            <CTASection />
            <Footer />
          </Suspense>
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
