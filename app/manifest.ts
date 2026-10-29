import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Biuro Rachunkowe Sigma Rybnik',
    short_name: 'Sigma',
    description: 'Księgowość, kadry i płace oraz doradztwo podatkowe w Rybniku.',
    lang: 'pl',
    start_url: '/',
    display: 'standalone',
    background_color: '#f9f8f4',
    theme_color: '#1f4a3d',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon.png', sizes: '512x512', type: 'image/png' },
      { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
