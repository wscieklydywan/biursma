import { ChartColumnIncreasing, Handshake, LockKeyhole, ShieldCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Rzetelność i terminowość',
    text: 'Deklaracje i płatności zawsze na czas.',
  },
  {
    icon: Handshake,
    title: 'Indywidualne podejście',
    text: 'Stała opiekunka, która zna Twoją firmę.',
  },
  {
    icon: LockKeyhole,
    title: 'Bezpieczeństwo danych',
    text: 'Poufność, RODO i ubezpieczenie OC.',
  },
  {
    icon: ChartColumnIncreasing,
    title: 'Realne wsparcie w biznesie',
    text: 'Raporty i rady, które pomagają decydować.',
  },
]

export function WhyUs() {
  return (
    <section id="dlaczego" className="mx-auto mt-14 max-w-6xl px-5 md:mt-24 md:px-8">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Dlaczego SIGMA?</h2>
      </Reveal>
      <ul className="mt-8 grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:divide-x sm:divide-border md:mt-12">
        {reasons.map(({ icon: Icon, title, text }, i) => (
          <Reveal
            as="li"
            key={title}
            delay={i * 60}
            className="flex flex-col items-center px-3 text-center md:px-6"
          >
            <span className="flex size-14 items-center justify-center rounded-2xl bg-accent text-primary transition-transform duration-300 hover:-translate-y-1 md:size-16">
              <Icon className="size-7 md:size-8" strokeWidth={1.4} aria-hidden />
            </span>
            <h3 className="mt-4 text-balance text-sm font-semibold leading-snug text-foreground md:text-base">{title}</h3>
            <p className="mt-1.5 hidden text-pretty text-sm leading-relaxed text-muted-foreground md:block">{text}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
