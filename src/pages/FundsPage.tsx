import { FundCard } from '@/components/cards/FundCard'
import { ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { funds } from '@/data'
import { usePageMeta } from '@/hooks/usePageMeta'

export function FundsPage() {
  usePageMeta(
    'SERENE INVESTORS | Funds',
    'Sample single-asset funds on the SERENE INVESTORS demonstration platform. Returns are invented.',
  )

  return (
    <Container as="section" className="py-16 lg:py-20">
      <p className="brand-label text-muted">Funds</p>
      <h1 className="mt-3 max-w-[16ch] text-[clamp(2rem,3.6vw,3.35rem)] font-semibold tracking-tight">
        Sample funds
      </h1>
      <p className="mt-3 max-w-prose text-muted">
        These cards are fictional portfolios for layout and navigation. Selecting a fund opens the
        demo get-started form.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {funds.map((fund) => (
          <FundCard key={fund.id} fund={fund} />
        ))}
      </div>
      <div className="page-actions">
        <ButtonLink to="/properties">Explore properties</ButtonLink>
        <ButtonLink to="/get-started" variant="ghost">
          Get started
        </ButtonLink>
      </div>
    </Container>
  )
}
