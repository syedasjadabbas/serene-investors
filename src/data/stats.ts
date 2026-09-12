import type { StatItem } from '@/types'

export const platformStatsIntro = {
  eyebrow: 'The platform',
  heading: 'Property investing, built for clarity.',
  body: 'A simple view of the fictional Serene Investors platform, its holdings, and investor activity.',
  sampleLabel: 'Sample data',
} as const

/** Illustrative counters. Values are sample copy, not operating metrics. */
export const platformStats: StatItem[] = [
  {
    id: 'value',
    value: '$184M',
    amount: 184,
    prefix: '$',
    suffix: 'M',
    label: 'Sample property value',
  },
  {
    id: 'properties',
    value: '126',
    amount: 126,
    label: 'Sample properties',
  },
  {
    id: 'investors',
    value: '8,420+',
    amount: 8420,
    suffix: '+',
    grouping: true,
    label: 'Sample investors',
  },
  {
    id: 'distributions',
    value: '$12.6M',
    amount: 12.6,
    prefix: '$',
    suffix: 'M',
    decimals: 1,
    label: 'Sample distributions',
  },
]

export const returnStats: StatItem[] = [
  { id: 'rent-paid', value: '$4.2M', label: 'Sample rental income marked paid' },
  { id: 'avg-yield', value: '4.7%', label: 'Sample average yield in the dataset' },
  { id: 'funded', value: '74', label: 'Sample buildings marked funded' },
  { id: 'exits', value: '11', label: 'Sample exits in the dataset' },
]
