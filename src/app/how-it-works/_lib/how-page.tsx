import type { Step } from '@/global/components/page/StickySteps'
import { PillLink } from '@/global/components/ui/PillLink'
import { howPageJourney } from '@/global/data/how-it-works'
import type { StoryState } from '@/global/types/content'

// Steps and "how you earn" rows for the /how-it-works page.

const STEP_IMAGES: Record<string, { src: string; alt: string }> = {
  choose: { src: '/images/story/choose-cedar-court.png', alt: 'Pale residential court with planted walks and simple geometric facades' },
  invest: { src: '/images/funds/fund-stage-field.png', alt: 'A quiet residential neighborhood of pale apartment blocks and planted courts' },
  track: { src: '/images/story/grow-townhouses.png', alt: 'A quiet row of contemporary townhouses' },
  receive: { src: '/images/story/receive-cedar-court.png', alt: 'Warm afternoon light on a pale contemporary house and planted front garden' },
}

const STEP_ACTIONS: Record<string, { label: string; href: string }> = {
  choose: { label: 'Browse properties', href: '/properties' },
  invest: { label: 'Try the sample onboarding', href: '/get-started' },
  track: { label: 'Explore funds', href: '/funds' },
}

/** "Choose" + "a property or a fund." -> "Choose a property or a fund." */
function stepTitle(state: StoryState) {
  const subtitle = state.subtitle ?? ''
  if (!subtitle) return state.heading
  return `${state.heading} ${subtitle.charAt(0).toLowerCase()}${subtitle.slice(1)}`
}

export const howSteps: Step[] = howPageJourney.map((state, index) => {
  const action = STEP_ACTIONS[state.id]
  return {
    step: `Step ${state.number ?? String(index + 1).padStart(2, '0')}`,
    title: stepTitle(state),
    body: state.body,
    image: STEP_IMAGES[state.id],
    action: action ? (
      <div className="mt-2">
        <PillLink href={action.href}>{action.label}</PillLink>
      </div>
    ) : undefined,
  }
})

export const earnRows = [
  {
    title: 'Rent',
    body: 'When a building is let, the net rent is shared between its owners. Your part is paid into your account every quarter, in proportion to your shares.',
  },
  {
    title: 'Value growth',
    body: 'If the building’s value rises, so does the value of your shares. Values can also fall, and nothing is guaranteed. On this site every figure is a sample.',
  },
  {
    title: 'Selling shares',
    body: 'When the building is sold at the end of its holding period, you receive your part of the sale proceeds after costs.',
  },
]
