'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { clsx } from 'clsx'
import { ThemeToggle } from './ThemeToggle'
import { Button } from '../ui/Button'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/#services' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Work', href: '/work' },
  { name: 'About', href: '/about' },
]

export function MenuBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'glass backdrop-blur-md border-b border-white border-opacity-20'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 text-xl font-bold text-brand-ink"
          >
            <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span>HorizonWebWorX</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-brand-ink hover:text-brand-accent transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="accent" size="sm" asChild>
              <Link href="/booking">Book Demo</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-ink hover:text-brand-accent transition-colors duration-200 p-2"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={clsx(
            'md:hidden transition-all duration-300 ease-in-out overflow-hidden',
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="py-4 space-y-4 border-t border-white border-opacity-20">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-brand-ink hover:text-brand-accent transition-colors duration-200 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-white border-opacity-20">
              <Button variant="accent" size="sm" className="w-full" asChild>
                <Link href="/booking" onClick={() => setIsOpen(false)}>
                  Book Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
