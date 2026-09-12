export type NavItem = {
  id: string
  label: string
  href: string
  badge?: string
  children?: NavItem[]
}

export type PressLogo = {
  id: string
  name: string
  src: string
}

export type StatItem = {
  id: string
  value: string
  label: string
  note?: string
  amount?: number
  prefix?: string
  suffix?: string
  decimals?: number
  grouping?: boolean
}

export type ProcessStep = {
  id: string
  title: string
  body: string
}

export type StoryState = {
  id: string
  kicker: string
  heading: string
  body: string
  number?: string
  subtitle?: string
  note?: string
}

export type RewardItem = {
  id: string
  title: string
  body: string
  sampleBenefit: string
  level: string
  threshold: string
  benefits: string[]
}

export type TrustItem = {
  id: string
  title: string
  body: string
}

export type TrustRecord = {
  eyebrow: string
  name: string
  meta: string
  recordLabel: string
  recordValue: string
  statusLabel: string
  statusValue: string
  documentationLabel: string
  documentationValue: string
}

export type Backer = {
  id: string
  name: string
  category: string
  role: string
}

export type BackerGroup = {
  id: string
  title: string
  items: Backer[]
}

export type Testimonial = {
  id: string
  quote: string
  name: string
  role: string
  location: string
  image: string
  imageAlt: string
}

export type FooterLink = {
  id: string
  label: string
  href?: string
}

export type FooterColumn = {
  id: string
  title: string
  links: FooterLink[]
}

export type OfferingKind = 'property' | 'fund'

export type OfferingExample = {
  name: string
  meta: string
  detail: string
}

export type OfferingSplit = {
  id: string
  kind: OfferingKind
  label: string
  title: string
  body: string
  href: string
  cta: string
  image: string
  imageAlt: string
  secondaryImage?: {
    src: string
    alt: string
  }
  example: OfferingExample
  sampleNote: string
}

export type ReturnComponent = {
  id: string
  label: string
  value: string
  amount: number
}

export type ReturnIllustration = {
  eyebrow: string
  heading: string
  body: string
  sampleLabel: string
  figureLabel: string
  propertyLabel: string
  propertyName: string
  investmentLabel: string
  investmentValue: string
  investmentAmount: number
  image: {
    src: string
    alt: string
  }
  flow: {
    from: string
    join: string
    to: string
  }
  components: ReturnComponent[]
  total: {
    label: string
    value: string
  }
  rate: {
    label: string
    value: string
  }
  disclaimer: string
}

export type PromoNotice = {
  id: string
  text: string
  href: string
  cta: string
}

export type HeroAction = {
  label: string
  href: string
}

export type HeroCopy = {
  eyebrow: string
  headline: string
  body: string
  primary: HeroAction
  secondary: HeroAction
}

export type HeroListingCard = {
  image: string
  imageAlt: string
  place: string
  type: string
  yieldLabel: string
  priceLabel: string
  sampleLabel: string
}

export type HeroReceipt = {
  title: string
  amount: string
  detail: string
  sampleLabel: string
}

export type HeroVisualContent = {
  image: {
    src: string
    alt: string
  }
  listing: HeroListingCard
  yieldPill: {
    label: string
  }
  receipt: HeroReceipt
}

export type AppAction = {
  label: string
  href: string
}

export type AppFeaturedScreen = {
  eyebrow: string
  name: string
  meta: string
  yieldLabel: string
  priceLabel: string
  image: string
  imageAlt: string
}

export type AppHoldingRow = {
  id: string
  name: string
  meta: string
}

export type AppHoldingsScreen = {
  title: string
  countLabel: string
  valueLabel: string
  value: string
  holdings: AppHoldingRow[]
}

export type AppDownloadContent = {
  eyebrow: string
  heading: string
  body: string
  sampleLabel: string
  mockupLabel: string
  brand: string
  primary: AppAction
  secondary: AppAction
  featured: AppFeaturedScreen
  holdings: AppHoldingsScreen
}
