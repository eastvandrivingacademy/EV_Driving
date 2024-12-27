'use client'

import { useEffect, useRef } from 'react'

export function GoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (mapRef.current) {
      // Clear any existing children to avoid duplicates
      mapRef.current.innerHTML = ''

      const iframe = document.createElement('iframe')
      iframe.style.border = '0'
      iframe.src = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyAVPPljqDOZQY_NsK7lEyk4DiOjZVvM7kc&q=eastvan+driving+academy'
      iframe.width = '100%'
      iframe.height = '100%'
      iframe.allowFullscreen = true
      iframe.loading = 'lazy'
      iframe.referrerPolicy = 'no-referrer-when-downgrade'
      mapRef.current.appendChild(iframe)
    }
  }, [])

  return <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
}
