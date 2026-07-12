export const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export const cn = (...classes: (string | boolean | undefined)[]): string => {
  return classes.filter(Boolean).join(' ')
}

// Experience is calculated from your actual start date so this
// never needs manual updating again.
const EXPERIENCE_START = new Date('2026-05-01')

export const getExperienceYears = (): string => {
  const now = new Date()
  const months =
    (now.getFullYear() - EXPERIENCE_START.getFullYear()) * 12 +
    (now.getMonth() - EXPERIENCE_START.getMonth())
  const years = Math.max(1, Math.floor(months / 12) || 1)
  return `${years}+`
}