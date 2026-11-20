// Site navigation, shared by the menu overlay and the footer.

export type NavLink = { label: string; href: string; badge?: string }
export type NavGroup = { title: string; links: NavLink[] }

export const menuGroups: NavGroup[] = [
  {
    title: 'Invest',
    links: [
      { label: 'Projects', href: '/properties' },
      { label: 'Smart Property', href: '/smart-property', badge: 'From PKR 2M' },
      { label: 'Payment plans', href: '/calculator' },
      { label: 'How it works', href: '/how-it-works' },
    ],
  },
  {
    title: 'Owners',
    links: [
      { label: 'Owner benefits', href: '/owner-benefits' },
      { label: 'The resort', href: '/resort' },
      { label: 'Construction progress', href: '/progress' },
      { label: 'Trust & compliance', href: '/security' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { label: 'Journal', href: '/learn' },
      { label: 'Glossary', href: '/glossary' },
      { label: 'FAQs', href: '/faq' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '/about' },
      { label: 'Get started', href: '/get-started' },
      { label: 'Contact', href: '/contact' },
    ],
  },
]

export const legalLinks: NavLink[] = [
  { label: 'Privacy policy', href: '/legal/privacy' },
  { label: 'Terms of use', href: '/legal/terms' },
  { label: 'Risk notice', href: '/legal/risks' },
]
