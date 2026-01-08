'use client'

import { useState, useEffect } from 'react'
import QuoteBox from './components/QuoteBox'
import QuoteButton from './components/QuoteButton'
import SocialButtons from './components/SocialButtons'
import { Brain, TrendingUp, Users, Target } from 'lucide-react'

const initialQuotes = [
  {
    quote: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
    author: "Steve Jobs"
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma.",
    author: "Steve Jobs"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa"
  },
  {
    quote: "The only thing necessary for the triumph of evil is for good men to do nothing.",
    author: "Edmund Burke"
  },
  {
    quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    quote: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost"
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu"
  }
];

export default function Home() {
  const [quote, setQuote] = useState(initialQuotes[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [quotes, setQuotes] = useState(initialQuotes);
  const [hasMounted, setHasMounted] = useState(false);
  const [quoteCount, setQuoteCount] = useState(0);

  const getRandomQuote = () => {
    if (isLoading) return;
    
    setIsLoading(true);
    
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];
      setQuote(randomQuote);
      setQuoteCount(prev => prev + 1);
      setIsLoading(false);
    }, 800);
  };

  useEffect(() => {
    const fetchMoreQuotes = async () => {
      try {
        const response = await fetch('https://api.quotable.io/quotes/random?limit=5');
        const data = await response.json();
        const newQuotes = data.map((item: any) => ({
          quote: item.content,
          author: item.author
        }));
        setQuotes(prev => [...prev, ...newQuotes]);
      } catch (error) {
        console.log('Using default quotes');
      }
    };

    fetchMoreQuotes();
  }, []);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (hasMounted) {
      getRandomQuote();
    }
  }, [hasMounted]);

  if (!hasMounted) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-5xl">
          <div className="glass-effect rounded-3xl p-8 md:p-12 max-w-3xl w-full mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-white/20 rounded w-48 mb-8"></div>
              <div className="space-y-4 mb-10">
                <div className="h-6 bg-white/20 rounded w-full"></div>
                <div className="h-6 bg-white/20 rounded w-5/6"></div>
                <div className="h-6 bg-white/20 rounded w-4/6"></div>
              </div>
              <div className="h-12 bg-white/20 rounded w-40"></div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 space-y-10">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Daily <span className="text-gradient">Inspiration</span>
          </h1>
        </div>
        <p className="text-lg text-purple-100 max-w-2xl">
          Discover wisdom that resonates with your soul
        </p>
      </div>

      {/* Main Quote Card */}
      <div className="w-full max-w-5xl">
        <QuoteBox quote={quote.quote} author={quote.author} />
        
        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-3xl mx-auto">
          <div className="glass-effect rounded-xl p-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Brain className="w-5 h-5 text-purple-300" />
              <span className="text-2xl font-bold text-white">{quotes.length}</span>
            </div>
            <p className="text-sm text-purple-200">Wisdom Quotes</p>
          </div>
          
          <div className="glass-effect rounded-xl p-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-300" />
              <span className="text-2xl font-bold text-white">{quoteCount}</span>
            </div>
            <p className="text-sm text-purple-200">Generated Today</p>
          </div>
          
          <div className="glass-effect rounded-xl p-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Users className="w-5 h-5 text-blue-300" />
              <span className="text-2xl font-bold text-white">1.2K</span>
            </div>
            <p className="text-sm text-purple-200">Daily Users</p>
          </div>
          
          <div className="glass-effect rounded-xl p-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Target className="w-5 h-5 text-red-300" />
              <span className="text-2xl font-bold text-white">98%</span>
            </div>
            <p className="text-sm text-purple-200">Satisfaction</p>
          </div>
        </div>

        {/* Generate Button */}
        <div className="text-center mt-12 fade-in">
          <QuoteButton onClick={getRandomQuote} isLoading={isLoading} />
        </div>

        {/* Social Buttons */}
        <div className="mt-12">
          <div className="text-center mb-6">
            <p className="text-lg font-semibold text-white mb-2">Share the Inspiration</p>
            <p className="text-sm text-purple-200">Spread wisdom with the world</p>
          </div>
          <SocialButtons quote={quote.quote} author={quote.author} />
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 space-y-6">
          <div className="glass-effect rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-sm text-white/80 mb-4">
              "Words have energy and power with the ability to help, to heal, to hinder, to hurt, to harm, to humiliate, and to humble."
            </p>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto my-4"></div>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-sm text-white/60">
                Made with ❤️ using Next.js • Quotes powered by Quotable API
              </p>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <a href="#" className="text-sm text-white/70 hover:text-white transition">Privacy</a>
                <a href="#" className="text-sm text-white/70 hover:text-white transition">Terms</a>
                <a href="#" className="text-sm text-white/70 hover:text-white transition">Contact</a>
              </div>
            </div>
          </div>
          
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Daily Inspiration Generator. All wisdom is timeless.
          </p>
        </footer>
      </div>
    </main>
  )
}