import NextLink from 'next/link'
import type { ComponentProps, ReactNode } from 'react'

export type LinkProps = {
  to?: string
  href?: string
  children?: ReactNode
} & Omit<ComponentProps<typeof NextLink>, 'href' | 'children'>

export function Link({ to, href, children, ...props }: LinkProps) {
  const targetHref = href ?? to ?? '/'
  return (
    <NextLink href={targetHref} {...props}>
      {children}
    </NextLink>
  )
}

export default Link
