import { FundCard } from '@/components/cards/FundCard'
import { Container } from '@/components/ui/Container'
import { funds } from '@/data'

export function FundsPage() {
  return (
    <Container as="section" className="py-16">
      <h1 className="text-4xl tracking-tight">Funds</h1>
      <p className="mt-3 max-w-prose text-muted">
        Sample single-asset funds for card layout only.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {funds.map((fund) => (
          <FundCard key={fund.id} fund={fund} />
        ))}
      </div>
    </Container>
  )
}
