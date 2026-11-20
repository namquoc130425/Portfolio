import { useEffect, useState } from 'react'

export type NavigationSection = {
  href: string
  id: string
}

function navigationHrefFromHash(hash: string, sections: readonly NavigationSection[]) {
  const exactMatch = sections.find((section) => `#${section.id}` === hash)
  if (exactMatch) return exactMatch.href

  const target = typeof document === 'undefined' ? null : document.getElementById(hash.slice(1))
  if (!target) return null

  return sections.find((section) => document.getElementById(section.id)?.contains(target))?.href ?? null
}

export function useActiveSection(sections: readonly NavigationSection[]) {
  const [activeHref, setActiveHref] = useState<string | null>(() =>
    typeof window === 'undefined' ? null : navigationHrefFromHash(window.location.hash, sections),
  )

  useEffect(() => {
    const elements = sections
      .map((section) => ({ element: document.getElementById(section.id), ...section }))
      .filter((section): section is NavigationSection & { element: HTMLElement } => section.element !== null)

    const syncHash = () => setActiveHref(navigationHrefFromHash(window.location.hash, sections))
    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top)[0]

        if (!activeEntry) {
          if (elements[0]?.element.getBoundingClientRect().top > window.innerHeight) {
            setActiveHref(null)
          }
          return
        }

        const section = elements.find((item) => item.element === activeEntry.target)
        if (section) setActiveHref(section.href)
      },
      {
        rootMargin: '-18% 0px -58% 0px',
        threshold: 0,
      },
    )

    elements.forEach(({ element }) => observer.observe(element))
    window.addEventListener('hashchange', syncHash)
    syncHash()

    return () => {
      observer.disconnect()
      window.removeEventListener('hashchange', syncHash)
    }
  }, [sections])

  return [activeHref, setActiveHref] as const
}
