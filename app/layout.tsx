import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'YST - YIWU SALAH Traders | Your Trusted Sourcing Partner',
  description: 'YST - YIWU SALAH Traders. Source products from China through an France partner. Your trusted sourcing agents helping you source products at the best possible rates.',
  keywords: 'YST, YIWU SALAH Traders, sourcing, China, France, import, export, manufacturing, suppliers',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/black-logo.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'YST - YIWU SALAH Traders | Your Trusted Sourcing Partner',
    description: 'YST - YIWU SALAH Traders. Source products from China through an France partner. Your trusted sourcing agents helping you source products at the best possible rates.',
    url: 'https://your-domain.com',
    siteName: 'YST - YIWU SALAH Traders',
    images: [
      {
        url: '/black-logo.png',
        width: 1200,
        height: 630,
        alt: 'YST - YIWU SALAH Traders Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YST - YIWU SALAH Traders | Your Trusted Sourcing Partner',
    description: 'YST - YIWU SALAH Traders. Source products from China through an France partner. Your trusted sourcing agents helping you source products at the best possible rates.',
    images: ['/black-logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
        className={`${inter.variable} ${poppins.variable} font-sans`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  )
}
