import type { HeroCopy, HeroVisualContent } from '@/types'

export const heroCopy: HeroCopy = {
  eyebrow: 'Fractional holdings',
  headline: 'Own a measured share of a building.',
  body: 'Compare named residences, then start from a small ticket. Figures are sample data.',
  primary: { label: 'Get started', href: '/get-started' },
  secondary: { label: 'Browse properties', href: '/properties' },
}

export const heroVisual: HeroVisualContent = {
  image: {
    src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&h=2500&q=80',
    alt: 'Pale residential towers rising above a planted courtyard',
  },
  listing: {
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&h=560&q=80',
    imageAlt: 'Closer view of the same residential towers',
    place: 'Courtyard Residences',
    type: 'Residential',
    yieldLabel: 'Sample yield 8.4%',
    priceLabel: 'From $5,000',
    sampleLabel: 'Sample data',
  },
  yieldPill: {
    label: '8.4% sample yield',
  },
  receipt: {
    title: 'Rent posted',
    amount: '$214',
    detail: 'Cedar Court',
    sampleLabel: 'Sample',
  },
}
