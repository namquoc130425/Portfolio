import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { useReducedMotion } from '../../hooks/useReducedMotion'

type SystemBootProps = {
  isWebGLReady: boolean
  onComplete: () => void
}

export function SystemBoot({ isWebGLReady, onComplete }: SystemBootProps) {
  const bootRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  useLayoutEffect(() => {
    const root = bootRef.current
    if (!root) return

    if (reducedMotion) {
      onComplete()
      return
    }

    const context = gsap.context(() => {
      const steps = gsap.utils.toArray<HTMLElement>('.boot-step')
      const progress = root.querySelector<HTMLElement>('.boot-progress')

      if (!progress) return

      gsap.set(steps, { autoAlpha: 0, x: -10 })
      gsap.set(progress, { autoAlpha: 0, scaleX: 0, transformOrigin: 'left center' })

      if (!isWebGLReady) return

      gsap
        .timeline({
          defaults: { duration: 0.22, ease: 'power2.out' },
          onComplete,
        })
        .to(steps, { autoAlpha: 1, x: 0, stagger: 0.12 })
        .to(progress, { autoAlpha: 1, scaleX: 1, duration: 0.32 }, '-=0.1')
        .to(root, { autoAlpha: 0, duration: 0.35, ease: 'power2.inOut' }, '+=0.16')
    }, root)

    return () => context.revert()
  }, [isWebGLReady, onComplete, reducedMotion])

  return (
    <div ref={bootRef} className="system-boot" role="status" aria-live="polite">
      <div className="system-boot__content">
        <p className="system-boot__title">Portfolio system</p>
        <div className="system-boot__steps">
          <p className="boot-step">Initializing WebGL</p>
          <p className="boot-step">Loading environment</p>
          <p className="boot-step">Compiling shaders</p>
          <p className="boot-step">Ready</p>
        </div>
        <div className="system-boot__footer">
          <i className="boot-progress" aria-hidden="true" />
          <strong>100</strong>
        </div>
      </div>
    </div>
  )
}
