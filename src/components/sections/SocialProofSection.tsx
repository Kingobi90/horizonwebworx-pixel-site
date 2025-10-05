import Link from 'next/link'
import { GlassCard } from '../ui/GlassCard'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'

const testimonials = [
  {
    quote: "HorizonWebWorX transformed our business. The AI receptionist handles 80% of our customer inquiries, and our new wholesale portal increased orders by 150%.",
    author: "Sarah Chen",
    title: "CEO, StyleCo Fashion",
    avatar: "/placeholder-avatar1.jpg",
    rating: 5,
  },
  {
    quote: "The automation they built saved us 20 hours per week. Now we can focus on design and growth instead of manual data entry and inventory management.",
    author: "Marcus Rodriguez",
    title: "Founder, TrendHub",
    avatar: "/placeholder-avatar2.jpg",
    rating: 5,
  },
  {
    quote: "Professional, fast, and exactly what we needed. The booking system they created handles all our appointments seamlessly. Highly recommend!",
    author: "Emily Watson",
    title: "Owner, Bella Boutique",
    avatar: "/placeholder-avatar3.jpg",
    rating: 5,
  },
]

const logos = [
  { name: 'StyleCo', width: 120 },
  { name: 'TrendHub', width: 100 },
  { name: 'Bella Boutique', width: 140 },
  { name: 'RetailMax', width: 110 },
  { name: 'FashionForward', width: 130 },
]

export function SocialProofSection() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-50 to-red-100 dark:from-gray-900 dark:to-orange-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="accent" size="md" className="mb-4">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            Social Proof
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-ink mb-6">
            Trusted by Growing
            <br />
            <span className="text-brand-accent">Fashion Businesses</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join hundreds of fashion and retail businesses that have automated their operations 
            and scaled their growth with our solutions.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <GlassCard key={testimonial.author} className="h-full">
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-600 dark:text-gray-300 mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-accent to-brand-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-brand-ink">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Trusted by leading fashion and retail brands
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="h-8 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center px-4"
                style={{ width: logo.width }}
              >
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-accent mb-2">150+</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-accent mb-2">98%</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-accent mb-2">24/7</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-accent mb-2">85%</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Time Savings</div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <Button variant="accent" size="lg" asChild>
            <Link href="/booking">
              Join Our Success Stories
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
