import { addDays, subDays, formatISO } from 'date-fns';

// Generate mock sales data for the last 30 days
export const generateSalesData = () => {
  return Array.from({ length: 30 }, (_, i) => ({
    date: formatISO(subDays(new Date(), 29 - i)),
    amount: Math.floor(Math.random() * 10000) + 1000,
  }));
};

// Generate mock booking stats for the last 30 days
export const generateBookingStats = () => {
  return Array.from({ length: 30 }, (_, i) => ({
    date: formatISO(subDays(new Date(), 29 - i)),
    bookings: Math.floor(Math.random() * 100) + 10,
  }));
};

// Generate more movie data
export const generateMovies = () => {
  const genres = ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Romance'];
  const movieTitles = [
    'The Last Stand', 'Eternal Sunshine', 'Dark Horizons', 'Love Actually',
    'Space Odyssey', 'The Great Escape', 'Midnight Express', 'City Lights',
    'Ocean\'s Edge', 'The Matrix Reloaded', 'Inception', 'The Dark Knight',
    'Pulp Fiction', 'Forrest Gump', 'The Godfather', 'Fight Club',
    'Goodfellas', 'The Silence of the Lambs', 'Se7en', 'The Usual Suspects'
  ];

  return movieTitles.map((title, index) => ({
    id: index + 1,
    title,
    imageUrl: `https://source.unsplash.com/featured/800x600?movie,cinema&sig=${index}`,
    rating: (Math.random() * 2 + 3).toFixed(1),
    duration: `${Math.floor(Math.random() * 60 + 90)}min`,
    genre: [genres[Math.floor(Math.random() * genres.length)]],
    description: 'A compelling story that will keep you on the edge of your seat...',
    releaseDate: formatISO(subDays(new Date(), Math.floor(Math.random() * 365))),
    price: Math.floor(Math.random() * 10 + 10),
  }));
};