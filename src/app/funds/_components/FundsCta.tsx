import { CtaBand } from '@/global/components/page/CtaBand'
import { catalogueFeaturedFund, fundsCta } from '@/global/data/funds'

export function FundsCta() {
  return (
    <CtaBand
      title={fundsCta.heading}
      highlight="property strategy"
      body={fundsCta.body}
      actions={[
        { label: 'View a fund', href: `/funds/${catalogueFeaturedFund.id}` },
        { label: 'How it works', href: '/how-it-works' },
      ]}
      image={fundsCta.image}
    />
  )
}
