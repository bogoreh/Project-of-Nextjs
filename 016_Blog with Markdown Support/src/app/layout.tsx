import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'My Blog',
  description: 'A simple blog with Markdown support',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-blue-600 text-white p-4">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">My Blog</h1>
            <nav className="mt-2">
              <a href="/" className="hover:underline">Home</a>
              <a href="/blog" className="ml-4 hover:underline">Blog</a>
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  )
}