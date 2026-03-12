'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Download, MapPin, Sparkles } from 'lucide-react'
import Image from 'next/image'
import FloatingParticles from './FloatingParticles'
import { useMousePosition } from '../hooks/useMousePosition'
import { scrollToSection } from '../lib/utils'
import { useState, useEffect } from 'react'

interface HeroProps {
  darkMode: boolean
}

const roles = [
  'Full-Stack Developer',
  'React & Next.js Engineer',
  'Backend API Builder',
  'UI/UX Implementer',
  'Your Next Best Hire',
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

  return (
    <section id="home" className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center">
      <FloatingParticles darkMode={darkMode} />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                <Sparkles className="h-3 w-3" /> Available for work
              </span>
              <span className={`flex items-center gap-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <MapPin className="h-3.5 w-3.5" /> Lagos, Nigeria
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-3 leading-tight"
            >
              Hi, I&apos;m{' '}
              <span className="gradient-text">Gloria Aguedu</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl font-semibold mb-6 h-8"
            >
              <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                {displayed}
                <span className="animate-pulse text-blue-500">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`text-lg mb-8 leading-relaxed max-w-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
            >
              From writing my first{' '}
              <code className="px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 text-sm">&lt;h1&gt;</code>{' '}
              tag in Lagos to shipping full-stack production apps — I build digital experiences that work beautifully, perform flawlessly, and make businesses grow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="group px-7 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-2"
              >
                View My Work
                <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <ChevronRight className="h-4 w-4" />
                </motion.div>
              </motion.button>

              <motion.a
                href="/gloria-aguedu-cv.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-7 py-3 rounded-xl font-semibold border-2 flex items-center gap-2 transition-all duration-300 ${
                  darkMode
                    ? 'border-white/10 text-white hover:bg-white/5'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Download className="h-4 w-4" /> Download CV
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-8 mt-10"
            >
              {[
                { value: '2+', label: 'Years Experience' },
                { value: '6+', label: 'Projects Built' },
                { value: '2', label: 'Live Products' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-extrabold gradient-text">{stat.value}</div>
                  <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ x: mousePosition.x * 0.015, y: mousePosition.y * 0.015 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              className="relative"
            >
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-2xl opacity-30 scale-110" />

              {/* Spinning border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/40"
              />

              {/* Photo */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                <Image
                  src="/images/gloria.png"
                  alt="Gloria Aguedu"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Floating badge 1 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-2 -left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg"
              >
                ⚡ Full-Stack Dev
              </motion.div>

              {/* Floating badge 2 */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-2 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg"
              >
                🇳🇬 Lagos
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}