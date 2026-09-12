import type { FooterColumn, NavItem } from '@/types'

export const primaryNav: NavItem[] = [
  { id: 'properties', label: 'Properties', href: '/properties' },
  { id: 'funds', label: 'Funds', href: '/funds', badge: 'New' },
  { id: 'how', label: 'How it works', href: '/how-it-works' },
  { id: 'learn', label: 'Learn', href: '/learn' },
]

export const utilityNav: NavItem[] = [
  { id: 'login', label: 'Login', href: '/login' },
  { id: 'start', label: 'Get started', href: '/get-started' },
]

export const footerColumns: FooterColumn[] = [
  {
    id: 'invest',
    title: 'Invest',
    links: [
      { id: 'f-properties', label: 'Properties', href: '/properties' },
      { id: 'f-funds', label: 'Funds', href: '/funds' },
      { id: 'f-how', label: 'How it works', href: '/how-it-works' },
      { id: 'f-start', label: 'Get started', href: '/get-started' },
    ],
  },
  {
    id: 'company',
    title: 'Company',
    links: [
      { id: 'f-about', label: 'About', href: '/about' },
      { id: 'f-learn', label: 'Learn', href: '/learn' },
      { id: 'f-contact', label: 'Contact' },
    ],
  },
  {
    id: 'resources',
    title: 'Resources',
    links: [
      { id: 'f-guide', label: 'Property guide', href: '/learn' },
      { id: 'f-basics', label: 'Investment basics', href: '/learn' },
      { id: 'f-faq', label: 'FAQ', href: '/learn' },
    ],
  },
  {
    id: 'legal',
    title: 'Legal',
    links: [
      { id: 'f-privacy', label: 'Privacy', href: '/legal/privacy' },
      { id: 'f-terms', label: 'Terms', href: '/legal/terms' },
      { id: 'f-risks', label: 'Risk disclosure', href: '/legal/risks' },
    ],
  },
]
