import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Real-time Chat with Sentiment Analysis',
  description: 'Chat app with real-time messaging and sentiment analysis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}