import React from 'react';

const ScoreCard = ({ title, value, max, color = 'bg-red-500' }) => {
  const percentage = Math.max(0, Math.min(100, (value / max) * 100));
  
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex justify-between items-center mb-1">
        <span className="text-[10px] font-bold uppercase text-pixel-lite-charcoal">{title}</span>
        <span className="text-[10px] font-bold text-pixel-lite-charcoal/60">{value}/{max}</span>
      </div>
      <div className="h-5 w-full border-2 border-pixel-lite-charcoal bg-pixel-lite-offwhite p-0.5 shadow-[1px_1px_0_0_rgba(34,34,34,1)]">
        <div 
          className={`h-full ${color} transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ScoreCard;
