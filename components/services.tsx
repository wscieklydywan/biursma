'use client'

import { useState } from 'react'
import { ArrowRight, ChartColumnIncreasing, Layers, Percent, Users, type LucideIcon } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

type Service = {
  icon: LucideIcon
  title: string
  short: string
  points: string[]
}

const services: Service[] = [
  {
    icon: ChartColumnIncreasing,
    title: 'Księgowość firm',
    short: 'KPiR, pełna księgowość, rozliczenia',
    points: [
      'Księga przychodów i rozchodów oraz ryczałt',
      'Pełna księgowość spółek i fundacji',
      'Rozliczenia VAT, JPK, KSeF',
      'Sprawozdania finansowe',
    ],
  },
  {
    icon: Users,
    title: 'Kadry i płace',
    short: 'Umowy, listy płac, ZUS',
    points: [
      'Umowy o pracę, zlecenia i o dzieło',
      'Listy płac i rozliczenia wynagrodzeń',
      'Deklaracje ZUS, PFRON, PIT-11',
      'Dokumentacja pracownicza',
    ],
  },
  {
    icon: Percent,
    title: 'Doradztwo podatkowe',
    short: 'Optymalizacja rozliczeń i bieżące wsparcie',
    points: [
      'Wybór optymalnej formy opodatkowania',
      'Bieżące konsultacje i interpretacje',
      'Wsparcie podczas kontroli US i ZUS',
    ],
  },
  {
    icon: Layers,
    title: 'Zakładanie firmy',
    short: 'Rejestracja działalności i wybór formy opodatkowania',
    points: [
      'Rejestracja w CEIDG lub KRS',
      'Zgłoszenia do VAT i ZUS',
      'Plan startowy – koszty, ulgi, preferencje',
    ],
  },
]

export function Services() {
  const [open, setOpen] = useState(0)

  return (
    <section id="oferta" className="mx-auto mt-16 max-w-6xl px-5 md:mt-28 md:px-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            W czym <br />
            Ci pomagamy?
          </h2>
          <p className="mt-4 hidden max-w-xs text-pretty leading-relaxed text-muted-foreground lg:block">
            Prowadzimy firmy z Rybnika i okolic – od jednoosobowych działalności po spółki z pracownikami.
          </p>
        </Reveal>

        <ul className="-mx-2 flex flex-col">
          {services.map((service, i) => {
            const isOpen = open === i
            const Icon = service.icon
            return (
              <Reveal as="li" key={service.title} delay={i * 50}>
                <div
                  className={cn(
                    'rounded-2xl transition-colors duration-300',
                    isOpen ? 'bg-accent' : 'hover:bg-muted',
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`service-${i}`}
                    className="flex w-full items-center gap-4 px-3 py-4 text-left md:gap-6 md:px-5 md:py-5"
                  >
                    <Icon className="size-7 shrink-0 text-primary md:size-8" strokeWidth={1.4} aria-hidden />
                    <span className="min-w-0 flex-1">
                      <span className="block text-base font-semibold text-foreground md:text-lg">{service.title}</span>
                      <span className="mt-0.5 block text-[13px] leading-snug text-muted-foreground md:text-sm">
                        {service.short}
                      </span>
                    </span>
                    <ArrowRight
                      className={cn(
                        'size-5 shrink-0 text-foreground/70 transition-transform duration-300',
                        isOpen && 'rotate-90 text-primary',
                      )}
                      aria-hidden
                    />
                  </button>
                  <div
                    id={`service-${i}`}
                    className={cn(
                      'grid transition-[grid-template-rows] duration-300 ease-out',
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                    )}
                  >
                    <div className="overflow-hidden">
                      <ul className="flex flex-col gap-2 pb-5 pl-14 pr-4 text-sm text-foreground/80 md:pl-[4.5rem]">
                        {service.points.map((p) => (
                          <li key={p} className="flex items-start gap-2.5">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {i < services.length - 1 && <div className={cn('mx-3 h-px bg-border md:mx-5', (isOpen || open === i + 1) && 'opacity-0')} />}
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
