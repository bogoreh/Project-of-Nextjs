import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TaskFlow - Task Management Dashboard',
  description: 'Manage your tasks efficiently with TaskFlow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`${inter.className} bg-gray-50 dark:bg-gray-900`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}