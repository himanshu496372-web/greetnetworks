import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NEXT_SESSION } from '../data/mockData';
import { CONFIG, getSessionScheduleText } from '../config';

export const RegisterScreen: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('Beginner');
  const [practiceGoal, setPracticeGoal] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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

  return (
    <div className="w-full max-w-[800px] mx-auto px-4 sm:px-6 py-12">
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-[#e5e9e4]">
        {submitted ? (
          <div className="flex flex-col items-center text-center gap-4 py-8 animate-in fade-in duration-200">
            <div className="w-16 h-16 rounded-2xl bg-[#6ffbbe] text-[#002113] flex items-center justify-center">
              <span className="material-symbols-outlined text-[36px]">check_circle</span>
            </div>

            <h1 className="font-headline text-2xl sm:text-3xl font-extrabold text-[#181d1a]">
              Registration Confirmed!
            </h1>

            <p className="text-sm text-[#59413c] max-w-md leading-relaxed">
              Thank you, <strong className="text-[#181d1a]">{fullName}</strong>. We have registered{' '}
              <strong className="text-[#181d1a]">{email}</strong> for the upcoming session.
            </p>

            <div className="p-3.5 bg-[#fff8eb] border border-[#fde7bf] rounded-2xl text-[12px] text-[#78350f] max-w-md w-full text-left flex items-start gap-2.5 my-1">
              <span className="material-symbols-outlined text-[18px] text-[#b45309] shrink-0 mt-0.5">mail</span>
              <p className="leading-snug">
                Your Google Meet link is on its way to your email. It can take a minute to arrive. If you don't see it, please check your Spam or Promotions folder, and mark it as &apos;Not spam&apos; so future session updates reach you.
              </p>
            </div>

            {NEXT_SESSION && (
              <div className="p-4 bg-[#f0f5f0] rounded-2xl text-xs text-[#59413c] max-w-md w-full text-left border border-[#ebefea] flex flex-col gap-1.5 my-2">
                <span className="font-bold text-[#181d1a]">{NEXT_SESSION.topic}</span>
                <span>
                  {NEXT_SESSION.date} · {NEXT_SESSION.startTime} – {NEXT_SESSION.endTime} {NEXT_SESSION.timeZone}
                </span>
                <span>Platform: {NEXT_SESSION.meetingPlatform}</span>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <Link
                to="/sessions"
                className="px-6 py-2.5 rounded-full bg-[#a83119] text-white text-xs font-semibold hover:bg-[#ca492f]"
              >
                View Session Details
              </Link>
              <Link
                to="/"
                className="px-6 py-2.5 rounded-full bg-[#ebefea] text-[#181d1a] text-xs font-semibold hover:bg-[#e5e9e4]"
              >
                Back to Home
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffdad3] text-[#8a1c05] text-xs font-bold uppercase tracking-wider mb-2">
                <span>Free Practice Registration</span>
              </div>
              <h1 className="font-headline text-3xl sm:text-4xl font-extrabold text-[#181d1a] tracking-tight">
                Register for the Next Session
              </h1>
              <p className="text-sm text-[#59413c] mt-1 leading-relaxed">
                {getSessionScheduleText()}. No auditions, no fees, and no prerequisites. Everyone is welcome to practice in supportive small peer rooms.
              </p>
            </div>

            {NEXT_SESSION && (
              <div className="p-4 bg-[#f0f5f0] rounded-2xl border border-[#ebefea] flex flex-col gap-1 text-xs">
                <span className="font-bold uppercase tracking-wider text-[#a83119]">Upcoming Focus</span>
                <span className="font-bold text-sm text-[#181d1a]">{NEXT_SESSION.topic}</span>
                <span className="text-[#59413c]">
                  {NEXT_SESSION.date} at {NEXT_SESSION.startTime} {NEXT_SESSION.timeZone} via {NEXT_SESSION.meetingPlatform}
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="reg-name" className="block text-xs font-bold text-[#181d1a] mb-1.5">
                  Full Name <span className="text-[#a83119]">*</span>
                </label>
                <input
                  id="reg-name"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl border border-[#e5e9e4] focus:border-[#a83119] focus:ring-2 focus:ring-[#ffdad3] text-sm text-[#181d1a] bg-white outline-none"
                />
              </div>

              <div>
                <label htmlFor="reg-email" className="block text-xs font-bold text-[#181d1a] mb-1.5">
                  Email Address <span className="text-[#a83119]">*</span>
                </label>
                <input
                  id="reg-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-[#e5e9e4] focus:border-[#a83119] focus:ring-2 focus:ring-[#ffdad3] text-sm text-[#181d1a] bg-white outline-none"
                />
                <p className="text-[11px] text-[#59413c] mt-1">
                  We'll only use this to send session details.
                </p>
              </div>

              <div>
                <label htmlFor="reg-experience" className="block text-xs font-bold text-[#181d1a] mb-1.5">
                  Experience Level
                </label>
                <select
                  id="reg-experience"
                  value={experienceLevel}
                  onChange={(e) => setExperienceLevel(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#e5e9e4] focus:border-[#a83119] focus:ring-2 focus:ring-[#ffdad3] text-sm text-[#181d1a] bg-white outline-none"
                >
                  <option value="Beginner">First time practicing publicly</option>
                  <option value="Intermediate">Comfortable in small groups, wanting fluency</option>
                  <option value="Experienced">Practicing advanced impromptu frameworks</option>
                </select>
              </div>

              <div>
                <label htmlFor="reg-focus" className="block text-xs font-bold text-[#181d1a] mb-1.5">
                  Practice Focus (Optional)
                </label>
                <input
                  id="reg-focus"
                  type="text"
                  value={practiceGoal}
                  onChange={(e) => setPracticeGoal(e.target.value)}
                  placeholder="e.g. Pausing without rushing, structuring points"
                  className="w-full px-4 py-3 rounded-xl border border-[#e5e9e4] focus:border-[#a83119] focus:ring-2 focus:ring-[#ffdad3] text-sm text-[#181d1a] bg-white outline-none"
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
                  className="w-full py-4 px-6 rounded-full bg-[#a83119] text-white text-sm font-bold shadow-lg hover:bg-[#ca492f] transition-all hover:-translate-y-0.5 active:translate-y-0 text-center flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
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

              <p className="text-center text-[11px] text-[#59413c]">
                100% Free · No spam · You can leave anytime
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
