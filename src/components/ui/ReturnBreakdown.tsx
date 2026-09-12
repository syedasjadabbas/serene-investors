import type { ReturnIllustration } from '@/types'

type Props = {
  example: ReturnIllustration
  stage?: 'receive' | 'build'
}

export function ReturnBreakdown({ example, stage = 'build' }: Props) {
  const rental = example.components.find((item) => item.id === 'rental')
  const showBuild = stage === 'build'

  return (
    <div className="return-board">
      <p className="home-kicker text-muted">{example.figureLabel}</p>

      <div data-returns-investment className="mt-8">
        <p className="text-[clamp(3.4rem,6vw,5.4rem)] font-semibold leading-none tracking-[-0.04em] tabular-nums">
          {example.investmentValue}
        </p>
        <p className="mt-3 text-sm text-muted">{example.investmentLabel}</p>
      </div>

      {rental ? (
        <div className="mt-10">
          <p className="text-[clamp(2rem,3.4vw,2.75rem)] font-semibold leading-none tracking-[-0.03em] tabular-nums text-primary">
            {rental.value}
          </p>
          <p className="mt-2 text-sm text-muted">{rental.label}</p>
        </div>
      ) : null}

      {showBuild ? (
        <>
          {example.components
            .filter((item) => item.id !== 'rental')
            .map((item) => (
              <div key={item.id} className="mt-8">
                <p className="text-[clamp(2rem,3.4vw,2.75rem)] font-semibold leading-none tracking-[-0.03em] tabular-nums text-primary">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-muted">{item.label}</p>
              </div>
            ))}

          <div className="mt-10 border-t border-line pt-8">
            <p className="text-[clamp(2.4rem,4vw,3.4rem)] font-semibold leading-none tracking-[-0.03em] tabular-nums text-accent">
              {example.total.value}
            </p>
            <p className="mt-2 text-sm text-muted">{example.total.label}</p>
            <p className="mt-8 text-[clamp(3rem,5vw,4.4rem)] font-semibold leading-none tracking-[-0.04em] tabular-nums">
              {example.rate.value}
            </p>
            <p className="mt-2 text-sm text-muted">{example.rate.label}</p>
          </div>
        </>
      ) : null}
    </div>
  )
}
