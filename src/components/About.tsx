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
    desc: 'Discovered JavaScript\'s power, then React\'s magic. Built my first interactive UIs and fell deeper in.',
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
    desc: 'Launched real products: a live food ordering platform with payments, and a social platform for parents.',
    icon: Globe,
    color: 'from-green-500 to-emerald-500',
  },
]

export default function About({ darkMode }: AboutProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, 0.1)

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }
  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  }

  return (
    <section
      id="about"
      ref={ref}
      className={`py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
        darkMode ? 'bg-gray-900/60' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-4">
            About Me
          </span>
          <h2 className="text-4xl font-extrabold">The Story Behind the Code</h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          {/* Left — Photo + socials */}
          <motion.div variants={item} className="flex flex-col items-center lg:items-start gap-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 w-full max-w-sm">
                <Image
                  src="/images/gloria.png"
                  alt="Gloria Aguedu"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/60 backdrop-blur-md rounded-xl p-3 border border-white/10">
                    <p className="text-white font-semibold text-sm">Gloria Aguedu</p>
                    <p className="text-blue-400 text-xs">Full-Stack Developer · Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {[
                { icon: Github, href: 'https://github.com/boluwatifemi23', label: 'GitHub', color: 'hover:bg-gray-700' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/coding-professional-276516264', label: 'LinkedIn', color: 'hover:bg-blue-600' },
                { icon: Mail, href: 'mailto:codecraftpro83@gmail.com', label: 'Email', color: 'hover:bg-red-500' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-xl border transition-all duration-300 flex items-center gap-2 text-sm font-medium ${
                    darkMode
                      ? `bg-white/5 border-white/10 text-gray-300 ${social.color} hover:text-white hover:border-transparent`
                      : `bg-white border-gray-200 text-gray-700 ${social.color} hover:text-white hover:border-transparent`
                  }`}
                >
                  <social.icon className="h-4 w-4" />
                  {social.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — Story + Timeline */}
          <motion.div variants={item}>
            <p className={`text-lg leading-relaxed mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I&apos;m <strong className="text-white">Gloria Aguedu</strong>, a Full-Stack Developer based in Lagos, Nigeria, with 2 years of hands-on experience turning ideas into production-ready digital products.
            </p>
            <p className={`text-lg leading-relaxed mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              My journey started with the basics — HTML, CSS, the fundamentals — and grew into something much bigger. I discovered JavaScript, then React, then the world of backend development with Node.js and MongoDB. Each step unlocked a new level of what I could build.
            </p>
            <p className={`text-lg leading-relaxed mb-10 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Today I build <strong className={darkMode ? 'text-white' : 'text-gray-900'}>complete, real-world applications</strong> — from e-commerce platforms with live payment processing to social networks with community features. Whether you need a business website, a customer-facing product, or a complex web app, I&apos;ve got you covered.
            </p>

            {/* Timeline */}
            <div className="space-y-5">
              {timeline.map((entry, i) => (
                <motion.div
                  key={i}
                  initial={{ x: 30, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className={`flex gap-4 p-4 rounded-2xl border transition-all duration-300 ${
                    darkMode
                      ? 'bg-white/3 border-white/5 hover:bg-white/5'
                      : 'bg-white border-gray-100 hover:border-gray-200 shadow-sm'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${entry.color} flex items-center justify-center shrink-0`}>
                    <entry.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-blue-400 font-semibold">{entry.year}</span>
                      <span className={`font-bold text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>{entry.title}</span>
                    </div>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{entry.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}