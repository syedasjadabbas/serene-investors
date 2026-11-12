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
  quote?: string
  date?: string
  href?: string
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

export type TrustItem = {
  id: string
  title: string
  body: string
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
