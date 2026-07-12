'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Download, MapPin } from 'lucide-react'
import Image from 'next/image'
import { useMousePosition } from '../hooks/useMousePosition'
import { scrollToSection } from '../lib/utils'
import { useState, useEffect } from 'react'
import { projects } from '../lib/data'
import { getExperienceYears } from '../lib/utils'

interface HeroProps {
  darkMode: boolean
}

const roles = [
  'CRM Implementation Specialist',
  'Full-Stack Developer',
  'Systems & API Integration Engineer',
  'Freshworks Automation Specialist',
  'Open to Global Opportunities',
]

export default function Hero({ darkMode }: HeroProps) {
  const mousePosition = useMousePosition()
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: NodeJS.Timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else if (deleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      }, 0)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  const stats = [
    { value: getExperienceYears(), label: 'Years Exp.' },
    { value: `${projects.filter((p) => !p.parent).length}+`, label: 'Projects' },
    { value: `${projects.filter((p) => !p.parent && p.live).length}+`, label: 'Live Systems' },
  ]

  return (
    <section
      id="home"
      className="relative pt-20 pb-16 min-h-[calc(100vh-64px)] flex items-center overflow-hidden"
    >
      {darkMode && <div className="absolute inset-0 grid-texture pointer-events-none" />}

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-10 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="order-1 lg:order-2 flex justify-center w-full"
            >
              <motion.div
                animate={{
                  x: Math.max(-12, Math.min(12, mousePosition.x * 0.006)),
                  y: Math.max(-12, Math.min(12, mousePosition.y * 0.006)),
                }}
                transition={{ type: 'spring', stiffness: 80, damping: 20 }}
                className="relative max-w-full flex justify-center"
              >
                <div className={`relative w-56 h-64 sm:w-72 sm:h-80 lg:w-96 lg:h-[26rem] rounded-lg overflow-hidden border ${
                  darkMode ? 'border-line' : 'border-gray-300'
                }`}>
                  <Image
                    src="/images/gloria.png"
                    alt="Gloria Aguedu"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>

                {/* Caption chip — the recurring status-motif, applied to the photo like a data-card label */}
                <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-2 border font-mono text-[10px] uppercase tracking-wide whitespace-nowrap ${
                  darkMode ? 'bg-ink border-line text-muted' : 'bg-paper border-gray-300 text-gray-600'
                }`}>
                  <span className="status-dot" /> Gloria Aguedu — Lagos, NG
                </div>
              </motion.div>
            </motion.div>

            {/* Text Content */}
            <div className="order-2 lg:order-1 w-full text-center lg:text-left">

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className={`flex items-center justify-center lg:justify-start gap-2 font-mono text-xs uppercase tracking-[0.15em] mb-5 ${
                  darkMode ? 'text-signal' : 'text-emerald-600'
                }`}
              >
                <span className="status-dot" /> Available for work
                <span className={darkMode ? 'text-muted' : 'text-gray-400'}>·</span>
                <span className={`inline-flex items-center gap-1 normal-case tracking-normal ${darkMode ? 'text-muted' : 'text-gray-500'}`}>
                  <MapPin className="h-3 w-3" /> Lagos, Nigeria
                </span>
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 leading-[1.05]"
              >
                Gloria Aguedu
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.28 }}
                className={`font-mono text-sm sm:text-base lg:text-lg mb-6 min-h-[1.75rem] flex items-center justify-center lg:justify-start ${
                  darkMode ? 'text-muted' : 'text-gray-600'
                }`}
              >
                <span className={darkMode ? 'text-signal' : 'text-emerald-600'}>&gt;&nbsp;</span>
                {displayed}
                <span className={`animate-pulse ${darkMode ? 'text-signal' : 'text-emerald-600'}`}>_</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.34 }}
                className={`text-sm sm:text-base lg:text-lg mb-8 leading-relaxed mx-auto lg:mx-0 max-w-md lg:max-w-xl ${
                  darkMode ? 'text-muted' : 'text-gray-600'
                }`}
              >
                From writing my first{' '}
                <code className={`px-1.5 py-0.5 text-sm ${darkMode ? 'bg-white/5 text-signal' : 'bg-black/5 text-emerald-700'}`}>&lt;h1&gt;</code>{' '}
                tag to architecting CRM-integrated systems that run a real company&apos;s sales and marketing operations — I build software that solves operational problems, not just interfaces. Currently wiring together Freshsales, Freshmarketer, Twilio, and SendGrid into systems processing tens of thousands of leads.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8"
              >
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection('projects')}
                  className={`w-full sm:w-auto px-7 py-3 rounded-md font-semibold flex items-center gap-2 justify-center transition-colors duration-200 ${
                    darkMode ? 'bg-signal text-ink hover:bg-signal/90' : 'bg-emerald-600 text-white hover:bg-emerald-700'
                  }`}
                >
                  View My Work
                  <ChevronRight className="h-4 w-4" />
                </motion.button>

                <motion.a
                  href="/gloria-aguedu-cv.pdf"
                  download
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full sm:w-auto px-7 py-3 rounded-md font-semibold border flex items-center gap-2 transition-colors duration-200 justify-center ${
                    darkMode
                      ? 'border-line text-paper hover:border-signal/50 hover:text-signal'
                      : 'border-gray-300 text-gray-700 hover:border-emerald-400 hover:text-emerald-600'
                  }`}
                >
                  <Download className="h-4 w-4" /> Download CV
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.48 }}
                className={`inline-flex border rounded-lg overflow-hidden divide-x font-mono ${
                  darkMode ? 'border-line divide-line' : 'border-gray-300 divide-gray-300'
                }`}
              >
                {stats.map((stat) => (
                  <div key={stat.label} className="px-5 py-3 text-center lg:text-left">
                    <div className={`text-lg sm:text-xl font-semibold ${darkMode ? 'text-signal' : 'text-emerald-600'}`}>
                      {stat.value}
                    </div>
                    <div className={`text-[10px] uppercase tracking-wide mt-0.5 ${darkMode ? 'text-muted' : 'text-gray-500'}`}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}