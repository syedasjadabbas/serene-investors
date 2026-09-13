import { useState, type FormEvent } from 'react'
import { Button, ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { site } from '@/data'
import { usePageMeta } from '@/hooks/usePageMeta'

export function AboutPage() {
  const [submitted, setSubmitted] = useState(false)

  usePageMeta(
    `SERENE INVESTORS | About`,
    `About the SERENE INVESTORS demonstration. ${site.disclaimer}`,
  )

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <Container as="section" className="py-16 lg:py-20">
      <p className="brand-label text-muted">Company</p>
      <h1 className="mt-3 max-w-[16ch] text-[clamp(2rem,3.6vw,3.35rem)] font-semibold tracking-tight">
        About {site.name}
      </h1>
      <p className="mt-4 max-w-prose text-muted">{site.disclaimer}</p>
      <p className="mt-4 max-w-prose text-muted">
        The site is a catalogue-style study: named buildings, sample figures, and a clear path
        from the first screen to Get started.
      </p>
      <div className="page-actions">
        <ButtonLink to="/properties">Explore properties</ButtonLink>
        <ButtonLink to="/how-it-works" variant="ghost">
          How it works
        </ButtonLink>
      </div>

      <section
        id="contact"
        className="mt-14 max-w-md scroll-mt-[calc(var(--header-h)+var(--promo-h)+1.5rem)] border-t border-line pt-10"
        aria-labelledby="contact-heading"
      >
        <h2 id="contact-heading" className="text-2xl font-semibold tracking-tight">
          Contact
        </h2>
        <p className="mt-3 text-muted">
          This form is a sample inquiry. Submitting it does not send a message.
        </p>

        {submitted ? (
          <div className="demo-confirm" role="status">
            <p className="font-medium tracking-tight">Demo inquiry recorded locally.</p>
            <p className="mt-2 text-sm text-muted">
              Nothing was sent. This is a sample interaction for the demonstration platform.
            </p>
            <div className="page-actions">
              <ButtonLink to="/get-started">Get started</ButtonLink>
            </div>
          </div>
        ) : (
          <form className="mt-8" onSubmit={onSubmit}>
            <label className="demo-field">
              <span>Name</span>
              <input type="text" name="name" autoComplete="name" required />
            </label>
            <label className="demo-field">
              <span>Email</span>
              <input type="email" name="email" autoComplete="email" required />
            </label>
            <label className="demo-field">
              <span>Message</span>
              <textarea name="message" required />
            </label>
            <p className="demo-note">Sample interaction only.</p>
            <div className="page-actions">
              <Button type="submit">Send demo inquiry</Button>
            </div>
          </form>
        )}
      </section>
    </Container>
  )
}
