import { Movie } from '../types';

export function filterMovies(
  movies: Movie[],
  searchQuery: string,
  selectedGenre: string
): Movie[] {
  return movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    
    const matchesGenre = !selectedGenre || movie.genre.includes(selectedGenre);
    
    return matchesSearch && matchesGenre;
  });
}