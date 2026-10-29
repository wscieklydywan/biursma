import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <Image
      src={inverted ? '/images/logo-light.webp' : '/images/logo-dark.webp'}
      alt="Sigma – Biuro Rachunkowe"
      width={480}
      height={480}
      priority
      className={cn('h-12 w-auto', className)}
    />
  )
}
