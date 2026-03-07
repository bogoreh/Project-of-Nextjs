import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setSubscribeSuccess(true);
    setEmail('');
    setTimeout(() => setSubscribeSuccess(false), 3000);
  };

  const footerSections = [
    {
      title: 'News',
      links: [
        { name: 'Technology', href: '/technology' },
        { name: 'World', href: '/world' },
        { name: 'Health', href: '/health' },
        { name: 'Business', href: '/business' },
        { name: 'Science', href: '/science' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'Accessibility', href: '/accessibility' },
      ]
    },
    {
      title: 'Follow Us',
      links: [
        { name: 'Twitter', href: 'https://twitter.com', icon: '🐦' },
        { name: 'Facebook', href: 'https://facebook.com', icon: '📘' },
        { name: 'Instagram', href: 'https://instagram.com', icon: '📷' },
        { name: 'LinkedIn', href: 'https://linkedin.com', icon: '💼' },
        { name: 'YouTube', href: 'https://youtube.com', icon: '▶️' },
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white mt-auto">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Newsletter Section */}
        <div className="mb-12 pb-12 border-b border-gray-800">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Stay Updated with NewsHub
            </h3>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              Get the latest news delivered directly to your inbox. No spam, ever.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 border border-gray-700"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Subscribe
              </button>
            </form>
            {subscribeSuccess && (
              <p className="mt-3 text-green-400 text-sm">
                ✓ Successfully subscribed to newsletter!
              </p>
            )}
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {footerSections.map((section) => (
            <div key={section.title} className="text-center sm:text-left">
              <h4 className="text-lg font-semibold mb-4 text-blue-400">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center justify-center sm:justify-start space-x-2 group"
                    >
                      {link.icon && (
                        <span className="text-lg group-hover:scale-110 transition-transform">
                          {link.icon}
                        </span>
                      )}
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* App Download Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">📰</span>
              </div>
              <div>
                <h5 className="font-bold text-lg">Get the NewsHub App</h5>
                <p className="text-sm text-gray-400">Download for iOS and Android</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-xl transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span>App Store</span>
              </button>
              <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-xl transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-4.73-3.76-3.76 3.03-3.03 3.76 3.76 3.03-3.03-8.49-4.73 10.76 6.22c.5.24.84.76.84 1.35 0 .59-.34 1.11-.84 1.35L6.05 21.34l8.49-4.73 3.03-3.03-3.76-3.76z"/>
                </svg>
                <span>Google Play</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-gray-500 text-center sm:text-left">
              © {currentYear} NewsHub. All rights reserved. 
              <span className="block sm:inline sm:ml-1">
                Made with ❤️ for news lovers everywhere.
              </span>
            </p>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-500">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs">Trusted News</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-500">
                <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-xs">100% Independent</span>
              </div>
            </div>

            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              <select className="bg-gray-900 text-gray-400 text-sm rounded-lg px-3 py-2 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Quick Actions - Fixed at bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 sm:hidden z-50">
        <div className="flex justify-around items-center px-4 py-2">
          <button className="flex flex-col items-center p-2 text-gray-400 hover:text-blue-400 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-xs mt-1">Home</span>
          </button>
          <button className="flex flex-col items-center p-2 text-gray-400 hover:text-blue-400 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-xs mt-1">Search</span>
          </button>
          <button className="flex flex-col items-center p-2 text-gray-400 hover:text-blue-400 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-xs mt-1">Saved</span>
          </button>
          <button className="flex flex-col items-center p-2 text-gray-400 hover:text-blue-400 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs mt-1">Profile</span>
          </button>
        </div>
      </div>

      {/* Add padding to body for mobile fixed footer */}
      <style jsx global>{`
        @media (max-width: 640px) {
          body {
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </footer>
  );
}