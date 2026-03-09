'use client'

import { RefObject, useEffect, useState } from 'react'

export const useInView = (
  ref: RefObject<HTMLElement | null>,
  threshold = 0.1
): boolean => {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold }
    )

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [ref, threshold])

  return isInView
}
