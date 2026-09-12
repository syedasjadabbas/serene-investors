import type { BackerGroup as BackerGroupData } from '@/types'

type Props = {
  group: BackerGroupData
}

export function BackerGroup({ group }: Props) {
  return (
    <section data-backer-group aria-labelledby={`backer-${group.id}`}>
      <h3 id={`backer-${group.id}`} className="home-kicker text-primary">
        {group.title}
      </h3>
      <ul className="mt-5 border-t border-line">
        {group.items.map((item) => (
          <li key={item.id} data-backer-item className="backer-item">
            <p className="backer-item__name text-[1.4rem] font-medium tracking-tight">{item.name}</p>
            <p className="mt-1 text-[length:var(--type-meta)] text-muted">{item.category}</p>
            <p className="mt-0.5 text-[length:var(--type-meta)] text-subtle">{item.role}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
