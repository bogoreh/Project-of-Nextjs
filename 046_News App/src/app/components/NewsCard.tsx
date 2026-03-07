'use client';

import { NewsArticle } from '../types/news.types';
import Image from 'next/image';
import { useState } from 'react';

interface NewsCardProps {
  article: NewsArticle;
}

export default function NewsCard({ article }: NewsCardProps) {
  const [imgError, setImgError] = useState(false);

  // Fallback image if the main image fails to load
  const fallbackImage = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&auto=format&fit=crop';
  
  // Placeholder image if both main and fallback fail
  const placeholderImage = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%25\' height=\'100%25\' viewBox=\'0 0 800 600\'%3E%3Crect width=\'800\' height=\'600\' fill=\'%23f0f0f0\'/%3E%3Ctext x=\'400\' y=\'300\' font-family=\'Arial\' font-size=\'24\' fill=\'%23999\' text-anchor=\'middle\' dy=\'.3em\'%3ENo Image Available%3C/text%3E%3C/svg%3E';

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        {!imgError ? (
          <Image
            src={article.urlToImage || fallbackImage}
            alt={article.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImgError(true)}
            priority={false}
          />
        ) : (
          // Fallback UI when image fails to load
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="text-center">
              <svg 
                className="w-12 h-12 mx-auto text-gray-400 mb-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                />
              </svg>
              <span className="text-xs text-gray-500">Image not available</span>
            </div>
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-2 left-2">
          <span className="text-xs font-semibold text-blue-600 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-sm">
            {article.category}
          </span>
        </div>
        
        {/* Date Badge */}
        <div className="absolute top-2 right-2">
          <span className="text-xs text-gray-600 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-sm">
            {new Date(article.publishedAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}
          </span>
        </div>
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
          {article.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {article.description}
        </p>
        
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-xs font-bold text-blue-600">
                {article.author?.charAt(0) || 'N'}
              </span>
            </div>
            <span className="text-xs text-gray-500">
              {article.author || 'Unknown Author'}
            </span>
          </div>
          
          <button 
            className="text-blue-600 hover:text-blue-800 text-sm font-semibold transition-colors flex items-center space-x-1 group"
            onClick={() => window.open(`/article/${article.id}`, '_blank')}
          >
            <span>Read More</span>
            <svg 
              className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}