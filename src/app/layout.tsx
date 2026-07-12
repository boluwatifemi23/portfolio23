import type { Metadata } from 'next'
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['500', '600', '700'],
})

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-plex-sans',
  weight: ['400', '500', '600'],
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-plex-mono',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-lemon-three-1zuqwbb036.vercel.app'), // TODO: swap for your custom domain if you get one
  title: {
    default: 'Gloria Aguedu | CRM Implementation Specialist & Full-Stack Developer',
    template: '%s | Gloria Aguedu',
  },
  description: 'CRM Implementation Specialist and Full-Stack Developer based in Lagos, Nigeria. I architect CRM integrations, automation systems, and full-stack products using Next.js, Node.js, Freshsales, Twilio, and SendGrid.',
  keywords: ['CRM Implementation Specialist', 'Full-Stack Developer', 'Freshsales Developer', 'CRM Integration', 'Webhook Automation', 'React', 'Next.js', 'Node.js', 'Lagos Developer', 'Gloria Aguedu'],
  authors: [{ name: 'Gloria Aguedu' }],
  creator: 'Gloria Aguedu',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Gloria Aguedu | CRM Implementation Specialist & Full-Stack Developer',
    description: 'I architect CRM integrations, automation systems, and full-stack products for real businesses.',
    siteName: 'Gloria Aguedu Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gloria Aguedu | CRM Implementation Specialist & Full-Stack Developer',
    description: 'I architect CRM integrations, automation systems, and full-stack products for real businesses.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${plexSans.variable} ${plexMono.variable} font-body`}>
        {children}
      </body>
    </html>
  )
}