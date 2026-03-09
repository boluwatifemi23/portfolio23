'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, Moon, Sun, Menu, X } from 'lucide-react'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { navItems } from '../lib/data'
import { scrollToSection } from '../lib/utils'

interface NavigationProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

export default function Navigation({ darkMode, setDarkMode }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const activeSection = useScrollSpy(navItems.map(item => item.href))

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        darkMode ? 'bg-gray-900/95' : 'bg-white/95'
      } backdrop-blur-sm border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
            >
              <Code2 className={`h-8 w-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            </motion.div>
            <span className="ml-2 text-xl font-bold">DevPortfolio</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`transition-all duration-300 ${
                  activeSection === item.href
                    ? darkMode
                      ? 'text-blue-400 scale-110'
                      : 'text-blue-600 scale-110'
                    : darkMode
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
            
            {/* Dark Mode Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 12 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-700'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-700'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                darkMode ? 'bg-gray-800' : 'bg-gray-200'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} border-t ${
            darkMode ? 'border-gray-700' : 'border-gray-200'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map(item => (
              <motion.button
                key={item.name}
                whileHover={{ x: 10 }}
                onClick={() => {
                  scrollToSection(item.href)
                  setMobileMenuOpen(false)
                }}
                className={`block w-full text-left px-3 py-2 rounded-md transition-all duration-300 ${
                  activeSection === item.href
                    ? darkMode
                      ? 'bg-gray-700 text-blue-400'
                      : 'bg-gray-100 text-blue-600'
                    : darkMode
                    ? 'text-gray-300 hover:bg-gray-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}