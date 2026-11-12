import type { TrustItem } from '@/global/types/content'

export const trustIntro = {
  eyebrow: 'Built with clarity',
  heading: 'Property information, presented clearly.',
  body: 'Serene Investors provides direct access to registered title deeds, verified rental leases, and independent financial audits in one transparent platform.',
  sampleLabel: 'Institutional Security',
  image: {
    src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2000&h=1200&q=80',
    alt: 'A pale modern building with a regular facade of windows',
  },
} as const

export const trustItems: TrustItem[] = [
  {
    id: 'custody',
    title: 'Regulated Custody',
    body: 'Client funds are held in segregated Tier-1 UK custodian accounts, fully insulated from platform operations.',
  },
  {
    id: 'registry',
    title: 'Land Registry Backed',
    body: 'Every fraction represents legally binding shares in asset-specific SPVs registered directly with HM Land Registry.',
  },
  {
    id: 'valuation',
    title: 'Independent Valuations',
    body: 'All property assets undergo formal quarterly appraisals and condition audits by independent RICS-accredited surveyors.',
  },
  {
    id: 'security',
    title: 'Bank-Grade Encryption',
    body: 'Enterprise 256-bit encryption, multi-factor biometric authentication, and institutional cyber controls protect every transaction.',
  },
]
