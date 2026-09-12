import type { ProcessStep } from '@/types'

type Props = {
  step: ProcessStep
  index: number
}

export function ProcessStepItem({ step, index }: Props) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <li
      data-reveal-item
      className="border-t border-line py-5 first:border-t-0 md:border-t-0 md:px-5 md:first:pl-0 lg:border-l lg:border-t-0 lg:first:border-l-0 lg:first:pl-0"
    >
      <span className="block text-[1.85rem] font-semibold leading-none tabular-nums tracking-tight text-primary">
        {number}
      </span>
      <h3 className="mt-3 text-lg font-medium tracking-tight">{step.title}</h3>
      <p className="mt-2 max-w-[26ch] text-sm leading-relaxed text-muted">{step.body}</p>
    </li>
  )
}
