'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { scrollToSection } from '../lib/utils'

interface NavigationProps {
  darkMode: boolean
  setDarkMode: (val: boolean) => void
}

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

export default function Navigation({ darkMode, setDarkMode }: NavigationProps) {
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const scrollPos = window.scrollY + 100
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id)
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = (id: string) => {
    scrollToSection(id)
    setMobileOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled || mobileOpen
          ? darkMode
            ? 'bg-ink/95 backdrop-blur-xl border-line'
            : 'bg-paper/95 backdrop-blur-xl border-gray-200'
          : darkMode
          ? 'bg-transparent border-transparent'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16">

          {/* Logo */}
          <button onClick={() => handleNavClick('home')} className="flex items-center gap-2.5 shrink-0">
            <div className={`w-8 h-8 rounded-md border flex items-center justify-center font-mono text-[11px] font-medium shrink-0 ${
              darkMode ? 'border-line text-signal' : 'border-gray-300 text-emerald-600'
            }`}>
              GA
            </div>
            <span className={`font-display font-bold text-base sm:text-lg ${darkMode ? 'text-paper' : 'text-ink'}`}>
              Gloria Aguedu
            </span>
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-3 py-1.5 text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                  activeSection === link.id
                    ? darkMode ? 'text-signal' : 'text-emerald-600'
                    : darkMode
                    ? 'text-muted hover:text-paper'
                    : 'text-gray-500 hover:text-ink'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="active-underline"
                    className={`absolute left-3 right-3 -bottom-0.5 h-[1.5px] ${darkMode ? 'bg-signal' : 'bg-emerald-600'}`}
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <span className={`hidden lg:flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide ${darkMode ? 'text-muted' : 'text-gray-500'}`}>
              <span className="status-dot" /> Available for work
            </span>

            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              whileTap={{ scale: 0.92 }}
              className={`w-9 h-9 rounded-md flex items-center justify-center border transition-colors duration-200 shrink-0 ${
                darkMode
                  ? 'border-line text-muted hover:text-signal hover:border-signal/40'
                  : 'border-gray-300 text-gray-500 hover:text-emerald-600 hover:border-emerald-400'
              }`}
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait">
                {darkMode ? (
                  <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Sun className="h-4 w-4" />
                  </motion.div>
                ) : (
                  <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Moon className="h-4 w-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.92 }}
              className={`md:hidden w-9 h-9 rounded-md flex items-center justify-center border transition-colors duration-200 shrink-0 ${
                darkMode
                  ? 'border-line text-paper hover:text-signal'
                  : 'border-gray-300 text-ink hover:text-emerald-600'
              }`}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X className="h-4 w-4" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu className="h-4 w-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className={`md:hidden overflow-hidden border-t ${darkMode ? 'border-line' : 'border-gray-200'}`}
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-4 py-3 text-sm font-medium border-l-2 transition-colors duration-200 ${
                    activeSection === link.id
                      ? darkMode
                        ? 'border-signal text-signal bg-white/[0.02]'
                        : 'border-emerald-600 text-emerald-600 bg-black/[0.02]'
                      : darkMode
                      ? 'border-transparent text-muted hover:text-paper'
                      : 'border-transparent text-gray-500 hover:text-ink'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}