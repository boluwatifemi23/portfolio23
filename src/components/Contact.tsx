'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Download, ArrowRight, MessageCircle, Phone } from 'lucide-react'
import { useInView } from '../hooks/useInView'

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
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=codecraftpro83@gmail.com',
      desc: 'Best for project inquiries',
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '+234 XXX XXX XXXX', // TODO: replace with your real number
      href: 'https://wa.me/234XXXXXXXXXX', // TODO: replace XXXXXXXXXX with your number, no + or leading 0
      desc: 'Quick chat, fastest reply',
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'github.com/boluwatifemi23',
      href: 'https://github.com/boluwatifemi23',
      desc: 'See my code & contributions',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/coding-professional-276516264',
      desc: 'Professional network',
    },
  ]

  return (
    <section id="contact" ref={ref} className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className={`inline-flex items-center gap-2 px-3 py-1 border font-mono text-xs uppercase tracking-wide mb-3 ${
            darkMode ? 'border-line text-signal' : 'border-gray-300 text-emerald-600'
          }`}>
            <span className="status-dot" /> Get In Touch
          </span>

          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
            Let&apos;s Build Something Great
          </h2>

          <p className={`text-base sm:text-xl max-w-2xl mx-auto ${darkMode ? 'text-muted' : 'text-gray-600'}`}>
            Whether you need a business website, a full product built from scratch, or just want to talk tech — my inbox is always open.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`relative overflow-hidden p-6 sm:p-10 mb-6 sm:mb-10 border text-center ${
            darkMode ? 'border-line' : 'border-gray-300 bg-white'
          }`}
        >
          {darkMode && <div className="absolute inset-0 grid-texture pointer-events-none" />}

          <div className="relative z-10">
            <MessageCircle className={`h-9 w-9 sm:h-10 sm:w-10 mx-auto mb-4 ${darkMode ? 'text-signal' : 'text-emerald-600'}`} />

            <h3 className="font-display text-xl sm:text-2xl font-bold mb-2">
              Ready to start a project?
            </h3>

            <p className={`mb-5 sm:mb-6 text-sm sm:text-base ${darkMode ? 'text-muted' : 'text-gray-600'}`}>
              I&apos;m currently available for freelance work and full-time opportunities. Let&apos;s talk about what you&apos;re building.
            </p>

            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=codecraftpro83@gmail.com"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className={`inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 font-semibold transition-colors duration-200 text-sm sm:text-base ${
                darkMode ? 'bg-signal text-ink hover:bg-signal/90' : 'bg-emerald-600 text-white hover:bg-emerald-700'
              }`}
            >
              Send Me a Message
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 sm:mb-10">
          {contacts.map((contact, index) => {
            const isEmail = contact.href.startsWith('mailto:')

            return (
              <motion.a
                key={contact.title}
                href={contact.href}
                target={isEmail ? undefined : '_blank'}
                rel={isEmail ? undefined : 'noopener noreferrer'}
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -3 }}
                className={`group p-4 sm:p-5 border transition-colors duration-300 ${
                  darkMode ? 'border-line hover:border-signal/40' : 'border-gray-200 hover:border-emerald-300 bg-white'
                }`}
              >
                <div className={`w-9 h-9 rounded-md border flex items-center justify-center mb-3 ${
                  darkMode ? 'border-line text-signal' : 'border-gray-300 text-emerald-600'
                }`}>
                  <contact.icon className="h-4 w-4" />
                </div>

                <h3 className={`font-display font-semibold mb-0.5 text-sm sm:text-base ${darkMode ? 'text-paper' : 'text-ink'}`}>
                  {contact.title}
                </h3>

                <p className={`font-mono text-xs mb-1 truncate ${darkMode ? 'text-muted' : 'text-gray-600'}`}>
                  {contact.value}
                </p>

                <p className={`text-xs ${darkMode ? 'text-muted/70' : 'text-gray-400'}`}>
                  {contact.desc}
                </p>
              </motion.a>
            )
          })}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <p className={`mb-4 text-sm ${darkMode ? 'text-muted' : 'text-gray-500'}`}>
            Want a quick overview of my experience?
          </p>

          <motion.a
            href="/gloria-aguedu-cv.pdf"
            download
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className={`inline-flex items-center gap-2 px-7 sm:px-8 py-3 sm:py-3.5 font-semibold border transition-colors duration-200 text-sm sm:text-base ${
              darkMode
                ? 'border-line text-paper hover:border-signal/50 hover:text-signal'
                : 'border-gray-300 text-gray-700 hover:border-emerald-400 hover:text-emerald-600'
            }`}
          >
            <Download className="h-4 w-4 sm:h-5 sm:w-5" />
            Download My CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}