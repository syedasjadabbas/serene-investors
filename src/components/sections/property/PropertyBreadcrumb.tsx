import { Link } from 'react-router-dom'

type Props = {
  name: string
}

export function PropertyBreadcrumb({ name }: Props) {
  return (
    <nav aria-label="Breadcrumb" className="px-5 pt-6 md:px-8 lg:px-10">
      <ol className="mx-auto flex max-w-[var(--container-wide)] flex-wrap items-center gap-2 text-sm text-muted">
        <li>
          <Link to="/properties" className="inline-flex min-h-11 items-center hover:text-ink">
            Properties
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li className="text-ink" aria-current="page">
          {name}
        </li>
      </ol>
    </nav>
  )
}
