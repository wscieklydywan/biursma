import { Contact } from '@/components/contact'
import { Faq } from '@/components/faq'
import { GrowthBanner } from '@/components/growth-banner'
import { Hero } from '@/components/hero'
import { ObligationsBand } from '@/components/obligations-band'
import { Process } from '@/components/process'
import { Reviews } from '@/components/reviews'
import { Services } from '@/components/services'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { WhyUs } from '@/components/why-us'
import { googleRating, reviews } from '@/lib/reviews'
import { seo, site, siteUrl } from '@/lib/site'

const businessId = `${siteUrl}/#business`

const businessJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['AccountingService', 'LocalBusiness'],
      '@id': businessId,
      name: 'Biuro Rachunkowe Sigma',
      alternateName: ['Biuro Rachunkowe Sigma Rybnik', 'SIGMA Rybnik', 'Sigma księgowość Rybnik'],
      description: seo.description,
      url: siteUrl,
      logo: `${siteUrl}/icon.png`,
      image: `${siteUrl}/opengraph-image.png`,
      telephone: '+48503528214',
      email: site.email,
      currenciesAccepted: 'PLN',
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.street,
        postalCode: '44-200',
        addressLocality: 'Rybnik',
        addressRegion: 'śląskie',
        addressCountry: 'PL',
      },
      hasMap: site.mapsHref,
      areaServed: seo.areaServed.map((name) => ({ '@type': 'City', name })),
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '15:00',
        },
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+48503528214',
        email: site.email,
        contactType: 'customer service',
        availableLanguage: ['pl'],
        areaServed: 'PL',
      },
      knowsAbout: [
        'księgowość',
        'księga przychodów i rozchodów',
        'ryczałt ewidencjonowany',
        'pełna księgowość',
        'VAT',
        'JPK',
        'KSeF',
        'kadry i płace',
        'ZUS',
        'doradztwo podatkowe',
        'zakładanie działalności gospodarczej',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Usługi księgowe',
        itemListElement: seo.services.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.name,
            description: service.description,
            provider: { '@id': businessId },
            areaServed: 'Rybnik',
          },
        })),
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: googleRating.value.replace(',', '.'),
        reviewCount: String(googleRating.count),
        bestRating: '5',
      },
      review: reviews.map((r) => ({
        '@type': 'Review',
        author: { '@type': 'Person', name: r.author },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: r.text,
      })),
      sameAs: [site.facebook],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Biuro Rachunkowe Sigma Rybnik',
      inLanguage: 'pl-PL',
      publisher: { '@id': businessId },
    },
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/#webpage`,
      url: siteUrl,
      name: seo.title,
      description: seo.description,
      inLanguage: 'pl-PL',
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': businessId },
      primaryImageOfPage: `${siteUrl}/opengraph-image.png`,
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd).replace(/</g, '\\u003c') }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <ObligationsBand />
        <Services />
        <GrowthBanner />
        <WhyUs />
        <Reviews />
        <Process />
        <Contact />
        <Faq />
      </main>
      <SiteFooter />
    </>
  )
}
