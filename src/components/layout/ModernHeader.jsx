import React from 'react';
import { Search, Sun, Moon, User, Bell } from 'lucide-react';
import { useTheme } from "../../context/ThemeContext";

const ModernHeader = () => {
  const { currentTheme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 dark:bg-[#121212]/80 backdrop-blur-md border-b border-gray-200 dark:border-[#2C2C2E] z-50 px-6 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">StudyFlow</span>
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex flex-1 max-w-md mx-8">
        <div className="relative w-full group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
          <input 
            type="text" 
            placeholder="Search materials, Q&A..." 
            className="w-full bg-gray-100 dark:bg-[#1C1C1E] border-none rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-500/20 transition-all outline-none text-gray-900 dark:text-white"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button 
          onClick={() => toggleTheme(currentTheme === 'modern' ? 'dark-modern' : 'modern')}
          className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-[#1C1C1E] rounded-full transition-colors"
        >
          {currentTheme.includes('dark') ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        
        <button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-[#1C1C1E] rounded-full transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 border-2 border-white dark:border-[#121212] rounded-full"></span>
        </button>

        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white cursor-pointer hover:ring-2 hover:ring-blue-500/30 transition-all overflow-hidden border border-gray-100 dark:border-[#2C2C2E]">
          <User className="w-5 h-5" />
        </div>
      </div>
    </header>
  );
};

export default ModernHeader;
