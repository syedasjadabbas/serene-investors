import { useLayoutEffect } from 'react'
import { useParams } from 'next/navigation'
import { PropertyClosingCta } from './PropertyClosingCta'
import { PropertyFeatures } from './PropertyFeatures'
import { PropertyHero } from './PropertyHero'
import { PropertyInvestment } from './PropertyInvestment'
import { PropertyKeyNumbers } from './PropertyKeyNumbers'
import { PropertyNotFound } from './PropertyNotFound'
import { PropertyOverview } from './PropertyOverview'
import { PropertyRecord } from './PropertyRecord'
import { PropertyRelated } from './PropertyRelated'
import { properties } from '@/global/data/properties'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { ScrollTrigger } from '@/global/lib/gsap'

export function PropertyDetailPage() {
  const params = useParams<{ slug: string }>()
  const slug = params?.slug
  const property = properties.find((item) => item.id === slug)

  usePageMeta(
    property ? `SERENE INVESTORS | ${property.name}` : 'SERENE INVESTORS | Property not found',
    property
      ? `Sample listing for ${property.name} in ${property.neighborhood}. All figures are fictional demonstration data.`
      : 'This sample property does not exist in the current collection.',
  )

  useLayoutEffect(() => {
    const frame = requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })
    return () => cancelAnimationFrame(frame)
  }, [slug])

  if (!property) {
    return <PropertyNotFound />
  }

  return (
    <div key={property.id}>
      <PropertyHero property={property} />
      <PropertyKeyNumbers property={property} />
      <PropertyOverview property={property} />
      <PropertyInvestment property={property} />
      <PropertyFeatures property={property} />
      <PropertyRecord property={property} />
      <PropertyRelated property={property} />
      <PropertyClosingCta property={property} />
    </div>
  )
}
