import axios from 'axios';

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY || 'your_api_key_here';
const BASE_URL = 'https://api.themoviedb.org/3';

export const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: TMDB_API_KEY,
    language: 'en-US',
  },
});

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';

export const searchMovies = async (query: string, page: number = 1) => {
  if (!query.trim()) return null;
  
  try {
    const response = await tmdb.get('/search/movie', {
      params: {
        query,
        page,
        include_adult: false,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error searching movies:', error);
    return null;
  }
};

export const getPopularMovies = async (page: number = 1) => {
  try {
    const response = await tmdb.get('/movie/popular', {
      params: { page },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return null;
  }
};