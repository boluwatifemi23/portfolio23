'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, Rocket, Code2, Globe } from 'lucide-react'
import Image from 'next/image'
import { useInView } from '../hooks/useInView'
import { projects } from '../lib/data'
import { getExperienceYears } from '../lib/utils'

interface AboutProps {
  darkMode: boolean
}

const timeline = [
  {
    year: 'Early 2025',
    title: 'Where It All Began',
    desc: 'Wrote my first lines of HTML and CSS. Fell in love with seeing designs come to life in the browser.',
    icon: Code2,
  },
  {
    year: 'Early 2025',
    title: 'Full-Stack, Fast',
    desc: 'JavaScript, then React, then Node.js and MongoDB. Went from static pages to complete applications in months.',
    icon: Heart,
  },
  {
    year: 'May 2025',
    title: 'Real Systems, Real Stakes',
    desc: 'Joined Harmony Garden as CRM Implementation Specialist — architecting integrations across Freshsales, Freshmarketer, Twilio, and SendGrid.',
    icon: Rocket,
  },
  {
    year: 'Now',
    title: 'Building at Scale',
    desc: 'Leading the build-out of an in-house CRM, shipping production systems, and building my own full-stack products alongside it.',
    icon: Globe,
  },
]

export default function About({ darkMode }: AboutProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, 0.1)

  const years = getExperienceYears()
  const projectCount = projects.filter((p) => !p.parent).length

  return (
    <section
      id="about"
      ref={ref}
      className={`py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative border-t ${
        darkMode ? 'bg-white/[0.015] border-line' : 'bg-gray-50 border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className={`inline-flex items-center gap-2 px-3 py-1 border font-mono text-xs uppercase tracking-wide mb-3 ${
            darkMode ? 'border-line text-signal' : 'border-gray-300 text-emerald-600'
          }`}>
            <span className="status-dot" /> About Me
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">The Story Behind the Code</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-14 sm:mb-20">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="relative mx-auto lg:mx-0 w-full max-w-sm"
          >
            <div className={`relative rounded-lg overflow-hidden border ${darkMode ? 'border-line' : 'border-gray-300'}`}>
              <Image
                src="/images/gloria.png"
                alt="Gloria Aguedu"
                width={500}
                height={560}
                className="w-full h-auto object-cover object-top"
                priority
              />
            </div>

            <div className={`mt-3 flex items-center px-3 py-2 border font-mono text-[11px] uppercase tracking-wide ${
              darkMode ? 'border-line text-muted' : 'border-gray-300 text-gray-500'
            }`}>
              <span className="flex items-center gap-2">
                <span className="status-dot" /> Full-Stack Developer · Lagos, NG
              </span>
            </div>

            <div className="flex gap-3 mt-3">
              <div className={`flex-1 px-3 py-2 border text-center ${darkMode ? 'border-line' : 'border-gray-300'}`}>
                <div className={`font-mono text-base font-semibold ${darkMode ? 'text-signal' : 'text-emerald-600'}`}>{years}</div>
                <div className={`font-mono text-[10px] uppercase tracking-wide mt-0.5 ${darkMode ? 'text-muted' : 'text-gray-500'}`}>Years Exp.</div>
              </div>
              <div className={`flex-1 px-3 py-2 border text-center ${darkMode ? 'border-line' : 'border-gray-300'}`}>
                <div className={`font-mono text-base font-semibold ${darkMode ? 'text-signal' : 'text-emerald-600'}`}>{projectCount}+</div>
                <div className={`font-mono text-[10px] uppercase tracking-wide mt-0.5 ${darkMode ? 'text-muted' : 'text-gray-500'}`}>Projects</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <p className={`text-base sm:text-lg leading-relaxed ${darkMode ? 'text-paper/90' : 'text-gray-700'}`}>
              I&apos;m <strong className={darkMode ? 'text-paper' : 'text-ink'}>Gloria</strong>, a CRM Implementation Specialist and Full-Stack Developer based in Lagos, Nigeria. In just over a year of professional work, I&apos;ve gone from my first lines of code to architecting the integration layer running a real company&apos;s sales and marketing operations.
            </p>
            <p className={`text-base sm:text-lg leading-relaxed ${darkMode ? 'text-muted' : 'text-gray-600'}`}>
              My path started in early 2025 with the fundamentals — HTML, CSS, then JavaScript and React. Within months I was building full-stack, with Node.js and MongoDB on the backend. What sets my work apart isn&apos;t just the stack — it&apos;s using it to solve real business problems: wiring CRMs together, automating outreach, and building the systems that make a company actually run.
            </p>
            <p className={`text-base sm:text-lg leading-relaxed ${darkMode ? 'text-muted' : 'text-gray-600'}`}>
              Today I lead CRM implementation for <strong className={darkMode ? 'text-paper' : 'text-ink'}>Harmony Garden</strong> — architecting integrations across Freshsales, Freshmarketer, Twilio, and SendGrid, and building the systems that manage their entire lead-to-close pipeline. Alongside that, I design and ship my own full-stack products, from e-commerce platforms with live payments to social platforms with real users.
            </p>

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
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border transition-colors duration-200 ${
                    darkMode
                      ? 'border-line text-muted hover:text-signal hover:border-signal/40'
                      : 'border-gray-300 text-gray-600 hover:text-emerald-600 hover:border-emerald-400'
                  }`}
                >
                  <s.icon className="h-4 w-4" />
                  {s.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className={`text-center font-mono text-xs uppercase tracking-wide mb-6 ${darkMode ? 'text-muted' : 'text-gray-500'}`}>
            My Journey
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {timeline.map((entry, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className={`flex flex-col gap-3 p-4 border transition-colors duration-300 ${
                  darkMode ? 'border-line hover:border-signal/30' : 'border-gray-200 hover:border-emerald-300 bg-white'
                }`}
              >
                <div className={`w-9 h-9 rounded-md border flex items-center justify-center ${
                  darkMode ? 'border-line text-signal' : 'border-gray-300 text-emerald-600'
                }`}>
                  <entry.icon className="h-4 w-4" />
                </div>
                <div>
                  <span className={`font-mono text-xs font-medium ${darkMode ? 'text-signal' : 'text-emerald-600'}`}>{entry.year}</span>
                  <h4 className={`font-display font-semibold text-sm mt-1 ${darkMode ? 'text-paper' : 'text-ink'}`}>{entry.title}</h4>
                  <p className={`text-xs mt-1.5 leading-relaxed ${darkMode ? 'text-muted' : 'text-gray-600'}`}>{entry.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}