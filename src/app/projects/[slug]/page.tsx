import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Github, ExternalLink } from 'lucide-react'
import { projects } from '../../../lib/data'
import Footer from '../../../components/Footer'

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
    alternates: { canonical: `/projects/${slug}` },
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
    <div className="min-h-screen bg-ink text-paper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="border-b border-line px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-md border border-line flex items-center justify-center font-mono text-[11px] text-signal">
              GA
            </div>
            <span className="font-display font-bold text-base">Gloria Aguedu</span>
          </Link>
          <Link
            href={parent ? `/projects/${parent.slug}` : '/#projects'}
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-signal transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {parent ? 'Back to Harmony Garden' : 'All Projects'}
          </Link>
        </div>
      </header>

      <main className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          {parent && (
            <p className="font-mono text-xs uppercase tracking-wide text-alert mb-3">
              Part of {parent.title}
            </p>
          )}

          <span className="inline-block px-3 py-1 border border-line font-mono text-xs uppercase tracking-wide text-signal mb-4">
            {project.category}
          </span>

          <h1 className="font-display text-3xl sm:text-5xl font-bold mb-3 leading-tight">
            {project.title}
          </h1>

          {project.subtitle && (
            <p className="text-lg sm:text-xl text-muted mb-6">{project.subtitle}</p>
          )}

          {project.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto border border-line mb-8"
            />
          )}

          <p className="text-base sm:text-lg text-paper/85 leading-relaxed mb-8">
            {project.description || project.summary}
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {project.tech.map((t) => (
              <span key={t} className="px-3 py-1.5 font-mono text-sm border border-line text-muted">
                {t}
              </span>
            ))}
          </div>

          {project.metrics && project.metrics.length > 0 && (
            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              {project.metrics.map((m) => (
                <div key={m.label} className="p-5 border border-line text-center">
                  <div className="font-mono text-2xl font-semibold text-signal">{m.value}</div>
                  <div className="font-mono text-xs uppercase tracking-wide text-muted mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          {project.sections && project.sections.length > 0 && (
            <div className="flex flex-col gap-8 mb-10">
              {project.sections.map((s) => (
                <div key={s.heading}>
                  <h2 className="font-display text-xl font-bold mb-2">{s.heading}</h2>
                  <p className="text-muted leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          )}

          {children.length > 0 && (
            <div className="mb-10">
              <h2 className="font-display text-xl font-bold mb-4">The Four Systems</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {children.map((child) => (
                  <Link
                    key={child.slug}
                    href={`/projects/${child.slug}`}
                    className="group p-5 border border-line hover:border-signal/40 transition-colors duration-300"
                  >
                    <h3 className="font-display font-semibold mb-1.5 group-hover:text-signal transition-colors">
                      {child.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-3">{child.summary}</p>
                    <span className="inline-flex items-center gap-1 font-mono text-xs text-signal">
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
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 font-semibold border border-line text-paper hover:border-signal/50 hover:text-signal transition-colors duration-200"
                >
                  <Github className="h-4 w-4" /> View Code
                </a>
              )}
              {project.live && (
                
               <a   href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 font-semibold bg-signal text-ink hover:bg-signal/90 transition-colors duration-200"
                >
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </main>

      <Footer darkMode={true} />
    </div>
  )
}