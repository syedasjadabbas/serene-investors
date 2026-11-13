import { Award, Building2, Clock, HelpCircle, ShieldCheck, Sparkles, Wallet, type LucideIcon } from 'lucide-react'

export type FaqCategory = 'Getting Started' | 'Investing' | 'Dividends' | 'Golden Visa' | 'Safety' | 'Exits'

export type FaqEntry = {
  id: string
  category: FaqCategory
  question: string
  summary: string
  bulletPoints: string[]
  badge?: string
  actionLink?: { label: string; href: string }
}

export const faqIntro = {
  eyebrow: 'Help centre',
  heading: 'How can we help you invest with confidence?',
  highlight: 'invest with confidence',
  body: 'Clear, straightforward answers about fractional Dubai real estate, rental income, regulation and the UAE 10-Year Golden Visa.',
} as const

export const faqEntries: FaqEntry[] = [
  {
    id: 'what-is-serene-investors',
    category: 'Getting Started',
    question: 'What is Serene Investors and how does fractional real estate work?',
    badge: 'Core concept',
    summary:
      'Serene Investors is a digital real estate platform that lets you co-own Dubai rental properties starting from AED 500 (~$136).',
    bulletPoints: [
      'Each property is held through its own special purpose vehicle (SPV).',
      'Investors own shares in that vehicle, and the property’s title deed is registered with the Dubai Land Department (DLD).',
      'You earn your share of the rental income, plus any capital growth when the property sells.',
    ],
    actionLink: { label: 'Explore properties', href: '/properties' },
  },
  {
    id: 'who-can-invest',
    category: 'Getting Started',
    question: 'Who is eligible to invest on Serene Investors? Do I need UAE residency?',
    badge: 'Global access',
    summary:
      'Anyone aged 18 or older from virtually any country can invest on Serene Investors without UAE residency or a local bank account.',
    bulletPoints: [
      'No UAE residency, visa, or local bank account required.',
      'Identity verification is completed online using your passport or Emirates ID.',
    ],
    actionLink: { label: 'Create an account', href: '/signup' },
  },
  {
    id: 'minimum-investment',
    category: 'Investing',
    question: 'What is the minimum amount required to start investing?',
    badge: 'From AED 500',
    summary:
      'The minimum investment is AED 500 (approx. USD $136 / EUR 125), which makes Dubai real estate accessible to more people.',
    bulletPoints: [
      'Start with AED 500 and gradually build a portfolio across several properties.',
      'No upper investment limits for individual accredited or institutional investors.',
      'Deposit funds using international debit/credit cards, Apple Pay, or domestic and international bank wires.',
    ],
    actionLink: { label: 'Browse properties', href: '/properties' },
  },
  {
    id: 'how-properties-vetted',
    category: 'Investing',
    question: 'How are properties selected and vetted before listing?',
    badge: 'Vetted listings',
    summary:
      'Our acquisitions team reviews many residential assets and lists only a small share of income-producing properties.',
    bulletPoints: [
      'Location focus: Downtown Dubai, Dubai Marina, Palm Jumeirah, Business Bay, and City Walk.',
      'Financial modelling covers gross yield, service charges, vacancy allowances, and tenant history.',
      'Independent RICS-certified appraisals and legal title searches are carried out on every property before it is listed.',
    ],
    actionLink: { label: 'Read our market reports', href: '/market-reports' },
  },
  {
    id: 'rental-dividends-payout',
    category: 'Dividends',
    question: 'When and how do I receive my rental income?',
    badge: 'Rental income',
    summary: 'Rental income is credited to your Serene Investors wallet every quarter.',
    bulletPoints: [
      'Distributions are net of building service charges, property management fees, and maintenance reserves.',
      'Withdraw funds at any time to your local or international bank account with no platform withdrawal fee.',
      'Or switch on automatic reinvestment to put your rental income into new properties.',
    ],
    actionLink: { label: 'Learn about rental income', href: '/learn' },
  },
  {
    id: 'capital-appreciation',
    category: 'Dividends',
    question: 'How is capital appreciation calculated and distributed when a property sells?',
    badge: 'Exit profits',
    summary:
      'Properties have a standard holding period of 3 to 5 years, after which the property is sold and net capital gains are distributed.',
    bulletPoints: [
      'At the end of the investment horizon, Serene Investors lists the property for sale.',
      'Net sale proceeds above the original acquisition cost are distributed pro rata to shareholders.',
      'Independent RICS appraisals update your dashboard each quarter so you can follow unrealised gains.',
    ],
    actionLink: { label: 'Open the glossary', href: '/glossary' },
  },
  {
    id: 'golden-visa-eligibility',
    category: 'Golden Visa',
    question: 'Can I qualify for the UAE 10-Year Golden Visa through Serene Investors?',
    badge: '10-year residency',
    summary:
      'Investors who hold a cumulative total of AED 2,000,000 (~$545,000) or more across Serene Investors properties can apply for the UAE Golden Visa.',
    bulletPoints: [
      'You can spread the threshold across several properties rather than locking your capital into a single apartment.',
      'Serene Investors prepares your ownership documents and guides you through each submission.',
      'Includes 10-year renewable residency for yourself, your spouse and your children.',
    ],
    actionLink: { label: 'Explore the Golden Visa', href: '/golden-visa' },
  },
  {
    id: 'golden-visa-timeline',
    category: 'Golden Visa',
    question: 'How long does the UAE Golden Visa process take?',
    badge: 'Timeline',
    summary:
      'The Golden Visa process typically takes 10 to 14 business days from portfolio funding to visa issuance in Dubai.',
    bulletPoints: [
      'Step 1: Build your AED 2M+ portfolio across listed properties.',
      'Step 2: Serene Investors compiles your Dubai Land Department ownership certificates and submits them to the authorities.',
      'Step 3: Attend your medical and biometric appointment in Dubai.',
    ],
    actionLink: { label: 'Golden Visa details', href: '/golden-visa' },
  },
  {
    id: 'regulation',
    category: 'Safety',
    question: 'How is Serene Investors regulated?',
    badge: 'Regulation',
    summary:
      'Our regulation and safety pages explain how Serene Investors operates, how properties are held, and the risks involved before you invest.',
    bulletPoints: [
      'Each property’s title deed is registered with the Dubai Land Department (DLD).',
      'Each property is held through its own SPV, separate from the platform.',
      'Read the key risks note: property values and rental income can go down as well as up.',
    ],
    actionLink: { label: 'Review safety and regulation', href: '/security' },
  },
  {
    id: 'what-if-platform-closes',
    category: 'Safety',
    question: 'What happens to my investment if Serene Investors stops operating?',
    badge: 'Ring-fenced',
    summary:
      'Each property is owned by its own SPV, separate from Serene Investors, with its title deed registered with the Dubai Land Department.',
    bulletPoints: [
      'Serene Investors does not hold the buildings on its own balance sheet; individual SPVs hold the real estate.',
      'If Serene Investors were ever to stop operating, an independent custodian or third-party trustee would continue managing or sell the assets.',
      'Uninvested wallet cash is kept in segregated client accounts, never mixed with company funds.',
    ],
    actionLink: { label: 'Read our safeguards', href: '/security' },
  },
  {
    id: 'exit-windows',
    category: 'Exits',
    question: 'Can I sell my property shares before the holding period ends?',
    badge: 'Twice-yearly liquidity',
    summary:
      'Yes. Serene Investors runs Exit Windows twice a year (May and November) where you can sell shares to other investors.',
    bulletPoints: [
      'List your shares on the secondary market to release cash early.',
      'No penalty for selling early; shares are priced within current RICS appraisal bands.',
    ],
    actionLink: { label: 'Browse properties', href: '/properties' },
  },
  {
    id: 'exit-fees',
    category: 'Exits',
    question: 'What fees apply when selling shares during Exit Windows?',
    badge: 'Clear fees',
    summary: 'A 1.5% to 2.5% secondary trading fee applies only when your sale settles.',
    bulletPoints: [
      'No upfront listing fee; fees are only deducted when your shares are sold.',
      'Proceeds are credited to your Serene Investors wallet for bank withdrawal or reinvestment.',
      'All fees are shown before you confirm your sale.',
    ],
    actionLink: { label: 'See Serene Rewards', href: '/rewards' },
  },
]

export const faqCategories: { id: 'All' | FaqCategory; label: string; icon: LucideIcon }[] = [
  { id: 'All', label: 'All questions', icon: HelpCircle },
  { id: 'Getting Started', label: 'Getting started', icon: Sparkles },
  { id: 'Investing', label: 'Investing & vetting', icon: Building2 },
  { id: 'Dividends', label: 'Rental income', icon: Wallet },
  { id: 'Golden Visa', label: 'UAE Golden Visa', icon: Award },
  { id: 'Safety', label: 'Safety & regulation', icon: ShieldCheck },
  { id: 'Exits', label: 'Exits & secondary market', icon: Clock },
]

/** Quick searches under the search field: `label` is shown, `query` is what gets searched. */
export const popularSearches = [
  { label: 'Minimum investment', query: 'minimum investment' },
  { label: 'Golden Visa', query: 'golden visa' },
  { label: 'Rental income', query: 'rental income' },
  { label: 'Regulation', query: 'regulat' },
  { label: 'Exit Windows', query: 'exit window' },
  { label: 'Who can invest', query: 'eligible' },
]
