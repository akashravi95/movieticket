import React from 'react';
import { Star } from 'lucide-react';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
  onSelect: (movie: Movie) => void;
}

export function MovieCard({ movie, onSelect }: MovieCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
      onClick={() => onSelect(movie)}
    >
      <img 
        src={movie.imageUrl} 
        alt={movie.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold text-gray-800">{movie.title}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{movie.rating}</span>
          </div>
        </div>
        <div className="flex gap-2 mb-2">
          {movie.genre.map((g) => (
            <span 
              key={g} 
              className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
            >
              {g}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-500 mb-2">{movie.duration}</p>
        <p className="text-sm text-gray-600 line-clamp-2">{movie.description}</p>
      </div>
    </div>
  );
}