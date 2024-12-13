import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BookingModal } from '../components/BookingModal';
import { PaymentForm } from '../components/checkout/PaymentForm';
import { generateMovies } from '../data/mockData';
import { Movie, ShowTime, Seat } from '../types';

export function BookingPage() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [showPayment, setShowPayment] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);
  const [selectedShowTime, setSelectedShowTime] = useState<ShowTime | null>(null);

  useEffect(() => {
    const movies = generateMovies();
    const foundMovie = movies.find(m => m.id === Number(movieId));
    if (!foundMovie) {
      navigate('/');
      return;
    }
    setMovie(foundMovie);
  }, [movieId, navigate]);

  const handleBooking = (seats: Seat[], showTime: ShowTime) => {
    setSelectedSeats(seats);
    setSelectedShowTime(showTime);
    setShowPayment(true);
  };

  const handlePaymentComplete = () => {
    // Handle successful payment
    navigate('/profile');
  };

  if (!movie) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!showPayment ? (
          <BookingModal
            movie={movie}
            onClose={() => navigate('/')}
            onBooking={handleBooking}
          />
        ) : (
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-6">Complete Payment</h2>
            <PaymentForm
              amount={selectedShowTime!.price * selectedSeats.length}
              onPaymentComplete={handlePaymentComplete}
            />
          </div>
        )}
      </div>
    </div>
  );
}