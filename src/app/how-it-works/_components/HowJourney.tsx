import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { StepRow } from '@/global/components/page/StepRow'
import { PillLink } from '@/global/components/ui/PillLink'
import { howPageJourney } from '@/global/data/how-it-works'
import type { StoryState } from '@/global/types/content'
import { HowPageVisual } from './HowJourneyVisuals'

const ACTIONS: Record<string, { label: string; href: string }> = {
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

export function HowJourney() {
  return (
    <PageSection id="how-steps" labelledBy="how-steps-heading" className="scroll-mt-20">
      <SectionHeading
        id="how-steps-heading"
        eyebrow="The journey"
        title="From choosing to receiving."
        highlight="receiving"
        body="The same four steps apply to a single property or a diversified fund."
        align="center"
      />
      <ol className="mt-10 flex flex-col gap-4 sm:mt-12 sm:gap-6">
        {howPageJourney.map((state, index) => {
          const dark = index % 2 === 1
          const action = ACTIONS[state.id]
          return (
            <li key={state.id}>
              <StepRow
                id={`how-step-${state.id}`}
                step={`Step ${state.number ?? String(index + 1).padStart(2, '0')}`}
                title={stepTitle(state)}
                body={
                  <>
                    <p>{state.body}</p>
                    {state.note ? <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] opacity-60">{state.note}</p> : null}
                  </>
                }
                visual={<HowPageVisual id={state.id} />}
                reverse={dark}
                tone={dark ? 'dark' : 'white'}
                action={
                  action ? (
                    <div className="mt-2">
                      <PillLink href={action.href} variant={dark ? 'light' : 'dark'}>
                        {action.label}
                      </PillLink>
                    </div>
                  ) : undefined
                }
              />
            </li>
          )
        })}
      </ol>
    </PageSection>
  )
}
