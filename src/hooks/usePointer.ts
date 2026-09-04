import { useEffect, useRef } from 'react'

export function usePointer() {
  const pointer = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const updatePointer = (event: PointerEvent) => {
      pointer.current.x = event.clientX / window.innerWidth - 0.5
      pointer.current.y = event.clientY / window.innerHeight - 0.5
    }

    window.addEventListener('pointermove', updatePointer, { passive: true })
    return () => window.removeEventListener('pointermove', updatePointer)
  }, [])

  return pointer
}
