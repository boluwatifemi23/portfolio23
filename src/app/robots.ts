import type { MetadataRoute } from 'next'

const SITE_URL = 'https://portfolio-lemon-three-1zuqwbb036.vercel.app' // TODO: swap for your custom domain when you get one

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}