'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Particle {
  size: number
  left: string
  top: string
  duration: number
}

export default function FloatingParticles({ darkMode }: { darkMode: boolean }) {
  const [particles] = useState<Particle[]>(() =>
    Array.from({ length: 20 }).map(() => ({
      size: Math.random() * 6 + 4,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 6 + 4,
    }))
  )

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className={`absolute rounded-full ${
            darkMode ? 'bg-white/10' : 'bg-black/10'
          }`}
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            top: p.top,
          }}
          animate={{ y: [0, -40, 0] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
