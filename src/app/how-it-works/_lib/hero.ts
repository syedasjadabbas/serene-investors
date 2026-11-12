import type { HeroVisualContent } from '@/global/types/content'

export const heroVisual: HeroVisualContent = {
  image: {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&h=1000&q=80',
    alt: 'The Mayfair Core Portfolio, London W1 luxury architectural residence',
  },
  listing: {
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&h=1000&q=80',
    imageAlt: 'The Mayfair Core Portfolio, London W1',
    place: 'The Mayfair Core Portfolio',
    type: 'Prime Residential',
    yieldLabel: 'Target yield 7.4%',
    priceLabel: 'From £500 min ticket',
    sampleLabel: 'Mayfair, London W1',
  },
  yieldPill: {
    label: '7.4% Target Net Yield',
  },
  receipt: {
    title: 'Distribution posted',
    amount: '£380.00 avg',
    detail: 'Next Payout: 15 Oct 2026',
    sampleLabel: 'Quarterly Dividend',
  },
}
