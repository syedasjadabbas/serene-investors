import { useEffect } from 'react'

function setMeta(name: string, content: string) {
  const meta = document.querySelector(`meta[name="${name}"]`)
  meta?.setAttribute('content', content)
}

function setProperty(property: string, content: string) {
  const meta = document.querySelector(`meta[property="${property}"]`)
  meta?.setAttribute('content', content)
}

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    const previousTitle = document.title
    const descriptionMeta = document.querySelector('meta[name="description"]')
    const previousDescription = descriptionMeta?.getAttribute('content') ?? ''
    const previousOgTitle = document.querySelector('meta[property="og:title"]')?.getAttribute('content') ?? ''
    const previousOgDescription =
      document.querySelector('meta[property="og:description"]')?.getAttribute('content') ?? ''
    const previousTwitterTitle = document.querySelector('meta[name="twitter:title"]')?.getAttribute('content') ?? ''
    const previousTwitterDescription =
      document.querySelector('meta[name="twitter:description"]')?.getAttribute('content') ?? ''

    document.title = title
    descriptionMeta?.setAttribute('content', description)
    setProperty('og:title', title)
    setProperty('og:description', description)
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)

    return () => {
      document.title = previousTitle
      descriptionMeta?.setAttribute('content', previousDescription)
      setProperty('og:title', previousOgTitle)
      setProperty('og:description', previousOgDescription)
      setMeta('twitter:title', previousTwitterTitle)
      setMeta('twitter:description', previousTwitterDescription)
    }
  }, [description, title])
}
