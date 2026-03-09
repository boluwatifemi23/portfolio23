import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Full-Stack Developer Portfolio | Modern Web Applications',
  description: 'Passionate full-stack software developer specializing in React, Next.js, Node.js, and modern web technologies. Building scalable, performant applications that solve real-world problems.',
  keywords: ['Full-Stack Developer', 'React', 'Next.js', 'Node.js', 'TypeScript', 'JavaScript', 'Web Development', 'Software Engineer'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    title: 'Full-Stack Developer Portfolio | Modern Web Applications',
    description: 'Passionate full-stack software developer specializing in React, Next.js, Node.js, and modern web technologies.',
    siteName: 'Developer Portfolio',
    images: [
      {
        url: 'https://yourportfolio.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Full-Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full-Stack Developer Portfolio | Modern Web Applications',
    description: 'Passionate full-stack software developer specializing in React, Next.js, Node.js, and modern web technologies.',
    images: ['https://yourportfolio.com/og-image.jpg'],
    creator: '@yourusername',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}