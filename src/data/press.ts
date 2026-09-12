import type { PressLogo } from '@/types'

export const pressIntro = {
  label: 'Noted in',
  line: 'Fictional publications used for this study.',
} as const

export const pressLogos: PressLogo[] = [
  { id: 'property-journal', name: 'Property Journal', src: '' },
  { id: 'urban-ledger', name: 'Urban Ledger', src: '' },
  { id: 'capital-review', name: 'Capital Review', src: '' },
  { id: 'the-residence', name: 'The Residence', src: '' },
]
