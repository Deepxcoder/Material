import React from 'react';
import { MessageSquare, FileText, Share2 } from 'lucide-react';

const QuestCard = ({ user, action, time, icon: Icon, color = 'bg-pixel-blue' }) => {
  return (
    <div className="border-2 border-white/10 bg-pixel-slate-grey p-6 shadow-[2px_2px_0_0_rgba(255,255,255,0.05)] mb-6 last:mb-0 transition-transform hover:-translate-y-0.5">
      <div className="flex items-start gap-4">
        <div className={`w-10 h-10 ${color} border-2 border-white/20 flex items-center justify-center shrink-0`}>
          <Icon className="w-5 h-5 text-pixel-dark-charcoal" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-center mb-1">
            <span className="font-bold text-sm tracking-tight text-white">{user}</span>
            <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">{time}</span>
          </div>
          <p className="text-sm text-white/60 leading-relaxed mb-4">{action}</p>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 text-[10px] font-bold uppercase text-white/40 hover:text-white transition-colors">
              <FileText className="w-3 h-3" /> ANALYZE
            </button>
            <button className="flex items-center gap-2 text-[10px] font-bold uppercase text-white/40 hover:text-white transition-colors">
              <MessageSquare className="w-3 h-3" /> RESPOND
            </button>
            <button className="flex items-center gap-2 text-[10px] font-bold uppercase text-white/20 hover:text-white transition-colors ml-auto">
              <Share2 className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestCard;
