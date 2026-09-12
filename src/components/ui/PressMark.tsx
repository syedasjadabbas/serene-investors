import { cn } from '@/lib/cn'

const tones = [
  'italic font-medium',
  'font-semibold tracking-[0.02em]',
  'font-medium',
  'font-normal tracking-tight',
] as const

type Props = {
  name: string
  index: number
}

export function PressMark({ name, index }: Props) {
  return (
    <span
      className={cn(
        'block text-center text-[1.05rem] text-muted',
        tones[index % tones.length],
      )}
    >
      {name}
    </span>
  )
}
