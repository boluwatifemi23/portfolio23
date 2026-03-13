'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, Rocket, Code2, Globe } from 'lucide-react'
import Image from 'next/image'
import { useInView } from '../hooks/useInView'

interface AboutProps {
  darkMode: boolean
}

const timeline = [
  {
    year: '2023',
    title: 'Where It All Began',
    desc: 'Wrote my first lines of HTML and CSS. Fell in love with seeing designs come to life in the browser.',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    year: '2023',
    title: 'JavaScript & React',
    desc: "Discovered JavaScript's power, then React's magic. Built my first interactive UIs and fell deeper in.",
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
  },
  {
    year: '2024',
    title: 'Going Full-Stack',
    desc: 'Dove into Node.js, Express, MongoDB. Suddenly I could build anything — front to back, end to end.',
    icon: Rocket,
    color: 'from-purple-500 to-indigo-500',
  },
  {
    year: '2025',
    title: 'Production-Ready',
    desc: 'Launched real products used by real people. From food ordering platforms to social networks.',
    icon: Globe,
    color: 'from-green-500 to-emerald-500',
  },
]

export default function About({ darkMode }: AboutProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, 0.1)

  return (
    <section
      id="about"
      ref={ref}
      className={`py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative ${darkMode ? 'bg-gray-900/60' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-3">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold">The Story Behind the Code</h2>
        </motion.div>

        {/* Top: Photo left, Bio right */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center mb-12 sm:mb-16">
          {/* Photo */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="relative mx-auto lg:mx-0 w-full max-w-sm"
          >
            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl blur-2xl" />
            {/* Card */}
            <div className={`relative rounded-2xl overflow-hidden border ${darkMode ? 'border-white/10' : 'border-gray-200'} shadow-2xl`}>
              <Image
                src="/images/gloria.png"
                alt="Gloria Aguedu"
                width={500}
                height={560}
                className="w-full h-auto object-cover object-top"
                priority
              />
              {/* Bottom overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5">
                <p className="text-white font-bold text-lg leading-tight">Gloria Aguedu</p>
                <p className="text-blue-400 text-sm font-medium">Full-Stack Developer · Lagos, Nigeria</p>
              </div>
            </div>
            {/* Floating stat badges */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1.5 rounded-xl text-xs font-bold shadow-lg"
            >
              2+ Years
            </motion.div>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-3 -left-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1.5 rounded-xl text-xs font-bold shadow-lg"
            >
              6+ Projects
            </motion.div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <p className={`text-base sm:text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I&apos;m <strong className={darkMode ? 'text-white' : 'text-gray-900'}>Gloria</strong>, a Full-Stack Developer based in Lagos, Nigeria, with 2 years of hands-on experience turning ideas into production-ready digital products.
            </p>
            <p className={`text-base sm:text-lg leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              My journey started with the basics — HTML, CSS, the fundamentals — and grew into something much bigger. I discovered JavaScript, then React, then the world of backend development with Node.js and MongoDB. Each step unlocked a new level of what I could build.
            </p>
            <p className={`text-base sm:text-lg leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Today I build <strong className={darkMode ? 'text-white' : 'text-gray-900'}>complete, real-world applications</strong> — from e-commerce platforms with live payment processing to social networks with community features. Whether you need a business website, a customer-facing product, or a complex web app, I&apos;ve got you covered.
            </p>

            {/* Socials */}
            <div className="flex flex-wrap gap-3 mt-2">
              {[
                { icon: Github, href: 'https://github.com/boluwatifemi23', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/coding-professional-276516264', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:codecraftpro83@gmail.com', label: 'Email Me' },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                    darkMode
                      ? 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
                      : 'bg-white border-gray-200 text-gray-700 hover:border-blue-400 hover:text-blue-600 shadow-sm'
                  }`}
                >
                  <s.icon className="h-4 w-4" />
                  {s.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline — full width below */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className={`text-center text-lg font-bold mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            My Journey
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {timeline.map((entry, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`flex flex-col gap-3 p-4 rounded-2xl border transition-all duration-300 ${
                  darkMode
                    ? 'bg-white/3 border-white/5 hover:bg-white/6 hover:border-white/10'
                    : 'bg-white border-gray-100 shadow-sm hover:shadow-md'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${entry.color} flex items-center justify-center`}>
                  <entry.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="text-xs text-blue-400 font-bold">{entry.year}</span>
                  <h4 className={`font-bold text-sm mt-0.5 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{entry.title}</h4>
                  <p className={`text-xs mt-1 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{entry.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}