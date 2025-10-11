'use client'

import { useState } from 'react'
import { Section } from '../ui/Section'
import { GlassCard } from '../ui/GlassCard'
import { Calendar } from '../ui/Calendar'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
// Removed hwxTrack import to prevent module errors

// Mock available dates (in a real app, this would come from Cal.com API)
const generateAvailableDates = () => {
  const dates = []
  const today = new Date()
  
  for (let i = 1; i < 30; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    
    // Skip weekends for demo purposes
    if (date.getDay() !== 0 && date.getDay() !== 6) {
      dates.push(date)
    }
  }
  
  return dates
}

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM'
]

interface BookingFormData {
  name: string
  email: string
  company: string
  message: string
}

export function BookingSection() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [step, setStep] = useState<'datetime' | 'details' | 'confirmation'>('datetime')
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const availableDates = generateAvailableDates()

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
    setSelectedTime(null) // Reset time when date changes
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
  }

  const handleContinueToDetails = () => {
    if (selectedDate && selectedTime) {
      // hwxTrack('booking_datetime_selected', {
      //   date: selectedDate.toISOString(),
      //   time: selectedTime,
      // })
      setStep('details')
    }
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real app, this would integrate with Cal.com API and SendGrid
      await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate API call

      // hwxTrack('booking_completed', {
      //   date: selectedDate?.toISOString(),
      //   time: selectedTime,
      //   name: formData.name,
      //   company: formData.company,
      // })

      setStep('confirmation')
    } catch (error) {
      console.error('Booking failed:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFormChange = (field: keyof BookingFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <Section maxWidth="xl" padding="xl">
      <div className="text-center mb-12">
        <Badge variant="accent" size="md" className="mb-4">
          📅 Book a Demo
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-brand-ink mb-6">
          Pick a Date and Time
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Choose from available slots. We'll confirm via email after you select.
        </p>
      </div>

      {step === 'datetime' && (
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Calendar */}
          <GlassCard padding="lg">
            <h2 className="text-xl font-semibold text-brand-ink mb-4">Select Date</h2>
            <Calendar
              selectedDate={selectedDate}
              onDateSelect={handleDateSelect}
              availableDates={availableDates}
            />
          </GlassCard>

          {/* Time Slots */}
          <GlassCard padding="lg">
            <h2 className="text-xl font-semibold text-brand-ink mb-4">
              Select Time
              {selectedDate && (
                <span className="text-sm font-normal text-gray-500 ml-2">
                  for {selectedDate.toLocaleDateString()}
                </span>
              )}
            </h2>
            
            {!selectedDate ? (
              <p className="text-gray-500 dark:text-gray-400 text-center py-8">
                Please select a date first
              </p>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => handleTimeSelect(time)}
                    className={`p-3 text-sm rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent ${
                      selectedTime === time
                        ? 'border-brand-accent bg-brand-accent text-white'
                        : 'border-gray-200 dark:border-gray-600 hover:border-brand-accent hover:bg-brand-accent hover:bg-opacity-10'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            )}

            {selectedDate && selectedTime && (
              <div className="mt-6">
                <Button
                  variant="accent"
                  size="lg"
                  className="w-full"
                  onClick={handleContinueToDetails}
                >
                  Continue to Details
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>
            )}
          </GlassCard>
        </div>
      )}

      {step === 'details' && (
        <div className="max-w-2xl mx-auto">
          <GlassCard padding="xl">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-brand-ink mb-2">
                Almost Done!
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Your demo is scheduled for {selectedDate?.toLocaleDateString()} at {selectedTime}.
                Please provide your details below.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-ink mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => handleFormChange('name', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent bg-white dark:bg-gray-800 text-brand-ink"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-ink mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleFormChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent bg-white dark:bg-gray-800 text-brand-ink"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-brand-ink mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleFormChange('company', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent bg-white dark:bg-gray-800 text-brand-ink"
                  placeholder="Enter your company name (optional)"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-ink mb-2">
                  What would you like to discuss?
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleFormChange('message', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent bg-white dark:bg-gray-800 text-brand-ink resize-none"
                  placeholder="Tell us about your business needs, current challenges, or specific automation ideas..."
                />
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="flex-1"
                  onClick={() => setStep('datetime')}
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="flex-1"
                  loading={isSubmitting}
                >
                  {isSubmitting ? 'Booking...' : 'Confirm Booking'}
                </Button>
              </div>
            </form>
          </GlassCard>
        </div>
      )}

      {step === 'confirmation' && (
        <div className="max-w-2xl mx-auto text-center">
          <GlassCard padding="xl">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-brand-ink mb-2">
                Booking Confirmed!
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Your demo is scheduled for <strong>{selectedDate?.toLocaleDateString()}</strong> at <strong>{selectedTime}</strong>.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-brand-ink mb-3">What's Next?</h3>
              <ul className="text-left space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  You'll receive a confirmation email with calendar invite
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  We'll send you a Zoom link 24 hours before the meeting
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Come prepared with questions about your business needs
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" size="lg" className="flex-1" asChild>
                <a href="/" className="inline-flex items-center justify-center">
                  Back to Home
                </a>
              </Button>
              <Button variant="accent" size="lg" className="flex-1" asChild>
                <a href="/pricing" className="inline-flex items-center justify-center">
                  View Pricing
                </a>
              </Button>
            </div>
          </GlassCard>
        </div>
      )}
    </Section>
  )
}
