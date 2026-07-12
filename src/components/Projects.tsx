'use client'

import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { projects } from '../lib/data'

interface ProjectsProps {
  darkMode: boolean
}

type Filter = 'All' | 'Full-Stack' | 'Frontend'

function ProjectImage({ src, alt, name, darkMode }: { src?: string; alt: string; name: string; darkMode: boolean }) {
  const [failed, setFailed] = useState(false)

  if (failed || !src) {
    return (
      <div className={`w-full h-full flex items-center justify-center relative overflow-hidden ${
        darkMode ? 'bg-white/[0.02]' : 'bg-gray-100'
      }`}>
        {darkMode && <div className="absolute inset-0 grid-texture" />}
        <span className={`font-display font-semibold text-lg text-center px-4 relative z-10 ${
          darkMode ? 'text-paper/70' : 'text-gray-500'
        }`}>
          {name}
        </span>
      </div>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      onError={() => setFailed(true)}
    />
  )
}

export default function Projects({ darkMode }: ProjectsProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, 0.05)
  const [filter, setFilter] = useState<Filter>('All')

  const flagship = projects.find((p) => p.flagship)

  const gridProjects = projects
    .filter((p) => !p.flagship && !p.parent)
    .filter((p) => filter === 'All' || p.category === filter)
    .sort((a, b) => a.order - b.order)

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t ${darkMode ? 'border-line' : 'border-gray-200 bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className={`inline-flex items-center gap-2 px-3 py-1 border font-mono text-xs uppercase tracking-wide mb-3 ${
            darkMode ? 'border-line text-signal' : 'border-gray-300 text-emerald-600'
          }`}>
            <span className="status-dot" /> My Work
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">Things I&apos;ve Built</h2>
          <p className={`text-base sm:text-lg max-w-xl mx-auto ${darkMode ? 'text-muted' : 'text-gray-600'}`}>
            Real projects. Real users. Real impact.
          </p>
        </motion.div>

        {flagship && (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-10 sm:mb-14"
          >
            <Link
              href={`/projects/${flagship.slug}`}
              className={`group relative block overflow-hidden border transition-colors duration-300 ${
                darkMode ? 'border-line hover:border-alert/50' : 'border-gray-300 hover:border-orange-400 bg-white'
              }`}
            >
              {darkMode && <div className="absolute inset-0 grid-texture pointer-events-none" />}
              <div className="p-6 sm:p-10 relative z-10">
                <span className={`inline-flex items-center gap-2 px-3 py-1 border font-mono text-xs uppercase tracking-wide mb-4 ${
                  darkMode ? 'border-alert/40 text-alert' : 'border-orange-400 text-orange-600'
                }`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-alert" /> Flagship Project
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3">{flagship.title}</h3>
                <p className={`text-sm sm:text-base leading-relaxed mb-5 max-w-2xl ${darkMode ? 'text-muted' : 'text-gray-600'}`}>
                  {flagship.summary}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {flagship.tech.slice(0, 6).map((t) => (
                    <span
                      key={t}
                      className={`px-2.5 py-1 font-mono text-xs border ${
                        darkMode ? 'border-line text-muted' : 'border-gray-300 text-gray-600'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className={`inline-flex items-center gap-1.5 font-mono text-sm font-medium group-hover:gap-2.5 transition-all duration-200 ${
                  darkMode ? 'text-alert' : 'text-orange-600'
                }`}>
                  Explore the full platform <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </motion.div>
        )}

        <div className="flex gap-2 justify-center flex-wrap mb-8 sm:mb-10">
          {(['All', 'Full-Stack', 'Frontend'] as Filter[]).map((f) => (
            <motion.button
              key={f}
              onClick={() => setFilter(f)}
              whileTap={{ scale: 0.96 }}
              className={`px-4 sm:px-5 py-2 border font-mono text-xs uppercase tracking-wide transition-colors duration-200 ${
                filter === f
                  ? darkMode
                    ? 'bg-signal text-ink border-signal'
                    : 'bg-emerald-600 text-white border-emerald-600'
                  : darkMode
                  ? 'border-line text-muted hover:text-paper hover:border-paper/30'
                  : 'border-gray-300 text-gray-600 hover:text-ink hover:border-gray-400'
              }`}
            >
              {f}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            {gridProjects.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className={`group block h-full border transition-colors duration-300 ${
                    darkMode ? 'border-line hover:border-signal/40' : 'border-gray-200 hover:border-emerald-300 bg-white'
                  }`}
                >
                  <div className="relative h-44 sm:h-48 overflow-hidden">
                    <ProjectImage src={project.image} alt={project.title} name={project.title} darkMode={darkMode} />
                    <div className={`absolute top-3 left-3 px-2 py-1 border font-mono text-[10px] uppercase tracking-wide backdrop-blur-sm ${
                      darkMode ? 'bg-ink/70 border-line text-muted' : 'bg-white/80 border-gray-300 text-gray-600'
                    }`}>
                      {project.category}
                    </div>
                  </div>

                  <div className="p-4 sm:p-5">
                    <h3 className={`font-display font-semibold text-base sm:text-lg mb-1.5 ${darkMode ? 'text-paper' : 'text-ink'}`}>
                      {project.title}
                    </h3>
                    <p className={`text-xs sm:text-sm leading-relaxed mb-3 line-clamp-3 ${darkMode ? 'text-muted' : 'text-gray-600'}`}>
                      {project.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className={`px-2 py-0.5 font-mono text-[11px] border ${
                            darkMode ? 'border-line text-muted' : 'border-gray-200 text-gray-500'
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className={`px-2 py-0.5 font-mono text-[11px] ${darkMode ? 'text-signal' : 'text-emerald-600'}`}>
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>

                    <span className={`inline-flex items-center gap-1.5 font-mono text-xs font-medium group-hover:gap-2.5 transition-all duration-200 ${
                      darkMode ? 'text-signal' : 'text-emerald-600'
                    }`}>
                      View Case Study <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}