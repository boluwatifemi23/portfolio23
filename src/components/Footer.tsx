import { Github, Linkedin, Mail } from 'lucide-react'

interface FooterProps {
  darkMode: boolean
}

export default function Footer({ darkMode }: FooterProps) {
  return (
    <footer className={`py-8 px-4 sm:px-6 lg:px-8 border-t ${darkMode ? 'border-line bg-ink' : 'border-gray-200 bg-paper'}`}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className={`w-7 h-7 rounded-md border flex items-center justify-center font-mono text-[10px] ${
            darkMode ? 'border-line text-signal' : 'border-gray-300 text-emerald-600'
          }`}>
            GA
          </div>
          <span className={`font-medium text-sm ${darkMode ? 'text-paper' : 'text-ink'}`}>
            Gloria Aguedu · CRM Implementation Specialist
          </span>
        </div>

        <p className={`font-mono text-xs ${darkMode ? 'text-muted' : 'text-gray-500'}`}>
          © {new Date().getFullYear()} Built with Next.js &amp; Tailwind CSS
        </p>

        <div className="flex items-center gap-3">
          {[
            { icon: Github, href: 'https://github.com/boluwatifemi23', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/coding-professional-276516264', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:codecraftpro83@gmail.com', label: 'Email' },
          ].map((s) => (
            
             <a key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className={`p-2 rounded-md border transition-colors duration-200 ${
                darkMode ? 'border-line text-muted hover:text-signal hover:border-signal/40' : 'border-gray-300 text-gray-500 hover:text-emerald-600 hover:border-emerald-400'
              }`}
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}