export interface Movie {
  id: number;
  title: string;
  imageUrl: string;
  rating: number;
  duration: string;
  genre: string[];
  description: string;
  releaseDate: string;
  price: number;
}

export interface ShowTime {
  id: number;
  time: string;
  price: number;
}

export interface Seat {
  id: string;
  row: string;
  number: number;
  status: 'available' | 'reserved' | 'selected';
}

// Add more type definitions as needed
export interface BookingDetails {
  movieId: number;
  showTimeId: number;
  seats: string[];
  totalAmount: number;
}