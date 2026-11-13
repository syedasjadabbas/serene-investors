import { useSearchParams } from 'next/navigation'
import { funds } from '@/global/data/funds'
import { properties } from '@/global/data/properties'

export type RelatedListing = {
  kind: 'property' | 'fund'
  name: string
  href: string
  image: string
  imageAlt: string
}

/**
 * Reads the `intent`, `id` and `redirect` query params shared by /login and /signup:
 * the property or fund the visitor came from, where to send them after signing in,
 * and the link to the other auth page that keeps the same context.
 */
export function useAuthTarget(otherPage: '/login' | '/signup') {
  const params = useSearchParams()
  const intent = params?.get('intent')
  const relatedId = params?.get('id')
  const property = intent === 'property' ? properties.find((item) => item.id === relatedId) : undefined
  const fund = intent === 'fund' ? funds.find((item) => item.id === relatedId) : undefined

  const related: RelatedListing | undefined = property
    ? { kind: 'property', name: property.name, href: `/properties/${property.id}`, image: property.image, imageAlt: property.imageAlt }
    : fund
      ? { kind: 'fund', name: fund.name, href: `/funds/${fund.id}`, image: fund.image, imageAlt: fund.imageAlt }
      : undefined

  const otherHref =
    intent && relatedId ? `${otherPage}?intent=${encodeURIComponent(intent)}&id=${encodeURIComponent(relatedId)}` : otherPage

  const targetHref = params?.get('redirect') || related?.href || '/'

  return { params, related, otherHref, targetHref }
}
