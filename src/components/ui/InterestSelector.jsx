import React from 'react';
import { X } from 'lucide-react';

const InterestSelector = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const categories = [
    { name: 'Computer Science', icon: '💻', color: 'bg-blue-500' },
    { name: 'B.Tech', icon: '⚙️', color: 'bg-indigo-600' },
    { name: 'Pure Sciences', icon: '🧪', color: 'bg-emerald-500' },
    { name: 'Mathematics', icon: '🔢', color: 'bg-amber-500' },
    { name: 'Humanities', icon: '📚', color: 'bg-rose-500' },
    { name: 'Business', icon: '📈', color: 'bg-slate-700' },
  ];

  return (
    <div className="fixed inset-0 z-[110] bg-white dark:bg-[#0A0A0B] flex flex-col p-8 md:p-16">
      <button 
        onClick={onClose}
        className="absolute right-8 top-8 p-4 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
      >
        <X className="w-8 h-8 text-gray-900 dark:text-white" />
      </button>

      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center">
        <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-12 tracking-tight">
          WHAT'S YOUR<br />SECTOR?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <button 
              key={cat.name}
              className="group relative h-48 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-gray-900 dark:hover:border-white p-8 flex flex-col justify-between text-left transition-all hover:-translate-y-1"
            >
              <span className="text-4xl">{cat.icon}</span>
              <span className="text-xl font-bold uppercase tracking-tight text-gray-900 dark:text-white">{cat.name}</span>
              <div className="absolute top-0 right-0 w-2 h-0 group-hover:h-full bg-gray-900 dark:bg-white transition-all duration-300"></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InterestSelector;
