// 'use client'

// import { useEffect, useState } from 'react'
// import { motion } from 'framer-motion'

// interface Particle {
//   width: number
//   height: number
//   left: string
//   top: string
//   duration: number
//   delay: number
//   y: number[]
// }

// interface FloatingParticlesProps {
//   darkMode: boolean
// }

// export default function FloatingParticles({ darkMode }: FloatingParticlesProps) {
//   const [particles, setParticles] = useState<Particle[]>([])

//   useEffect(() => {
//     const generated: Particle[] = Array.from({ length: 20 }, () => ({
//       width: Math.random() * 6 + 4,
//       height: Math.random() * 6 + 4,
//       left: `${Math.random() * 100}%`,
//       top: `${Math.random() * 100}%`,
//       duration: Math.random() * 10 + 10,
//       delay: Math.random() * 5,
//       y: [0, -(Math.random() * 30 + 20), 0],
//     }))
//     const t = setTimeout(() => setParticles(generated), 0)
//     return () => clearTimeout(t)
//   }, [])

//   if (particles.length === 0) return null

//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {particles.map((p, i) => (
//         <motion.span
//           key={i}
//           className={`absolute rounded-full ${darkMode ? 'bg-white/10' : 'bg-black/10'}`}
//           style={{
//             width: p.width,
//             height: p.height,
//             left: p.left,
//             top: p.top,
//           }}
//           animate={{ y: p.y }}
//           transition={{
//             duration: p.duration,
//             delay: p.delay,
//             repeat: Infinity,
//             ease: 'easeInOut',
//           }}
//         />
//       ))}
//     </div>
//   )
// }