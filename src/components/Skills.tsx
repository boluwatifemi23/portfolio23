'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Layers, Server, Workflow, Database, Wrench } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { techStack } from '../lib/data'

interface SkillsProps {
  darkMode: boolean
}

const categoryIcon: Record<string, typeof Layers> = {
  'Frontend': Layers,
  'Backend': Server,
  'Integrations & Automation': Workflow,
  'Database & Cloud': Database,
  'Tools & Platforms': Wrench,
}

export default function Skills({ darkMode }: SkillsProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, 0.1)

  return (
    <section id="skills" ref={ref} className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className={`inline-flex items-center gap-2 px-3 py-1 border font-mono text-xs uppercase tracking-wide mb-3 ${
            darkMode ? 'border-line text-signal' : 'border-gray-300 text-emerald-600'
          }`}>
            <span className="status-dot" /> Technical Skills
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">What I Work With</h2>
          <p className={`mt-3 text-base sm:text-lg max-w-xl mx-auto ${darkMode ? 'text-muted' : 'text-gray-600'}`}>
            Every tool here has been used in a real project — no filler, no fluff.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {techStack.map((category, sectionIdx) => {
            const Icon = categoryIcon[category.title] ?? Wrench
            return (
              <motion.div
                key={category.title}
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: sectionIdx * 0.1 }}
                className={`p-5 sm:p-6 border ${darkMode ? 'border-line' : 'border-gray-200 bg-white'}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 rounded-md border flex items-center justify-center ${
                    darkMode ? 'border-line text-signal' : 'border-gray-300 text-emerald-600'
                  }`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className={`font-display font-semibold text-base sm:text-lg ${darkMode ? 'text-paper' : 'text-ink'}`}>
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((tech) => (
                    <span
                      key={tech.name}
                      className={`px-2.5 py-1 font-mono text-xs border transition-colors duration-200 ${
                        darkMode
                          ? 'border-line text-muted hover:text-signal hover:border-signal/40'
                          : 'border-gray-200 text-gray-600 hover:text-emerald-600 hover:border-emerald-400'
                      }`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}