import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PRACTICE_PROMPTS } from '../data/mockData';

interface LiveRoomSimulatorProps {
  onOpenRsvp: () => void;
}

type ViewMode = 'breakout' | 'meet' | 'gallery';

interface FloatingReaction {
  id: number;
  emoji: string;
  x: number;
}

export const LiveRoomSimulator: React.FC<LiveRoomSimulatorProps> = ({ onOpenRsvp }) => {
  const [viewMode, setViewMode] = useState<ViewMode>('breakout');
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isHandRaised, setIsHandRaised] = useState(false);
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(120);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [reactions, setReactions] = useState<FloatingReaction[]>([]);
  const [cheerCount, setCheerCount] = useState(14);
  const [chatOpen, setChatOpen] = useState(false);
  const [feedbacks, setFeedbacks] = useState<string[]>([
    'Loved the natural pause before concluding! Made the delivery feel relaxed.',
    'Clear vocal projection during the hook!',
    'Great structure using Past-Present-Future.'
  ]);
  const [newFeedbackText, setNewFeedbackText] = useState('');

  // Timer countdown effect
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  // Clean reaction removal
  useEffect(() => {
    if (reactions.length > 0) {
      const timer = setTimeout(() => {
        setReactions((prev) => prev.slice(1));
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [reactions]);

  const triggerReaction = (emoji: string) => {
    const newReaction: FloatingReaction = {
      id: Date.now() + Math.random(),
      emoji,
      x: 20 + Math.random() * 60
    };
    setReactions((prev) => [...prev, newReaction]);
    setCheerCount((c) => c + 1);
  };

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleNextPrompt = () => {
    setCurrentPromptIndex((prev) => (prev + 1) % PRACTICE_PROMPTS.length);
    setTimerSeconds(120);
    setIsTimerRunning(true);
  };

  const handleSendFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFeedbackText.trim()) return;
    setFeedbacks((prev) => [...prev, newFeedbackText.trim()]);
    setNewFeedbackText('');
    triggerReaction('💬');
  };

  // Gallery participants using local downloaded images and neutral non-invented labels
  const galleryParticipants = [
    { name: 'Active Speaker (You)', img: '/images/speaker-active.jpg' },
    { name: 'Peer Listener 1', img: '/images/peer-speaking-headset.jpg' },
    { name: 'Peer Listener 2', img: '/images/peer-smiling-sweater.jpg' },
    { name: 'Peer Listener 3', img: '/images/peer-attentive-listener.jpg' },
    { name: 'Peer Listener 4', img: '/images/peer-participant-headscarf.jpg' },
    { name: 'Peer Listener 5', img: '/images/peers-conversation-pair.jpg' },
    { name: 'Peer Listener 6', img: '/images/peer-listening-1.jpg' },
    { name: 'Peer Listener 7', img: '/images/peer-listening-2.jpg' }
  ];

  return (
    <div className="w-full min-h-[calc(100vh-5rem)] bg-[#181d1a] text-white flex flex-col justify-between font-sans selection:bg-[#a83119] selection:text-white pb-6 pt-4">
      {/* Top Bar Mimicking Meet / Breakout Room */}
      <div className="max-w-[1400px] w-full mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            <span>Back to Site</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse"></span>
            <span className="font-headline text-sm sm:text-base font-semibold tracking-wide">
              {viewMode === 'breakout'
                ? 'Breakout Room (Active Practice Drill)'
                : viewMode === 'meet'
                ? 'Speaking Practice Group (Main Circle)'
                : 'Community Practice Room (Gallery View)'}
            </span>
          </div>
        </div>

        {/* View Layout Switcher */}
        <div className="flex items-center gap-1.5 bg-white/10 p-1 rounded-full text-xs">
          <button
            onClick={() => setViewMode('breakout')}
            className={`px-3 py-1 rounded-full font-medium transition-colors cursor-pointer ${
              viewMode === 'breakout' ? 'bg-[#a83119] text-white' : 'text-white/70 hover:text-white'
            }`}
          >
            Breakout (4)
          </button>
          <button
            onClick={() => setViewMode('meet')}
            className={`px-3 py-1 rounded-full font-medium transition-colors cursor-pointer ${
              viewMode === 'meet' ? 'bg-[#a83119] text-white' : 'text-white/70 hover:text-white'
            }`}
          >
            Focus Speaker
          </button>
          <button
            onClick={() => setViewMode('gallery')}
            className={`px-3 py-1 rounded-full font-medium transition-colors cursor-pointer ${
              viewMode === 'gallery' ? 'bg-[#a83119] text-white' : 'text-white/70 hover:text-white'
            }`}
          >
            Gallery (8)
          </button>
        </div>
      </div>

      {/* Main Interactive Stage Area */}
      <div className="max-w-[1400px] w-full mx-auto px-4 py-4 flex-1 flex flex-col lg:flex-row gap-4 items-stretch relative">
        {/* Floating Animated Emojis */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
          {reactions.map((r) => (
            <span
              key={r.id}
              style={{ left: `${r.x}%` }}
              className="absolute bottom-16 text-3xl animate-bounce"
            >
              {r.emoji}
            </span>
          ))}
        </div>

        {/* Left / Center Video Stage */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Active Prompt Box */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border border-white/10">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#ffddb8] text-[24px] mt-0.5">
                psychology
              </span>
              <div>
                <span className="text-[10px] uppercase font-bold text-[#ffddb8] tracking-wider block">
                  Active Impromptu Speaking Prompt
                </span>
                <p className="text-sm sm:text-base font-semibold text-white">
                  "{PRACTICE_PROMPTS[currentPromptIndex]}"
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
              <button
                onClick={handleNextPrompt}
                className="px-3 py-1.5 rounded-full bg-white/15 hover:bg-white/25 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[15px]">refresh</span>
                <span>Next Prompt</span>
              </button>

              <div className="px-3 py-1.5 rounded-full bg-[#a83119] text-xs font-mono font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">timer</span>
                <span>{formatTimer(timerSeconds)}</span>
              </div>
            </div>
          </div>

          {/* Video Grid based on viewMode */}
          {viewMode === 'breakout' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1 min-h-[360px]">
              {galleryParticipants.slice(0, 4).map((p, idx) => (
                <div
                  key={idx}
                  className="relative rounded-2xl overflow-hidden bg-[#242b26] border border-white/10 group aspect-video sm:aspect-auto"
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px] text-[#10b981]">
                      mic
                    </span>
                    <span>{p.name}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {viewMode === 'meet' && (
            <div className="relative flex-1 rounded-2xl overflow-hidden bg-[#242b26] border border-white/10 flex items-center justify-center min-h-[380px]">
              <img
                src="/images/speaker-active.jpg"
                alt="Active speaker presenting to peers"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping"></span>
                <span>Active Speaker Spotlight</span>
              </div>
            </div>
          )}

          {viewMode === 'gallery' && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 flex-1 min-h-[360px]">
              {galleryParticipants.map((p, idx) => (
                <div
                  key={idx}
                  className="relative rounded-xl overflow-hidden bg-[#242b26] border border-white/10 aspect-video"
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/70 px-2 py-0.5 rounded text-[10px] truncate max-w-[85%]">
                    {p.name}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Panel: Peer Feedback & Demo Cheer Feed */}
        <div className="w-full lg:w-80 bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-between gap-4">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#ffddb8] text-[20px]">
                  chat_bubble
                </span>
                <span className="text-sm font-bold">Peer Encouragement</span>
              </div>
              {/* Peer Cheers labeled explicitly as Demo per Section 3 item 3 */}
              <span className="px-2 py-0.5 rounded-full bg-[#ffddb8]/20 text-[#ffddb8] text-[10px] font-bold border border-[#ffddb8]/40">
                Peer Cheers: {cheerCount} (Demo)
              </span>
            </div>

            <div className="flex flex-col gap-2.5 mt-3 max-h-64 overflow-y-auto pr-1">
              {feedbacks.map((fb, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 rounded-xl p-2.5 text-xs text-white/90 leading-relaxed flex items-start gap-2"
                >
                  <span className="material-symbols-outlined text-[16px] text-[#6ffbbe] shrink-0 mt-0.5">
                    sentiment_satisfied
                  </span>
                  <span>{fb}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Feedback Input Form */}
          <form onSubmit={handleSendFeedback} className="flex gap-2 pt-2 border-t border-white/10">
            <input
              type="text"
              value={newFeedbackText}
              onChange={(e) => setNewFeedbackText(e.target.value)}
              placeholder="Send kindly feedback..."
              className="flex-1 px-3 py-2 rounded-xl bg-white/10 border border-white/15 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#a83119]"
            />
            <button
              type="submit"
              className="px-3.5 py-2 rounded-xl bg-[#a83119] text-white text-xs font-bold hover:bg-[#ca492f] cursor-pointer"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Control Dock (Bottom bar with reactions & clear Demo label) */}
      <div className="max-w-[1400px] w-full mx-auto px-4 pt-3 flex flex-wrap items-center justify-between gap-4 border-t border-white/10">
        <div className="hidden sm:flex items-center gap-2 text-xs text-white/60">
          <span className="font-mono">Live Room Simulator</span>
          <span aria-hidden="true">·</span>
          {/* Section 3 item 3: Peer Cheers counter labeled as Demo */}
          <span className="text-[#ffddb8] font-bold">Peer Cheers Counter (Demo)</span>
        </div>

        {/* Center Control Pod */}
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <button
            onClick={() => setIsMicOn(!isMicOn)}
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              isMicOn
                ? 'bg-white/15 hover:bg-white/25 text-white'
                : 'bg-[#ef4444] text-white shadow-lg'
            }`}
            title={isMicOn ? 'Mute Mic' : 'Unmute Mic'}
          >
            <span className="material-symbols-outlined text-[20px]">
              {isMicOn ? 'mic' : 'mic_off'}
            </span>
          </button>

          <button
            onClick={() => setIsCameraOn(!isCameraOn)}
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              isCameraOn
                ? 'bg-white/15 hover:bg-white/25 text-white'
                : 'bg-[#ef4444] text-white shadow-lg'
            }`}
            title={isCameraOn ? 'Turn off camera' : 'Turn on camera'}
          >
            <span className="material-symbols-outlined text-[20px]">
              {isCameraOn ? 'videocam' : 'videocam_off'}
            </span>
          </button>

          <button
            onClick={() => {
              setIsHandRaised(!isHandRaised);
              if (!isHandRaised) triggerReaction('✋');
            }}
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              isHandRaised
                ? 'bg-[#3b82f6] text-white shadow-lg'
                : 'bg-white/15 hover:bg-white/25 text-white'
            }`}
            title="Raise Hand"
          >
            <span className="material-symbols-outlined text-[20px]">front_hand</span>
          </button>

          {/* Emoji Reactions Tray (Demo) */}
          <div className="flex items-center gap-1 px-2 py-1 bg-white/10 rounded-full">
            <button
              onClick={() => triggerReaction('👏')}
              className="w-9 h-9 rounded-full hover:bg-white/20 flex items-center justify-center text-lg transition-transform hover:scale-125 cursor-pointer"
              title="Clap"
            >
              👏
            </button>
            <button
              onClick={() => triggerReaction('❤️')}
              className="w-9 h-9 rounded-full hover:bg-white/20 flex items-center justify-center text-lg transition-transform hover:scale-125 cursor-pointer"
              title="Love"
            >
              ❤️
            </button>
            <button
              onClick={() => triggerReaction('💡')}
              className="w-9 h-9 rounded-full hover:bg-white/20 flex items-center justify-center text-lg transition-transform hover:scale-125 cursor-pointer"
              title="Great Idea"
            >
              💡
            </button>
            <button
              onClick={() => triggerReaction('🎯')}
              className="w-9 h-9 rounded-full hover:bg-white/20 flex items-center justify-center text-lg transition-transform hover:scale-125 cursor-pointer"
              title="Spot on"
            >
              🎯
            </button>
          </div>

          {/* Leave Call */}
          <Link
            to="/"
            className="px-5 py-2.5 rounded-full bg-[#ef4444] hover:bg-[#dc2626] text-white text-xs font-bold shadow-lg transition-all flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[16px]">call_end</span>
            <span>Leave Call</span>
          </Link>
        </div>

        {/* Right CTA - Standardized Action Name */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={onOpenRsvp}
            className="px-4 py-2 rounded-full bg-[#6ffbbe] text-[#002113] text-xs font-bold shadow hover:bg-[#4edea3] transition-all cursor-pointer"
          >
            Register for the Next Session
          </button>
        </div>
      </div>
    </div>
  );
};
