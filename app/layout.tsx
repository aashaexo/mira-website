import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mira Network',
  description: 'Mira Network',
  generator: 'Mira Network',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
