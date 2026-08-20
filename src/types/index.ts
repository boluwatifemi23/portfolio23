import type { ElementType } from 'react'

export interface TechStack {
  name: string
  color: string
}

export interface TechCategory {
  title: string
  items: TechStack[]
}

export interface ProjectMetric {
  label: string
  value: string
}

export interface CaseStudySection {
  heading: string
  body: string
}

export interface GalleryImage {
  src: string
  caption: string
}

export interface Project {
  slug: string
  title: string
  subtitle?: string
  summary: string
  description?: string
  category: 'Systems & Integrations' | 'Full-Stack' | 'Frontend'
  tech: string[]
  image?: string
  gallery?: GalleryImage[]
  github?: string
  live?: string
  featured: boolean
  flagship?: boolean
  parent?: string
  metrics?: ProjectMetric[]
  sections?: CaseStudySection[]
  order: number
}

export interface ExperienceEntry {
  id: string
  role: string
  company: string
  period: string
  bullets: string[]
}

export interface ContactInfo {
  icon: ElementType
  title: string
  value: string
  href: string
}

export interface NavItem {
  name: string
  href: string
}