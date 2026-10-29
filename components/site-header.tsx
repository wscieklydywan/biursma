'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from 'lucide-react'
import { FacebookIcon } from '@/components/facebook-icon'
import { Logo } from '@/components/logo'
import { navLinks, site } from '@/lib/site'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pendingHash = useRef<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    // overflow:hidden alone is ignored by iOS Safari, so the body is pinned in place.
    // This also stops the browser address bar from collapsing/expanding while the menu is open.
    const { body, documentElement: html } = document
    const scrollY = window.scrollY
    const prev = { body: body.style.cssText, html: html.style.overflow }
    Object.assign(body.style, {
      position: 'fixed',
      top: `-${scrollY}px`,
      left: '0',
      right: '0',
      width: '100%',
      overflow: 'hidden',
    })
    html.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      body.style.cssText = prev.body
      html.style.overflow = prev.html
      window.scrollTo({ top: scrollY, behavior: 'instant' })
      window.removeEventListener('keydown', onKey)

      const hash = pendingHash.current
      pendingHash.current = null
      if (hash) {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
        history.pushState(null, '', hash)
      }
    }
  }, [open])

  const close = (e?: React.MouseEvent<HTMLAnchorElement>) => {
    if (open && e) {
      const hash = e.currentTarget.getAttribute('href')
      if (hash?.startsWith('#')) {
        e.preventDefault()
        pendingHash.current = hash
      }
    }
    setOpen(false)
  }
  const tab = open ? 0 : -1

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300',
          scrolled && !open ? 'bg-background/85 shadow-[0_1px_0_var(--border)] backdrop-blur-md' : 'bg-transparent',
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
          <a href="#top" aria-label="Sigma – strona główna" className="relative z-[60]" onClick={close}>
            <Logo className="h-11 md:h-14" />
          </a>

          <nav aria-label="Główna nawigacja" className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sigma na Facebooku"
              className="text-foreground/60 transition-colors hover:text-primary"
            >
              <FacebookIcon className="size-5" />
            </a>
            <a
              href="#kontakt"
              className="rounded-full bg-primary-deep px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Umów konsultację
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
            className={cn(
              'relative z-[60] flex size-11 items-center justify-center rounded-full text-primary-deep transition-colors lg:hidden',
              open && 'bg-secondary',
            )}
          >
            <span className="relative block h-3 w-6">
              <span
                className={cn(
                  'absolute left-0 top-0 h-[1.5px] w-6 rounded-full bg-current transition-transform duration-300 ease-out',
                  open && 'translate-y-[5.25px] rotate-45',
                )}
              />
              <span
                className={cn(
                  'absolute bottom-0 right-0 h-[1.5px] rounded-full bg-current transition-[transform,width] duration-300 ease-out',
                  open ? 'w-6 -translate-y-[5.25px] -rotate-45' : 'w-4',
                )}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={cn(
          'fixed inset-0 z-40 flex flex-col overflow-y-auto overflow-x-hidden overscroll-contain bg-background transition-[opacity,visibility] duration-300 ease-out lg:hidden',
          open ? 'visible opacity-100' : 'invisible opacity-0',
        )}
        aria-hidden={!open}
      >
        <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -right-20 top-0 h-72 w-2/3 -skew-x-[28deg] bg-gradient-to-b from-secondary/80 to-transparent" />
        </div>

        <div
          className={cn(
            'relative flex flex-1 flex-col px-6 pb-8 pt-24 transition-transform duration-300 ease-out',
            open ? 'translate-y-0' : '-translate-y-2',
          )}
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">Menu</p>
          <nav aria-label="Menu mobilne" className="mt-4">
            <ul className="border-t border-border">
              {navLinks.map((link) => (
                <li key={link.href} className="border-b border-border">
                  <a
                    href={link.href}
                    tabIndex={tab}
                    onClick={close}
                    className="group flex items-center justify-between py-4 text-xl font-medium tracking-tight text-foreground transition-colors active:text-primary"
                  >
                    {link.label}
                    <ArrowUpRight
                      className="size-4 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                      aria-hidden
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto pt-10">
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li>
                <a href={site.phoneHref} tabIndex={tab} className="flex items-center gap-3 text-foreground">
                  <Phone className="size-4 text-primary" aria-hidden />
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} tabIndex={tab} className="flex items-center gap-3 break-all text-foreground">
                  <Mail className="size-4 shrink-0 text-primary" aria-hidden />
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="size-4 text-primary" aria-hidden />
                {site.street}, {site.city}
              </li>
              <li className="flex items-center gap-3">
                <Clock className="size-4 text-primary" aria-hidden />
                {site.hours}
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#kontakt"
                tabIndex={tab}
                onClick={close}
                className="flex h-12 flex-1 items-center justify-center rounded-xl bg-primary-deep text-sm font-semibold text-primary-foreground"
              >
                Umów konsultację
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={tab}
                aria-label="Sigma na Facebooku"
                className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-border text-primary-deep transition-colors hover:bg-secondary"
              >
                <FacebookIcon className="size-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
