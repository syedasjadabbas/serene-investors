// Home page content. All copy is Serene Investors' own; figures are product facts or labelled samples.

export type HeroMode = {
  id: 'property' | 'fund'
  label: string
  heading: [string, string]
  body: string
}

export const heroModes: HeroMode[] = [
  {
    id: 'property',
    label: 'Own a property share',
    heading: ['Own Dubai real estate,', 'one share at a time.'],
    body: 'Buy a fraction of a vetted rental home from AED 500, earn your share of the rent every quarter, and follow every payout from one account.',
  },
  {
    id: 'fund',
    label: 'Own a fund',
    heading: ['A whole portfolio,', 'in a single step.'],
    body: 'Spread one investment across several managed buildings in Dubai and Saudi Arabia, with rent and valuations reported in one place.',
  },
]

export const heroBar = {
  text: 'Dubai and Saudi real estate from AED 500.',
  actions: [
    { label: 'Browse properties', href: '/properties', tone: 'brand' as const },
    { label: 'Explore funds', href: '/funds', tone: 'sand' as const },
  ],
  image: '/images/journey/dubai-marina.jpg',
  imageAlt: 'Dubai Marina towers along the water at dusk',
}

export const intro = {
  tag: 'Serene basics',
  heading: 'What is a property share?',
  paragraphs: [
    'A share is a measured piece of a single building. You own that piece outright, and it earns its part of the rent the building collects.',
    'Start with one share and add more when it suits you. There is no need to buy, finance or manage a whole home to own real estate.',
  ],
  cta: { label: 'See how it works', href: '/how-it-works' },
  image: '/images/journey/residential.jpg',
  imageAlt: 'A row of modern low-rise homes with balconies and planted terraces',
}

export const products = {
  heading: ['Own a share of a home, a whole portfolio,', 'or a path to residency. It all starts here.'],
  cards: [
    {
      id: 'properties',
      title: 'Properties',
      body: 'Pick a building, buy shares from AED 500 and receive your part of the rent every quarter.',
      href: '/properties',
    },
    {
      id: 'funds',
      title: 'Funds',
      body: 'One investment spread across several managed buildings, with a single quarterly report.',
      href: '/funds',
    },
    {
      id: 'visa',
      title: 'Golden Visa',
      body: 'See how property ownership can support a UAE Golden Visa application, step by step.',
      href: '/golden-visa',
    },
  ],
  activity: [
    { initials: 'SA', name: 'Sara', action: 'Bought 12 shares' },
    { initials: 'OK', name: 'Omar', action: 'Owns 2% of a building' },
    { initials: 'LM', name: 'Lina', action: 'Received AED 340 in rent' },
  ],
  allocation: [
    { label: 'Residential', value: 54 },
    { label: 'Serviced apartments', value: 28 },
    { label: 'Townhouses', value: 18 },
  ],
}

export const ecosystem = {
  heading: 'Everything in one place',
  body: 'From your first share to residency, each step lives in the same account.',
  cards: [
    { title: 'Buy property shares', meta: 'From AED 500', href: '/properties', image: '/images/properties/marina-tower.jpg' },
    { title: 'Invest in a fund', meta: 'Diversify in one step', href: '/funds', image: '/images/journey/palm-aerial.jpg' },
    { title: 'Plan your returns', meta: 'Try the calculator', href: '/properties#calculator-heading', image: '/images/journey/tower-pool.jpg' },
    { title: 'Explore the Golden Visa', meta: 'Check the steps', href: '/golden-visa', image: '/images/journey/burj-al-arab.jpg' },
    { title: 'Earn rewards', meta: 'See the tiers', href: '/rewards', image: '/images/properties/boulevard-point-hero.jpg' },
    { title: 'Read market reports', meta: 'Quarterly insights', href: '/market-reports', image: '/images/journey/hittin.jpg' },
  ],
}

export const mission = {
  label: 'Our mission',
  quote:
    'Real estate should not need a fortune, a stack of paperwork or a lifetime of experience. We make owning part of a building as clear as opening an account, so anyone can start, wherever they are.',
  attribution: 'The Serene Investors team',
}

export const stats = {
  caption: 'How the platform works',
  items: [
    { value: 'AED 500', label: 'minimum investment' },
    { value: '4×', label: 'rent payouts a year' },
    { value: '2', label: 'markets: Dubai and Saudi Arabia' },
    { value: '24/7', label: 'portfolio access online' },
  ],
}

export const locations = {
  caption: 'Where our listings are',
  items: ['Dubai Marina', 'Palm Jumeirah', 'Downtown Dubai', 'Business Bay', 'Jumeirah Village Circle', 'Dubai Hills', 'Riyadh', 'Jeddah'],
}

export const story = [
  {
    id: 'what',
    tag: 'What we do',
    heading: 'We make real estate simple to own.',
    body: 'Serene Investors lets you buy shares in individual rental homes or in managed funds, follow your rent and valuations, and explore residency options, all from one account.',
    tone: 'forest' as const,
  },
  {
    id: 'why',
    tag: 'Why we do it',
    heading: 'Because owning property should be open to everyone.',
    body: 'Buying a home has meant large deposits, long paperwork and local know-how. Shares remove those barriers, so you can start small and build at your own pace.',
    tone: 'light' as const,
    image: '/images/journey/tower-pool.jpg',
    imageAlt: 'A rooftop pool beside a residential tower in the afternoon sun',
  },
  {
    id: 'how',
    tag: 'How we do it',
    heading: 'Every step, in your hands.',
    body: 'Browse vetted listings, read the documents, invest, and watch rent arrive. Each building is held in its own structure and reported every quarter.',
    tone: 'dark' as const,
    image: '/images/properties/boulevard-point-hero.jpg',
    imageAlt: 'A modern residential tower rising above a tree-lined boulevard',
  },
]

export const testimonials = {
  heading: 'What investors tell us',
  note: 'Sample reviews for illustration.',
  items: [
    { name: 'Sample investor, Dubai', quote: 'I bought my first shares in an evening. The documents were all there and the first rent payment arrived when it said it would.' },
    { name: 'Sample investor, Riyadh', quote: 'Being able to start small and add a few shares every month is exactly what I was looking for.' },
    { name: 'Sample investor, London', quote: 'I live abroad, so having everything online, from the listing to the quarterly report, makes it workable.' },
    { name: 'Sample investor, Abu Dhabi', quote: 'The fund option let me spread one amount across several buildings without choosing each one myself.' },
    { name: 'Sample investor, Jeddah', quote: 'Clear figures, clear fees, and someone answers when I have a question.' },
  ],
}

export const homeFaq = {
  heading: 'FAQs',
  body: 'Common questions',
  more: { label: 'See all FAQs', href: '/faq' },
  items: [
    {
      q: 'What is Serene Investors?',
      a: 'An online platform for buying shares in income-producing homes and managed property funds in Dubai and Saudi Arabia, starting from AED 500.',
    },
    {
      q: 'How do I earn from a share?',
      a: 'Each building collects rent. After costs, your part of that rent is paid to your account every quarter. If the building is sold, you receive your share of the sale.',
    },
    {
      q: 'What is the difference between a property and a fund?',
      a: 'A property share is a piece of one building. A fund spreads your investment across several buildings, so one amount is diversified for you.',
    },
    {
      q: 'Can I sell my shares?',
      a: 'Shares can be offered for sale at set windows during the hold period, or held until the building is sold. Selling depends on another investor buying.',
    },
    {
      q: 'Who can invest?',
      a: 'Anyone aged 18 or over who completes identity checks. You can invest from inside or outside the UAE and Saudi Arabia.',
    },
    {
      q: 'What are the risks?',
      a: 'Property values and rent can fall, and shares may take time to sell. Read the risk notice before investing and only invest what you can leave invested.',
    },
  ],
}

export const newsletter = {
  heading: 'Get new listings first.',
  body: 'Create a free account to hear about new buildings and funds before they open.',
  placeholder: 'you@example.com',
  button: 'Continue',
}
