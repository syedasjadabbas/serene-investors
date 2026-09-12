import { Container } from '@/components/ui/Container'

type Props = {
  title: string
}

export function AuthPage({ title }: Props) {
  return (
    <Container as="section" className="py-16">
      <h1 className="text-4xl tracking-tight">{title}</h1>
      <p className="mt-3 max-w-prose text-muted">
        Auth screens are out of scope for this foundation pass.
      </p>
    </Container>
  )
}
