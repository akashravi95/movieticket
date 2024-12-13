import React from 'react';
import { Clapperboard } from 'lucide-react';
import { Navigation } from './Navigation';

export function Header() {
  return (
    <header>
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Clapperboard className="w-8 h-8 text-blue-500" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">MovieTix</h1>
            </div>
          </div>
        </div>
      </div>
      <Navigation />
    </header>
  );
}