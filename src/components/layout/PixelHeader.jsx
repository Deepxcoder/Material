import React from 'react';
import { Sun, Moon } from 'lucide-react';
import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar.png';

const PixelHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-pixel-dark-charcoal border-b-2 border-white/10 z-50 px-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img src={logo} alt="Logo" className="h-8 w-8 pixelated grayscale invert" />
        <h1 className="text-sm font-bold uppercase tracking-widest text-white">PIXEL.STUDY</h1>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center bg-pixel-slate-grey border-2 border-white/20 p-1">
          <button className="p-1 bg-white text-pixel-dark-charcoal shadow-[1px_1px_0_0_white]">
            <Moon className="w-3 h-3" />
          </button>
          <button className="p-1 text-white/40 hover:text-white transition-colors">
            <Sun className="w-3 h-3" />
          </button>
        </div>
        <div className="h-8 w-8 border-2 border-white bg-pixel-slate-grey overflow-hidden p-0.5">
          <img src={avatar} alt="Avatar" className="w-full h-full pixelated object-contain" />
        </div>
      </div>
    </header>
  );
};

export default PixelHeader;
