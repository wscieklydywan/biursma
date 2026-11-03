import { FacebookIcon } from '@/components/facebook-icon'
import { Logo } from '@/components/logo'
import { navLinks, site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border md:mt-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 md:flex-row md:items-start md:justify-between md:px-8">
        <div>
          <Logo className="h-10" />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {site.name}
            <br />
            {site.street}, {site.postal}
          </p>
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sigma na Facebooku"
            className="mt-4 inline-flex size-10 items-center justify-center rounded-full border border-border text-primary-deep transition-colors hover:border-primary-deep hover:bg-primary-deep hover:text-primary-foreground"
          >
            <FacebookIcon className="size-[18px]" />
          </a>
        </div>
        <nav aria-label="Stopka">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-foreground/75 hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-muted-foreground md:px-8">
          © {new Date().getFullYear()} {site.name}, Rybnik. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  )
}
