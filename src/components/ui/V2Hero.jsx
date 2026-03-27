import React from 'react';
import { ArrowDown } from 'lucide-react';

const V2Hero = ({ onStart }) => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-white dark:bg-[#0A0A0B]">
      <div className="max-w-4xl space-y-8 animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-gray-900 dark:text-white leading-[0.9]">
          LEARN.<br />EVOLVE.<br />SHARE.
        </h1>
        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 font-medium max-w-xl mx-auto leading-relaxed">
          The high-fidelity study ecosystem for the modern student. Curated resources, community-driven Q&A.
        </p>
        
        <div className="pt-12">
          <button 
            onClick={onStart}
            className="group flex flex-col items-center gap-4 mx-auto hover:opacity-70 transition-opacity"
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Let's Get Started</span>
            <div className="w-px h-16 bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-blue-600 animate-scroll-down"></div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default V2Hero;
