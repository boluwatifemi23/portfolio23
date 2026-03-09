interface FooterProps {
  darkMode: boolean
}

export default function Footer({ darkMode }: FooterProps) {
  return (
    <footer
      className={`py-8 px-4 sm:px-6 lg:px-8 border-t ${
        darkMode ? 'border-gray-800 bg-gray-800/50' : 'border-gray-200 bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto text-center">
        <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
          © {new Date().getFullYear()} Full-Stack Developer. Built with Next.js, React, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}