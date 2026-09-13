import { ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { usePageMeta } from '@/hooks/usePageMeta'

export function NotFoundPage() {
  usePageMeta(
    'SERENE INVESTORS | Page not found',
    'This page is not part of the SERENE INVESTORS demonstration.',
  )

  return (
    <Container as="section" className="py-16 lg:py-20">
      <p className="brand-label text-muted">404</p>
      <h1 className="mt-3 text-[clamp(2rem,3.6vw,3.35rem)] font-semibold tracking-tight">
        Page not found
      </h1>
      <p className="mt-4 max-w-prose text-muted">
        That address is not in this demonstration. Return home or open the sample catalogue.
      </p>
      <div className="page-actions">
        <ButtonLink to="/">Back home</ButtonLink>
        <ButtonLink to="/properties" variant="ghost">
          Browse properties
        </ButtonLink>
      </div>
    </Container>
  )
}
