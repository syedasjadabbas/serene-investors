import { ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { site } from '@/data'
import { usePageMeta } from '@/hooks/usePageMeta'

export function LearnPage() {
  usePageMeta(
    'SERENE INVESTORS | Learn',
    'Sample guides for the SERENE INVESTORS demonstration platform. All figures and processes described here are fictional.',
  )

  return (
    <Container as="section" className="py-16 lg:py-20">
      <p className="brand-label text-muted">Learn</p>
      <h1 className="mt-3 max-w-[16ch] text-[clamp(2rem,3.6vw,3.35rem)] font-semibold tracking-tight">
        How the demo platform works
      </h1>
      <p className="mt-4 max-w-prose text-muted">{site.disclaimer}</p>
      <div className="page-actions">
        <ButtonLink to="/properties">Browse properties</ButtonLink>
        <ButtonLink to="/how-it-works" variant="ghost">
          How it works
        </ButtonLink>
      </div>

      <article
        id="property-guide"
        className="mt-14 max-w-prose scroll-mt-[calc(var(--header-h)+var(--promo-h)+1.5rem)] border-t border-line pt-10"
      >
        <h2 className="text-2xl font-semibold tracking-tight">Property guide</h2>
        <p className="mt-3 text-muted">
          Each sample listing shows a building, a neighbourhood, a sample yield, and a sample
          minimum. These figures are illustrative and are not an offer to invest.
        </p>
        <div className="page-actions">
          <ButtonLink to="/properties">Open the catalogue</ButtonLink>
        </div>
      </article>

      <article
        id="investment-basics"
        className="mt-12 max-w-prose scroll-mt-[calc(var(--header-h)+var(--promo-h)+1.5rem)]"
      >
        <h2 className="text-2xl font-semibold tracking-tight">Investment basics</h2>
        <p className="mt-3 text-muted">
          In this study, a visitor reviews a named building, chooses a sample amount, and follows
          a fictional holding. Rent and value movement on this site are invented for the
          demonstration.
        </p>
        <div className="page-actions">
          <ButtonLink to="/how-it-works">See the four steps</ButtonLink>
        </div>
      </article>

      <article
        id="faq"
        className="mt-12 max-w-prose scroll-mt-[calc(var(--header-h)+var(--promo-h)+1.5rem)]"
      >
        <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
        <p className="mt-3 text-muted">
          Is this a live investment product? No. SERENE INVESTORS is a fictional design study.
        </p>
        <p className="mt-3 text-muted">
          Can I create a real account? The login and get-started forms are demo interactions
          only. Nothing is stored.
        </p>
        <div className="page-actions">
          <ButtonLink to="/get-started">Try the demo form</ButtonLink>
          <ButtonLink to="/legal/risks" variant="ghost">
            Read sample risks
          </ButtonLink>
        </div>
      </article>
    </Container>
  )
}
