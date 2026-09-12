import { ButtonLink } from '@/components/ui/Button'

export function PropertyNotFound() {
  return (
    <section id="hero" className="px-5 py-24 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[var(--container-wide)]">
        <p className="brand-label text-muted">Sample collection</p>
        <h1 className="mt-3 text-[clamp(2rem,3.4vw,3.25rem)] font-semibold tracking-[-0.03em]">
          Property not found
        </h1>
        <p className="mt-4 max-w-[40ch] text-[0.95rem] leading-relaxed text-muted">
          This sample property does not exist in the current collection.
        </p>
        <div className="mt-8">
          <ButtonLink to="/properties" className="min-h-11">
            Back to properties
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
