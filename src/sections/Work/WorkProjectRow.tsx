import type { projects } from '../../data/projects'

type Project = (typeof projects)[number]

type WorkProjectRowProps = {
  active: boolean
  project: Project
  onActivate: () => void
  onDeactivate: () => void
}

export function WorkProjectRow({ active, project, onActivate, onDeactivate }: WorkProjectRowProps) {
  return (
    <article className={`work-project ${active ? 'is-active' : ''}`}>
      <button
        className="work-project__button"
        type="button"
        aria-expanded={active}
        onBlur={onDeactivate}
        onFocus={onActivate}
        onMouseEnter={onActivate}
        onMouseLeave={onDeactivate}
      >
        <span className="work-project__index" aria-hidden="true">
          {project.index}
        </span>
        <span className="work-project__summary">
          <span className="work-project__title">{project.title}</span>
          <span className="work-project__role">{project.role}</span>
        </span>
        <span className="work-project__arrow" aria-hidden="true">
          ↗
        </span>
      </button>

      <div className="work-project__details" aria-hidden={!active}>
        <p>Selected system / {project.year}</p>
        <ul aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}
