'use client'

import { useEffect } from 'react'

interface JsonLdProps {
  data: object
}

export function JsonLd({ data }: JsonLdProps) {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(data)
    document.head.appendChild(script)

    return () => {
      // Cleanup: remove the script when component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [data])

  return null // This component doesn't render anything visible
}
