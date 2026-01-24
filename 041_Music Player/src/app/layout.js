import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Music Player - Next.js',
  description: 'A beautiful mobile-friendly music player',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="app-container">
          {children}
        </main>
      </body>
    </html>
  )
}