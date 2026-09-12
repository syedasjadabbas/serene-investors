import { Container } from '@/components/ui/Container'
import { site } from '@/data'

type Props = {
  title: string
}

export function LegalPage({ title }: Props) {
  return (
    <Container as="section" className="py-16">
      <h1 className="text-4xl tracking-tight">{title}</h1>
      <p className="mt-3 max-w-prose text-muted">{site.disclaimer}</p>
    </Container>
  )
}
