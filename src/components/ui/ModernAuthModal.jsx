import React from 'react';
import { Mail, Lock, X, ArrowRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const ModernAuthModal = ({ isOpen, onClose }) => {
  const { loginGoogle } = useAuth();
  
  if (!isOpen) return null;

  const handleGoogleLogin = async () => {
    try {
      await loginGoogle();
      onClose();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-500/20 dark:bg-black/40 backdrop-blur-md transition-all duration-300">
      <div 
        className="w-full max-w-md bg-white dark:bg-[#1C1C1E] rounded-[32px] p-8 shadow-2xl border border-gray-100 dark:border-[#2C2C2E] relative animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute right-6 top-6 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#2C2C2E] rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-10">
          <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Welcome Back</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Sign in to continue your learning journey</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-1.5 focus-within:transform focus-within:translate-y-[-2px] transition-transform">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              <input 
                type="email" 
                placeholder="name@example.com" 
                className="w-full bg-gray-50 dark:bg-[#2C2C2E] border-none rounded-2xl py-3.5 pl-11 pr-4 text-sm focus:ring-2 focus:ring-blue-500/20 transition-all outline-none text-gray-900 dark:text-white placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="space-y-1.5 focus-within:transform focus-within:translate-y-[-2px] transition-transform">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Password</label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full bg-gray-50 dark:bg-[#2C2C2E] border-none rounded-2xl py-3.5 pl-11 pr-4 text-sm focus:ring-2 focus:ring-blue-500/20 transition-all outline-none text-gray-900 dark:text-white placeholder:text-gray-400"
              />
            </div>
          </div>
          
          <button className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-3.5 rounded-2xl text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-gray-900/10 dark:shadow-white/5 active:scale-[0.98]">
            Sign In
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex items-center gap-4 py-4">
            <div className="h-px flex-1 bg-gray-100 dark:bg-[#2C2C2E]" />
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">social sign in</span>
            <div className="h-px flex-1 bg-gray-100 dark:bg-[#2C2C2E]" />
          </div>

          <button 
            onClick={handleGoogleLogin}
            className="w-full bg-white dark:bg-[#1C1C1E] border border-gray-200 dark:border-[#2C2C2E] text-gray-700 dark:text-gray-300 py-3.5 rounded-2xl text-sm font-semibold hover:bg-gray-50 dark:hover:bg-[#2C2C2E] transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
          >
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
            Continue with Google
          </button>
        </div>

        <p className="mt-8 text-center text-xs text-gray-500 dark:text-gray-400">
          Don't have an account? <span className="text-blue-600 dark:text-blue-400 font-bold cursor-pointer hover:underline">Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default ModernAuthModal;
