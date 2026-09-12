import { Container } from '@/components/ui/Container'
import { howItWorksSteps } from '@/data'

export function HowItWorksPage() {
  return (
    <Container as="section" className="py-16">
      <h1 className="text-4xl tracking-tight">How it works</h1>
      <ol className="mt-10 grid gap-8 md:grid-cols-2">
        {howItWorksSteps.map((step) => (
          <li key={step.id}>
            <h2 className="text-2xl tracking-tight">{step.title}</h2>
            <p className="mt-2 max-w-prose text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
    </Container>
  )
}
