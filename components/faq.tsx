import { Plus } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { faq } from '@/lib/faq'
import { site } from '@/lib/site'

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="mx-auto mt-16 max-w-6xl px-5 md:mt-28 md:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c') }}
      />
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary md:text-xs">FAQ</p>
          <h2 id="faq-heading" className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Najczęstsze pytania o biuro rachunkowe w Rybniku
          </h2>
          <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
            Nie znalazłeś odpowiedzi? Zadzwoń – chętnie doradzimy bez zobowiązań.
          </p>
          <a
            href={site.phoneHref}
            className="mt-5 inline-flex h-11 items-center rounded-xl border border-primary-deep/80 px-5 text-sm font-semibold text-primary-deep transition-colors hover:bg-primary-deep hover:text-primary-foreground"
          >
            {site.phone}
          </a>
        </Reveal>

        <Reveal delay={80}>
          <div className="divide-y divide-border border-y border-border">
            {faq.map((item, i) => (
              <details key={item.question} name="faq" className="group" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-left text-base font-semibold text-foreground transition-colors hover:text-primary md:py-6 md:text-lg [&::-webkit-details-marker]:hidden">
                  <h3 className="text-pretty">{item.question}</h3>
                  <span
                    aria-hidden
                    className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border border-border text-primary transition-[transform,background-color] duration-300 group-open:rotate-45 group-open:bg-secondary"
                  >
                    <Plus className="size-4" />
                  </span>
                </summary>
                <p className="-mt-1 pb-6 pr-10 text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
