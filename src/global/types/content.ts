export type NavItem = {
  id: string
  label: string
  href: string
  badge?: string
  children?: NavItem[]
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

export type StoryState = {
  id: string
  kicker: string
  heading: string
  body: string
  number?: string
  subtitle?: string
  note?: string
}
