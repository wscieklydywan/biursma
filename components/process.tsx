import { FileCheck2, MessagesSquare, Calculator } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const steps = [
  {
    icon: MessagesSquare,
    title: 'Bezpłatna rozmowa',
    text: 'Poznajemy Twoją firmę, branżę i potrzeby. Bez zobowiązań.',
  },
  {
    icon: Calculator,
    title: 'Indywidualna wycena',
    text: 'Przygotowujemy ofertę dopasowaną do liczby dokumentów i pracowników.',
  },
  {
    icon: FileCheck2,
    title: 'Płynne przejęcie',
    text: 'Przejmujemy dokumentację od poprzedniego biura i działamy od pierwszego miesiąca.',
  },
]

export function Process() {
  return (
    <section id="wspolpraca" className="mx-auto mt-16 max-w-6xl px-5 md:mt-28 md:px-8">
      <Reveal className="text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary md:text-xs">Jak zaczynamy</p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-5xl">Współpraca w 3 krokach</h2>
      </Reveal>

      <ol className="relative mt-10 grid gap-8 md:mt-16 md:grid-cols-3 md:gap-6">
        <span
          aria-hidden
          className="absolute bottom-8 left-7 top-8 w-px bg-gradient-to-b from-gold/70 via-border to-primary/50 md:inset-x-[16.66%] md:bottom-auto md:left-[16.66%] md:top-7 md:h-px md:w-auto md:bg-gradient-to-r"
        />
        {steps.map((step, i) => {
          const Icon = step.icon
          const last = i === steps.length - 1
          return (
            <Reveal
              as="li"
              key={step.title}
              delay={i * 90}
              className="relative flex gap-5 md:flex-col md:items-center md:text-center"
            >
              <div
                className={`relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full ring-8 ring-background ${
                  last ? 'bg-primary-deep text-cream' : 'bg-card text-primary-deep shadow-sm ring-offset-0'
                } ${last ? '' : 'border border-border'}`}
              >
                <Icon className="size-6" strokeWidth={1.6} aria-hidden />
                <span className="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full bg-gold text-[11px] font-bold tabular-nums text-primary-deep">
                  {i + 1}
                </span>
              </div>
              <div className="pt-1 md:max-w-xs md:pt-5">
                <h3 className="text-lg font-semibold text-foreground md:text-xl">{step.title}</h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
                  {step.text}
                </p>
              </div>
            </Reveal>
          )
        })}
      </ol>
    </section>
  )
}
