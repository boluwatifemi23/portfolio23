'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Layers, Server, Database, Code2 } from 'lucide-react'

import Image from 'next/image'
import { useInView } from '../hooks/useInView'

interface AboutProps {
  darkMode: boolean
}

export default function About({ darkMode }: AboutProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, 0.1)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  const skills = [
    {
      icon: Layers,
      title: 'Front-End',
      description: 'Modern UI/UX',
      color: darkMode ? 'text-blue-400' : 'text-blue-600',
    },
    {
      icon: Server,
      title: 'Back-End',
      description: 'Scalable APIs',
      color: darkMode ? 'text-green-400' : 'text-green-600',
    },
    {
      icon: Database,
      title: 'Database',
      description: 'Data Management',
      color: darkMode ? 'text-purple-400' : 'text-purple-600',
    },
    {
      icon: Code2,
      title: 'Languages',
      description: 'JS, TS, GraphQL',
      color: darkMode ? 'text-orange-400' : 'text-orange-600',
    },
  ]

  return (
    <section
      id="about"
      ref={ref}
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        darkMode ? 'bg-gray-800/50' : 'bg-white'
      } relative overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          About Me
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          
          <motion.div variants={itemVariants}>
            <div className="relative group">
              <motion.div
                whileHover={{ opacity: 1 }}
                className={`absolute inset-0 ${
                  darkMode
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600'
                    : 'bg-gradient-to-r from-blue-400 to-purple-500'
                } rounded-2xl blur-xl opacity-75 transition-opacity duration-300`}
              />
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden border-4 border-gray-700"
              >
                <Image
                  src="https://images.unsplash.com/photo-1737408011230-995d7a7aca1b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Profile"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </motion.div>
            </div>
 
            <motion.div
              variants={itemVariants}
              className="flex justify-center space-x-4 mt-8"
            >
              {[
                { icon: Github, href: 'https://github.com/boluwatifemi23', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/coding-professional-276516264', label: 'LinkedIn' },
                { icon: Mail, href: 'codecraftpro83@gmail.com', label: 'Email' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-lg ${
                    darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
                  } transition-all duration-300`}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I am a passionate full-stack software developer specializing in building exceptional
              digital experiences. With expertise across the entire web development stack, I create
              scalable, performant applications that solve real-world problems.
            </p>
            <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              My journey in tech has equipped me with a diverse skill set ranging from responsive
              front-end interfaces to robust back-end systems and database management.  I am
              constantly learning and adapting to new technologies to deliver the best solutions.
            </p>

          
            <motion.div variants={containerVariants} className="grid grid-cols-2 gap-4 mt-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`p-4 rounded-lg ${
                    darkMode ? 'bg-gray-700/50' : 'bg-gray-100'
                  } transition-all duration-300 hover:shadow-lg`}
                >
                  <skill.icon className={`h-10 w-10 mb-3 ${skill.color}`} />
                  <h3 className="text-lg font-semibold mb-1">{skill.title}</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}