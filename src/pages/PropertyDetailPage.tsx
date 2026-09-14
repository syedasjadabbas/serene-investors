import { useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PropertyClosingCta } from '@/components/sections/property/PropertyClosingCta'
import { PropertyExperience } from '@/components/sections/property/PropertyExperience'
import { PropertyFeatures } from '@/components/sections/property/PropertyFeatures'
import { PropertyHero } from '@/components/sections/property/PropertyHero'
import { PropertyInvestment } from '@/components/sections/property/PropertyInvestment'
import { PropertyKeyNumbers } from '@/components/sections/property/PropertyKeyNumbers'
import { PropertyNotFound } from '@/components/sections/property/PropertyNotFound'
import { PropertyOverview } from '@/components/sections/property/PropertyOverview'
import { PropertyRecord } from '@/components/sections/property/PropertyRecord'
import { PropertyRelated } from '@/components/sections/property/PropertyRelated'
import { properties } from '@/data'
import { usePageMeta } from '@/hooks/usePageMeta'
import { ScrollTrigger } from '@/lib/gsap'

export function PropertyDetailPage() {
  const { slug } = useParams()
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
    <div key={property.id} className="property-detail">
      <PropertyHero property={property} />
      <PropertyExperience property={property} />
      <PropertyKeyNumbers property={property} />
      <PropertyOverview property={property} />
      <PropertyInvestment property={property} />
      <PropertyFeatures property={property} />
      <PropertyRecord property={property} />
      <PropertyClosingCta property={property} />
      <PropertyRelated property={property} />
    </div>
  )
}
