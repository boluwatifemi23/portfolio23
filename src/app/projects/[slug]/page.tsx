import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Github, ExternalLink } from 'lucide-react'
import { projects } from '../../../lib/data'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: 'article',
      images: project.image ? [{ url: project.image }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.summary,
    },
    alternates: {
      canonical: `/projects/${slug}`,
    },
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  const children = projects
    .filter((p) => p.parent === project.slug)
    .sort((a, b) => a.order - b.order)
  const parent = project.parent ? projects.find((p) => p.slug === project.parent) : undefined

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.summary,
    creator: { '@type': 'Person', name: 'Gloria Aguedu' },
    keywords: project.tech.join(', '),
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto">
        <Link
          href={parent ? `/projects/${parent.slug}` : '/#projects'}
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {parent ? `Back to ${parent.title}` : 'Back to all projects'}
        </Link>

        {parent && (
          <p className="text-blue-400 text-sm font-semibold mb-2">
            Part of {parent.title}
          </p>
        )}

        <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-4">
          {project.category}
        </span>

        <h1 className="text-3xl sm:text-5xl font-extrabold mb-3 leading-tight">
          {project.title}
        </h1>

        {project.subtitle && (
          <p className="text-lg sm:text-xl text-gray-400 mb-6">{project.subtitle}</p>
        )}

        <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8">
          {project.description || project.summary}
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1.5 rounded-lg text-sm font-medium bg-white/5 border border-white/10 text-gray-300"
            >
              {t}
            </span>
          ))}
        </div>

        {project.metrics && project.metrics.length > 0 && (
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {project.metrics.map((m) => (
              <div key={m.label} className="rounded-2xl p-5 bg-white/3 border border-white/5 text-center">
                <div className="text-2xl font-extrabold gradient-text">{m.value}</div>
                <div className="text-xs text-gray-500 mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {project.sections && project.sections.length > 0 && (
          <div className="flex flex-col gap-8 mb-10">
            {project.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-xl font-bold mb-2">{s.heading}</h2>
                <p className="text-gray-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        )}

        {children.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-4">The Four Systems</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {children.map((child) => (
                <Link
                  key={child.slug}
                  href={`/projects/${child.slug}`}
                  className="group p-5 rounded-2xl border border-white/5 bg-white/3 hover:border-blue-500/30 transition-all duration-300"
                >
                  <h3 className="font-bold mb-1.5 group-hover:text-blue-400 transition-colors">
                    {child.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-3">{child.summary}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400">
                    View system <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {(project.github || project.live) && (
          <div className="flex gap-3">
            {project.github && (
              
              <a  href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border border-white/10 text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                <Github className="h-4 w-4" /> View Code
              </a>
            )}
            {project.live && (
              
              <a  href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200"
              >
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </main>
  )
}