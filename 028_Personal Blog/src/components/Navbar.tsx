// components/Navbar.tsx
'use client'

import { useState, useEffect } from 'react'
import './Navbar.css' // We'll create this CSS file

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Blog', path: '/blog' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <>
      {/* Desktop Navigation - Always rendered for hydration */}
      <nav className="desktop-nav">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.path}
            className="nav-link"
          >
            {item.name}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button - Always rendered but hidden on desktop */}
      <button
        className="mobile-menu-button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <div className="menu-icon">
          <span className={`menu-line ${isMenuOpen ? 'rotate-45' : ''}`}></span>
          <span className={`menu-line ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`menu-line ${isMenuOpen ? '-rotate-45' : ''}`}></span>
        </div>
      </button>

      {/* Mobile Navigation - Conditionally rendered only when menu is open */}
      {isMounted && isMenuOpen && (
        <div className="mobile-nav">
          <div className="mobile-nav-container">
            <div className="mobile-nav-items">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="mobile-nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}