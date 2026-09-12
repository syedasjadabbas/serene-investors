import { Container } from '@/components/ui/Container'
import { site } from '@/data'

export function AboutPage() {
  return (
    <Container as="section" className="py-16">
      <h1 className="text-4xl tracking-tight">About {site.name}</h1>
      <p className="mt-4 max-w-prose text-muted">{site.disclaimer}</p>
    </Container>
  )
}
