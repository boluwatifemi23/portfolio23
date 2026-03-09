'use client'

import { motion } from 'framer-motion'
import { Code2, Terminal, Zap, ChevronRight, Sparkles } from 'lucide-react'

import FloatingParticles from './FloatingParticles'
import { useMousePosition } from '../hooks/useMousePosition'
import { scrollToSection } from '../lib/utils'

interface HeroProps {
  darkMode: boolean
}

export default function Hero({ darkMode }: HeroProps) {
  const mousePosition = useMousePosition()

  return (
    <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center">
      <FloatingParticles darkMode={darkMode} />

      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center relative z-10">
          {/* Animated Profile Circle */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="mb-8 inline-block"
          >
            <motion.div
              animate={{
                x: mousePosition.x * 0.5,
                y: mousePosition.y * 0.5,
              }}
              transition={{ type: 'spring', stiffness: 150, damping: 15 }}
              whileHover={{ scale: 1.1, rotate: 6 }}
              className={`w-32 h-32 rounded-full ${
                darkMode
                  ? 'bg-gradient-to-br from-blue-500 to-purple-600'
                  : 'bg-gradient-to-br from-blue-400 to-purple-500'
              } p-1 transition-transform duration-300`}
            >
              <div
                className={`w-full h-full rounded-full ${
                  darkMode ? 'bg-gray-900' : 'bg-white'
                } flex items-center justify-center overflow-hidden`}
              >
                <Code2 className={`h-16 w-16 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
            </motion.div>
          </motion.div>

          {/* Main Heading with Gradient Animation */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">Full-Stack Developer</span>
          </motion.h1>

          {/* Subtitle with Icon */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Terminal className={`h-5 w-5 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
            <p className={`text-xl md:text-2xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Building modern web applications
            </p>
          </motion.div>

          {/* Secondary Text with Icon */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-2 mb-8"
          >
            <Zap className={`h-5 w-5 ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              with cutting-edge technologies
            </p>
          </motion.div>

          {/* Call-to-Action Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className={`group px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                darkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'
              } text-white flex items-center hover:shadow-lg hover:shadow-blue-500/50`}
            >
              View My Work
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronRight className="ml-2 h-5 w-5" />
              </motion.div>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className={`group px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                darkMode
                  ? 'bg-gray-800 hover:bg-gray-700 border-2 border-gray-700'
                  : 'bg-white hover:bg-gray-50 border-2 border-gray-300'
              } flex items-center hover:shadow-lg`}
            >
              Get In Touch
              <motion.div whileHover={{ rotate: 12 }}>
                <Sparkles className="ml-2 h-5 w-5" />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}