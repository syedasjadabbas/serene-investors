import { ButtonLink } from '@/components/ui/Button'

export function LearnNotFound() {
  return (
    <section id="hero" className="px-5 py-24 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[var(--container-wide)]">
        <p className="property-hero__mark">Sample collection</p>
        <h1 className="mt-6 max-w-[12ch] text-[clamp(2.4rem,5vw,4.35rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-balance">
          This guide is not in the collection.
        </h1>
        <p className="mt-5 max-w-[40ch] text-[1.05rem] leading-relaxed text-muted text-pretty">
          The sample article you opened does not exist in the current Learn catalogue.
        </p>
        <div className="mt-8">
          <ButtonLink to="/learn" className="min-h-11">
            Back to Learn
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
