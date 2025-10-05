import { Metadata } from 'next'
import { generateMetadata } from '@/lib/seo'
import { Section } from '@/components/ui/Section'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export const metadata: Metadata = generateMetadata('/about')

const team = [
  {
    name: 'Alex Chen',
    role: 'Founder & CEO',
    bio: '10+ years in automation and AI, former tech lead at major e-commerce platforms.',
    avatar: '👨‍💻',
  },
  {
    name: 'Sarah Rodriguez',
    role: 'Head of Development',
    bio: 'Full-stack expert specializing in React, Node.js, and cloud architecture.',
    avatar: '👩‍💻',
  },
  {
    name: 'Marcus Johnson',
    role: 'AI Solutions Architect',
    bio: 'Machine learning engineer with expertise in NLP and automation systems.',
    avatar: '🤖',
  },
]

const values = [
  {
    title: 'Automation First',
    description: 'We believe every repetitive task should be automated, freeing you to focus on growth.',
    icon: 'lightning',
  },
  {
    title: 'Customer Success',
    description: 'Your success is our success. We measure our impact by your business results.',
    icon: 'target',
  },
  {
    title: 'Continuous Innovation',
    description: 'We stay ahead of technology trends to bring you cutting-edge solutions.',
    icon: 'rocket',
  },
]

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'lightning':
      return (
        <svg className="w-8 h-8 mx-auto text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    case 'target':
      return (
        <svg className="w-8 h-8 mx-auto text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    case 'rocket':
      return (
        <svg className="w-8 h-8 mx-auto text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    default:
      return null
  }
}

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Section maxWidth="xl" padding="xl">
        <div className="text-center mb-16">
          <Badge variant="accent" size="md" className="mb-4">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
            About Us
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-ink mb-6">
            We Automate Business
            <br />
            <span className="text-brand-accent">So You Can Scale</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            HorizonWebWorX was founded with a simple mission: help fashion and retail businesses 
            eliminate manual work through intelligent automation and custom web solutions.
          </p>
        </div>

        {/* Story */}
        <GlassCard padding="xl" className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-ink mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Founded in 2023, HorizonWebWorX emerged from a frustration with seeing talented 
                  business owners spending countless hours on repetitive tasks instead of growing 
                  their companies.
                </p>
                <p>
                  Our founders, with backgrounds in e-commerce, AI, and web development, recognized 
                  that small to medium businesses needed enterprise-level automation but with the 
                  simplicity and affordability that matched their scale.
                </p>
                <p>
                  Today, we've helped over 150 businesses automate their operations, saving them 
                  thousands of hours and enabling them to focus on what they do best.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-brand-accent to-brand-primary rounded-xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">150+</div>
                  <div className="text-sm opacity-90">Businesses Automated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">85%</div>
                  <div className="text-sm opacity-90">Average Time Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-sm opacity-90">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">98%</div>
                  <div className="text-sm opacity-90">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-brand-ink text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <GlassCard key={value.title} padding="lg" hover className="text-center">
                <div className="mb-4">{getIcon(value.icon)}</div>
                <h3 className="text-xl font-bold text-brand-ink mb-4">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-brand-ink text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <GlassCard key={member.name} padding="lg" hover className="text-center">
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-bold text-brand-ink mb-2">{member.name}</h3>
                <div className="text-brand-accent font-semibold mb-4">{member.role}</div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <GlassCard padding="xl">
            <h2 className="text-3xl font-bold text-brand-ink mb-4">
              Ready to Automate Your Business?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have transformed their operations with our 
              automation solutions. Let's discuss how we can help you scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" asChild>
                <Link href="/booking">
                  Schedule a Consultation
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/work">
                  View Our Work
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </Link>
              </Button>
            </div>
          </GlassCard>
        </div>
      </Section>
    </div>
  )
}
