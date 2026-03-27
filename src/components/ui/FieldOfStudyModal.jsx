import React from 'react';
import { X, Search } from 'lucide-react';

const FieldOfStudyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const fields = ['Computer Science', 'Architecture', 'B.Tech', 'Medicine', 'Law', 'Business'];

  return (
    <div className="fixed inset-0 z-[150] bg-black/60 backdrop-blur-md flex items-center justify-center p-6">
      <div className="bg-white dark:bg-[#0A0A0B] w-full max-w-xl p-12 relative border border-gray-100 dark:border-white/10 shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute right-6 top-6 p-2 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
        >
          <X className="w-6 h-6 text-gray-900 dark:text-white" />
        </button>

        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2 uppercase tracking-tighter">
          Field of Study
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8 font-medium">Select your sector to personalize your relay.</p>

        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="SEARCH SECTORS..."
            className="w-full bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 p-4 pl-12 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-blue-600 transition-colors"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {fields.map((field) => (
            <button 
              key={field}
              onClick={() => onClose()}
              className="p-4 border border-gray-100 dark:border-white/5 text-left hover:bg-blue-600 hover:text-white transition-all text-xs font-bold uppercase tracking-widest"
            >
              {field}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FieldOfStudyModal;
