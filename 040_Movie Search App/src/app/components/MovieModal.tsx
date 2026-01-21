'use client';

import { Movie } from '@/types/movie';
import { X, Star, Calendar, Globe, Users, TrendingUp } from 'lucide-react';
import { IMAGE_BASE_URL } from '@/lib/tmdb';

interface MovieModalProps {
  movie: Movie | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function MovieModal({ movie, isOpen, onClose }: MovieModalProps) {
  if (!isOpen || !movie) return null;

  const backdropUrl = movie.backdrop_path
    ? `${IMAGE_BASE_URL}w1280${movie.backdrop_path}`
    : null;

  const posterUrl = movie.poster_path
    ? `${IMAGE_BASE_URL}w500${movie.poster_path}`
    : '/placeholder-poster.jpg';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-700">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-slate-800/80 rounded-full hover:bg-slate-700 transition-colors"
        >
          <X className="h-5 w-5 text-white" />
        </button>

        {/* Backdrop */}
        {backdropUrl && (
          <div className="relative h-48 md:h-64">
            <img
              src={backdropUrl}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
          </div>
        )}

        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Poster */}
            <div className="md:w-1/3">
              <img
                src={posterUrl}
                alt={movie.title}
                className="w-full rounded-xl shadow-lg"
              />
            </div>

            {/* Details */}
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-white mb-2">
                {movie.title}
              </h2>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-yellow-400">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="text-xl font-bold">{movie.vote_average.toFixed(1)}</span>
                  <span className="text-gray-400">/10</span>
                </div>

                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar className="h-5 w-5" />
                  <span>{movie.release_date || 'N/A'}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-300">
                  <Globe className="h-5 w-5" />
                  <span className="uppercase">{movie.original_language}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-slate-800/50 p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-gray-400 mb-1">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">Votes</span>
                  </div>
                  <div className="text-xl font-bold text-white">
                    {movie.vote_count.toLocaleString()}
                  </div>
                </div>

                <div className="bg-slate-800/50 p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-gray-400 mb-1">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm">Popularity</span>
                  </div>
                  <div className="text-xl font-bold text-white">
                    {movie.popularity.toFixed(0)}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Overview</h3>
                <p className="text-gray-300 leading-relaxed">
                  {movie.overview || 'No description available.'}
                </p>
              </div>

              <button
                onClick={onClose}
                className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}