import { valueStory, valueStoryIntro } from '@/data'
import { PinnedStorySection } from '@/components/story/PinnedStorySection'
import {
  ValueBuildVisual,
  ValueGrowVisual,
  ValueReceiveVisual,
} from '@/components/story/ValueStoryVisuals'

const visuals = [
  <ValueReceiveVisual key="receive" />,
  <ValueBuildVisual key="build" />,
  <ValueGrowVisual key="grow" />,
]

export function ValueStorySection() {
  return (
    <PinnedStorySection
      id="value-story"
      headingId="value-story-heading"
      sectionLabel={valueStoryIntro.heading}
      className="home-band bg-soft"
      states={valueStory}
      visuals={visuals}
      footer={<p>{valueStoryIntro.disclaimer}</p>}
    />
  )
}
