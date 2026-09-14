import type { FundType, PropertyStatus } from '@/types'

export function formatPercent(value: number) {
  return `${value.toFixed(1)}%`
}

export function formatPropertyMeta(neighborhood: string, city: string) {
  return `${neighborhood}, ${city}`
}

const statusLabels: Record<PropertyStatus, string> = {
  open: 'Open',
  funding: 'Funding',
  funded: 'Funded',
  exited: 'Exited',
}

export function formatStatus(status: PropertyStatus) {
  return statusLabels[status]
}

export function formatSampleAmount(amount: number) {
  return `$${amount.toLocaleString('en-US')}`
}

export function formatSampleMinimum(amount: number) {
  return `From ${formatSampleAmount(amount)}`
}

export function formatSampleYield(value: number) {
  return `Sample yield ${formatPercent(value)}`
}

export function formatFundType(type: FundType) {
  if (type === 'residential') return 'Residential'
  if (type === 'commercial') return 'Commercial'
  return 'Mixed'
}

type StatFormat = {
  amount: number
  prefix?: string
  suffix?: string
  decimals?: number
  grouping?: boolean
}

export function formatStatValue({
  amount,
  prefix = '',
  suffix = '',
  decimals = 0,
  grouping = false,
}: StatFormat) {
  const formatted = grouping
    ? new Intl.NumberFormat('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }).format(amount)
    : amount.toFixed(decimals)

  return `${prefix}${formatted}${suffix}`
}
