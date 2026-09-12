type Props = {
  id: string
  name: string
}

function Mark({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 40 40" width="40" height="40" fill="none" aria-hidden="true">
      {children}
    </svg>
  )
}

function initialsFrom(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}

export function BackerMark({ id, name }: Props) {
  return (
    <span className="community-mark">
      {id === 'stonebridge' ? (
        <Mark>
          <path d="M8 24h24M10 24V16h6v8M24 24V14h6v10M8 16h24" stroke="currentColor" strokeWidth="1.6" />
        </Mark>
      ) : id === 'urban-property' ? (
        <Mark>
          <rect x="10" y="10" width="8" height="8" stroke="currentColor" strokeWidth="1.6" />
          <rect x="22" y="10" width="8" height="8" stroke="currentColor" strokeWidth="1.6" />
          <rect x="10" y="22" width="8" height="8" stroke="currentColor" strokeWidth="1.6" />
          <rect x="22" y="22" width="8" height="8" stroke="currentColor" strokeWidth="1.6" />
        </Mark>
      ) : id === 'harbor-partners' ? (
        <Mark>
          <path d="M8 18c0 8 5.4 12 12 12s12-4 12-12" stroke="currentColor" strokeWidth="1.6" />
          <path d="M10 18h20M20 10v8" stroke="currentColor" strokeWidth="1.6" />
        </Mark>
      ) : id === 'northline' ? (
        <Mark>
          <path d="M12 30V10l16 20V10" stroke="currentColor" strokeWidth="1.6" />
        </Mark>
      ) : id === 'atlas-cloud' ? (
        <Mark>
          <path d="M20 8l10 16H10L20 8z" stroke="currentColor" strokeWidth="1.6" />
          <path d="M12 30h16" stroke="currentColor" strokeWidth="1.6" />
        </Mark>
      ) : id === 'meridian' ? (
        <Mark>
          <circle cx="20" cy="20" r="11" stroke="currentColor" strokeWidth="1.6" />
          <path d="M20 9v22M11 16h18M11 24h18" stroke="currentColor" strokeWidth="1.6" />
        </Mark>
      ) : (
        <span className="community-mark__fallback">{initialsFrom(name)}</span>
      )}
    </span>
  )
}
