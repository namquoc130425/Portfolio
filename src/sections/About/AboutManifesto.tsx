import { aboutManifesto } from '../../data/aboutManifesto'
import type { RefObject } from 'react'

type AboutManifestoProps = {
  sectionRef: RefObject<HTMLElement | null>
}

export function AboutManifesto({ sectionRef }: AboutManifestoProps) {
  return (
    <article ref={sectionRef} id="about" className="about content-grid" aria-labelledby="about-title">
      <header className="about__masthead">
        <p className="about__eyebrow">{aboutManifesto.eyebrow}</p>
        <h2 id="about-title" className="about__headline">
          {aboutManifesto.headline.map((line) => <span key={line}>{line}</span>)}
        </h2>
      </header>

      <div className="about__introduction">
        <p>{aboutManifesto.introduction}</p>
      </div>

      <div className="about__groups">
        {aboutManifesto.groups.map((group) => (
          <section key={group.title} className="about__group" aria-labelledby={`about-${group.title}`}>
            <h3 id={`about-${group.title}`}>{group.title}</h3>
            <ul>
              {group.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
        ))}
      </div>
    </article>
  )
}
