import React, { useState, useEffect } from 'react';
import { MovieGrid } from '../components/home/MovieGrid';
import { MovieFilters } from '../components/home/MovieFilters';
import { generateMovies } from '../data/mockData';
import { Movie } from '../types';
import { filterMovies } from '../utils/movieFilters';
import { useAuth } from '../context/AuthContext';

export function HomePage() {
  const { isAuthenticated } = useAuth();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    setMovies(generateMovies());
  }, []);

  const filteredMovies = filterMovies(movies, searchQuery, selectedGenre);

  const handleMovieSelect = (movie: Movie) => {
    if (!isAuthenticated) {
      // Handle unauthenticated user
      console.log('Please login to book tickets');
      return;
    }
    // Handle movie selection for authenticated user
    console.log('Selected movie:', movie);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Now Showing</h1>
        
        <MovieFilters
          onSearch={setSearchQuery}
          onFilterGenre={setSelectedGenre}
        />
        
        <MovieGrid
          movies={filteredMovies}
          onSelect={handleMovieSelect}
        />
      </div>
    </div>
  );
}