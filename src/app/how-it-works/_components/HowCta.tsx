import { CtaBand } from '@/global/components/page/CtaBand'
import { howPageCta } from '@/global/data/how-it-works'
import { storyAssets } from '@/global/data/story-assets'

export function HowCta() {
  return (
    <CtaBand
      title={howPageCta.heading}
      highlight="collection"
      body={howPageCta.body}
      actions={[
        { label: 'Explore properties', href: '/properties' },
        { label: 'Explore funds', href: '/funds' },
      ]}
      image={storyAssets.valueWalk}
    />
  )
}
