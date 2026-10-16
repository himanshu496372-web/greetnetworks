import React from 'react';
import { Link } from 'react-router-dom';
import { NEXT_SESSION } from '../data/mockData';
import { CONFIG, getSessionScheduleText } from '../config';

interface NextSessionCardProps {
  onOpenRsvp?: () => void;
  showPreviewButton?: boolean;
}

export const NextSessionCard: React.FC<NextSessionCardProps> = ({
  onOpenRsvp,
  showPreviewButton = true,
}) => {
  // If NEXT_SESSION is empty or not provided, render the friendly fallback
  if (!NEXT_SESSION || !NEXT_SESSION.topic) {
    return (
      <div className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-lg overflow-hidden border border-[#e5e9e4] text-center flex flex-col items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-[#ffdad3] flex items-center justify-center text-[#a83119]">
          <span className="material-symbols-outlined text-[28px]">calendar_today</span>
        </div>
        <div className="max-w-lg flex flex-col gap-2">
          <h3 className="font-headline text-2xl font-bold text-[#181d1a]">
            Next date coming soon. Contact us to get notified.
          </h3>
          <p className="text-sm text-[#59413c] leading-relaxed">
            {getSessionScheduleText()}. Send us a message and we'll notify you as soon as registrations open for the next circle.
          </p>
        </div>
        <div className="pt-2">
          <a
            href={`mailto:${CONFIG.CONTACT_EMAIL}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#a83119] text-white text-sm font-semibold hover:bg-[#ca492f] transition-all shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">mail</span>
            <span>Contact us to get notified</span>
          </a>
        </div>
      </div>
    );
  }

  const { track, topic, summary, date, startTime, endTime, timeZone, meetingPlatform } = NEXT_SESSION;

  return (
    <div className="relative bg-white rounded-3xl p-6 sm:p-10 shadow-lg overflow-hidden border border-[#e5e9e4]">
      <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#ffb4a4]/30 rounded-full blur-2xl pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left Column: Details */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6ffbbe] text-[#002113] text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-[#006947] animate-pulse"></span>
              Live Online Practice
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#ebefea] text-xs text-[#59413c]">
              <span className="material-symbols-outlined text-[15px]">videocam</span>
              {meetingPlatform}
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#ffdad3] text-xs font-bold text-[#a83119]">
              {track}
            </span>
          </div>

          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-[#181d1a] font-extrabold tracking-tight">
            {topic}
          </h2>

          <p className="text-sm sm:text-base text-[#59413c] leading-relaxed">
            {summary}
          </p>

          {/* Date, Time & Cost Meta Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-[#f0f5f0] border border-[#ebefea] flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#ffddb8] flex items-center justify-center text-[#855300] shrink-0">
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
              </div>
              <div>
                <p className="text-[11px] text-[#59413c] uppercase font-semibold">Date</p>
                <p className="text-sm font-bold text-[#181d1a]">{date}</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#f0f5f0] border border-[#ebefea] flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#ffdad3] flex items-center justify-center text-[#a83119] shrink-0">
                <span className="material-symbols-outlined text-[18px]">schedule</span>
              </div>
              <div>
                <p className="text-[11px] text-[#59413c] uppercase font-semibold">Time</p>
                <p className="text-sm font-bold text-[#181d1a]">
                  {startTime} – {endTime} {timeZone}
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#f0f5f0] border border-[#ebefea] flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#6ffbbe] flex items-center justify-center text-[#006947] shrink-0">
                <span className="material-symbols-outlined text-[18px]">check_circle</span>
              </div>
              <div>
                <p className="text-[11px] text-[#59413c] uppercase font-semibold">Cost</p>
                <p className="text-sm font-bold text-[#006947]">100% Free · No Dues</p>
              </div>
            </div>
          </div>

          <p className="text-xs text-[#59413c] pt-1 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#855300] text-[18px]">info</span>
            <span>{getSessionScheduleText()}.</span>
          </p>
        </div>

        {/* Right Column: Single Action Pod */}
        <div className="lg:col-span-4 flex flex-col items-stretch gap-3.5 p-6 bg-[#ebefea] rounded-2xl border border-[#e5e9e4]">
          <div className="text-center pb-1">
            <span className="text-xs uppercase tracking-wide text-[#59413c] font-bold">Session Access</span>
            <p className="font-headline text-3xl font-extrabold text-[#181d1a]">
              Free <span className="text-sm font-normal text-[#59413c]">/ Community</span>
            </p>
          </div>

          {onOpenRsvp ? (
            <button
              onClick={onOpenRsvp}
              className="w-full py-4 px-6 rounded-full bg-[#a83119] text-white text-sm font-bold shadow-lg hover:bg-[#ca492f] transition-all hover:-translate-y-0.5 active:translate-y-0 text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Register for the Next Session</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          ) : (
            <Link
              to="/register"
              className="w-full py-4 px-6 rounded-full bg-[#a83119] text-white text-sm font-bold shadow-lg hover:bg-[#ca492f] transition-all hover:-translate-y-0.5 active:translate-y-0 text-center flex items-center justify-center gap-2"
            >
              <span>Register for the Next Session</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          )}

          {showPreviewButton && (
            <Link
              to="/simulator"
              className="w-full py-3 px-6 rounded-full bg-white text-[#181d1a] text-xs font-bold text-center hover:bg-[#f0f5f0] transition-colors border border-[#e5e9e4] flex items-center justify-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px] text-[#a83119]">videocam</span>
              <span>Preview Live Room</span>
            </Link>
          )}

          <div className="p-3 rounded-xl bg-[#f0f5f0] text-[#59413c] text-xs text-center leading-normal">
            <span className="font-bold text-[#181d1a]">No membership required.</span> All learners and speakers welcome.
          </div>
        </div>
      </div>
    </div>
  );
};
