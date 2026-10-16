import React, { useState, useEffect } from 'react';
import { ResourceItem } from '../types';

interface ResourceModalProps {
  resource: ResourceItem | null;
  onClose: () => void;
  onOpenLiveSimulator?: () => void;
}

export const ResourceModal: React.FC<ResourceModalProps> = ({ resource, onClose, onOpenLiveSimulator }) => {
  const [drillActive, setDrillActive] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(90);

  useEffect(() => {
    let interval: any = null;
    if (drillActive && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((s) => s - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setDrillActive(false);
    }
    return () => clearInterval(interval);
  }, [drillActive, secondsLeft]);

  if (!resource) return null;

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleStartDrill = () => {
    setSecondsLeft(90);
    setDrillActive(true);
  };

  const handleStopDrill = () => {
    setDrillActive(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resource-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#e5e9e4] overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#f0f5f0] hover:bg-[#ebefea] text-[#59413c] flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Header Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded-md bg-[#ebefea] text-xs font-semibold text-[#59413c]">
            {resource.track} · {resource.type}
          </span>
          <span
            className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
              resource.access === 'Public'
                ? 'bg-[#6ffbbe]/40 text-[#006947]'
                : 'bg-[#ffddb8] text-[#855300]'
            }`}
          >
            {resource.access}
          </span>
          <span className="text-xs text-[#59413c] flex items-center gap-1">
            <span className="material-symbols-outlined text-[15px]">schedule</span>
            {resource.readTime}
          </span>
        </div>

        <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#181d1a] leading-tight">
          {resource.title}
        </h2>
        <p className="text-sm text-[#59413c] mt-2 leading-relaxed border-b border-[#ebefea] pb-4">
          {resource.description}
        </p>

        {/* Content Body */}
        <div className="py-4 space-y-6">
          <div>
            <h4 className="font-headline text-sm font-bold uppercase tracking-wider text-[#a83119] mb-1.5">
              The Framework Concept
            </h4>
            <p className="text-sm text-[#181d1a] leading-relaxed">
              {resource.content.overview}
            </p>
          </div>

          <div>
            <h4 className="font-headline text-sm font-bold uppercase tracking-wider text-[#181d1a] mb-2">
              Key Guidelines & Rules of Thumb
            </h4>
            <ul className="space-y-2 text-sm text-[#181d1a]">
              {resource.content.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#006947] text-[18px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Practical Self Drill Interactive Box */}
          <div className="p-4 rounded-2xl bg-[#f0f5f0] border border-[#e5e9e4] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#855300] flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">psychology</span>
                Practical Exercise
              </span>
              <span className="font-mono text-base font-bold text-[#a83119]">
                {formatTimer(secondsLeft)}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#181d1a] font-medium">
              {resource.content.practicalExercise}
            </p>

            <div className="flex items-center gap-3 pt-1">
              {!drillActive ? (
                <button
                  onClick={handleStartDrill}
                  className="px-4 py-2 rounded-full bg-[#a83119] hover:bg-[#ca492f] text-white text-xs font-bold shadow-sm transition-all flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">play_arrow</span>
                  <span>{secondsLeft < 90 ? 'Restart 90s Drill Timer' : 'Start 90s Drill Timer'}</span>
                </button>
              ) : (
                <button
                  onClick={handleStopDrill}
                  className="px-4 py-2 rounded-full bg-[#ebefea] text-[#181d1a] text-xs font-semibold hover:bg-[#e5e9e4] transition-all flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">pause</span>
                  <span>Pause Timer</span>
                </button>
              )}
              {drillActive && (
                <span className="text-xs text-[#006947] font-semibold animate-pulse">
                  ● Speaking round in progress...
                </span>
              )}
            </div>
          </div>

          {/* Takeaway reflection */}
          <div className="p-3.5 rounded-xl bg-[#ffddb8]/30 border border-[#ffddb8] text-xs text-[#653e00]">
            <strong className="block text-[#2a1700] mb-0.5 font-bold">Post-Drill Reflection:</strong>
            {resource.content.takeawayPrompt}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-[#ebefea] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#59413c]">
            Practicing in live rooms builds real reflexes faster than solo reading.
          </p>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            {onOpenLiveSimulator && (
              <button
                onClick={() => {
                  onClose();
                  onOpenLiveSimulator();
                }}
                className="flex-1 sm:flex-initial px-4 py-2 rounded-full bg-[#a83119] text-white text-xs font-bold hover:bg-[#ca492f] transition-all flex items-center justify-center gap-1"
              >
                <span className="material-symbols-outlined text-[16px]">videocam</span>
                <span>Test in Live Simulator</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full bg-[#ebefea] text-[#181d1a] text-xs font-semibold hover:bg-[#e5e9e4] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
