'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { googleRating, reviews } from '@/lib/reviews'
import { site } from '@/lib/site'

function GoogleMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.9z" />
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z" />
    </svg>
  )
}

function Stars({ className }: { className?: string }) {
  return (
    <span className={`flex gap-0.5 ${className ?? ''}`} aria-label="5 na 5 gwiazdek" role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-3.5 fill-[#FBBC04] text-[#FBBC04]" aria-hidden />
      ))}
    </span>
  )
}

export function Reviews() {
  const trackRef = useRef<HTMLUListElement>(null)

  const scrollBy = (dir: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('li')
    const step = card ? card.getBoundingClientRect().width + 16 : 300
    track.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <section id="opinie" aria-labelledby="opinie-title" className="mx-auto mt-14 max-w-6xl px-5 md:mt-24 md:px-8">
      <Reveal>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 id="opinie-title" className="text-3xl font-semibold tracking-tight md:text-5xl">
              Co mówią klienci
            </h2>
            <a
              href={site.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-3 rounded-full border border-border bg-card py-1.5 pl-2 pr-4 shadow-sm transition-colors hover:border-primary/40"
            >
              <GoogleMark className="size-6" />
              <span className="text-base font-semibold text-foreground">{googleRating.value}</span>
              <Stars />
              <span className="text-xs text-muted-foreground">{googleRating.count} opinii w Google</span>
            </a>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Poprzednia opinia"
              className="flex size-11 items-center justify-center rounded-full border border-border bg-card text-primary-deep transition-colors hover:bg-primary-deep hover:text-primary-foreground"
            >
              <ChevronLeft className="size-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Następna opinia"
              className="flex size-11 items-center justify-center rounded-full border border-border bg-card text-primary-deep transition-colors hover:bg-primary-deep hover:text-primary-foreground"
            >
              <ChevronRight className="size-5" aria-hidden />
            </button>
          </div>
        </div>
      </Reveal>

      <Reveal delay={60}>
        <ul
          ref={trackRef}
          className="-mx-5 mt-7 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth scroll-px-5 px-5 pb-3 md:scroll-px-0 [scrollbar-width:none] md:mx-0 md:mt-10 md:px-0 [&::-webkit-scrollbar]:hidden"
        >
          {reviews.map((r) => (
            <li
              key={r.author}
              className="flex w-[82%] shrink-0 snap-start flex-col rounded-2xl border border-border bg-card p-5 sm:w-[46%] lg:w-[calc((100%-2rem)/3)]"
            >
              <div className="flex items-center gap-3">
                <span
                  className="flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
                  style={{ backgroundColor: r.color }}
                  aria-hidden
                >
                  {r.initial}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-foreground">{r.author}</p>
                  <Stars className="mt-1" />
                </div>
                <GoogleMark className="size-5 shrink-0" />
              </div>
              <blockquote className="mt-4 line-clamp-5 text-pretty text-sm leading-relaxed text-muted-foreground">
                {`„${r.text}”`}
              </blockquote>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
