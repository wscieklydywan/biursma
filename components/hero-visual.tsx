import Image from 'next/image'

export function HeroVisual() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 overflow-hidden bg-[rgb(1,22,15)] [clip-path:polygon(34%_0,100%_0,100%_100%,0_100%,0_84%,18%_62%)] lg:rounded-[2rem] lg:[clip-path:polygon(24%_0,100%_0,100%_100%,6%_100%,0_88%,14%_60%)]">
        <Image
          src="/images/sigma-lum.webp"
          alt="Logo Biura Rachunkowego Sigma"
          fill
          priority
          sizes="(min-width: 1024px) 560px, 45vw"
          className="object-contain object-right py-4 pl-[22%] pr-2 lg:object-center lg:p-12 lg:pl-[18%]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,transparent_40%,oklch(0.2_0.04_170/0.55))]"
        />
        <div aria-hidden className="absolute inset-x-[30%] bottom-6 hidden h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent lg:block" />
        <p className="absolute bottom-10 right-10 hidden text-right text-xs uppercase tracking-[0.3em] text-white/55 lg:block">
          Rybnik · od lat z przedsiębiorcami
        </p>
      </div>
    </div>
  )
}
