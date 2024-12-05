import '../globals.css'

import { Manrope as Font } from 'next/font/google'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Design Books | A Collection of Books on Design by Bridger Tower',
  description:
    'A collection of books on design by Bridger Tower. Discover your next favorite book on design.',
  metadataBase: new URL('https://designbooks.org'),
}

const font = Font({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.className}>
      <body>{children}</body>
    </html>
  )
}
