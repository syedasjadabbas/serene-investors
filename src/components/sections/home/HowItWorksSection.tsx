import { howItWorksIntro, howItWorksStory } from '@/data'
import { PinnedStorySection } from '@/components/story/PinnedStorySection'
import { HowItWorksVisual } from '@/components/story/HowItWorksVisuals'

export function HowItWorksSection() {
  return (
    <PinnedStorySection
      id="how-it-works"
      headingId="how-heading"
      sectionLabel={howItWorksIntro.heading}
      className="home-band bg-bg-warm"
      states={howItWorksStory}
      segmentVh={0.8}
      scrubbed
      visuals={howItWorksStory.map((state) => (
        <HowItWorksVisual key={state.id} id={state.id} />
      ))}
    />
  )
}
