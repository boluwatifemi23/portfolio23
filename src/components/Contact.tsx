'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Download, ArrowRight, MessageCircle } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import dynamic from 'next/dynamic'

const FloatingParticles = dynamic(() => import('./FloatingParticles'), { ssr: false })

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
      color: 'from-red-500 to-pink-600',
      desc: 'Best for project inquiries',
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'github.com/boluwatifemi23',
      href: 'https://github.com/boluwatifemi23',
      color: 'from-gray-600 to-gray-800',
      desc: 'See my code & contributions',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/coding-professional-276516264',
      color: 'from-blue-500 to-blue-700',
      desc: 'Professional network',
    },
  ]

  return (
    <section id="contact" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <FloatingParticles darkMode={darkMode} />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl font-extrabold mb-4">Let&apos;s Build Something Great</h2>
          <p className={`text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Whether you need a business website, a full product built from scratch, or just want to talk tech — my inbox is always open.
          </p>
        </motion.div>

        {/* CTA card */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`rounded-3xl p-8 mb-10 border text-center ${
            darkMode
              ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-white/10'
              : 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-100'
          }`}
        >
          <MessageCircle className={`h-12 w-12 mx-auto mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          <h3 className="text-2xl font-bold mb-2">Ready to start a project?</h3>
          <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            I&apos;m currently available for freelance work and full-time opportunities. Let&apos;s talk about what you&apos;re building.
          </p>
          <motion.a
            href="mailto:codecraftpro83@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
          >
            Send Me a Message <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.title}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.97 }}
              className={`group p-5 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                darkMode
                  ? 'bg-white/3 border-white/5 hover:border-blue-500/30'
                  : 'bg-white border-gray-100 hover:border-blue-200 shadow-sm'
              }`}
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center mb-3`}>
                <contact.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-bold mb-0.5">{contact.title}</h3>
              <p className={`text-sm mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{contact.value}</p>
              <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{contact.desc}</p>
            </motion.a>
          ))}
        </div>

        {/* Download CV */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <p className={`mb-4 text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            Want a quick overview of my experience?
          </p>
          <motion.a
            href="/gloria-aguedu-cv.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold border-2 transition-all duration-300 ${
              darkMode
                ? 'border-white/20 text-white hover:bg-white/5 hover:border-white/30'
                : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
            }`}
          >
            <Download className="h-5 w-5" /> Download My CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}