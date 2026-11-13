// Site navigation, shared by the menu overlay and the footer.

export type NavLink = { label: string; href: string; badge?: string }
export type NavGroup = { title: string; links: NavLink[] }

export const menuGroups: NavGroup[] = [
  {
    title: 'Invest',
    links: [
      { label: 'Properties', href: '/properties' },
      { label: 'Funds', href: '/funds', badge: 'New' },
      { label: 'How it works', href: '/how-it-works' },
      { label: 'Returns calculator', href: '/properties#calculator-heading' },
    ],
  },
  {
    title: 'Benefits',
    links: [
      { label: 'Golden Visa', href: '/golden-visa' },
      { label: 'Rewards', href: '/rewards' },
      { label: 'Safety & regulation', href: '/security' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { label: 'Blog & insights', href: '/learn' },
      { label: 'Market reports', href: '/market-reports' },
      { label: 'Glossary', href: '/glossary' },
      { label: 'FAQs', href: '/faq' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '/about' },
      { label: 'Get started', href: '/get-started' },
    ],
  },
]

export const legalLinks: NavLink[] = [
  { label: 'Privacy notice', href: '/legal/privacy' },
  { label: 'Terms of use', href: '/legal/terms' },
  { label: 'Risk notice', href: '/legal/risks' },
]
