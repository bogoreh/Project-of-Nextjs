import Navbar from './Navbar'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border-color">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-color to-secondary-color"></div>
            <h1 className="text-xl font-bold">
              <a href="/" className="hover:text-primary-color transition-colors">
                Personal Blog
              </a>
            </h1>
          </div>
          <Navbar />
        </div>
      </div>
    </header>
  )
}