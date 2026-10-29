import { Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const obligations = [
  'Deklaracje VAT i JPK_V7',
  'Składki ZUS',
  'Zaliczki PIT i CIT',
  'Listy płac i PIT-11',
  'Zeznania roczne',
  'Sprawozdania finansowe',
]

export function ObligationsBand() {
  return (
    <section id="terminy" aria-labelledby="terminy-heading" className="mx-auto mt-10 max-w-6xl px-3 md:mt-16 md:px-8">
      <Reveal>
        <div className="relative isolate">
          <div aria-hidden className="absolute inset-0 -z-10 -skew-y-2 rounded-3xl bg-primary-deep md:-skew-y-1 md:rounded-[2rem]" />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 -skew-y-2 overflow-hidden rounded-3xl md:-skew-y-1 md:rounded-[2rem]"
          >
            <div className="absolute -right-20 -top-24 size-72 rounded-full bg-primary/60 blur-3xl" />
          </div>

          <div className="grid items-center gap-8 px-6 py-10 text-primary-foreground md:grid-cols-[0.9fr_1.1fr] md:gap-14 md:px-14 md:py-14">
            <div>
              <h2 id="terminy-heading" className="text-balance text-2xl font-semibold leading-tight tracking-tight md:text-4xl">
                Terminy? To już nasza głowa
              </h2>
              <p className="mt-3 max-w-sm text-pretty text-sm leading-relaxed text-primary-foreground/75 md:text-base">
                Każdy obowiązek wobec urzędu skarbowego i ZUS rozliczamy na czas – bez przypominania, bez nerwów i bez
                kar.
              </p>
            </div>

            <ul className="grid gap-2.5 sm:grid-cols-2">
              {obligations.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-primary-foreground/[0.07] px-4 py-3 text-sm font-medium ring-1 ring-inset ring-primary-foreground/10 md:text-base"
                >
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-cream text-primary-deep">
                    <Check className="size-3.5" strokeWidth={2.5} aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
