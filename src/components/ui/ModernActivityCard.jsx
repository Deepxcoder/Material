import React from 'react';
import { FileText, MessageSquare, HelpCircle, Share2, MoreHorizontal } from 'lucide-react';

const ModernActivityCard = ({ type, user, content, time, stats }) => {
  const isQA = type === 'qa';

  return (
    <div className="bg-white dark:bg-[#1C1C1E] border border-gray-100 dark:border-[#2C2C2E] rounded-2xl p-5 mb-4 hover:shadow-lg hover:border-blue-500/20 transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-[#2C2C2E] flex items-center justify-center overflow-hidden border border-gray-200 dark:border-[#3C3C3E]">
            <img src={user.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} alt={user.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white leading-none mb-1">{user.name}</h4>
            <p className="text-xs text-gray-400 dark:text-gray-500">{time}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1 rounded-lg">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      <div className="mb-4">
        <h3 className="text-base font-medium text-gray-800 dark:text-gray-200 mb-2 leading-snug">
          {content.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
          {content.description}
        </p>
      </div>

      {content.file && (
        <div className="bg-gray-50 dark:bg-[#2C2C2E] rounded-xl p-3 flex items-center justify-between mb-4 border border-transparent group-hover:border-blue-500/10 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-50/50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-700 dark:text-gray-300">{content.file.name}</p>
              <p className="text-[10px] text-gray-400">{content.file.size}</p>
            </div>
          </div>
          <button className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider hover:underline">Download</button>
        </div>
      )}

      <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-[#2C2C2E]">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1.5 text-gray-400 hover:text-blue-500 transition-colors">
            <MessageSquare className="w-4 h-4" />
            <span className="text-xs font-medium">{stats.comments}</span>
          </button>
          <button className="flex items-center gap-1.5 text-gray-400 hover:text-green-500 transition-colors">
            <Share2 className="w-4 h-4" />
            <span className="text-xs font-medium">{stats.shares}</span>
          </button>
        </div>
        
        {isQA && (
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 transition-all active:scale-95">
            <HelpCircle className="w-3 h-3" />
            HELP
          </button>
        )}
      </div>
    </div>
  );
};

export default ModernActivityCard;
