'use client'

import { ReactNode, useEffect, useRef } from 'react'

interface HorizontalScrollProps {
  children: ReactNode
}

export function HorizontalScroll({ children }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollContentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const scrollContent = scrollContentRef.current
    
    if (!container || !scrollContent) return

    const handleScroll = () => {
      const heroSection = document.querySelector('#hero') as HTMLElement
      const scrollTop = window.pageYOffset
      
      if (!heroSection) return
      
      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
      
      // Check if we're past the hero section (start of horizontal scroll zone)
      if (scrollTop > heroBottom) {
        const horizontalScrollProgress = scrollTop - heroBottom
        const maxHorizontalScroll = container.offsetHeight - window.innerHeight
        
        if (horizontalScrollProgress <= maxHorizontalScroll) {
          const scrollSections = scrollContent.children
          const sectionWidth = window.innerWidth
          const maxTranslate = (scrollSections.length - 1) * sectionWidth
          
          const translateX = (horizontalScrollProgress / maxHorizontalScroll) * maxTranslate
          scrollContent.style.transform = `translateX(-${translateX}px)`
          scrollContent.style.transition = 'transform 0.1s ease-out'
        }
      } else {
        // Reset to beginning when above hero section
        scrollContent.style.transform = 'translateX(0px)'
        scrollContent.style.transition = 'transform 0.1s ease-out'
      }
    }

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Initial call
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="horizontal-container"
    >
      <div className="horizontal-scroll">
        <div 
          ref={scrollContentRef}
          className="scroll-content"
        >
          {children}
        </div>
      </div>
    </div>
  )
}
