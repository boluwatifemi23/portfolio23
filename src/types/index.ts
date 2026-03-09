import type { ElementType } from 'react'

export interface TechStack {
  name: string
  projects: string[]
  hasProjects: boolean
  color: string
}

export interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  image: string
  github: string
  live: string
  featured: boolean
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