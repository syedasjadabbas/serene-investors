import type { AppDownloadContent } from '@/types'
import { formatSampleYield } from '@/lib/format'
import { featuredProperties, properties } from './properties'
import { site } from './site'

function requireById<T extends { id: string }>(items: readonly T[], id: string): T {
  const match = items.find((item) => item.id === id)
  if (!match) {
    throw new Error(`Missing sample record: ${id}`)
  }
  return match
}

const cedarCourt = requireById(properties, 'cedar-court')

export const appDownload: AppDownloadContent = {
  eyebrow: 'Serene Investors app',
  heading: 'Your property portfolio, within reach.',
  body: 'Explore fictional properties, review holdings, and follow your sample portfolio from the Serene Investors mobile experience.',
  sampleLabel: 'Demo app',
  mockupLabel: 'Sample app interface',
  brand: site.name,
  primary: {
    label: 'Explore the app',
    href: '/get-started',
  },
  secondary: {
    label: 'View properties',
    href: '/properties',
  },
  featured: {
    eyebrow: 'Featured property',
    name: cedarCourt.name,
    meta: cedarCourt.neighborhood,
    yieldLabel: formatSampleYield(cedarCourt.sampleYieldPct),
    priceLabel: cedarCourt.samplePriceLabel,
    image: cedarCourt.image,
    imageAlt: cedarCourt.imageAlt,
  },
  holdings: {
    title: 'My holdings',
    countLabel: `${featuredProperties.length} sample properties`,
    valueLabel: 'Sample value',
    value: '$24,500',
    holdings: featuredProperties.map((property) => ({
      id: property.id,
      name: property.name,
      meta: property.neighborhood,
    })),
  },
}
