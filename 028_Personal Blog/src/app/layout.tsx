import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Personal Blog',
  description: 'A personal blog sharing thoughts, experiences, and tutorials',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow container py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}