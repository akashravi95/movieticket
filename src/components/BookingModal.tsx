import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Movie, ShowTime, Seat } from '../types';

interface BookingModalProps {
  movie: Movie;
  onClose: () => void;
  onBooking: (seats: Seat[], showTime: ShowTime) => void;
}

const showTimes: ShowTime[] = [
  { id: 1, time: "10:00 AM", price: 10 },
  { id: 2, time: "2:00 PM", price: 12 },
  { id: 3, time: "6:00 PM", price: 15 },
  { id: 4, time: "9:00 PM", price: 15 },
];

const generateSeats = (): Seat[] => {
  const seats: Seat[] = [];
  const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
  rows.forEach(row => {
    for (let i = 1; i <= 8; i++) {
      seats.push({
        id: `${row}${i}`,
        row,
        number: i,
        status: Math.random() > 0.8 ? 'reserved' : 'available'
      });
    }
  });
  return seats;
};

export function BookingModal({ movie, onClose, onBooking }: BookingModalProps) {
  const [selectedShowTime, setSelectedShowTime] = useState<ShowTime | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);
  const [seats] = useState(generateSeats());

  const handleSeatClick = (seat: Seat) => {
    if (seat.status === 'reserved') return;
    
    const isSelected = selectedSeats.find(s => s.id === seat.id);
    if (isSelected) {
      setSelectedSeats(selectedSeats.filter(s => s.id !== seat.id));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const getSeatStatus = (seat: Seat) => {
    if (seat.status === 'reserved') return 'bg-gray-500';
    if (selectedSeats.find(s => s.id === seat.id)) return 'bg-green-500';
    return 'bg-blue-500 hover:bg-blue-600';
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">{movie.title}</h2>
            <button onClick={onClose}>
              <X className="w-6 h-6 text-gray-500 hover:text-gray-700" />
            </button>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Select Show Time</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {showTimes.map((time) => (
                <button
                  key={time.id}
                  className={`p-3 rounded-lg border ${
                    selectedShowTime?.id === time.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-500'
                  }`}
                  onClick={() => setSelectedShowTime(time)}
                >
                  <div className="text-sm font-medium">{time.time}</div>
                  <div className="text-xs text-gray-500">${time.price}</div>
                </button>
              ))}
            </div>
          </div>

          {selectedShowTime && (
            <>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Select Seats</h3>
                <div className="flex justify-center mb-4">
                  <div className="w-48 h-2 bg-gray-300 rounded-lg mb-8" />
                </div>
                <div className="grid grid-cols-8 gap-2 max-w-md mx-auto">
                  {seats.map((seat) => (
                    <button
                      key={seat.id}
                      className={`
                        w-8 h-8 rounded-t-lg ${getSeatStatus(seat)}
                        flex items-center justify-center text-white text-sm
                        ${seat.status === 'reserved' ? 'cursor-not-allowed' : 'cursor-pointer'}
                      `}
                      onClick={() => handleSeatClick(seat)}
                      disabled={seat.status === 'reserved'}
                    >
                      {seat.number}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Selected Seats: {selectedSeats.length}</p>
                    <p className="text-sm text-gray-600">
                      Total: ${(selectedSeats.length * selectedShowTime.price).toFixed(2)}
                    </p>
                  </div>
                  <button
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
                    disabled={selectedSeats.length === 0}
                    onClick={() => onBooking(selectedSeats, selectedShowTime)}
                  >
                    Book Tickets
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}