import React from 'react';
import { Mail, Lock, Github } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const LoginModal = ({ isOpen, onClose }) => {
  const { loginGoogle } = useAuth();
  
  if (!isOpen) return null;

  const handleGoogleLogin = async () => {
    try {
      await loginGoogle();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-pixel-dark-charcoal/80 backdrop-blur-sm">
      <div className="w-full max-w-md bg-pixel-slate-grey border-2 border-white p-8 shadow-[4px_4px_0_0_rgba(255,255,255,1)]">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold uppercase tracking-tight text-white mb-2">Initialize Session</h2>
          <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Access Community Sector 7</p>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-3 w-4 h-4 text-white/40" />
            <input 
              type="email" 
              placeholder="IDENTITY_EMAIL" 
              className="w-full bg-pixel-dark-charcoal border-2 border-white/20 p-3 pl-10 text-xs font-bold text-white placeholder:text-white/20 focus:border-white focus:outline-none"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 w-4 h-4 text-white/40" />
            <input 
              type="password" 
              placeholder="ENCRYPT_PASSWORD" 
              className="w-full bg-pixel-dark-charcoal border-2 border-white/20 p-3 pl-10 text-xs font-bold text-white placeholder:text-white/20 focus:border-white focus:outline-none"
            />
          </div>
          
          <button className="w-full bg-white text-pixel-dark-charcoal py-3 text-xs font-bold uppercase hover:bg-white/90 transition-colors">
            Authorize Account
          </button>

          <div className="flex items-center gap-4 my-6">
            <div className="h-0.5 flex-1 bg-white/10" />
            <span className="text-[10px] font-bold text-white/20">OR</span>
            <div className="h-0.5 flex-1 bg-white/10" />
          </div>

          <button 
            onClick={handleGoogleLogin}
            className="w-full border-2 border-white text-white py-3 text-xs font-bold uppercase hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
          >
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4 grayscale invert" />
            Sign in with Google
          </button>
        </div>

        <p className="mt-8 text-center text-[10px] font-bold text-white/40 uppercase cursor-pointer hover:text-white transition-colors">
          Create New Identity // Sign Up
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
