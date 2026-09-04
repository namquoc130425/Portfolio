import { lazy, Suspense, useCallback, useLayoutEffect, useRef, useState } from 'react'
import { createAboutArtifactTrigger } from '../animation/scroll/createAboutArtifactTrigger'
import { createHeroWorkTimeline } from '../animation/scroll/createHeroWorkTimeline'
import { createSkillsArtifactTrigger } from '../animation/scroll/createSkillsArtifactTrigger'
import { useLenisScroll } from '../animation/scroll/useLenisScroll'
import type { ArtifactState, SkillStateKey } from '../animation/states/artifactStates'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { profile } from '../data/profile'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { Hero } from '../sections/Hero/Hero'
import { SystemBoot } from '../sections/Boot/SystemBoot'
import { AboutManifesto } from '../sections/About/AboutManifesto'
import { AiTasterCaseStudy } from '../sections/CaseStudy/AiTasterCaseStudy'
import { SkillsSystem } from '../sections/Skills/SkillsSystem'
import { WorkPreview } from '../sections/Work/WorkPreview'

const PortfolioCanvas = lazy(() =>
  import('../three/canvas/PortfolioCanvas').then(({ PortfolioCanvas: Canvas }) => ({ default: Canvas })),
)

const navigationItems = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
]

function App() {
  const [canvasReady, setCanvasReady] = useState(false)
  const [bootComplete, setBootComplete] = useState(false)
  const [artifactState, setArtifactState] = useState<ArtifactState>('HERO_IDLE')
  const [activeSkill, setActiveSkill] = useState<SkillStateKey | null>(null)
  const heroRef = useRef<HTMLElement>(null)
  const workRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const usesSemanticCanvasFallback = useMediaQuery('(max-width: 640px)')
  const reducedMotion = useReducedMotion()
  const completeBoot = useCallback(() => setBootComplete(true), [])
  const setCanvasReadyOnce = useCallback(() => setCanvasReady(true), [])
  const handleActiveSkillChange = useCallback((skill: SkillStateKey | null) => {
    setActiveSkill(skill)
    if (skill && !reducedMotion) setArtifactState('SKILL_REACTIVE')
  }, [reducedMotion])

  useLenisScroll(reducedMotion)

  useLayoutEffect(() => {
    if (!heroRef.current || !workRef.current) return undefined

    return createHeroWorkTimeline({
      hero: heroRef.current,
      work: workRef.current,
      onArtifactStateChange: setArtifactState,
      reducedMotion,
    })
  }, [reducedMotion])

  useLayoutEffect(() => {
    if (!skillsRef.current) return undefined

    return createSkillsArtifactTrigger({
      onActiveSkillChange: () => handleActiveSkillChange(null),
      onArtifactStateChange: setArtifactState,
      reducedMotion,
      skills: skillsRef.current,
    })
  }, [handleActiveSkillChange, reducedMotion])

  useLayoutEffect(() => {
    if (!aboutRef.current) return undefined

    return createAboutArtifactTrigger({
      about: aboutRef.current,
      onArtifactStateChange: setArtifactState,
      reducedMotion,
    })
  }, [reducedMotion])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header content-grid">
        <a className="site-identity" href="#top" aria-label={`${profile.name} — home`}>
          NGUYEN VUONG QUOC NAM
        </a>

        <nav className="site-navigation" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            item.href ? (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ) : (
              <span key={item.label} aria-label="About — planned after Prototype V1">
                {item.label}
              </span>
            )
          ))}
        </nav>
      </header>

      <Suspense fallback={null}>
        <PortfolioCanvas activeSkill={activeSkill} artifactState={artifactState} onReady={setCanvasReadyOnce} />
      </Suspense>

      <main id="main-content" className="portfolio-main" tabIndex={-1}>
        <Hero sectionRef={heroRef} />
        <WorkPreview sectionRef={workRef} />
        <AiTasterCaseStudy />
        <AboutManifesto sectionRef={aboutRef} />
        <SkillsSystem
          activeSkill={activeSkill}
          onActiveSkillChange={handleActiveSkillChange}
          sectionRef={skillsRef}
        />
      </main>

      {!bootComplete && (
        <SystemBoot
          isWebGLReady={canvasReady || usesSemanticCanvasFallback}
          onComplete={completeBoot}
        />
      )}
    </div>
  )
}

export default App
