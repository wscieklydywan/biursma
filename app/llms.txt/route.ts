import { faq } from '@/lib/faq'
import { googleRating } from '@/lib/reviews'
import { seo, site, siteUrl } from '@/lib/site'

export const dynamic = 'force-static'

export function GET() {
  const body = `# ${site.name} – Rybnik

> ${seo.description}

${site.name} to lokalne biuro rachunkowe w Rybniku (województwo śląskie), które obsługuje jednoosobowe działalności gospodarcze, spółki oraz małe i średnie firmy z Rybnika i okolic (${seo.areaServed.join(', ')}). Ocena w Google: ${googleRating.value}/5 (${googleRating.count} opinii).

## Dane kontaktowe

- Nazwa: ${site.name}
- Adres: ${site.street}, 44-200 ${site.city}, Polska
- Telefon: +48 ${site.phone}
- E-mail: ${site.email}
- Godziny otwarcia: poniedziałek–piątek 9:00–15:00
- Strona: ${siteUrl}
- Facebook: ${site.facebook}
- Mapa: ${site.mapsHref}

## Usługi

${seo.services.map((s) => `- **${s.name}**: ${s.description}`).join('\n')}
- Darmowe doradztwo w wyborze systemu opodatkowania po podpisaniu umowy.
- Bezpłatna i niezobowiązująca wycena obsługi księgowej.

## Najczęstsze pytania

${faq.map((f) => `### ${f.question}\n\n${f.answer}`).join('\n\n')}

## Strony

- [Strona główna](${siteUrl}/): oferta, opinie klientów, przebieg współpracy, kontakt i FAQ.
`

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
