import React from 'react';
import { BookOpen, HelpCircle, PenTool, Zap } from 'lucide-react';
import QuestCard from './QuestCard';

const CommunityQuestBoard = () => {
  const quests = [
    { user: 'StudyKnight', action: 'Uploaded Physics Lab Report for Week 4. Needs summarization.', time: '12M AGO', icon: BookOpen, color: 'bg-pixel-blue' },
    { user: 'PixelScribe', action: 'Asked a question about Quantum Tunneling in the Physics group.', time: '45M AGO', icon: HelpCircle, color: 'bg-pixel-mint' },
    { user: 'CodeWizard', action: 'Shared a Python script for visualizing atomic orbits.', time: '1H AGO', icon: Zap, color: 'bg-pixel-magenta' },
    { user: 'AceStudent', action: 'Summarized the "Intro to Calculus" PDF. Check it out!', time: '2H AGO', icon: PenTool, color: 'bg-pixel-blue' },
  ];

  return (
    <div className="w-full">
      <div className="flex items-center gap-4 mb-8">
        <div className="h-0.5 w-12 bg-pixel-lite-charcoal" />
        <h2 className="text-sm font-bold uppercase tracking-widest text-pixel-lite-charcoal">Community Quest Board</h2>
      </div>
      <div className="max-w-2xl">
        {quests.map((quest, i) => (
          <QuestCard key={i} {...quest} />
        ))}
      </div>
    </div>
  );
};

export default CommunityQuestBoard;
