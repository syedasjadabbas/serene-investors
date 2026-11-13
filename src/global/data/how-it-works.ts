import type { StoryState } from '@/global/types/content'

export const howItWorksIntro = {
  eyebrow: 'How it works',
  heading: 'Real estate investing in four steps.',
  body: 'Choose a vetted property or fund, invest from AED 500, track your holding and receive your share of the rent every quarter.',
  image: {
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&h=1200&q=80',
    alt: 'A low house at dusk, pool in the foreground, warm rooms lit from inside',
  },
} as const

export const howPageJourney: StoryState[] = [
  {
    id: 'choose',
    number: '01',
    kicker: howItWorksIntro.eyebrow,
    heading: 'Choose',
    subtitle: 'a property or a fund.',
    body: 'Open a sample listing or a diversified fund and review the published figures. Both paths use the same demonstration catalogue.',
    note: 'Illustrative sample',
  },
  {
    id: 'invest',
    number: '02',
    kicker: howItWorksIntro.eyebrow,
    heading: 'Invest',
    subtitle: 'A sample amount.',
    body: 'Select how much to allocate to the chosen holding. The amount and yield shown here are sample data, not an offer to invest.',
    note: 'Illustrative sample',
  },
  {
    id: 'track',
    number: '03',
    kicker: howItWorksIntro.eyebrow,
    heading: 'Track',
    subtitle: 'Holdings in one place.',
    body: 'Follow sample properties, funds, and portfolio value from the demonstration account. Nothing here is a live balance.',
    note: 'Illustrative sample',
  },
  {
    id: 'receive',
    number: '04',
    kicker: howItWorksIntro.eyebrow,
    heading: 'Receive',
    subtitle: 'Sample distributions.',
    body: 'View fictional rental income posted against a sample holding. Distributions on this site are invented for the demonstration.',
    note: 'Illustrative sample',
  },
]

export const howPageSummary = [
  {
    id: 'summary-browse',
    title: 'Browse vetted listings',
    body: 'Compare properties and funds side by side, with the figures and documents for each listing on its own page.',
  },
  {
    id: 'summary-acquire',
    title: 'Buy shares',
    body: 'Start from AED 500 and add more over time. Fees are shown on each listing before you invest.',
  },
  {
    id: 'summary-receive',
    title: 'Receive your rent',
    body: 'Your share of the rent is paid every quarter, and your share of any sale proceeds when the building is sold.',
  },
] as const

export const howPageFaq = [
  {
    id: 'what',
    question: 'What is Serene Investors?',
    answer:
      'SERENE INVESTORS is a fictional product used for a design study. It shows how a visitor might browse named buildings, understand a simple hold cycle, and reach a sample sign-up. The idea the site is built around is: own a measured share of a building.',
  },
  {
    id: 'sample',
    question: 'What are sample investments?',
    answer:
      'Every yield, minimum, portfolio value, and distribution on this site is sample data. It is labelled as illustrative, and it is not an offer to invest or a record of live performance.',
  },
  {
    id: 'property',
    question: 'Can I invest in a property?',
    answer:
      'You can open a sample listing and continue through the demonstration get-started form. That form does not create an account, collect funds, or place an investment.',
  },
  {
    id: 'funds',
    question: 'What are diversified funds?',
    answer:
      'Diversified funds on this platform are fictional portfolios that gather several sample properties under one theme, with a sample minimum and a clear next step. They are demonstration holdings, not live funds.',
  },
  {
    id: 'returns',
    question: 'How are returns presented?',
    answer:
      'Returns appear as labelled sample figures, such as sample yield and sample distributions. They are illustrative only, are not guaranteed, and do not represent actual Serene Investors performance.',
  },
  {
    id: 'real',
    question: 'Is this a real investment platform?',
    answer:
      'No. SERENE INVESTORS is a fictional demonstration product. Sample information is not an offer, a solicitation, or a guarantee.',
  },
] as const

export const howPageCta = {
  heading: 'Explore the collection.',
  body: 'Continue with a sample property or a diversified fund. Every figure you meet next remains illustrative.',
} as const
