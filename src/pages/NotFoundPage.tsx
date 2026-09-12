import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'

export function NotFoundPage() {
  return (
    <Container as="section" className="py-16">
      <h1 className="text-4xl tracking-tight">Page not found</h1>
      <Link to="/" className="mt-6 inline-block text-sm">
        Back home
      </Link>
    </Container>
  )
}
