'use client'

import Link from 'next/link'
import { Section } from '../ui/Section'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'

export function HeroSection() {
  const handleCTAClick = (action: string) => {
    console.log(`[HWX Analytics] cta_click`, { action, location: 'hero' })
    
    // In production, this would send to your analytics service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click', {
        event_category: 'CTA',
        event_label: action,
        event_location: 'hero'
      })
    }
  }

  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-bg via-brand-bg to-gray-50 dark:from-brand-bg dark:via-brand-bg dark:to-gray-900" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-accent opacity-10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-primary opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <Section maxWidth="2xl" className="relative z-10 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="flex justify-center">
            <Badge variant="accent" size="md">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Automation-First Solutions
            </Badge>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-brand-ink leading-tight">
            Automate Your Business
            <br />
            <span className="text-brand-accent">Scale Your Growth</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Custom websites, AI tools, and automation solutions for fashion and retail businesses. 
            From AI receptionists to wholesale portals—we build what you need to succeed.
          </p>

          {/* Key benefits */}
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-gray-500 dark:text-gray-400">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              AI-Powered Automation
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Custom Web Solutions
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              24/7 Support
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              variant="accent"
              size="lg"
              onClick={() => handleCTAClick('book_demo')}
              asChild
            >
              <Link href="/booking">
                Book a Demo
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </Link>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleCTAClick('see_pricing')}
              asChild
            >
              <Link href="/pricing">
                See Pricing
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </Button>
          </div>

          {/* Social proof indicator */}
          <div className="pt-12">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Trusted by growing businesses
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              {/* Placeholder for client logos */}
              <div className="w-24 h-8 bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="w-24 h-8 bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="w-24 h-8 bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="w-24 h-8 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-gray-400">
            <span className="text-sm mb-2">Scroll to explore</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </Section>
    </section>
  )
}
