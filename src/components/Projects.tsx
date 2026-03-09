'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Sparkles } from 'lucide-react'

import Image from 'next/image'
import { useInView } from '../hooks/useInView'
import { projects } from '../lib/data'

interface ProjectsProps {
  darkMode: boolean
}

export default function Projects({ darkMode }: ProjectsProps) {
  const [selectedTech, setSelectedTech] = useState('all')
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, 0.1)

  const filteredProjects =
    selectedTech === 'all'
      ? projects
      : projects.filter(p => p.tech.includes(selectedTech))

  const techFilters = ['all', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'JavaScript', 'React', 'Firebase']

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800/50' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {techFilters.map(tech => (
            <motion.button
              key={tech}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedTech(tech)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                selectedTech === tech
                  ? darkMode
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                    : 'bg-blue-600 text-white shadow-lg'
                  : darkMode
                  ? 'bg-gray-700 hover:bg-gray-600'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {tech.charAt(0).toUpperCase() + tech.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTech}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 + 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`group rounded-lg overflow-hidden ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } border ${
                  darkMode ? 'border-gray-700' : 'border-gray-200'
                } transition-all duration-500 hover:shadow-2xl`}
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                  />
                  {project.featured && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: 'spring' }}
                      className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1"
                    >
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      >
                        <Sparkles className="h-3 w-3" />
                      </motion.div>
                      Featured
                    </motion.div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  {/* <div className="flex flex-wrap gap-2 mb-4">
                   {techFilters.map((tech: string) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.1 }}
                        className={`px-3 py-1 rounded-full text-sm ${
                          darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                        } transition-transform`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div> */}
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`flex items-center ${
                        darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                      } transition-all`}
                    >
                      <Github className="h-5 w-5 mr-1" /> Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`flex items-center ${
                        darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                      } transition-all`}
                    >
                      <ExternalLink className="h-5 w-5 mr-1" /> Live Demo
                    </motion.a>
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