'use client';

import { useState, useEffect } from 'react';
import { Movie } from '@/types/movie';
import { searchMovies, getPopularMovies } from '@/lib/tmdb';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import MovieModal from './components/MovieModal';
import { Film, Loader2 } from 'lucide-react';

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showPopular, setShowPopular] = useState(true);

  useEffect(() => {
    loadPopularMovies();
  }, []);

  const loadPopularMovies = async () => {
    setLoading(true);
    const data = await getPopularMovies(1);
    if (data?.results) {
      setMovies(data.results);
      setShowPopular(true);
    }
    setLoading(false);
  };

  const handleSearch = async (query: string) => {
    if (!query.trim()) {
      loadPopularMovies();
      return;
    }

    setLoading(true);
    setSearchQuery(query);
    const data = await searchMovies(query);
    
    if (data?.results) {
      setMovies(data.results);
      setShowPopular(false);
    }
    setLoading(false);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    loadPopularMovies();
  };

  return (
    <div className="min-h-screen p-4 md:p-6">
      {/* Header */}
      <header className="max-w-6xl mx-auto mb-8 md:mb-12">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Film className="h-8 w-8 text-blue-400" />
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Movie Search
          </h1>
        </div>
        
        <p className="text-center text-gray-300 mb-8 text-lg">
          Discover your next favorite movie
        </p>

        <SearchBar onSearch={handleSearch} isLoading={loading} />
      </header>

      <main className="max-w-6xl mx-auto">
        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">
            {showPopular ? 'Popular Movies' : `Results for "${searchQuery}"`}
          </h2>
          
          {!showPopular && (
            <button
              onClick={handleClearSearch}
              className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              Clear Search
            </button>
          )}
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="h-12 w-12 text-blue-400 animate-spin mb-4" />
            <p className="text-gray-400">Searching movies...</p>
          </div>
        ) : (
          <>
            {/* No Results */}
            {movies.length === 0 && !loading && (
              <div className="text-center py-20">
                <div className="text-gray-400 mb-4">
                  No movies found. Try a different search.
                </div>
                <button
                  onClick={loadPopularMovies}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-300 font-medium rounded-lg border border-blue-500/30 hover:from-blue-500/30 hover:to-blue-600/30 hover:text-white transition-all duration-200"
                >
                  View Popular Movies
                </button>
              </div>
            )}

            {/* Movie Grid */}
            {movies.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {movies.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    onClick={() => setSelectedMovie(movie)}
                  />
                ))}
              </div>
            )}

            {/* Results Count */}
            {movies.length > 0 && (
              <div className="mt-8 pt-6 border-t border-slate-700/50 text-center text-gray-400">
                <p>
                  Showing {movies.length} movie{movies.length !== 1 ? 's' : ''}
                  {showPopular ? ' from popular movies' : ` matching "${searchQuery}"`}
                </p>
              </div>
            )}
          </>
        )}
      </main>

      {/* Modal */}
      <MovieModal
        movie={selectedMovie}
        isOpen={!!selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />

      {/* Footer */}
      <footer className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-700/50 text-center text-gray-500 text-sm">
        <p>Movie data provided by The Movie Database (TMDb)</p>
        <p className="mt-2">© {new Date().getFullYear()} Movie Search App</p>
      </footer>
    </div>
  );
}