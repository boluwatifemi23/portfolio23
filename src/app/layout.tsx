import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}