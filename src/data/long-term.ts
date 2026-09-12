import type { AppDownloadContent } from '@/types'
import { appDownload } from './app'
import { funds } from './funds'

function requireById<T extends { id: string }>(items: readonly T[], id: string): T {
  const match = items.find((item) => item.id === id)
  if (!match) {
    throw new Error(`Missing sample record: ${id}`)
  }
  return match
}

const urbanLiving = requireById(funds, 'urban-living-fund')

export const longTermValue = {
  eyebrow: 'Long-term value',
  heading: 'Build wealth through property over time.',
  body: 'Follow a fictional holding as sample rental activity and property value sit together in one place. Figures here are illustrative only.',
  sampleLabel: 'Illustrative sample',
  valueCard: {
    label: 'Sample property value',
    value: '$100,000',
    note: 'Illustrative sample',
  },
  appreciationCard: {
    label: 'Sample appreciation',
    value: `+${urbanLiving.sampleReturnPct.toFixed(1)}%`,
    note: 'Illustrative sample',
  },
} as const

export const longTermApp: AppDownloadContent = appDownload
