import { useState, type RefObject } from 'react'
import { projects } from '../../data/projects'
import { WorkProjectRow } from './WorkProjectRow'

type WorkPreviewProps = {
  sectionRef: RefObject<HTMLElement | null>
}

export function WorkPreview({ sectionRef }: WorkPreviewProps) {
  const [activeProject, setActiveProject] = useState<string | null>(null)

  return (
    <section ref={sectionRef} id="work" className="work content-grid" aria-labelledby="work-title">
      <div className="work__heading">
        <p className="work__eyebrow">Selected work / 2026</p>
        <h2 id="work-title">
          Selected<br />projects
        </h2>
      </div>

      <div className="work__index" aria-label="Selected project index">
        {projects.map((project) => (
          <div key={project.id}>
            <WorkProjectRow
              active={activeProject === project.id}
              project={project}
              onActivate={() => setActiveProject(project.id)}
              onDeactivate={() => setActiveProject(null)}
            />
            <a className="work__case-link" href={project.href}>
              Read {project.label} {project.id === 'ai-taster' ? 'case study' : 'overview'} <span aria-hidden="true">↓</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
