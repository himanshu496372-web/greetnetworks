import React, { useState } from 'react';
import { NEXT_SESSION } from '../data/mockData';
import { CONFIG, getSessionScheduleText } from '../config';

interface RsvpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToSimulator?: () => void;
}

export const RsvpModal: React.FC<RsvpModalProps> = ({
  isOpen,
  onClose,
  onNavigateToSimulator,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('Beginner');
  const [practiceGoal, setPracticeGoal] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!fullName.trim() || !email.trim()) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbx389_UAltpunCifPcLLAkeWwH9xUyZvEg08ioltzkifa1lmsh9NxEn_hqGKmPPBcQW/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          body: JSON.stringify({
            name: fullName.trim(),
            email: email.trim(),
            experience: experienceLevel,
            focus: practiceGoal.trim(),
            session: NEXT_SESSION ? `${NEXT_SESSION.topic} - ${NEXT_SESSION.date}` : 'Speak to Connect: How Public Speaking Builds Stronger Teams - Sunday, Oct 18',
          }),
        }
      );
      setSubmitted(true);
    } catch {
      setErrorMessage('Failed to submit registration. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setErrorMessage(null);
    setIsSubmitting(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#e5e9e4] p-6 sm:p-8 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          aria-label="Close registration dialog"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#ebefea] text-[#181d1a] hover:bg-[#e5e9e4] flex items-center justify-center transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {submitted ? (
          <div className="flex flex-col items-center text-center gap-4 py-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-2xl bg-[#6ffbbe] text-[#002113] flex items-center justify-center">
              <span className="material-symbols-outlined text-[36px]">check_circle</span>
            </div>

            <h3 id="modal-title" className="font-headline text-2xl font-bold text-[#181d1a]">
              Registration Confirmed!
            </h3>

            <p className="text-sm text-[#59413c] leading-relaxed max-w-xs">
              We've registered <strong className="text-[#181d1a]">{email}</strong> for the next practice session.
            </p>

            <div className="p-3.5 rounded-2xl bg-[#fff8eb] border border-[#fde7bf] text-[12px] text-[#78350f] text-left flex items-start gap-2.5 w-full">
              <span className="material-symbols-outlined text-[18px] text-[#b45309] shrink-0 mt-0.5">mail</span>
              <p className="leading-snug">
                Your Google Meet link is on its way to your email. It can take a minute to arrive. If you don't see it, please check your Spam or Promotions folder, and mark it as &apos;Not spam&apos; so future session updates reach you.
              </p>
            </div>

            {NEXT_SESSION && (
              <div className="p-4 rounded-2xl bg-[#f0f5f0] text-xs text-[#59413c] w-full text-left border border-[#ebefea] flex flex-col gap-1">
                <span className="font-bold text-[#181d1a]">{NEXT_SESSION.topic}</span>
                <span>
                  {NEXT_SESSION.date} · {NEXT_SESSION.startTime} – {NEXT_SESSION.endTime} {NEXT_SESSION.timeZone}
                </span>
                <span>Platform: {NEXT_SESSION.meetingPlatform}</span>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 w-full pt-2">
              {onNavigateToSimulator && (
                <button
                  onClick={() => {
                    resetAndClose();
                    onNavigateToSimulator();
                  }}
                  className="flex-1 py-3 px-4 rounded-full bg-[#ebefea] text-[#181d1a] text-xs font-bold hover:bg-[#e5e9e4] flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px] text-[#a83119]">videocam</span>
                  <span>Preview Live Room</span>
                </button>
              )}
              <button
                onClick={resetAndClose}
                className="flex-1 py-3 px-4 rounded-full bg-[#a83119] text-white text-xs font-bold hover:bg-[#ca492f] cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffdad3] text-[#8a1c05] text-xs font-bold uppercase tracking-wider mb-2">
                <span>Free Community Practice</span>
              </div>
              <h2 id="modal-title" className="font-headline text-2xl sm:text-3xl font-extrabold text-[#181d1a] tracking-tight">
                Register for the Next Session
              </h2>
              <p className="text-xs sm:text-sm text-[#59413c] mt-1 leading-relaxed">
                {getSessionScheduleText()}. No auditions, no fees. Join small breakout rooms with friendly peers.
              </p>
            </div>

            {NEXT_SESSION && (
              <div className="p-3.5 rounded-2xl bg-[#f0f5f0] border border-[#ebefea] text-xs flex flex-col gap-1">
                <span className="font-bold text-[#181d1a] truncate">{NEXT_SESSION.topic}</span>
                <span className="text-[#59413c]">
                  {NEXT_SESSION.date} · {NEXT_SESSION.startTime} {NEXT_SESSION.timeZone} ({NEXT_SESSION.meetingPlatform})
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              <div>
                <label htmlFor="modal-name" className="block text-xs font-bold text-[#181d1a] mb-1">
                  Full Name <span className="text-[#a83119]">*</span>
                </label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#e5e9e4] focus:border-[#a83119] focus:ring-2 focus:ring-[#ffdad3] text-sm text-[#181d1a] outline-none"
                />
              </div>

              <div>
                <label htmlFor="modal-email" className="block text-xs font-bold text-[#181d1a] mb-1">
                  Email Address <span className="text-[#a83119]">*</span>
                </label>
                <input
                  id="modal-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#e5e9e4] focus:border-[#a83119] focus:ring-2 focus:ring-[#ffdad3] text-sm text-[#181d1a] outline-none"
                />
                <p className="text-[11px] text-[#59413c] mt-1">
                  We'll only use this to send session details.
                </p>
              </div>

              <div>
                <label htmlFor="modal-level" className="block text-xs font-bold text-[#181d1a] mb-1">
                  Experience Level
                </label>
                <select
                  id="modal-level"
                  value={experienceLevel}
                  onChange={(e) => setExperienceLevel(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#e5e9e4] focus:border-[#a83119] focus:ring-2 focus:ring-[#ffdad3] text-sm text-[#181d1a] outline-none"
                >
                  <option value="Beginner">First time practicing publicly</option>
                  <option value="Intermediate">Comfortable in small groups, wanting fluency</option>
                  <option value="Experienced">Practicing advanced impromptu frameworks</option>
                </select>
              </div>

              <div>
                <label htmlFor="modal-goal" className="block text-xs font-bold text-[#181d1a] mb-1">
                  Practice Focus (Optional)
                </label>
                <input
                  id="modal-goal"
                  type="text"
                  value={practiceGoal}
                  onChange={(e) => setPracticeGoal(e.target.value)}
                  placeholder="e.g. Pausing without rushing, structuring points"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#e5e9e4] focus:border-[#a83119] focus:ring-2 focus:ring-[#ffdad3] text-sm text-[#181d1a] outline-none"
                />
              </div>

              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-[#ffdad3]/60 border border-[#ffb4a4] text-xs text-[#8a1c05] flex items-center justify-between gap-3 animate-in fade-in">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-[#ba1a1a]">error</span>
                    <span>{errorMessage}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleSubmit()}
                    disabled={isSubmitting}
                    className="text-xs font-bold underline hover:no-underline text-[#a83119] shrink-0 cursor-pointer disabled:opacity-50"
                  >
                    Retry
                  </button>
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-full bg-[#a83119] text-white text-sm font-bold shadow-lg hover:bg-[#ca492f] transition-all hover:-translate-y-0.5 active:translate-y-0 text-center flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Register for the Next Session</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
