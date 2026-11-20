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
