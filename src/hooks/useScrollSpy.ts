'use client'

import { useState, useEffect } from 'react'

export const useScrollSpy = (sections: string[]): string => {
  const [activeSection, setActiveSection] = useState<string>(sections[0])

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  return activeSection
}