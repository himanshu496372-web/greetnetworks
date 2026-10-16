import React from 'react';
import { Link } from 'react-router-dom';
import { ResourceItem } from '../types';
import { PAST_SESSIONS, RESOURCES_LIST } from '../data/mockData';
import { NextSessionCard } from '../components/NextSessionCard';
import { CONFIG, getSessionScheduleText } from '../config';

interface SessionsScreenProps {
  onOpenRsvp: () => void;
  onSelectResource: (resource: ResourceItem) => void;
}

export const SessionsScreen: React.FC<SessionsScreenProps> = ({
  onOpenRsvp,
  onSelectResource
}) => {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO */}
      <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14">
        <div className="flex flex-col gap-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffdad3] text-[#8a1c05] text-xs font-bold uppercase tracking-wider self-start">
            <span className="material-symbols-outlined text-[15px]">calendar_month</span>
            <span>Weekly Practice Schedule</span>
          </div>

          <h1 className="font-headline text-[38px] sm:text-[48px] lg:text-[56px] text-[#181d1a] tracking-tight font-extrabold leading-[1.08]">
            Practice sessions that feel like conversations, not lectures.
          </h1>

          <p className="text-base sm:text-lg text-[#59413c] leading-relaxed">
            {getSessionScheduleText()}. Community members gather online in small groups of 2–3 to test speaking frameworks, role-play conversational scenarios, and exchange kindly delivered feedback.
          </p>

          {/* Recording Policy Statement (Section 3 Item 4) */}
          <div className="p-3 bg-[#f0f5f0] border border-[#e5e9e4] rounded-2xl flex items-center gap-3 text-xs text-[#59413c] mt-2">
            <span className="material-symbols-outlined text-[#a83119] text-[20px] shrink-0">videocam</span>
            <div>
              <strong className="text-[#181d1a]">Recording Statement: </strong>
              {CONFIG.RECORDING_POLICY ? (
                <span>{CONFIG.RECORDING_POLICY}</span>
              ) : (
                <span className="text-[#a83119] font-bold bg-[#ffdad3] px-2 py-0.5 rounded">
                  TODO: Add recording policy here
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Featured Upcoming Session Card (Rendered from NEXT_SESSION via NextSessionCard) */}
        <div className="mt-8">
          <NextSessionCard onOpenRsvp={onOpenRsvp} showPreviewButton={true} />
        </div>
      </section>

      {/* SECTION 2: HOW THE 60 MINUTES FLOW */}
      <section className="w-full bg-[#f0f5f0] py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="text-xs text-[#a83119] font-bold uppercase tracking-wider">Session Format</span>
            <h2 className="font-headline text-3xl font-bold text-[#181d1a] mt-1">
              Structure of a typical 60-minute circle
            </h2>
            <p className="text-sm sm:text-base text-[#59413c] mt-1">
              Designed to minimize passive listening and maximize active peer engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#e5e9e4]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#a83119] bg-[#ffdad3] px-2.5 py-0.5 rounded-full">
                  00:00 – 00:10
                </span>
                <span className="text-xs text-[#59413c]">10 Mins</span>
              </div>
              <h3 className="font-headline text-base font-bold text-[#181d1a] mb-1">Concept Framing</h3>
              <p className="text-xs text-[#59413c]">
                Quick breakdown of the week's focal drill, prompt parameters, and speaking goals.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#e5e9e4]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#855300] bg-[#ffddb8] px-2.5 py-0.5 rounded-full">
                  00:10 – 00:35
                </span>
                <span className="text-xs text-[#59413c]">25 Mins</span>
              </div>
              <h3 className="font-headline text-base font-bold text-[#181d1a] mb-1">Breakout Circles</h3>
              <p className="text-xs text-[#59413c]">
                You split into intimate rooms of 2–3 peers. Everyone takes turns delivering their speaking rep.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#e5e9e4]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#006947] bg-[#6ffbbe] px-2.5 py-0.5 rounded-full">
                  00:35 – 00:50
                </span>
                <span className="text-xs text-[#59413c]">15 Mins</span>
              </div>
              <h3 className="font-headline text-base font-bold text-[#181d1a] mb-1">Peer Feedback</h3>
              <p className="text-xs text-[#59413c]">
                Constructive, kindly worded reflections: what hooked the listener, and 1 micro-pivot to test next time.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#e5e9e4]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#a83119] bg-[#ffb4a4] px-2.5 py-0.5 rounded-full">
                  00:50 – 01:00
                </span>
                <span className="text-xs text-[#59413c]">10 Mins</span>
              </div>
              <h3 className="font-headline text-base font-bold text-[#181d1a] mb-1">Group Debrief</h3>
              <p className="text-xs text-[#59413c]">
                Main room reconvenes. Volunteers share quick takeaways, plus an optional asynchronous home prompt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PAST SESSION ARCHIVE */}
      <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mb-8">
          <span className="text-xs text-[#a83119] font-bold uppercase tracking-wider">Archive</span>
          <h2 className="font-headline text-3xl font-bold text-[#181d1a] mt-1">
            Past Session Highlights & Drill Notes
          </h2>
          <p className="text-sm sm:text-base text-[#59413c] mt-1">
            Missed a session? You can review the notes and drill exercises anytime in our resources library.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PAST_SESSIONS.map((sess) => (
            <div
              key={sess.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e5e9e4] flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="relative aspect-video bg-[#2c322e] overflow-hidden">
                  <img
                    src={sess.image || '/images/breakout-room-quad.jpg'}
                    alt={sess.imageAlt || sess.topic}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#181d1a] text-xs font-semibold">
                    {sess.date}
                  </span>
                </div>
                <div className="p-5 flex flex-col gap-2">
                  <span className="text-xs text-[#a83119] font-bold">{sess.track}</span>
                  <h3 className="font-headline text-lg font-bold text-[#181d1a]">
                    {sess.topic}
                  </h3>
                  <p className="text-xs text-[#59413c] leading-relaxed">
                    {sess.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => onSelectResource(RESOURCES_LIST[0])}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#f0f5f0] hover:bg-[#ebefea] text-[#181d1a] text-xs font-semibold transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px] text-[#a83119]">menu_book</span>
                  <span>View Drill Notes</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL BANNER */}
      <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-[#a83119] text-white rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center gap-4">
          <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-white">
            Ready to test your voice with supportive peers?
          </h2>
          <p className="text-base text-white/90 max-w-xl">
            {getSessionScheduleText()}. You don't need any special preparation—just curiosity and willingness to practice.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenRsvp}
              className="px-8 py-3.5 rounded-full bg-white text-[#a83119] text-sm font-bold shadow-md hover:bg-[#f0f5f0] transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              Register for the Next Session
            </button>
            <Link
              to="/simulator"
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors"
            >
              Launch Live Simulator
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
