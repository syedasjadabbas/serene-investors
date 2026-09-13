import { ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { site } from '@/data'
import { usePageMeta } from '@/hooks/usePageMeta'

type Props = {
  title: string
}

const copy: Record<string, { lead: string; body: string }> = {
  Terms: {
    lead: 'Sample terms for this demonstration website.',
    body: 'These paragraphs describe a fictional product. They are not a legal agreement and do not create rights, duties, or an offer to invest.',
  },
  Privacy: {
    lead: 'Sample privacy note for this demonstration website.',
    body: 'The login, get-started, and contact forms on this site are local demo interactions. They do not store or transmit personal information.',
  },
  'Key risks': {
    lead: 'Sample risk disclosure for this demonstration website.',
    body: 'Property investing involves risk, including the possible loss of capital. Every figure on this site is invented sample data and is not a performance claim.',
  },
}

export function LegalPage({ title }: Props) {
  const entry = copy[title] ?? { lead: site.disclaimer, body: site.disclaimer }

  usePageMeta(`SERENE INVESTORS | ${title}`, `${entry.lead} ${site.disclaimer}`)

  return (
    <Container as="section" className="py-16 lg:py-20">
      <p className="brand-label text-muted">Legal</p>
      <h1 className="mt-3 max-w-[16ch] text-[clamp(2rem,3.6vw,3.35rem)] font-semibold tracking-tight">
        {title}
      </h1>
      <p className="mt-4 max-w-prose text-muted">{entry.lead}</p>
      <p className="mt-4 max-w-prose text-muted">{entry.body}</p>
      <p className="mt-4 max-w-prose text-muted">{site.disclaimer}</p>
      <div className="page-actions">
        <ButtonLink to="/legal/privacy" variant={title === 'Privacy' ? 'primary' : 'ghost'}>
          Privacy
        </ButtonLink>
        <ButtonLink to="/legal/terms" variant={title === 'Terms' ? 'primary' : 'ghost'}>
          Terms
        </ButtonLink>
        <ButtonLink to="/legal/risks" variant={title === 'Key risks' ? 'primary' : 'ghost'}>
          Risk disclosure
        </ButtonLink>
      </div>
    </Container>
  )
}
