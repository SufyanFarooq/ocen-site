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
  title: 'Ocean Port Link - Your Trusted Sourcing Partner',
  description: 'Source products from China through an Australian partner. Your trusted sourcing agents helping you source products at the best possible rates.',
  keywords: 'sourcing, China, Australia, import, export, manufacturing, suppliers',
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
