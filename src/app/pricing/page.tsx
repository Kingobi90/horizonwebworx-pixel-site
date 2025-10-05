import { Metadata } from 'next'
import { generateMetadata } from '@/lib/seo'
import { PricingSection } from '@/components/sections/PricingSection'
import { PricingFAQ } from '@/components/sections/PricingFAQ'

export const metadata: Metadata = generateMetadata('/pricing')

export default function PricingPage() {
  return (
    <div className="pt-16">
      <PricingSection />
      <PricingFAQ />
    </div>
  )
}
