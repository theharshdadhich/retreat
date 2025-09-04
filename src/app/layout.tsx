import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BOT Consulting - Annual Company Retreat 2024',
  description: 'Join us for an exciting 3-day retreat filled with hackathons, wellness activities, cultural celebrations, and team building. October 24-26, 2024.',
  keywords: 'BOT Consulting, company retreat, hackathon, wellness, team building, Diwali celebration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
