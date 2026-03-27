import React from 'react';
import { Heart, MessageSquare, Download, Share2, FileText, User, MoreHorizontal, Bookmark } from 'lucide-react';

const V2ResourceCard = ({ type, user, content, time, stats }) => {
  return (
    <div className="w-full bg-white dark:bg-[#0A0A0B] border-b border-gray-100 dark:border-white/5 pb-12 mb-12 last:border-0 last:pb-0">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-100 dark:bg-white/10 flex items-center justify-center p-0.5">
            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} alt={user.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white leading-none">{user.name}</h4>
            <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mt-1">{time}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="bg-gray-50 dark:bg-white/5 aspect-video mb-4 flex items-center justify-center relative group cursor-pointer border border-gray-100 dark:border-white/5">
        {content.file ? (
          <div className="flex flex-col items-center text-center p-8">
            <div className="w-16 h-16 bg-blue-500/10 flex items-center justify-center mb-4">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-tight">{content.file.name}</p>
            <p className="text-[10px] text-gray-400 mt-2">{content.file.size} // PDF PREVIEW</p>
          </div>
        ) : (
          <div className="p-8 max-w-lg">
            <h3 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white mb-4 leading-tight">
              "{content.title}"
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {content.description}
            </p>
          </div>
        )}
        
        {/* Overlay Hover Effect */}
        <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/5 transition-colors"></div>
      </div>

      {/* Interaction Bar */}
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex items-center gap-6">
          <button className="text-gray-400 hover:text-red-500 transition-colors flex items-center gap-2 group">
            <Heart className="w-6 h-6 group-active:scale-125 transition-transform" />
            <span className="text-xs font-bold">{stats.likes || 124}</span>
          </button>
          <button className="text-gray-400 hover:text-blue-500 transition-colors flex items-center gap-2 group">
            <MessageSquare className="w-6 h-6 group-active:scale-125 transition-transform" />
            <span className="text-xs font-bold">{stats.comments}</span>
          </button>
          <button className="text-gray-400 hover:text-green-500 transition-colors flex items-center gap-2 group">
            <Share2 className="w-6 h-6 group-active:scale-125 transition-transform" />
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-blue-500 transition-colors">
            <Bookmark className="w-6 h-6" />
          </button>
          <button className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            <Download className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Caption/Description */}
      <div className="px-1">
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          <span className="font-bold text-gray-900 dark:text-white mr-2">{user.name}</span>
          {content.description}
        </p>
        <button className="text-xs font-bold text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 mt-3 uppercase tracking-wider">
          View all {stats.comments + 8} comments
        </button>
      </div>
    </div>
  );
};

export default V2ResourceCard;
