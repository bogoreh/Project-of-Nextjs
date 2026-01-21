'use client';

import { Movie } from '@/types/movie';
import { Star, Calendar, Play } from 'lucide-react';
import { IMAGE_BASE_URL } from '@/lib/tmdb';

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
}

export default function MovieCard({ movie, onClick }: MovieCardProps) {
  const posterUrl = movie.poster_path
    ? `${IMAGE_BASE_URL}w500${movie.poster_path}`
    : '/placeholder-poster.jpg';

  return (
    <div
      onClick={onClick}
      className="group relative bg-slate-800/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-slate-700/50 backdrop-blur-sm"
    >
      {/* Poster */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={posterUrl}
          alt={movie.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-yellow-500/90 text-white px-3 py-1 rounded-full flex items-center gap-1 font-bold text-sm backdrop-blur-sm">
          <Star className="h-3 w-3 fill-current" />
          {movie.vote_average.toFixed(1)}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-lg text-white mb-2 line-clamp-2">
          {movie.title}
        </h3>
        
        <div className="flex items-center justify-between text-sm text-gray-300 mb-3">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{movie.release_date?.split('-')[0] || 'N/A'}</span>
          </div>
          <span className="px-2 py-1 bg-slate-700/50 rounded-md text-xs uppercase">
            {movie.original_language}
          </span>
        </div>

        <p className="text-gray-400 text-sm line-clamp-2 mb-4">
          {movie.overview || 'No description available.'}
        </p>

        <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-300 font-medium rounded-lg border border-blue-500/30 hover:from-blue-500/30 hover:to-blue-600/30 hover:text-white transition-all duration-200 group-hover:scale-[1.02]">
          <Play className="h-4 w-4" />
          View Details
        </button>
      </div>
    </div>
  );
}