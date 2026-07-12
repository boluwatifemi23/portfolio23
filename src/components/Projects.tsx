'use client'

import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { projects } from '../lib/data'

interface ProjectsProps {
  darkMode: boolean
}

type Filter = 'All' | 'Full-Stack' | 'Frontend'

const gradients: Record<string, string> = {
  'Cornerstone Catering': 'from-orange-500 to-red-600',
  'ParentCircle': 'from-purple-500 to-pink-600',
  'NeonTech': 'from-cyan-500 to-blue-600',
  'Luxe': 'from-yellow-500 to-orange-500',
  'Nexus': 'from-indigo-500 to-purple-600',
  'TaskMaster': 'from-green-500 to-teal-600',
  'SwiftFunds': 'from-emerald-500 to-teal-700',
}

function ProjectImage({ src, alt, name }: { src?: string; alt: string; name: string }) {
  const [failed, setFailed] = useState(false)
  const gradient = Object.entries(gradients).find(([key]) => name.includes(key))?.[1] || 'from-blue-500 to-purple-600'

  if (failed || !src) {
    return (
      <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
        <span className="text-white/80 font-bold text-xl text-center px-4">{name}</span>
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

  // Grid only shows standalone projects — flagship has its own banner,
  // and Harmony Garden's sub-systems only appear on the hub page.
  const gridProjects = projects
    .filter((p) => !p.flagship && !p.parent)
    .filter((p) => filter === 'All' || p.category === filter)
    .sort((a, b) => a.order - b.order)

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-16 sm:py-24 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-900/40' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-4">
            My Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">Things I&apos;ve Built</h2>
          <p className={`text-base sm:text-lg max-w-xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Real projects. Real users. Real impact.
          </p>
        </motion.div>

        {/* Flagship banner */}
        {flagship && (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-10 sm:mb-14"
          >
            <Link
              href={`/projects/${flagship.slug}`}
              className={`group block rounded-3xl overflow-hidden border transition-all duration-300 hover:shadow-2xl ${
                darkMode
                  ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-white/10 hover:border-blue-500/30'
                  : 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-100 hover:border-blue-300'
              }`}
            >
              <div className="p-6 sm:p-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/15 border border-yellow-500/30 text-yellow-500 text-xs font-bold mb-4">
                  <Sparkles className="h-3 w-3" /> Flagship Project
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">{flagship.title}</h3>
                <p className={`text-sm sm:text-base leading-relaxed mb-5 max-w-2xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {flagship.summary}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {flagship.tech.slice(0, 6).map((t) => (
                    <span
                      key={t}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                        darkMode ? 'bg-white/8 text-gray-300' : 'bg-white text-gray-700'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-400 group-hover:gap-2.5 transition-all duration-200">
                  Explore the full platform <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Filter buttons */}
        <div className="flex gap-2 justify-center flex-wrap mb-8 sm:mb-10">
          {(['All', 'Full-Stack', 'Frontend'] as Filter[]).map((f) => (
            <motion.button
              key={f}
              onClick={() => setFilter(f)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 sm:px-5 py-2 rounded-xl font-semibold text-sm transition-all duration-200 ${
                filter === f
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : darkMode
                  ? 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-blue-400 hover:text-blue-600'
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
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7"
          >
            {gridProjects.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -5 }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className={`group block h-full rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-2xl ${
                    darkMode
                      ? 'bg-white/3 border-white/5 hover:border-blue-500/30 hover:shadow-blue-500/10'
                      : 'bg-white border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-blue-100'
                  }`}
                >
                  <div className="relative h-44 sm:h-48 overflow-hidden">
                    <ProjectImage src={project.image} alt={project.title} name={project.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-bold text-white ${
                      project.category === 'Full-Stack' ? 'bg-purple-600/90' : 'bg-blue-600/90'
                    }`}>
                      {project.category}
                    </div>
                  </div>

                  <div className="p-4 sm:p-5">
                    <h3 className={`font-bold text-base sm:text-lg mb-1.5 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {project.title}
                    </h3>
                    <p className={`text-xs sm:text-sm leading-relaxed mb-3 line-clamp-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {project.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className={`px-2 py-0.5 rounded-md text-xs font-medium ${
                            darkMode ? 'bg-white/8 text-gray-300' : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className={`px-2 py-0.5 rounded-md text-xs font-medium ${
                          darkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600'
                        }`}>
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 group-hover:gap-2.5 transition-all duration-200">
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