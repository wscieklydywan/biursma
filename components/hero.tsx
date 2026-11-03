import { HeroVisual } from '@/components/hero-visual'
import { ArrowRight } from 'lucide-react'

const stats = [
  { value: '5,0', label: 'ocena w opiniach Google', rating: true },
  { value: '10+', label: 'lat doświadczenia' },
  { value: '50+', label: 'obsługiwanych firm' },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-20 md:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-[420px] w-[60%] -skew-x-[28deg] bg-gradient-to-b from-secondary/70 to-transparent md:h-[620px]"
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="relative grid grid-cols-[minmax(0,1fr)_40%] gap-x-3 sm:grid-cols-[minmax(0,1fr)_42%] lg:grid-cols-[1.05fr_1fr] lg:grid-rows-[1fr_auto_auto_1fr] lg:gap-x-12">
          <div className="relative z-10 col-start-1 row-start-1 pt-4 md:pt-10 lg:row-start-2">
            <h1>
              <span className="hero-in block whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.22em] text-foreground/70 md:text-xs">
                Biuro Rachunkowe Sigma – Rybnik
              </span>
              <span
                className="hero-in mt-4 block text-balance text-[2rem] font-semibold leading-[1.08] tracking-tight text-foreground sm:max-w-md sm:text-5xl lg:max-w-none lg:text-6xl"
                style={{ animationDelay: '60ms' }}
              >
                Spokój w finansach Twojej firmy
              </span>
            </h1>
            <p
              className="hero-in mt-4 text-pretty text-[15px] leading-relaxed text-muted-foreground sm:max-w-md md:text-lg lg:max-w-lg"
              style={{ animationDelay: '120ms' }}
            >
              Księgowość, kadry i podatki – kompleksowo, rzetelnie i na czas.
            </p>
          </div>

          <div
            className="hero-in relative col-start-2 row-start-1 -mr-5 mt-14 min-h-[44vw] sm:mt-16 md:-mr-8 lg:row-span-4 lg:row-start-1 lg:mr-0 lg:mt-0 lg:h-[520px] lg:min-h-0"
            style={{ animationDelay: '100ms' }}
          >
            <HeroVisual />
          </div>

          <div className="relative z-10 col-span-2 row-start-2 lg:col-span-1 lg:col-start-1 lg:row-start-3">
            <div className="hero-in mt-7 flex flex-wrap gap-3" style={{ animationDelay: '180ms' }}>
              <a
                href="#kontakt"
                className="group inline-flex h-12 items-center gap-3 rounded-xl bg-primary-deep px-5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary-deep/15 transition-transform hover:-translate-y-0.5 md:h-14 md:px-7 md:text-base"
              >
                Umów konsultację
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </a>
              <a
                href="#oferta"
                className="inline-flex h-12 items-center rounded-xl border border-primary-deep/80 px-5 text-sm font-semibold text-primary-deep transition-colors hover:bg-primary-deep hover:text-primary-foreground md:h-14 md:px-7 md:text-base"
              >
                Poznaj ofertę
              </a>
            </div>
          </div>
        </div>

        <dl className="mt-10 grid grid-cols-3 gap-4 md:mt-16 md:max-w-3xl md:gap-10">
          {stats.map(({ value, label, rating }, i) => (
            <div
              key={label}
              className="hero-in border-t-2 border-gold/70 pt-3 md:pt-4"
              style={{ animationDelay: `${240 + i * 60}ms` }}
            >
              <dt className="sr-only">{label}</dt>
              <dd className="flex items-baseline gap-1.5">
                <span className="text-2xl font-semibold leading-none tracking-tight text-foreground tabular-nums md:text-4xl">
                  {value}
                </span>
                {rating && (
                  <span className="text-xs tracking-tighter text-gold md:text-base" aria-hidden>
                    {'★★★★★'}
                  </span>
                )}
              </dd>
              <dd aria-hidden className="mt-1.5 text-[11px] leading-tight text-muted-foreground md:text-sm">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
