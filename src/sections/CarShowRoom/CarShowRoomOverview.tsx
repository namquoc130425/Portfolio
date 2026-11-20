import { carShowRoom, projects } from '../../data/projects'

export function CarShowRoomOverview() {
  const project = projects[1]

  return (
    <article id="carshowroom" className="editorial-summary content-grid" aria-labelledby="carshowroom-title">
      <header className="editorial-summary__heading">
        <p className="editorial-summary__eyebrow">02 / Selected project</p>
        <h2 id="carshowroom-title">CarShowRoom</h2>
        <p className="editorial-summary__metadata">Admin development &amp; UI / Team of 5</p>
        <a className="editorial-link" href={project.repository} target="_blank" rel="noopener noreferrer">
          View project source <span aria-hidden="true">↗</span>
        </a>
      </header>
      <div className="editorial-summary__body">
        <p className="editorial-summary__lead">{carShowRoom.introduction}</p>
        <dl className="editorial-summary__contributions">
          {carShowRoom.contributions.map((item) => (
            <div key={item.label}><dt>{item.label}</dt><dd>{item.detail}</dd></div>
          ))}
        </dl>
      </div>
      <ul className="editorial-summary__technologies" aria-label="CarShowRoom technologies">
        {carShowRoom.technologies.map((technology) => <li key={technology}>{technology}</li>)}
      </ul>
    </article>
  )
}
