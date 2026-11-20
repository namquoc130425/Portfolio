import type { RefObject } from 'react'
import type { SkillStateKey } from '../../animation/states/artifactStates'
import { skillCategories } from '../../data/skills'

type SkillsSystemProps = {
  activeSkill: SkillStateKey | null
  onActiveSkillChange: (skill: SkillStateKey | null) => void
  sectionRef: RefObject<HTMLElement | null>
}

export function SkillsSystem({ activeSkill, onActiveSkillChange, sectionRef }: SkillsSystemProps) {
  return (
    <section ref={sectionRef} id="skills" className="skills-system content-grid" aria-labelledby="skills-title">
      <header className="skills-system__masthead">
        <p className="skills-system__eyebrow">Engineering system</p>
        <h2 id="skills-title">Capabilities / technology language</h2>
      </header>

      <p className="skills-system__scope-note">
        Portfolio capabilities are listed independently of any single project.
      </p>

      <div className="skills-system__groups">
        {skillCategories.map((category) => (
          <section key={category.id} className="skills-system__group" aria-labelledby={`skills-${category.id}`}>
            <h3 id={`skills-${category.id}`}>{category.label}</h3>
            <ul>
              {category.skills.map((skill) => {
                const stateKey = skill.stateKey
                const active = activeSkill === stateKey

                if (!stateKey) {
                  return (
                    <li key={skill.id}>
                      <span className="skills-system__skill skills-system__skill--static">{skill.label}</span>
                    </li>
                  )
                }

                return (
                  <li key={skill.id}>
                    <button
                      className="skills-system__skill"
                      type="button"
                      aria-pressed={active}
                      onBlur={() => onActiveSkillChange(null)}
                      onClick={() => onActiveSkillChange(stateKey)}
                      onFocus={() => onActiveSkillChange(stateKey)}
                      onPointerEnter={() => onActiveSkillChange(stateKey)}
                      onPointerLeave={(event) => {
                        if (event.currentTarget !== document.activeElement) onActiveSkillChange(null)
                      }}
                    >
                      <span>{skill.label}</span>
                      {skill.note && <small>{skill.note}</small>}
                    </button>
                  </li>
                )
              })}
            </ul>
          </section>
        ))}
      </div>
    </section>
  )
}
