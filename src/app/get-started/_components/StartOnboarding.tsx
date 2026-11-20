import { useLayoutEffect, useRef } from 'react'
import { ArrowLeft, ArrowRight, MessageCircle, Phone } from 'lucide-react'
import { ArrowCircle } from '@/global/components/ui/ArrowCircle'
import { PillLink } from '@/global/components/ui/PillLink'
import { contact, interests, tel, whatsappWith } from '@/global/data/serene'
import { usePrefersReducedMotion } from '@/global/hooks/usePrefersReducedMotion'
import { cn } from '@/global/lib/cn'
import { gsap, registerGsapPlugins } from '@/global/lib/gsap'
import { useGetStarted } from '../_hooks/useGetStarted'
import { getStartedSteps, interestKeys, planBody, planTitle, visitProjects } from '../_lib/get-started'

const BUTTON =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-sx-ink/20 px-6 text-sm font-semibold text-sx-ink transition-colors enabled:hover:bg-sx-ink/5 disabled:cursor-not-allowed disabled:opacity-40 sm:text-base'

/** Option tile on paper; the selected tile turns forest. The radio stays in the DOM for keyboard use. */
function Choice({
  name,
  checked,
  onChange,
  title,
  body,
}: {
  name: string
  checked: boolean
  onChange: () => void
  title: string
  body?: string
}) {
  return (
    <label
      className={cn(
        'flex cursor-pointer items-start justify-between gap-4 rounded-[16px] p-5 transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-sx-brand sm:p-6',
        checked ? 'bg-sx-forest text-white' : 'bg-sx-paper text-sx-ink hover:bg-sx-sand',
      )}
    >
      <input type="radio" name={name} checked={checked} onChange={onChange} className="sr-only" />
      <span className="flex min-w-0 flex-col gap-1">
        <span className="font-heading text-lg font-bold tracking-[-0.015em] sm:text-xl">{title}</span>
        {body && <span className={cn('text-sm leading-relaxed', checked ? 'text-white/75' : 'text-sx-ink/65')}>{body}</span>}
      </span>
      <span
        aria-hidden="true"
        className={cn('mt-1 flex size-5 shrink-0 items-center justify-center rounded-full border-2', checked ? 'border-sx-mint' : 'border-sx-ink/25')}
      >
        {checked && <span className="size-2.5 rounded-full bg-sx-mint" />}
      </span>
    </label>
  )
}

function LahoreTeam() {
  return (
    <div className="flex flex-col gap-4 rounded-[20px] bg-sx-paper p-5 sm:p-6">
      <div>
        <p className="font-heading text-xl font-bold tracking-[-0.015em]">Talk to the Lahore team</p>
        <p className="mt-1 text-sm leading-relaxed text-sx-ink/65">
          Smart property in Serene Heights Lahore starts from PKR 2 million. The Lahore team shares the current plans directly.
        </p>
      </div>
      <ul className="grid gap-2 sm:grid-cols-2">
        {contact.lahorePhones.map((group) => (
          <li key={group.label} className="flex flex-col gap-1 rounded-[14px] bg-white px-4 py-3">
            <span className="text-sm text-sx-ink/65">{group.label}</span>
            {group.numbers.map((n) => (
              <a key={n} href={tel(n)} className="inline-flex min-h-11 items-center gap-2 font-semibold text-sx-ink underline-offset-4 hover:text-sx-brand hover:underline">
                <Phone size={16} aria-hidden="true" className="text-sx-brand" />
                {n}
              </a>
            ))}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function StartOnboarding() {
  const panelRef = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()
  const onboard = useGetStarted()

  useLayoutEffect(() => {
    const panel = panelRef.current
    if (!panel || reduced) return
    registerGsapPlugins()
    const tween = gsap.fromTo(panel, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.38, ease: 'power3.out', overwrite: 'auto' })
    return () => {
      tween.kill()
      gsap.set(panel, { clearProps: 'opacity,y' })
    }
  }, [onboard.step, reduced])

  const stepCopy = getStartedSteps[onboard.step]

  return (
    <section id="start-onboard" aria-labelledby="start-onboard-heading" className="scroll-mt-20 px-4 pb-16 sm:px-8 sm:pb-24">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-8 rounded-[30px] bg-white p-5 text-sx-ink sm:gap-10 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-2">
            <h2 id="start-onboard-heading" className="font-heading text-3xl font-bold leading-[1.08] tracking-[-0.025em] sm:text-[2.2rem]">
              Three steps to an enquiry.
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-sx-ink/65">
              Choose an option, pick a plan, and send it on WhatsApp. You can go back at any time.
            </p>
          </div>

          <ol className="grid w-full grid-cols-3 gap-2 sm:gap-3 lg:max-w-[460px]" aria-label="Enquiry progress">
            {getStartedSteps.map((item, index) => {
              const done = index < onboard.step
              const active = index === onboard.step
              return (
                <li key={item.id} aria-current={active ? 'step' : undefined} className="flex flex-col gap-2">
                  <span aria-hidden="true" className={cn('h-1.5 rounded-full', done || active ? 'bg-sx-brand' : 'bg-sx-ink/10')} />
                  <span className={cn('text-xs font-semibold sm:text-sm', active ? 'text-sx-ink' : 'text-sx-ink/65')}>
                    Step {item.number}
                    <span className="sr-only">: {item.title}</span>
                    {done && <span className="sr-only"> (completed)</span>}
                  </span>
                </li>
              )
            })}
          </ol>
        </div>

        <div className="flex flex-col gap-8">
          <div ref={panelRef} key={onboard.step} className="flex flex-col gap-5">
            <h3 className="flex items-center gap-3 font-heading text-2xl font-bold tracking-[-0.02em] sm:text-3xl">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-sx-ink text-sm text-sx-mint">{stepCopy.number}</span>
              {stepCopy.title}
            </h3>

            {onboard.step === 0 ? (
              <fieldset>
                <legend className="sr-only">What are you interested in?</legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {interestKeys.map((key) => (
                    <Choice
                      key={key}
                      name="start-interest"
                      checked={onboard.interest === key}
                      onChange={() => onboard.chooseInterest(key)}
                      title={interests[key]}
                    />
                  ))}
                </div>
              </fieldset>
            ) : null}

            {onboard.step === 1 && onboard.project === 'nathia-gali' ? (
              <fieldset>
                <legend className="mb-3 text-sm text-sx-ink/65">
                  Payment plans as published for Serene Heights Nathia Gali: 30% down, the rest over 36 monthly instalments.
                </legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {onboard.planOptions.map((plan) => (
                    <Choice
                      key={plan.id}
                      name="start-plan"
                      checked={onboard.plan?.id === plan.id}
                      onChange={() => onboard.choosePlan(plan.id)}
                      title={planTitle(plan)}
                      body={planBody(plan)}
                    />
                  ))}
                </div>
              </fieldset>
            ) : null}

            {onboard.step === 1 && onboard.project === 'lahore' ? <LahoreTeam /> : null}

            {onboard.step === 1 && onboard.interest === 'visit' ? (
              <fieldset>
                <legend className="mb-3 text-sm text-sx-ink/65">Which project would you like to visit?</legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {visitProjects.map((item) => (
                    <Choice
                      key={item.id}
                      name="start-visit"
                      checked={onboard.visit === item.id}
                      onChange={() => onboard.chooseVisit(item.id)}
                      title={item.title}
                      body={item.body}
                    />
                  ))}
                </div>
              </fieldset>
            ) : null}

            {onboard.step === 2 ? (
              <div className="flex flex-col gap-5">
                <div className="rounded-[20px] bg-sx-paper p-5 sm:p-6">
                  <p className="text-sm font-semibold text-sx-ink/65">Your message</p>
                  <p className="mt-2 whitespace-pre-line break-words text-base leading-relaxed text-sx-ink">{onboard.summary}</p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={whatsappWith(onboard.summary)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-between gap-5 rounded-full bg-sx-brand py-1.5 pl-6 pr-1.5 text-sm font-semibold text-white transition-colors hover:bg-sx-forest sm:text-base"
                  >
                    <span className="inline-flex items-center gap-2">
                      <MessageCircle size={18} aria-hidden="true" />
                      Send on WhatsApp
                      <span className="sr-only">(opens in a new tab)</span>
                    </span>
                    <ArrowCircle tone="light" size="sm" />
                  </a>
                  <PillLink href="/contact" variant="outline">
                    Use the contact form
                  </PillLink>
                </div>
                <p className="text-sm text-sx-ink/65">
                  Opens WhatsApp with this message to {contact.whatsapp}. Nothing is sent until you press send there.
                </p>
              </div>
            ) : null}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <button type="button" onClick={onboard.back} disabled={onboard.step === 0} className={BUTTON}>
              <ArrowLeft size={16} aria-hidden="true" />
              Back
            </button>
            {onboard.step < 2 ? (
              <button
                type="button"
                onClick={onboard.next}
                disabled={!onboard.canAdvance}
                className="inline-flex min-h-11 items-center gap-5 rounded-full bg-sx-ink py-1.5 pl-6 pr-1.5 text-sm font-semibold text-white transition-colors enabled:hover:bg-sx-forest disabled:cursor-not-allowed disabled:opacity-40 sm:text-base"
              >
                {onboard.step === 1 ? 'Review' : 'Next'}
                <span aria-hidden="true" className="flex size-7 items-center justify-center rounded-full bg-sx-mint text-sx-ink">
                  <ArrowRight size={15} strokeWidth={2.2} />
                </span>
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
