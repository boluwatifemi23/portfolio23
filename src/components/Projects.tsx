'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Star } from 'lucide-react'
import Image from 'next/image'
import { useInView } from '../hooks/useInView'
import { projects } from '../lib/data'

interface ProjectsProps {
  darkMode: boolean
}

const categories = ['All', 'Full-Stack', 'Frontend']

export default function Projects({ darkMode }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState('All')
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, 0.05)

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-24 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-900/60' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-4">
            My Work
          </span>
          <h2 className="text-4xl font-extrabold">Projects That Ship</h2>
          <p className={`mt-3 text-lg max-w-xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            From landing pages to full-stack platforms — real products, real users, real impact.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20'
                  : darkMode
                  ? 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-blue-400 hover:text-blue-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                whileHover={{ y: -6 }}
                className={`group flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-2xl ${
                  darkMode
                    ? 'bg-gray-800/60 border-white/5 hover:border-blue-500/30 hover:shadow-blue-500/10'
                    : 'bg-white border-gray-100 hover:border-blue-200 hover:shadow-gray-200'
                }`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-800">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {project.featured && (
                    <div className="absolute top-3 left-3 flex items-center gap-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2.5 py-1 rounded-lg text-xs font-bold">
                      <Star className="h-3 w-3 fill-current" /> Flagship
                    </div>
                  )}

                  <span
                    className={`absolute top-3 right-3 px-2.5 py-1 rounded-lg text-xs font-semibold ${
                      project.category === 'Full-Stack'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <h3
                    className={`text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-4 flex-1 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {project.description.length > 180
                      ? project.description.slice(0, 180) + '...'
                      : project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className={`px-2 py-0.5 rounded-md text-xs font-medium ${
                          darkMode
                            ? 'bg-white/5 text-gray-400 border border-white/10'
                            : 'bg-gray-100 text-gray-600 border border-gray-200'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md text-xs font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-3 border-t border-white/5">
                    {project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                          darkMode
                            ? 'text-gray-400 hover:text-white'
                            : 'text-gray-500 hover:text-gray-900'
                        }`}
                      >
                        <Github className="h-4 w-4" /> Code
                      </a>
                    )}
                    {project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}