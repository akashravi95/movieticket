import React from 'react';
import { DashboardStats } from '../components/admin/DashboardStats';
import { BookingManagement } from '../components/admin/BookingManagement';
import { generateSalesData, generateBookingStats } from '../data/mockData';

export function AdminDashboardPage() {
  const salesData = generateSalesData();
  const bookingStats = generateBookingStats();
  const mockBookings = [
    {
      id: '1',
      userId: 'user123',
      movieId: 1,
      showTimeId: 1,
      seats: ['A1', 'A2'],
      totalAmount: 30,
      status: 'confirmed',
      createdAt: new Date().toISOString(),
    },
    // Add more mock bookings as needed
  ];

  const handleVerifyBooking = (bookingId: string) => {
    console.log('Verify booking:', bookingId);
  };

  const handleCancelBooking = (bookingId: string) => {
    console.log('Cancel booking:', bookingId);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-8">Admin Dashboard</h1>
        
        <div className="space-y-8">
          <DashboardStats
            salesData={salesData}
            bookingStats={bookingStats}
          />
          
          <BookingManagement
            bookings={mockBookings}
            onVerifyBooking={handleVerifyBooking}
            onCancelBooking={handleCancelBooking}
          />
        </div>
      </div>
    </div>
  );
}