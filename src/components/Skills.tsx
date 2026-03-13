'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Layers, Server, Database, Wrench } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { techStack } from '../lib/data'

interface SkillsProps {
  darkMode: boolean
}

export default function Skills({ darkMode }: SkillsProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, 0.1)

  const sections = [
    { title: 'Frontend', icon: Layers, color: 'text-blue-400', bg: 'from-blue-500 to-cyan-500', data: techStack.frontend },
    { title: 'Backend', icon: Server, color: 'text-green-400', bg: 'from-green-500 to-emerald-600', data: techStack.backend },
    { title: 'Database & Cloud', icon: Database, color: 'text-purple-400', bg: 'from-purple-500 to-indigo-600', data: techStack.database },
    { title: 'Tools & Platforms', icon: Wrench, color: 'text-orange-400', bg: 'from-orange-500 to-amber-600', data: techStack.tools },
  ]

  return (
    <section id="skills" ref={ref} className={`py-16 sm:py-24 px-4 sm:px-6 lg:px-8 ${darkMode ? '' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-4">
            Technical Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold">What I Work With</h2>
          <p className={`mt-3 text-base sm:text-lg max-w-xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Every tool here has been used in a real project — no filler, no fluff.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-8">
          {sections.map((section, sectionIdx) => (
            <motion.div
              key={section.title}
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: sectionIdx * 0.1 }}
              className={`rounded-2xl p-5 sm:p-6 border ${
                darkMode ? 'bg-white/3 border-white/5' : 'bg-white border-gray-100 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${section.bg} flex items-center justify-center`}>
                  <section.icon className="h-4 w-4 text-white" />
                </div>
                <h3 className={`font-bold text-base sm:text-lg ${section.color}`}>{section.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {section.data.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.3, delay: sectionIdx * 0.1 + i * 0.04 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium cursor-default border transition-all duration-200 ${
                      darkMode
                        ? 'bg-white/5 border-white/10 text-gray-300 hover:border-blue-500/40 hover:text-white'
                        : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-blue-400 hover:text-blue-600'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full bg-gradient-to-br ${tech.color}`} />
                    {tech.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}