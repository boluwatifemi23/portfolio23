import type { MetadataRoute } from 'next'
import { projects } from '../lib/data'

const SITE_URL = 'https://portfolio-lemon-three-1zuqwbb036.vercel.app' // TODO: swap for your custom domain when you get one

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: project.flagship ? 0.9 : project.featured ? 0.8 : 0.6,
  }))

  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    ...projectRoutes,
  ]
}