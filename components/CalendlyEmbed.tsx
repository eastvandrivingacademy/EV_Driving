'use client'

import { useEffect } from 'react'

interface CalendlyEmbedProps {
  url: string
}

export function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div 
      className="calendly-inline-widget" 
      data-url={url}
      style={{ minWidth: '320px', height: '700px' }}
    />
  )
}

