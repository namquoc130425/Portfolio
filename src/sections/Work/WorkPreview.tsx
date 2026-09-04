import { useState, type RefObject } from 'react'
import { projects } from '../../data/projects'
import { WorkProjectRow } from './WorkProjectRow'

type WorkPreviewProps = {
  sectionRef: RefObject<HTMLElement | null>
}

export function WorkPreview({ sectionRef }: WorkPreviewProps) {
  const [activeProject, setActiveProject] = useState<string | null>(null)
  const project = projects[0]

  return (
    <section ref={sectionRef} id="work" className="work content-grid" aria-labelledby="work-title">
      <div className="work__heading">
        <p className="work__eyebrow">Selected work / 2026</p>
        <h2 id="work-title">
          {project.index} {project.label}
        </h2>
      </div>

      <div className="work__index" aria-label="Selected project index">
        <WorkProjectRow
          active={activeProject === project.id}
          project={project}
          onActivate={() => setActiveProject(project.id)}
          onDeactivate={() => setActiveProject(null)}
        />
      </div>
    </section>
  )
}
