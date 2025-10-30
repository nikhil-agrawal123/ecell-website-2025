import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/Nav'
import DelayedLoader from '@/components/DelayedLoader'
import Footer from '@/components/Foot'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E-Cell IIIT-Delhi | Empowering Student Entrepreneurs',
  description:
    'Official website of the Entrepreneurship Cell, IIIT-Delhi. We nurture innovation, startups, and entrepreneurial spirit through events, mentorship, and opportunities for the student community.',
  themeColor: '#ffffff',
  icons: {
    icon: '/web-app-manifest-192x192.png',
    shortcut: '/web-app-manifest-192x192.png',
    apple: '/web-app-manifest-512x512.png',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    title: 'E-Cell IIITD',
    capable: true,
    statusBarStyle: 'black-translucent',
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning> 
      <body className={inter.className}  >
      <div className="relative w-full">
        
        <div className="absolute w-full top-0 left-0 z-50">
          <Nav />
        </div>
      </div>
        
      <DelayedLoader>
        {children}
        </DelayedLoader>
        <Footer/>
      </body>
    </html>
  )
}
