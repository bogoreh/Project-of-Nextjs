export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  publishedAt: string;
  urlToImage: string;
  category: string;
  source: {
    id: string;
    name: string;
  };
}

export interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: NewsArticle[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface ValidationError {
  field: string;
  message: string;
}