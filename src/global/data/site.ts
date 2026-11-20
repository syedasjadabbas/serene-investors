// Site-wide wording. Facts come from src/global/data/serene.ts (the real Serene Heights data).

export const site = {
  name: 'Serene Investors',
  tagline: 'Invest in Serene Heights — Nathia Gali and Lahore.',
  description:
    'Own a share of Serene Heights: Smart Property Units from PKR 2 million and hotel apartments in Nathia Gali, and smart property in the Serene Heights Lahore tower.',
  disclaimer:
    'Serene Investors is part of Serene Heights Group, developed by DM Consortium. Payment plans and projections are as published by Serene Heights; returns are not guaranteed.',
} as const

export const footerIntro = {
  description: 'Invest in Serene Heights Nathia Gali and Serene Heights Lahore, from PKR 2 million.',
  sampleLabel: 'Serene Heights Group',
  cta: {
    label: 'See the projects',
    href: '/properties',
  },
  copyright: '© 2026 Serene Heights Group',
  note: 'Property investment carries risk, including the value of your investment falling and delays in construction. Read the risk notice before you invest.',
} as const
