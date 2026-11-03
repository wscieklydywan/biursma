import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { MapEmbed } from '@/components/map-embed'
import { OpeningHours } from '@/components/opening-hours'
import { Reveal } from '@/components/reveal'
import { site } from '@/lib/site'

export function Contact() {
  return (
    <section id="kontakt" className="mx-auto mt-16 max-w-6xl px-3 md:mt-28 md:px-8">
      <Reveal>
        <div className="relative isolate">
          <div aria-hidden className="absolute inset-0 -z-10 skew-y-2 rounded-3xl bg-primary-deep md:skew-y-1 md:rounded-[2rem]" />
          <div className="flex flex-col gap-6 px-6 py-10 text-primary-foreground sm:flex-row sm:items-center sm:justify-between md:px-14 md:py-14">
            <div>
              <h2 className="text-balance text-2xl font-semibold leading-tight tracking-tight md:text-4xl">
                Porozmawiajmy o Twojej firmie
              </h2>
              <p className="mt-3 max-w-sm text-pretty text-sm leading-relaxed text-primary-foreground/75 md:text-base">
                Zadzwoń, napisz lub umów wygodny termin spotkania.
              </p>
            </div>
            <div className="flex gap-3 md:gap-4">
              <a
                href={site.phoneHref}
                aria-label={`Zadzwoń: ${site.phone}`}
                className="flex size-14 items-center justify-center rounded-2xl bg-cream text-primary-deep transition-transform hover:-translate-y-1 active:scale-95 md:size-[4.5rem]"
              >
                <Phone className="size-6 md:size-7" strokeWidth={1.5} aria-hidden />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label={`Napisz: ${site.email}`}
                className="flex size-14 items-center justify-center rounded-2xl bg-cream text-primary-deep transition-transform hover:-translate-y-1 active:scale-95 md:size-[4.5rem]"
              >
                <Mail className="size-6 md:size-7" strokeWidth={1.5} aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 px-2 md:mt-14 md:px-0 lg:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <ContactForm />
        </Reveal>

        <Reveal delay={80} className="flex flex-col gap-4">
          <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
            <h3 className="text-lg font-semibold">Dane kontaktowe</h3>
            <dl className="mt-5 flex flex-col gap-4 text-sm">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.6} aria-hidden />
                <div>
                  <dt className="sr-only">Adres</dt>
                  <dd className="font-medium text-foreground">{site.street}</dd>
                  <dd className="text-muted-foreground">44-200 {site.postal}</dd>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.6} aria-hidden />
                <div>
                  <dt className="sr-only">Telefon</dt>
                  <dd>
                    <a href={site.phoneHref} className="font-medium text-foreground hover:text-primary">
                      {site.phone}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.6} aria-hidden />
                <div>
                  <dt className="sr-only">E-mail</dt>
                  <dd>
                    <a href={`mailto:${site.email}`} className="break-all font-medium text-foreground hover:text-primary">
                      {site.email}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.6} aria-hidden />
                <div>
                  <dt className="sr-only">Godziny otwarcia</dt>
                  <dd>
                    <OpeningHours />
                  </dd>
                  <dd className="mt-2 text-xs text-muted-foreground">Spotkania po wcześniejszym umówieniu</dd>
                </div>
              </div>
            </dl>
          </div>

          <MapEmbed />
        </Reveal>
      </div>
    </section>
  )
}
