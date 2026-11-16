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
  video: '/videos/hero.mp4',
  // First frame of the video, so the hero looks the same before and after it starts playing.
  videoPoster: '/videos/hero-poster.jpg',
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
  note: 'Sample activity and figures for illustration only.',
  // Sample investors. Stock portraits (Unsplash); names and actions are invented.
  activity: [
    {
      name: 'Sara',
      action: 'Owns 3% of a building',
      shares: 20,
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&h=160&q=70',
    },
    {
      name: 'Omar',
      action: 'Earned AED 500 in rent',
      shares: 90,
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=70',
    },
    {
      name: 'Lina',
      action: 'Bought 45 shares',
      shares: 45,
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=160&h=160&q=70',
    },
  ],
  // Fund "rate cards" shown tilted on the Funds card.
  fundTiles: [
    { name: 'Urban Living', yield: '6.8%', tag: 'Residential' },
    { name: 'Quay Mixed', yield: '7.4%', tag: 'Mixed use' },
    { name: 'Olive Court', yield: '6.1%', tag: 'Townhouses' },
  ],
  // Phone portfolio on the Golden Visa card.
  visa: {
    total: 'AED 1,740,000',
    target: 'AED 2,000,000',
    progress: 87,
    holdings: [
      { name: 'Marina Tower', value: 'AED 820,000' },
      { name: 'Urban Living Fund', value: 'AED 560,000' },
      { name: 'Palm Residences', value: 'AED 360,000' },
    ],
  },
}

export const ecosystem = {
  heading: 'Everything in one place',
  body: 'From your first share to residency, each step lives in the same account.',
  // `media` picks the moving visual at the top of each card (see EcosystemCarousel).
  cards: [
    { title: 'Buy property shares', meta: 'Start from AED 500', href: '/properties', media: 'video', image: '/images/properties/marina-tower.jpg' },
    { title: 'Invest in a fund', meta: 'Diversify in one step', href: '/funds', media: 'listings', image: '/images/journey/palm-aerial.jpg' },
    { title: 'Plan your returns', meta: 'Try the calculator', href: '/properties#calculator-heading', media: 'chart', image: '/images/journey/tower-pool.jpg' },
    { title: 'Get a UAE Golden Visa', meta: 'Check the steps', href: '/golden-visa', media: 'visa', image: '/images/journey/burj-al-arab.jpg' },
    { title: 'Earn rewards as you grow', meta: 'See the tiers', href: '/rewards', media: 'shares', image: '/images/properties/boulevard-point-hero.jpg' },
    { title: 'Read market reports', meta: 'Quarterly insights', href: '/market-reports', media: 'photo', image: '/images/journey/dubai-marina.jpg' },
  ],
  // Mini listings shown on the fund card.
  listings: [
    { name: '2 bed, Dubai Marina', price: 'AED 2,250,000', image: '/images/properties/marina-tower.jpg', funded: 82 },
    { name: '1 bed, Business Bay', price: 'AED 1,400,000', image: '/images/journey/residential.jpg', funded: 64 },
    { name: 'Townhouse, Dubai Hills', price: 'AED 2,480,000', image: '/images/story/grow-townhouses.png', funded: 47 },
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
