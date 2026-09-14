import { ButtonLink } from '@/components/ui/Button'

export function LegalNotFound() {
  return (
    <section className="legal-hero">
      <div className="legal-hero__inner mx-auto max-w-[var(--container-wide)]">
        <p className="property-hero__mark">Fictional demonstration product</p>
        <h1 className="mt-6 max-w-[12ch] text-[clamp(2.4rem,4.8vw,3.9rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-balance">
          This note is not in the collection.
        </h1>
        <p className="mt-5 max-w-[40ch] text-[1.05rem] leading-relaxed text-muted text-pretty">
          The sample legal page you opened does not exist in this demonstration.
        </p>
        <div className="mt-8">
          <ButtonLink to="/legal/privacy" className="min-h-11">
            Open Privacy
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
