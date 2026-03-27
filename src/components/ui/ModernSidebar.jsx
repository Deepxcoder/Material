import React from 'react';
import { Clock, TrendingUp, FileText, ChevronRight, Award } from 'lucide-react';

const ModernSidebar = ({ stats }) => {
  return (
    <aside className="w-full lg:w-80 shrink-0 space-y-6">
      {/* Exam Countdown */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 text-white shadow-xl shadow-blue-500/20 relative overflow-hidden">
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-4 h-4 text-blue-100" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-blue-100/80">Next Exam</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold">{stats.examCountdown}</span>
            <span className="text-lg font-medium opacity-80">days left</span>
          </div>
          <p className="text-xs text-blue-100/60 mt-2">Advanced Pharmacology // Room 402</p>
        </div>
      </div>

      {/* Score Card / Progress */}
      <div className="bg-white dark:bg-[#1C1C1E] border border-gray-100 dark:border-[#2C2C2E] rounded-3xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-blue-500" />
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">Score Card</span>
          </div>
          <Award className="w-4 h-4 text-yellow-500" />
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs font-medium mb-2">
              <span className="text-gray-600 dark:text-gray-400">Total Progress</span>
              <span className="text-blue-600 dark:text-blue-400">{stats.progress}%</span>
            </div>
            <div className="h-2 w-full bg-gray-100 dark:bg-[#2C2C2E] rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 rounded-full transition-all duration-1000" 
                style={{ width: `${stats.progress}%` }}
              ></div>
            </div>
          </div>
          <p className="text-[10px] text-gray-400 text-center leading-relaxed italic">
            "You're in the top 5% of students this week!"
          </p>
        </div>
      </div>

      {/* Recently Uploaded */}
      <div className="bg-white dark:bg-[#1C1C1E] border border-gray-100 dark:border-[#2C2C2E] rounded-3xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">Recently Uploaded</span>
          <button className="text-[10px] font-bold text-blue-600 flex items-center gap-0.5 hover:gap-1 transition-all">
            VIEW ALL <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        <div className="space-y-4">
          {stats.recentFiles.map((file, i) => (
            <div key={i} className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 bg-gray-50 dark:bg-[#2C2C2E] rounded-xl flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                <FileText className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">{file.name}</p>
                <p className="text-[10px] text-gray-400">{file.date} // {file.size}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default ModernSidebar;
