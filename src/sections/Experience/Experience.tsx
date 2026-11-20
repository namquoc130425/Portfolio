import { experience } from '../../data/experience'

export function Experience() {
  return (
    <section id="experience" className="editorial-summary content-grid" aria-labelledby="experience-title">
      <header className="editorial-summary__heading">
        <p className="editorial-summary__eyebrow">Experience / Learning in practice</p>
        <h2 id="experience-title">FPT<br />Academy</h2>
        <p className="editorial-summary__metadata">{experience.period}</p>
        <p className="editorial-summary__role">{experience.role}</p>
      </header>
      <div className="editorial-summary__body">
        <p className="editorial-summary__metadata">{experience.context}</p>
        <p className="editorial-summary__lead">{experience.introduction}</p>
        <dl className="editorial-summary__contributions">
          {experience.contributions.map((item) => (
            <div key={item.label}><dt>{item.label}</dt><dd>{item.detail}</dd></div>
          ))}
        </dl>
      </div>
      <ul className="editorial-summary__technologies" aria-label="FPT Academy project technologies">
        {experience.technologies.map((technology) => <li key={technology}>{technology}</li>)}
      </ul>
    </section>
  )
}
