import type { RefObject } from 'react'
import { profile } from '../../data/profile'
import { HeroCopy } from './HeroCopy'
import { HeroMeta } from './HeroMeta'

type HeroProps = {
  sectionRef: RefObject<HTMLElement | null>
}

export function Hero({ sectionRef }: HeroProps) {
  return (
    <section ref={sectionRef} id="top" className="hero content-grid" aria-labelledby="hero-title">
      <HeroMeta />
      <HeroCopy />

      <p className="hero-tagline">{profile.tagline}</p>

      <a className="hero-work-cue" href="#work">
        <span>Selected work</span>
        <span aria-hidden="true">/</span>
        <strong>2026</strong>
        <i aria-hidden="true" />
      </a>
    </section>
  )
}
