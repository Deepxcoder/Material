import React from 'react';
import { Home, Compass, Clock, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const FloatingNav = () => {
  const navItems = [
    { icon: Home, path: '/', label: 'Home' },
    { icon: Compass, path: '/explore', label: 'Explore' },
    { icon: Clock, path: '/recent', label: 'Recent' },
    { icon: User, path: '/profile', label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] px-4 w-full max-w-fit">
      <nav className="glass px-2 py-2 flex items-center gap-1 shadow-2xl border border-white/20 !rounded-full">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              relative group flex flex-col items-center justify-center p-4 transition-all duration-300
              ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 hover:text-gray-900 dark:hover:text-white'}
            `}
          >
            <item.icon className="w-6 h-6" />
            
            {/* Active Indicator Line (Zero radius) */}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 scale-x-0 group-hover:scale-x-50 [.active_&]:scale-x-100 transition-transform duration-300" />
            
            {/* Tooltip-ish label on hover */}
            <span className="absolute -top-10 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-[10px] font-black px-3 py-1 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {item.label}
            </span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default FloatingNav;
