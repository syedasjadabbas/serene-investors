import { ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { howItWorksIntro, howItWorksSteps } from '@/data'
import { usePageMeta } from '@/hooks/usePageMeta'

export function HowItWorksPage() {
  usePageMeta(
    'SERENE INVESTORS | How it works',
    `${howItWorksIntro.body} All steps are part of a fictional demonstration.`,
  )

  return (
    <Container as="section" className="py-16 lg:py-20">
      <p className="brand-label text-muted">{howItWorksIntro.eyebrow}</p>
      <h1 className="mt-3 max-w-[16ch] text-[clamp(2rem,3.6vw,3.35rem)] font-semibold tracking-tight">
        {howItWorksIntro.heading}
      </h1>
      <p className="mt-4 max-w-prose text-muted">{howItWorksIntro.body}</p>
      <ol className="mt-10 grid gap-8 md:grid-cols-2">
        {howItWorksSteps.map((step) => (
          <li key={step.id}>
            <h2 className="text-2xl tracking-tight">{step.title}</h2>
            <p className="mt-2 max-w-prose text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
      <div className="page-actions">
        <ButtonLink to="/properties">Browse properties</ButtonLink>
        <ButtonLink to="/get-started" variant="ghost">
          Get started
        </ButtonLink>
      </div>
    </Container>
  )
}
