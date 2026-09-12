import type { TrustItem, TrustRecord } from '@/types'
import { properties } from './properties'

function requireById<T extends { id: string }>(items: readonly T[], id: string): T {
  const match = items.find((item) => item.id === id)
  if (!match) {
    throw new Error(`Missing sample record: ${id}`)
  }
  return match
}

const cedarCourt = requireById(properties, 'cedar-court')

export const trustIntro = {
  eyebrow: 'Built with clarity',
  heading: 'Property information, presented clearly.',
  body: 'Serene Investors presents property information, sample figures, and portfolio details in one place so investors know what they are reviewing before taking the next step.',
  sampleLabel: 'Demo platform',
  image: {
    src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2000&h=1200&q=80',
    alt: 'A pale modern building with a regular facade of windows',
  },
} as const

export const trustRecord: TrustRecord = {
  eyebrow: 'Demo property record',
  name: cedarCourt.name,
  meta: cedarCourt.neighborhood,
  recordLabel: 'Record',
  recordValue: 'DEMO-0248',
  statusLabel: 'Status',
  statusValue: 'Demonstration record',
  documentationLabel: 'Documentation',
  documentationValue: 'Illustrative sample',
}

export const trustItems: TrustItem[] = [
  {
    id: 'documentation',
    title: 'Property documentation',
    body: 'Present sample ownership and property documentation alongside each fictional holding.',
  },
  {
    id: 'information',
    title: 'Clear information',
    body: 'Show sample property details, costs, status, and investment information in a consistent format.',
  },
  {
    id: 'security',
    title: 'Platform security',
    body: 'Use standard secure account practices for fictional user accounts and platform access.',
  },
  {
    id: 'disclosure',
    title: 'Risk disclosure',
    body: 'Present sample figures as illustrative and explain that property investing involves risk.',
  },
]
