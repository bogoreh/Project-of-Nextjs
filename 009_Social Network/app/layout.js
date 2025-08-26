import './globals.css'
import Header from '../components/Header/Header'
import Navigation from '../components/Navigation/Navigation'

export const metadata = {
  title: 'Social Network',
  description: 'A simple social network built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="container">
          <Navigation />
          <main className="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}