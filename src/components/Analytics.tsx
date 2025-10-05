'use client'

import { useEffect } from 'react'

interface AnalyticsProps {
  page: string
}

export function Analytics({ page }: AnalyticsProps) {
  useEffect(() => {
    // Track page view on mount - simplified for stability
    console.log(`[HWX Analytics] page_view`, { page })
    
    // In production, this would send to your analytics service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: page,
        page_location: window.location.href
      })
    }
  }, [page])

  return null // This component doesn't render anything visible
}
