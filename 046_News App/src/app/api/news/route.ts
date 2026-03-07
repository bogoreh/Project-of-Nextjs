import { NextResponse } from 'next/server';
import { NewsApiResponse } from '../../types/news.types';

// Mock data for demonstration
const mockArticles = [
  {
    id: '1',
    title: 'Breaking: Major Tech Innovation Announced',
    description: 'A groundbreaking discovery in technology promises to revolutionize how we interact with devices.',
    content: 'Full article content here...',
    author: 'John Doe',
    publishedAt: new Date().toISOString(),
    urlToImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop',
    category: 'technology',
    source: { id: 'tech-news', name: 'Tech News' }
  },
  {
    id: '2',
    title: 'Global Climate Summit Reaches Historic Agreement',
    description: 'World leaders unite to combat climate change with ambitious new targets.',
    content: 'Full article content here...',
    author: 'Jane Smith',
    publishedAt: new Date().toISOString(),
    urlToImage: 'https://images.unsplash.com/photo-1569163139599-0f4517e36f51?w=800&auto=format&fit=crop',
    category: 'world',
    source: { id: 'world-news', name: 'World News' }
  },
  {
    id: '3',
    title: 'Breakthrough in Medical Research Offers New Hope',
    description: 'Scientists discover potential cure for previously untreatable condition.',
    content: 'Full article content here...',
    author: 'Dr. Emily Brown',
    publishedAt: new Date().toISOString(),
    urlToImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop',
    category: 'health',
    source: { id: 'health-news', name: 'Health News' }
  },
  {
    id: '4',
    title: 'Space Tourism Takes Off: First Commercial Flight Successful',
    description: 'Private company successfully launches first tourist mission to space.',
    content: 'Full article content here...',
    author: 'Mike Johnson',
    publishedAt: new Date().toISOString(),
    urlToImage: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&auto=format&fit=crop',
    category: 'science',
    source: { id: 'science-news', name: 'Science News' }
  },
  {
    id: '5',
    title: 'New Study Reveals Benefits of Mediterranean Diet',
    description: 'Research shows significant health improvements with Mediterranean eating habits.',
    content: 'Full article content here...',
    author: 'Sarah Wilson',
    publishedAt: new Date().toISOString(),
    urlToImage: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&auto=format&fit=crop',
    category: 'health',
    source: { id: 'health-news', name: 'Health News' }
  },
  {
    id: '6',
    title: 'Electric Vehicle Sales Surge Globally',
    description: 'Record-breaking sales of electric vehicles mark shift in consumer preferences.',
    content: 'Full article content here...',
    author: 'David Chen',
    publishedAt: new Date().toISOString(),
    urlToImage: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&auto=format&fit=crop',
    category: 'business',
    source: { id: 'business-news', name: 'Business News' }
  }
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const search = searchParams.get('search');
  
  let filteredArticles = [...mockArticles];
  
  // Filter by category
  if (category && category !== 'all') {
    filteredArticles = filteredArticles.filter(
      article => article.category === category
    );
  }
  
  // Filter by search query
  if (search) {
    filteredArticles = filteredArticles.filter(
      article => 
        article.title.toLowerCase().includes(search.toLowerCase()) ||
        article.description.toLowerCase().includes(search.toLowerCase())
    );
  }
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const response: NewsApiResponse = {
    status: 'ok',
    totalResults: filteredArticles.length,
    articles: filteredArticles
  };
  
  return NextResponse.json(response);
}