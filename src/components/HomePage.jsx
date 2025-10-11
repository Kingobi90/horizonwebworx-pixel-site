import HeroSection from './HeroSection'
import ServicesSection from './ServicesSection'
import AboutSection from './AboutSection'
import PortfolioSection from './PortfolioSection'
import StatsSection from './StatsSection'
import HomePricingSection from './HomePricingSection'
import BlogSection from './BlogSection'
import CTASection from './CTASection'
import Footer from './Footer'

export default function HomePage() {
  return (
    <>
      <main className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <PortfolioSection />
        <StatsSection />
        <HomePricingSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
