'use client'

import { useEffect, useRef, useState } from 'react'
import { Maximize2, Minimize2 } from 'lucide-react'
import { site } from '@/lib/site'

export function MapEmbed() {
  const ref = useRef<HTMLDivElement>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const onChange = () => setIsFullscreen(document.fullscreenElement === ref.current)
    document.addEventListener('fullscreenchange', onChange)
    return () => document.removeEventListener('fullscreenchange', onChange)
  }, [])

  const toggle = async () => {
    const el = ref.current
    if (!el) return
    if (document.fullscreenElement) {
      await document.exitFullscreen()
      return
    }
    if (el.requestFullscreen) {
      try {
        await el.requestFullscreen()
        return
      } catch {}
    }
    window.open(site.mapsHref, '_blank', 'noopener,noreferrer')
  }

  return (
    <div ref={ref} className="relative min-h-64 flex-1 overflow-hidden rounded-3xl border border-border bg-muted">
      <iframe
        title="Mapa dojazdu – ul. Gliwicka 296, Rybnik"
        src="https://www.google.com/maps?q=ul.+Gliwicka+296,+Rybnik&z=16&output=embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="absolute inset-0 size-full grayscale-[0.4]"
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={isFullscreen ? 'Zamknij pełny ekran' : 'Pokaż mapę na pełnym ekranie'}
        className="absolute bottom-3 right-3 flex size-11 items-center justify-center rounded-full bg-primary-deep text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95"
      >
        {isFullscreen ? <Minimize2 className="size-5" aria-hidden /> : <Maximize2 className="size-5" aria-hidden />}
      </button>
    </div>
  )
}
