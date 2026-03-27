import React from 'react';

const ExamCountdown = ({ daysLeft }) => {
  return (
    <div className="border-2 border-pixel-lite-charcoal bg-white p-6 w-full shadow-[2px_2px_0_0_rgba(34,34,34,1)]">
      <h3 className="text-[10px] font-bold text-pixel-lite-charcoal/40 mb-2 uppercase tracking-widest">Next Exam Countdown</h3>
      <div className="flex items-baseline gap-2 mb-4">
        <span className="text-4xl font-bold text-pixel-lite-charcoal">{daysLeft}</span>
        <span className="text-xs font-bold text-pixel-lite-charcoal/60 uppercase">Days Left</span>
      </div>
      <div className="h-4 w-full border-2 border-pixel-lite-charcoal bg-pixel-lite-offwhite p-0.5">
        <div 
          className="h-full bg-pixel-blue" 
          style={{ width: `${(daysLeft / 30) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default ExamCountdown;
