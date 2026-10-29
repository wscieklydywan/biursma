import Image from 'next/image'
import { ArrowRight, BadgeCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { FacebookIcon } from '@/components/facebook-icon'
import { site } from '@/lib/site'

export function GrowthBanner() {
  return (
    <section className="mx-auto mt-14 max-w-6xl px-4 md:mt-24 md:px-8">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-3xl md:rounded-[2rem] [clip-path:polygon(0_4%,100%_0,100%_100%,0_96%)] md:[clip-path:polygon(0_3%,100%_0,100%_100%,0_97%)]">
          <Image
            src="/images/laptop-wide.webp"
            alt="Profil Biura Rachunkowego Sigma z Rybnika na Facebooku wyświetlony na laptopie"
            fill
            sizes="(min-width: 1152px) 1090px, 100vw"
            className="-z-20 object-cover object-[47%_50%] md:object-[57%_45%]"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 to-background/0 md:via-background/70"
          />
          <div className="px-7 py-14 md:px-16 md:py-24">
            <p className="max-w-[16rem] text-balance text-2xl font-normal leading-tight tracking-tight text-foreground md:max-w-md md:text-5xl">
              Skup się na swoim biznesie. Formalności zostaw nam.
            </p>
            <span aria-hidden className="mt-6 block h-0.5 w-16 bg-primary-deep md:w-20" />
            <p className="mt-6 flex max-w-[17rem] items-start gap-2 text-sm leading-snug text-foreground/80 md:max-w-sm md:text-base">
              <BadgeCheck className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.6} aria-hidden />
              <span>
                <strong className="font-semibold text-foreground">Darmowe doradztwo</strong> w wyborze systemu
                opodatkowania po podpisaniu umowy.
              </span>
            </p>
            <a
              href="#kontakt"
              className="group mt-7 inline-flex h-12 items-center gap-3 rounded-xl bg-primary-deep px-5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary-deep/15 transition-transform hover:-translate-y-0.5 md:h-14 md:px-7 md:text-base"
            >
              Zostaw to nam
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex w-fit items-center gap-2 text-sm font-medium text-foreground/80 underline-offset-4 transition-colors hover:text-primary-deep hover:underline"
            >
              <span className="flex size-8 items-center justify-center rounded-full bg-[#1877F2] text-white">
                <FacebookIcon className="size-4" />
              </span>
              Śledź nas na Facebooku
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
