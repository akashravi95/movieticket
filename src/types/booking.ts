export interface Booking {
  id: string;
  userId: string;
  movieId: number;
  showTimeId: number;
  seats: string[];
  totalAmount: number;
  status: 'confirmed' | 'cancelled';
  createdAt: string;
}