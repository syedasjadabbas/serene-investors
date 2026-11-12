import type { ImgHTMLAttributes } from 'react'
import { cn } from '@/global/lib/cn'
import { withBase } from '@/global/lib/asset'

export interface ImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'width' | 'height'> {
  src: string
  alt: string
  width?: number | string
  height?: number | string
  priority?: boolean
  fill?: boolean
  className?: string
}

/**
 * Compatible Image component supporting Next.js <Image /> props (width, height, alt, priority, fill).
 */
export function Image({
  src,
  alt,
  width,
  height,
  priority = false,
  fill = false,
  className,
  loading,
  decoding,
  fetchPriority,
  style,
  ...rest
}: ImageProps) {
  return (
    <img
      src={withBase(src)}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      loading={priority ? 'eager' : (loading ?? 'lazy')}
      decoding={decoding ?? 'async'}
      fetchPriority={priority ? 'high' : (fetchPriority ?? 'auto')}
      className={cn(fill && 'absolute inset-0 h-full w-full object-cover', className)}
      style={style}
      {...rest}
    />
  )
}

export default Image
