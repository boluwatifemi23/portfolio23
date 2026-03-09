'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, ChevronRight } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import dynamic from 'next/dynamic'

const FloatingParticles = dynamic(
  () => import('./FloatingParticles'),
  { ssr: false }
)

interface ContactProps {
  darkMode: boolean
}

export default function Contact({ darkMode }: ContactProps) {
 const ref = useRef<HTMLElement | null>(null)
  const isInView = useInView(ref, 0.1)

  const contacts = [
    { 
      icon: Mail,
      title: 'Email',
      value: 'codecraftpro83@gmail.com',
      href: 'mailto:codecraftpro83@gmail.com',
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'github.com/boluwatifemi23',
      href: 'https://github.com/boluwatifemi23',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/coding-professional-276516264',
      href: 'https://www.linkedin.com/in/coding-professional-276516264',
    },
  ]

  return (
    <section id="contact" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <FloatingParticles darkMode={darkMode} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          Let us Work Together
        </motion.h2>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`text-xl mb-12 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
        >
          I am always open to discussing new projects, creative ideas, or opportunities to be part
          of your vision.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.title}
              href={contact.href}
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
              whileHover={{ scale: 1.1, y: -10 }}
              whileTap={{ scale: 0.95 }}
              className={`group p-6 rounded-lg ${
                darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              } border-2 transition-all duration-300 hover:shadow-2xl`}
            >
              <motion.div
                whileHover={{ rotate: 12 }}
                transition={{ duration: 0.3 }}
              >
                <contact.icon
                  className={`h-12 w-12 mx-auto mb-4 ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}
                />
              </motion.div>
              <h3 className="font-semibold mb-2">{contact.title}</h3>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{contact.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.a
  href="/codecraftproresume.pdf"
  download
  target="_blank"
  rel="noopener noreferrer"
  initial={{ y: 30, opacity: 0 }}
  animate={isInView ? { y: 0, opacity: 1 } : {}}
  transition={{ duration: 0.6, delay: 0.5 }}
  whileHover={{ scale: 1.05, y: -5 }}
  whileTap={{ scale: 0.95 }}
  className={`group px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
    darkMode
      ? 'bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/50'
      : 'bg-blue-600 hover:bg-blue-700 shadow-lg'
  } text-white flex items-center mx-auto`}
>
  Download Resume
  <motion.div
    animate={{ x: [0, 5, 0] }}
    transition={{ duration: 1.5, repeat: Infinity }}
  >
    <ChevronRight className="ml-2 h-5 w-5" />
  </motion.div>
</motion.a>

      </div>
    </section>
  )
}