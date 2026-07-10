import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GeoRura - Rural Household Mapping App for South Africa',
  description: 'GeoRura is an offline-first mobile app for mapping rural households, collecting GPS data, and managing municipal field surveys in South Africa.',
  keywords: 'GeoRura, rural mapping, South Africa, municipality, household survey, GPS data collection',
  openGraph: {
    title: 'GeoRura - Rural Household Mapping',
    description: 'Map rural communities with GPS precision. Works offline. Built for South African municipalities.',
    url: 'https://georura.app',
    siteName: 'GeoRura',
    images: [{ url: '/og-image.png' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}