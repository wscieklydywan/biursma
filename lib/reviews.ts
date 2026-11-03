export type Review = {
  author: string
  initial: string
  color: string
  text: string
}

export const googleRating = { value: '5,0', count: 8 }

export const reviews: Review[] = [
  {
    author: 'Monika Trybulska',
    initial: 'M',
    color: 'oklch(0.55 0.17 320)',
    text: 'Profesjonalizm, rzetelność i cierpliwość. Wszystko zawsze na czas, zrozumiale wytłumaczone, bez stresu i zbędnych komplikacji. Dzięki nim mogę spać spokojnie, wiedząc, że moje sprawy są w dobrych rękach.',
  },
  {
    author: 'Grażyna Ch',
    initial: 'G',
    color: 'oklch(0.66 0.18 50)',
    text: 'Profesjonalizm, zaangażowanie oraz indywidualne podejście do klienta. Świetna komunikacja i terminowość oraz rzetelność. Polecam z całego serca.',
  },
  {
    author: 'Adrian Prus (AP Solutions)',
    initial: 'A',
    color: 'oklch(0.36 0.06 168)',
    text: 'Wspaniała współpraca! Stały kontakt z klientem, pomoc w każdej sprawie, a na dodatek miła i kompetentna obsługa. Polecam z całego serca!',
  },
  {
    author: 'Stefan Smyczek',
    initial: 'S',
    color: 'oklch(0.5 0.12 250)',
    text: 'Z całego serca polecam. Pełen profesjonalizm, mega wsparcie, solidne i terminowe rozliczenia.',
  },
  {
    author: 'Szymon Michalczyk',
    initial: 'Sz',
    color: 'oklch(0.42 0.06 40)',
    text: 'Bardzo dobre biuro księgowe. Fachowa pomoc i komunikacja. Polecam!',
  },
  {
    author: 'Dawid Mazurek',
    initial: 'D',
    color: 'oklch(0.45 0.1 200)',
    text: 'Najlepsze biuro, z jakim miałem przyjemność współpracować.',
  },
]
