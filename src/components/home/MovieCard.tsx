import React from 'react';
import { Star, Clock, Calendar } from 'lucide-react';
import { Movie } from '../../types';
import { formatDate } from '../../utils/formatters';

interface MovieCardProps {
  movie: Movie;
  onSelect: (movie: Movie) => void;
}

export function MovieCard({ movie, onSelect }: MovieCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl"
      onClick={() => onSelect(movie)}
    >
      <div className="relative">
        <img 
          src={movie.imageUrl} 
          alt={movie.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-black bg-opacity-75 px-2 py-1 rounded-full">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-white">{movie.rating}</span>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
          {movie.title}
        </h3>

        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-2" />
            {movie.duration}
          </div>
          
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-2" />
            {formatDate(movie.releaseDate, 'MMM d, yyyy')}
          </div>

          <div className="flex flex-wrap gap-2">
            {movie.genre.map((g) => (
              <span 
                key={g}
                className="px-2 py-1 text-xs bg-blue-50 text-blue-600 rounded-full"
              >
                {g}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-blue-600">
            ${movie.price}
          </span>
          <button 
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(movie);
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}