import { Metadata } from 'next'
import { generateMetadata, generateBookingSchema } from '@/lib/seo'
import { BookingSection } from '@/components/sections/BookingSection'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = generateMetadata('/booking')

export default function BookingPage() {
  return (
    <>
      <JsonLd data={generateBookingSchema()} />
      <div className="pt-16">
        <BookingSection />
      </div>
    </>
  )
}
