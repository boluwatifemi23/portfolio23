import { Github, Linkedin, Mail } from 'lucide-react'

interface FooterProps {
  darkMode: boolean
}

export default function Footer({ darkMode }: FooterProps) {
  return (
    <footer className={`py-8 px-4 border-t ${
      darkMode ? 'border-white/5 bg-gray-950' : 'border-gray-200 bg-white'
    }`}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
            GA
          </div>
          <span className={`font-semibold text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Gloria Aguedu · Full-Stack Developer
          </span>
        </div>

        <p className={`text-xs ${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>
          © {new Date().getFullYear()} Built with Next.js, TypeScript & Tailwind CSS
        </p>

        <div className="flex items-center gap-3">
          {[
            { icon: Github, href: 'https://github.com/boluwatifemi23', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/coding-professional-276516264', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:codecraftpro83@gmail.com', label: 'Email' },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
              className={`p-2 rounded-lg transition-all duration-200 ${
                darkMode ? 'text-gray-500 hover:text-white hover:bg-white/5' : 'text-gray-400 hover:text-gray-900 hover:bg-gray-100'
              }`}>
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}