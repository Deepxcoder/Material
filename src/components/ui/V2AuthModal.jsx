import React from 'react';
import { X, ArrowRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const V2AuthModal = ({ isOpen, onClose }) => {
  const { loginGoogle } = useAuth();
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] bg-white dark:bg-[#0A0A0B] flex items-center justify-center p-6">
      <button 
        onClick={onClose}
        className="absolute right-8 top-8 p-4 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
      >
        <X className="w-8 h-8 text-gray-900 dark:text-white" />
      </button>

      <div className="max-w-md w-full text-center">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tighter">
          SAVE YOUR<br />PROGRESS.
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-12 font-medium">Join the community and sync your study stats across devices.</p>

        <div className="space-y-4">
          <button 
            onClick={loginGoogle}
            className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-6 text-sm font-black uppercase tracking-widest hover:opacity-90 transition-opacity flex items-center justify-center gap-4"
          >
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 dark:invert" />
            Continue with Google
          </button>

          <button className="w-full border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white py-6 text-sm font-black uppercase tracking-widest hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all flex items-center justify-center gap-4 group">
            Enter Email
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <p className="mt-12 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
          Sector 7 / Authentication Relay / Secure
        </p>
      </div>
    </div>
  );
};

export default V2AuthModal;
