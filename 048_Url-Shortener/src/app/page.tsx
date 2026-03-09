'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import UrlForm from '@/components/UrlForm';
import UrlResult from '@/components/UrlResult';
import { FiZap, FiShield, FiBarChart2 } from 'react-icons/fi';

export default function Home() {
  const [shortenedData, setShortenedData] = useState<{
    shortUrl: string;
    originalUrl: string;
  } | null>(null);

  const features = [
    {
      icon: FiZap,
      title: 'Lightning Fast',
      description: 'Generate short URLs in milliseconds with our optimized engine',
    },
    {
      icon: FiShield,
      title: 'Secure & Reliable',
      description: 'Your links are safe with enterprise-grade security',
    },
    {
      icon: FiBarChart2,
      title: 'Track Clicks',
      description: 'Monitor your link performance with detailed analytics',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 sm:py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Shorten Your URLs
              </span>
              <br />
              <span className="text-gray-800">Instantly & Free</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Transform long, messy links into clean, memorable URLs. Perfect for sharing on social media, emails, and more.
            </p>

            {/* Form Section */}
            <UrlForm onSuccess={setShortenedData} />
            
            {/* Result Section */}
            {shortenedData && (
              <UrlResult 
                shortUrl={shortenedData.shortUrl} 
                originalUrl={shortenedData.originalUrl} 
              />
            )}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose ShortURL?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}