import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Props = {
  children: ReactNode
  className?: string
  as?: 'div' | 'section'
}

export function Container({ children, className, as: Tag = 'div' }: Props) {
  return (
    <Tag className={cn('mx-auto w-full max-w-[72rem] px-5 md:px-8', className)}>
      {children}
    </Tag>
  )
}
