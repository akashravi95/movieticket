import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';
import { formatDate, formatCurrency } from '../../utils/formatters';

interface DashboardStatsProps {
  salesData: {
    date: string;
    amount: number;
  }[];
  bookingStats: {
    date: string;
    bookings: number;
  }[];
}

export function DashboardStats({ salesData, bookingStats }: DashboardStatsProps) {
  const totalSales = salesData.reduce((sum, item) => sum + item.amount, 0);
  const totalBookings = bookingStats.reduce((sum, item) => sum + item.bookings, 0);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Total Sales</h3>
          <p className="text-3xl font-bold text-blue-600">{formatCurrency(totalSales)}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Total Bookings</h3>
          <p className="text-3xl font-bold text-green-600">{totalBookings}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Sales Overview</h3>
        <div className="h-80">
          <BarChart
            width={800}
            height={300}
            data={salesData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tickFormatter={(date) => formatDate(date, 'MMM d')} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="amount" fill="#3B82F6" name="Sales" />
          </BarChart>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Booking Trends</h3>
        <div className="h-80">
          <LineChart
            width={800}
            height={300}
            data={bookingStats}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tickFormatter={(date) => formatDate(date, 'MMM d')} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="bookings" stroke="#10B981" name="Bookings" />
          </LineChart>
        </div>
      </div>
    </div>
  );
}