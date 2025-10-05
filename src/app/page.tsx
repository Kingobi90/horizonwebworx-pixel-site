import { HeroSection } from '@/components/sections/HeroSection'
import { HorizontalScroll } from '@/components/HorizontalScroll'
import { AutomationsSection } from '@/components/sections/AutomationsSection'
import { WebsitesSection } from '@/components/sections/WebsitesSection'
import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection'
import { SocialProofSection } from '@/components/sections/SocialProofSection'
import { Analytics } from '@/components/Analytics'

export default function HomePage() {
  return (
    <>
      <Analytics page="home" />
      
      {/* Hero Section - Normal Vertical Scroll */}
      <HeroSection />

      {/* Horizontal Scroll Experience */}
      <HorizontalScroll>
        <AutomationsSection />
        <WebsitesSection />
        <CaseStudiesSection />
        <SocialProofSection />
      </HorizontalScroll>
    </>
  )
}
