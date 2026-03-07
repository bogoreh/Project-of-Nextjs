'use client';

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import NewsCard from './components/NewsCard';
import SearchBar from './components/SearchBar';
import NewsletterSignup from './components/NewsletterSignup';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import CategoryFilter from './components/CategoryFilter';
import Footer from './components/Footer';
import { NewsArticle } from './types/news.types';

const categories = [
  { id: 'all', name: 'All', icon: '🌐' },
  { id: 'technology', name: 'Technology', icon: '💻' },
  { id: 'world', name: 'World', icon: '🌍' },
  { id: 'health', name: 'Health', icon: '🏥' },
  { id: 'science', name: 'Science', icon: '🔬' },
  { id: 'business', name: 'Business', icon: '📊' },
];

export default function Home() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<NewsArticle[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    filterArticles();
  }, [selectedCategory, searchQuery, articles]);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/news');
      const data = await response.json();
      setArticles(data.articles);
      setError(null);
    } catch (err) {
      setError('Failed to fetch news. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const filterArticles = () => {
    let filtered = [...articles];

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(
        article => article.category === selectedCategory
      );
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        article =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredArticles(filtered);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            Stay Informed with NewsHub
          </h1>
          <p className="text-lg sm:text-xl text-center text-blue-100 mb-8 max-w-2xl mx-auto">
            Get the latest news from around the world, curated just for you
          </p>
          <SearchBar onSearch={handleSearch} />
        </div>
      </section>

      {/* Categories Section - Using CategoryFilter Component */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CategoryFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </section>

      {/* News Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorMessage message={error} onRetry={fetchNews} />
        ) : filteredArticles.length === 0 ? (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
              <svg className="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-gray-500 text-lg mb-2">No articles found</p>
            <p className="text-gray-400 text-sm">Try adjusting your search or filter to find what you're looking for.</p>
          </div>
        ) : (
          <>
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-gray-600 bg-white px-4 py-2 rounded-full shadow-sm">
                📰 Found <span className="font-semibold text-blue-600">{filteredArticles.length}</span> articles
              </p>
              <button 
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="text-sm text-blue-600 hover:text-blue-800 flex items-center space-x-1 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Clear Filters</span>
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-md mx-auto">
          <NewsletterSignup />
        </div>
      </section>

      {/* Footer - Using Footer Component */}
      <Footer />
    </div>
  );
}