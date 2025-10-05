'use client'

import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [scrollPercent, setScrollPercent] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = (scrollTop / docHeight) * 100
      setScrollPercent(Math.min(scrolled, 100))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-20 left-8 w-1 h-48 bg-white bg-opacity-20 rounded-full z-50 hidden lg:block">
      <div 
        className="w-full bg-gradient-to-b from-brand-accent to-blue-500 rounded-full transition-all duration-100 ease-out"
        style={{ height: `${scrollPercent}%` }}
      />
    </div>
  )
}
