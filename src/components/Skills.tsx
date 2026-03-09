'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Layers, Server, Database, Code2, Sparkles } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { techStack } from '../lib/data'


interface SkillsProps {
  darkMode: boolean
}

export default function Skills({ darkMode }: SkillsProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, 0.1)

  const sections = [
    {
      title: 'Front-End Development',
      icon: Layers,
      color: darkMode ? 'text-blue-400' : 'text-blue-600',
      data: techStack.frontend,
    },
    {
      title: 'Back-End Development',
      icon: Server,
      color: darkMode ? 'text-green-400' : 'text-green-600',
      data: techStack.backend,
    },
    {
      title: 'Database & Services',
      icon: Database,
      color: darkMode ? 'text-purple-400' : 'text-purple-600',
      data: techStack.database,
    },
  ]

  return (
    <section id="skills" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Technical Skills
        </motion.h2>

        <div className="space-y-12">
          {sections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
            >
              <h3 className={`text-2xl font-semibold mb-6 flex items-center ${section.color}`}>
                <section.icon className="mr-2" /> {section.title}
              </h3>
              <div
                className={`grid grid-cols-2 ${
                  section.data.length > 3 ? 'md:grid-cols-4' : 'md:grid-cols-3'
                } gap-4`}
              >
                {section.data.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -10 }}
                    className={`group p-4 rounded-lg ${
                      darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                    } border-2 text-center transition-all duration-300 hover:shadow-xl cursor-pointer`}
                  >
                    <motion.div
                      whileHover={{ rotate: 12 }}
                      transition={{ duration: 0.3 }}
                      className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center`}
                    >
                      {section.icon === Layers && <Code2 className="h-6 w-6 text-white" />}
                      {section.icon === Server && <Server className="h-6 w-6 text-white" />}
                      {section.icon === Database && <Database className="h-6 w-6 text-white" />}
                    </motion.div>
                    <div className="font-semibold mb-1">{tech.name}</div>
                    {tech.hasProjects && (
                      <div
                        className={`text-xs ${
                          darkMode ? 'text-green-400' : 'text-green-600'
                        } flex items-center justify-center gap-1`}
                      >
                        <Sparkles className="h-3 w-3" /> Projects Ready
                      </div>
                    )}
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