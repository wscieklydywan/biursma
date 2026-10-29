import type { Metadata, Viewport } from 'next'
import { Figtree } from 'next/font/google'
import { seo, site, siteUrl } from '@/lib/site'
import './globals.css'

const figtree = Figtree({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-figtree',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.title,
    template: `%s | ${site.name} Rybnik`,
  },
  description: seo.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  publisher: site.name,
  category: 'finance',
  keywords: [
    'biuro rachunkowe Rybnik',
    'księgowa Rybnik',
    'księgowość Rybnik',
    'biuro księgowe Rybnik',
    'kadry i płace Rybnik',
    'pełna księgowość Rybnik',
    'KPiR Rybnik',
    'ryczałt księgowość',
    'doradztwo podatkowe Rybnik',
    'zakładanie firmy Rybnik',
    'rozliczenia VAT JPK KSeF',
    'biuro rachunkowe Żory',
    'biuro rachunkowe Wodzisław Śląski',
    'biuro rachunkowe Jastrzębie-Zdrój',
    'Biuro Rachunkowe Sigma',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: '/',
    siteName: `${site.name} Rybnik`,
    title: 'Biuro Rachunkowe Sigma – Rybnik',
    description: 'Spokój w finansach Twojej firmy. Księgowość, kadry i podatki – kompleksowo, rzetelnie i na czas.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Biuro Rachunkowe Sigma – Rybnik',
    description: 'Księgowość, kadry i płace, doradztwo podatkowe. ul. Gliwicka 296, Rybnik. Ocena 5,0 w Google.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  formatDetection: { telephone: true, email: true, address: true },
  other: {
    'geo.region': 'PL-24',
    'geo.placename': 'Rybnik',
  },
}

export const viewport: Viewport = {
  themeColor: '#1f4a3d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className={`${figtree.variable} bg-background`}>
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
