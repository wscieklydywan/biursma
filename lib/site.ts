// Set NEXT_PUBLIC_SITE_URL (e.g. https://sigma-rybnik.pl) once the domain is bought.
// Until then the hosting's production domain is used as a fallback.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')
).replace(/\/$/, '')

export const seo = {
  title: 'Biuro Rachunkowe Sigma Rybnik – księgowość, kadry i płace, podatki',
  description:
    'Biuro rachunkowe w Rybniku (ul. Gliwicka 296). Księgowość dla firm: KPiR, ryczałt, pełna księgowość, VAT i JPK, kadry i płace, doradztwo podatkowe i zakładanie działalności. Ocena 5,0 w Google. Bezpłatna wycena: 503 528 214.',
  services: [
    {
      name: 'Księgowość firm',
      description:
        'Księga przychodów i rozchodów (KPiR), ryczałt ewidencjonowany, pełna księgowość spółek i fundacji, rozliczenia VAT, JPK i KSeF, sprawozdania finansowe.',
    },
    {
      name: 'Kadry i płace',
      description:
        'Umowy o pracę, zlecenia i o dzieło, listy płac, rozliczenia wynagrodzeń, deklaracje ZUS, PFRON i PIT-11, dokumentacja pracownicza.',
    },
    {
      name: 'Doradztwo podatkowe',
      description:
        'Wybór optymalnej formy opodatkowania, bieżące konsultacje i interpretacje, wsparcie podczas kontroli US i ZUS.',
    },
    {
      name: 'Zakładanie firmy',
      description:
        'Rejestracja działalności w CEIDG lub KRS, zgłoszenia do VAT i ZUS, plan startowy – koszty, ulgi i preferencje.',
    },
  ],
  areaServed: ['Rybnik', 'Żory', 'Wodzisław Śląski', 'Jastrzębie-Zdrój', 'Racibórz', 'Czerwionka-Leszczyny'],
}

export const site = {
  name: 'Biuro Rachunkowe Sigma',
  city: 'Rybnik',
  street: 'ul. Gliwicka 296',
  postal: 'Rybnik',
  phone: '503 528 214',
  phoneHref: 'tel:+48503528214',
  email: 'biuro.sigma@poczta.onet.pl',
  hours: 'pon.–pt. 9:00–15:00',
  facebook: 'https://www.facebook.com/share/1CAZfdTUmA/',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=ul.+Gliwicka+296,+Rybnik',
}

export const navLinks = [
  { href: '#oferta', label: 'Oferta' },
  { href: '#dlaczego', label: 'Dlaczego my' },
  { href: '#opinie', label: 'Opinie' },
  { href: '#wspolpraca', label: 'Współpraca' },
  { href: '#kontakt', label: 'Kontakt' },
]
