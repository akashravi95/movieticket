import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Film, Ticket, UserCircle, Settings, LayoutDashboard, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  path: string;
}

export function Navigation() {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  const navItems: NavItem[] = [
    {
      icon: <Home className="w-5 h-5" />,
      label: 'Home',
      path: '/',
    },
    {
      icon: <Film className="w-5 h-5" />,
      label: 'Movies',
      path: '/',
    },
  ];

  if (isAuthenticated) {
    navItems.push({
      icon: <Ticket className="w-5 h-5" />,
      label: 'My Bookings',
      path: '/profile',
    });
  }

  if (user?.role === 'admin') {
    navItems.push({
      icon: <LayoutDashboard className="w-5 h-5" />,
      label: 'Dashboard',
      path: '/admin',
    });
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                className="inline-flex items-center px-4 py-2 border-b-2 border-transparent hover:border-blue-500 text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => navigate('/profile')}
                  className="inline-flex items-center text-gray-500 hover:text-gray-700"
                >
                  <UserCircle className="w-6 h-6" />
                  <span className="ml-2 text-sm font-medium">{user?.name}</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center text-gray-500 hover:text-gray-700"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="ml-2">Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => navigate('/login')}
                  className="text-gray-500 hover:text-gray-700"
                >
                  Login
                </button>
                <button 
                  onClick={() => navigate('/register')}
                  className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}