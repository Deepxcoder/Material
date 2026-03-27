import React from 'react';
import { Bookmark, Share2, PlayCircle, ChevronRight } from 'lucide-react';

const NewsResourceCard = ({ 
  category = "Computer Science", 
  timestamp = "2 hours ago", 
  headline = "The Future of Quantum Computing in Sustainable Systems", 
  summaryPoints = [
    "AI-driven optimization for qubits reduces energy overhead by 40%.",
    "Scalable architecture patterns emerging for decentralized nodes.",
    "Integrated photonics layer eliminates thermal noise in room-temp tests."
  ],
  imageUrl = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
}) => {
  return (
    <div className="group w-full bg-white dark:bg-[#0A0A0B] border border-gray-200 dark:border-white/10 overflow-hidden flex flex-col h-full">
      {/* Featured Image - 4:5 Aspect Ratio */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img 
          src={imageUrl} 
          alt={headline}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Header */}
      <div className="p-6 pb-0 flex items-center justify-between">
        <span className="px-3 py-1 bg-blue-600/10 text-blue-600 text-[10px] font-black uppercase tracking-widest border border-blue-600/20">
          {category}
        </span>
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {timestamp}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex-1">
        <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-tight mb-6 group-hover:text-blue-600 transition-colors">
          {headline}
        </h2>
        
        <ul className="space-y-4">
          {summaryPoints.map((point, i) => (
            <li key={i} className="flex gap-3 text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 bg-blue-600 flex-shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="p-6 pt-0 border-t border-gray-50 dark:border-white/5 mt-4 flex items-center justify-between">
        <button className="flex-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:opacity-90 transition-opacity">
          <PlayCircle className="w-4 h-4" />
          Start MCQ Quiz
        </button>
        
        <div className="flex gap-2 ml-4">
          <button className="p-4 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 text-gray-400 hover:text-blue-600 transition-all">
            <Bookmark className="w-4 h-4" />
          </button>
          <button className="p-4 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 text-gray-400 hover:text-blue-600 transition-all">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsResourceCard;
