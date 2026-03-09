import { Project, TechStack } from "../types"


export const techStack: {
  frontend: TechStack[]
  backend: TechStack[]
  database: TechStack[]
} = {
  frontend: [
    { name: 'HTML5', projects: [], hasProjects: true, color: 'from-orange-500 to-red-500' },
    { name: 'CSS3', projects: [], hasProjects: true, color: 'from-blue-500 to-cyan-500' },
    { name: 'Bootstrap', projects: [], hasProjects: true, color: 'from-purple-500 to-pink-500' },
    { name: 'Tailwind CSS', projects: [], hasProjects: true, color: 'from-cyan-500 to-blue-500' },
    { name: 'JavaScript', projects: [], hasProjects: true, color: 'from-yellow-500 to-orange-500' },
    { name: 'React', projects: [], hasProjects: true, color: 'from-blue-400 to-cyan-400' },
    { name: 'Next.js', projects: [], hasProjects: false, color: 'from-gray-700 to-gray-900' },
    { name: 'TypeScript', projects: [], hasProjects: false, color: 'from-blue-600 to-blue-800' },
  ],
  backend: [
    { name: 'Node.js', projects: [], hasProjects: false, color: 'from-green-500 to-emerald-600' },
    { name: 'Express', projects: [], hasProjects: false, color: 'from-gray-600 to-gray-800' },
    { name: 'GraphQL', projects: [], hasProjects: false, color: 'from-pink-500 to-purple-600' },
  ],
  database: [
    { name: 'Firebase', projects: [], hasProjects: true, color: 'from-yellow-500 to-orange-600' },
    { name: 'MongoDB', projects: [], hasProjects: false, color: 'from-green-600 to-green-800' },
  ],
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Experience the future with stunning neon aesthetics',
    description: 'A visually striking cyberpunk-themed landing page featuring cutting-edge web animations and futuristic design elements. This project showcases advanced CSS techniques with animated neon glowing effects, particle systems, and smooth parallax scrolling. Built with pure HTML, CSS, and Bootstrap, it demonstrates mastery of front-end fundamentals while delivering an immersive user experience with glitch text effects and dynamic animations. Perfect for tech startups, gaming companies, or any brand seeking a bold, modern digital presence.',
    tech: ['HTML5', 'CSS3'],
    image: '/images/neon-tech.png',
    github: 'https://github.com/boluwatifemi23/neotech',
    live: 'https://neon-tech-ivory.vercel.app/',
    featured: true,
  },
  {
    id: 2,
    title: 'Elegance meets innovation in premium design',
    description: 'A sophisticated product showcase featuring the trending glassmorphism design aesthetic. This luxury-focused landing page combines frosted glass effects with 3D card interactions and animated gradient backgrounds. Built with modern HTML5, CSS3, and Bootstrap, it demonstrates expertise in creating premium, high-end interfaces. The design includes mouse-responsive 3D tilt effects, smooth transitions, and elegant typography perfect for luxury brands, high-end e-commerce, or portfolio websites demanding a refined, upscale appearance.',
    tech: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    image: '/images/luxe.png',
    github: 'https://github.com/boluwatifemi23/luxelandingpage',
    live: 'https://luxelandingpage.vercel.app/',
    featured: true,
  },
  {
    id: 3,
    title: 'Where modern design meets powerful functionality',
    description: 'A contemporary SaaS landing page built entirely with Tailwind CSS utility classes, showcasing modern web design trends. Features include animated mesh gradient backgrounds, floating blob animations, and smooth scroll-triggered animations. This project demonstrates proficiency in utility-first CSS frameworks while maintaining clean, maintainable code. With sections for features, products, pricing, and testimonials, it is a complete marketing website ready for any tech product or service. The design emphasizes conversion optimization with strategic CTAs and social proof elements.',
    tech: ['HTML5', 'Tailwind CSS', 'JavaScript'],
    image: '/images/nexus.png',
    github: 'https://github.com/boluwatifemi23/nexus',
    live: 'https://nexus-orcin-kappa.vercel.app/',
    featured: false,
  },
  {
    id: 4,
    title: 'Productivity meets beautiful design',
    description: 'A feature-rich task management application built with pure vanilla JavaScript, showcasing advanced DOM manipulation and modern JavaScript ES6+ features. This project demonstrates object-oriented programming with class-based architecture, local storage for data persistence, and sophisticated filtering/sorting algorithms. Features include drag-and-drop task reordering, real-time search, multiple filter options, and animated statistics. The clean, intuitive interface proves that powerful functionality doesn not require frameworks - just excellent JavaScript fundamentals.',
    tech: ['JavaScript', 'HTML5', 'CSS3'],
    image: '/images/taskmasterrr.png',
    github: 'https://github.com/boluwatifemi23/taskmaster',
    live: 'https://taskmaster-indol-five.vercel.app/',
    featured: false,
  },
  {
    id: 5,
    title: 'React SPA Excellence',
    description: 'Sophisticated Single Page Application built with React 18, implementing React Router for seamless navigation, custom hooks for logic reuse, Context API for state management, and optimized rendering with React.memo.',
    tech: ['React', 'JavaScript', 'CSS3'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
    github: '#',
    live: '#',
    featured: true,
  },
  {
    id: 6,
    title: 'Firebase Real-time Collaboration',
    description: 'Production-grade real-time collaborative application powered by Firebase, featuring authentication flows, Firestore real-time database synchronization, cloud functions for backend logic, and optimistic UI updates.',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    github: '#',
    live: '#',
    featured: true,
  },
]

export const navItems = [
  { name: 'Home', href: 'home' },
  { name: 'About', href: 'about' },
  { name: 'Skills', href: 'skills' },
  { name: 'Projects', href: 'projects' },
  { name: 'Contact', href: 'contact' },
]