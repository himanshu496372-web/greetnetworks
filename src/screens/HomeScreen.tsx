import React from 'react';
import { Link } from 'react-router-dom';
import { ResourceItem } from '../types';
import { PAST_SESSIONS, TESTIMONIALS_DATA } from '../data/mockData';
import { NextSessionCard } from '../components/NextSessionCard';
import { CONFIG, getSessionScheduleText } from '../config';

interface HomeScreenProps {
  onOpenRsvp: () => void;
  onSelectResource?: (resource: ResourceItem) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onOpenRsvp }) => {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start gap-4 z-10">
            {/* Micro Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffddb8] text-[#2a1700]">
              <span className="w-2 h-2 rounded-full bg-[#855300] animate-pulse"></span>
              <span className="text-xs tracking-wide font-bold">Free to join. Learn with people.</span>
            </div>

            {/* Headline */}
            <h1 className="font-headline text-[38px] sm:text-[48px] lg:text-[56px] text-[#181d1a] tracking-tight font-extrabold leading-[1.08]">
              Learn.{' '}
              <span className="text-[#a83119]">
                Practice.
              </span>{' '}
              Connect.
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#59413c] max-w-xl leading-relaxed">
              GreetNetworks is a free learning community where people build practical skills by learning, practising and getting feedback with other people.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <button
                onClick={onOpenRsvp}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#a83119] text-white text-sm font-semibold shadow-md hover:bg-[#ca492f] transition-all hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto cursor-pointer"
              >
                <span>Register for the Next Session</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>

              <Link
                to="/simulator"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#ebefea] text-[#181d1a] text-sm font-semibold hover:bg-[#e5e9e4] transition-all w-full sm:w-auto"
              >
                <span className="material-symbols-outlined text-[18px] text-[#a83119]">videocam</span>
                <span>Experience Live Room</span>
              </Link>
            </div>

            {/* Micro feature note */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-[#59413c] text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#006947] text-[20px]">check_circle</span>
                <span>100% Free · No Membership Dues</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#855300] text-[20px]">groups</span>
                <span>Interactive Peer Practice</span>
              </div>
            </div>
          </div>

          {/* Right Column: Community Live Interaction Mockup (No invented participant names) */}
          <div className="lg:col-span-5 relative w-full">
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#ffb4a4]/40 via-[#ffddb8]/30 to-[#6ffbbe]/30 rounded-3xl blur-xl opacity-70 pointer-events-none"></div>

            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden p-4 sm:p-5 flex flex-col gap-3 border border-[#e5e9e4]">
              {/* Call Header Bar */}
              <div className="flex items-center justify-between pb-3 bg-white border-b border-[#ebefea]">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#6ffbbe] text-[#002113] text-xs font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#006947] animate-ping"></span>
                    LIVE PRACTICE
                  </span>
                  <span className="text-xs text-[#59413c] font-medium">Breakout Room</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ebefea] font-mono text-[#181d1a] text-xs font-medium">
                  <span className="material-symbols-outlined text-[14px] text-[#a83119]">timer</span>
                  <span>Practice Round</span>
                </div>
              </div>

              {/* Active Speaker Spotlight Card */}
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-[#ebefea] group">
                <img
                  className="w-full h-full object-cover"
                  alt="Community member presenting practice drill with headphones"
                  src="/images/speaker-active.jpg"
                />

                {/* Speaker Spotlight Tag - Neutral real role */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm text-xs font-semibold text-[#181d1a]">
                  <span className="material-symbols-outlined text-[#a83119] text-[16px]">mic</span>
                  <span>Active Speaker</span>
                </div>

                {/* Live Reactions */}
                <div className="absolute top-4 right-4 flex flex-col gap-1.5 items-end pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm shadow-md text-xs font-semibold flex items-center gap-1 text-[#181d1a]">
                    💬 <span>Clear pacing!</span>
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#ffddb8] text-[#2a1700] shadow text-xs font-semibold">
                    👏 Great hook
                  </span>
                </div>
              </div>

              {/* Peer Thumbnails */}
              <div className="grid grid-cols-3 gap-2">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-[#e5e9e4]">
                  <img
                    className="w-full h-full object-cover"
                    alt="Peer listening actively during breakout round"
                    src="/images/peer-listening-1.jpg"
                  />
                </div>
                <div className="relative aspect-video rounded-lg overflow-hidden bg-[#e5e9e4]">
                  <img
                    className="w-full h-full object-cover"
                    alt="Peer smiling attentively during group practice"
                    src="/images/peer-listening-2.jpg"
                  />
                </div>
                <div className="relative aspect-video rounded-lg overflow-hidden bg-[#e5e9e4]">
                  <img
                    className="w-full h-full object-cover"
                    alt="Peer giving encouragement gesture in breakout session"
                    src="/images/peer-thumbsup.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: THE LEARNING MODEL */}
      <section className="w-full bg-[#f0f5f0] py-16 lg:py-24" id="model">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          <div className="max-w-2xl flex flex-col gap-2">
            <span className="text-xs text-[#a83119] uppercase tracking-widest font-bold">
              The GreetNetworks Method
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-[#181d1a] font-extrabold tracking-tight">
              A simple format that works.
            </h2>
            <p className="text-base sm:text-lg text-[#59413c]">
              We don't do passive webinars or lengthy slideshows. Every session is designed for active participation and supportive peer reps.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm flex flex-col justify-between gap-6 border border-[#e5e9e4]">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#ffdad3] flex items-center justify-center text-[#a83119] font-bold text-lg">
                  01
                </div>
                <h3 className="font-headline text-xl font-bold text-[#181d1a]">Learn</h3>
                <p className="text-sm text-[#59413c] leading-relaxed">
                  Understand one practical concept, mental model or speaking framework in 10 minutes.
                </p>
              </div>
              <div className="text-xs text-[#a83119] font-semibold flex items-center gap-1">
                <span>No dry lectures</span>
                <span className="material-symbols-outlined text-[14px]">check</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm flex flex-col justify-between gap-6 border border-[#e5e9e4]">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#ffddb8] flex items-center justify-center text-[#855300] font-bold text-lg">
                  02
                </div>
                <h3 className="font-headline text-xl font-bold text-[#181d1a]">Practice</h3>
                <p className="text-sm text-[#59413c] leading-relaxed">
                  Try it out immediately in small, friendly breakout circles of 2 to 3 peers.
                </p>
              </div>
              <div className="text-xs text-[#855300] font-semibold flex items-center gap-1">
                <span>Safe space to stumble</span>
                <span className="material-symbols-outlined text-[14px]">check</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm flex flex-col justify-between gap-6 border border-[#e5e9e4]">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#6ffbbe] flex items-center justify-center text-[#006947] font-bold text-lg">
                  03
                </div>
                <h3 className="font-headline text-xl font-bold text-[#181d1a]">Get Feedback</h3>
                <p className="text-sm text-[#59413c] leading-relaxed">
                  Hear kindly delivered, specific observations on what worked and what you could test next.
                </p>
              </div>
              <div className="text-xs text-[#006947] font-semibold flex items-center gap-1">
                <span>Actionable observations</span>
                <span className="material-symbols-outlined text-[14px]">check</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm flex flex-col justify-between gap-6 border border-[#e5e9e4]">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#ffb4a4] flex items-center justify-center text-[#8a1c05] font-bold text-lg">
                  04
                </div>
                <h3 className="font-headline text-xl font-bold text-[#181d1a]">Improve</h3>
                <p className="text-sm text-[#59413c] leading-relaxed">
                  Build muscle memory week after week until hesitation turns into calm composure.
                </p>
              </div>
              <div className="text-xs text-[#8a1c05] font-semibold flex items-center gap-1">
                <span>Real-world confidence</span>
                <span className="material-symbols-outlined text-[14px]">check</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: NEXT UPCOMING SESSION (Rendered ONCE from NEXT_SESSION, duplicate card removed) */}
      <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20" id="next-session">
        <NextSessionCard onOpenRsvp={onOpenRsvp} showPreviewButton={true} />
      </section>

      {/* SECTION: WHAT CAN YOU PRACTICE? (Skills) */}
      <section className="w-full bg-[#f0f5f0] py-16 lg:py-24" id="tracks">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
          <div className="max-w-2xl flex flex-col gap-2">
            <span className="text-xs text-[#855300] uppercase tracking-widest font-bold">
              Practical Skills
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-[#181d1a] font-extrabold tracking-tight">
              What can you practice?
            </h2>
            <p className="text-base sm:text-lg text-[#59413c]">
              We currently focus on practical skills that help you communicate, connect and participate more confidently in real situations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Track 1: Public Speaking */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between gap-6 hover:shadow-md transition-shadow border border-[#e5e9e4]">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffdad3] text-[#a83119] text-xs font-bold">
                    <span className="material-symbols-outlined text-[15px]">mic</span>
                    Active Track
                  </span>
                  <span className="w-9 h-9 rounded-full bg-[#ebefea] flex items-center justify-center text-[#a83119]">
                    <span className="material-symbols-outlined text-[20px]">campaign</span>
                  </span>
                </div>
                <div>
                  <h3 className="font-headline text-2xl font-bold text-[#181d1a]">Public Speaking</h3>
                  <p className="text-sm text-[#59413c] mt-2 leading-relaxed">
                    Overcome stage hesitation, structure thoughts under pressure, and speak spontaneously with calm presence.
                  </p>
                </div>

                <div className="p-4 bg-[#f0f5f0] rounded-2xl flex flex-col gap-2 text-xs">
                  <span className="font-bold text-[#181d1a]">Recent Drills:</span>
                  <ul className="flex flex-col gap-1.5 text-[#59413c]">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#a83119]"></span>
                      <span>Speaking on the spot for 90 seconds</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#a83119]"></span>
                      <span>Past-Present-Future structure under pressure</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#a83119]"></span>
                      <span>Breathing through deliberate micro-pauses</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#ebefea]">
                <span className="text-xs text-[#59413c]">100% Free Peer Circles</span>
                <Link
                  to="/sessions"
                  className="text-xs font-bold text-[#a83119] hover:underline flex items-center gap-1"
                >
                  <span>View Speaking Sessions</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Track 2: Networking & Conversations */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between gap-6 hover:shadow-md transition-shadow border border-[#e5e9e4]">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffddb8] text-[#855300] text-xs font-bold">
                    <span className="material-symbols-outlined text-[15px]">forum</span>
                    Active Track
                  </span>
                  <span className="w-9 h-9 rounded-full bg-[#ebefea] flex items-center justify-center text-[#855300]">
                    <span className="material-symbols-outlined text-[20px]">handshake</span>
                  </span>
                </div>
                <div>
                  <h3 className="font-headline text-2xl font-bold text-[#181d1a]">Networking & Conversation</h3>
                  <p className="text-sm text-[#59413c] mt-2 leading-relaxed">
                    Break the ice comfortably, listen with genuine curiosity, and make memorable human connections without feeling awkward.
                  </p>
                </div>

                <div className="p-4 bg-[#f0f5f0] rounded-2xl flex flex-col gap-2 text-xs">
                  <span className="font-bold text-[#181d1a]">Recent Drills:</span>
                  <ul className="flex flex-col gap-1.5 text-[#59413c]">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#855300]"></span>
                      <span>The Curious Listener 90-Second Challenge</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#855300]"></span>
                      <span>Introductions using context instead of resumes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#855300]"></span>
                      <span>Graceful conversation exits and follow-ups</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#ebefea]">
                <span className="text-xs text-[#59413c]">Small Breakout Pods</span>
                <Link
                  to="/sessions"
                  className="text-xs font-bold text-[#855300] hover:underline flex items-center gap-1"
                >
                  <span>View Networking Sessions</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: PAST SESSIONS (Clean from PAST_SESSIONS array, no bracketed placeholders) */}
      <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#a83119] font-bold">Past Drills</span>
              <h2 className="font-headline text-3xl font-extrabold text-[#181d1a] tracking-tight mt-1">
                Recent Session Archive
              </h2>
              <p className="text-sm text-[#59413c] mt-1">
                Explore topics and practice drills previously tackled in community circles.
              </p>
            </div>
            <Link
              to="/sessions"
              className="text-xs font-bold text-[#a83119] hover:underline flex items-center gap-1"
            >
              <span>See All Sessions</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
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
                  <div className="p-3 bg-[#f0f5f0] rounded-xl text-[11px] text-[#59413c]">
                    <strong className="text-[#181d1a]">Drill:</strong> {sess.drillSnapshot}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: COMMUNITY REFLECTIONS & TESTIMONIALS */}
      {/* Kept only if provided in CONFIG.TESTIMONIALS per Section 3 item 2 */}
      <section className="w-full bg-[#f0f5f0] py-16 lg:py-24" id="testimonials">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
          <div className="max-w-2xl flex flex-col gap-2">
            <span className="text-xs text-[#855300] uppercase tracking-widest font-bold">
              Community Reflections
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-[#181d1a] font-extrabold tracking-tight">
              Honest peer observations.
            </h2>
            <p className="text-base sm:text-lg text-[#59413c]">
              We encourage all participants to reflect on their confidence and vocal pacing after each practice round.
            </p>
          </div>

          {TESTIMONIALS_DATA && TESTIMONIALS_DATA.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TESTIMONIALS_DATA.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-[#e5e9e4] flex flex-col justify-between gap-4"
                >
                  <p className="font-headline text-lg text-[#181d1a] font-medium leading-relaxed">
                    "{t.quote}"
                  </p>
                  <div className="pt-2 border-t border-[#ebefea] text-xs">
                    <p className="font-bold text-[#181d1a]">{t.author}</p>
                    <p className="text-[#59413c]">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-[#e5e9e4] flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex flex-col gap-2 max-w-xl">
                <h3 className="font-headline text-xl font-bold text-[#181d1a]">
                  Member Feedback & Experience
                </h3>
                <p className="text-sm text-[#59413c] leading-relaxed">
                  Attended a GreetNetworks speaking or networking session? We would love to hear your thoughts. Member reflections are gathered post-session and published with permission.
                </p>
              </div>
              <a
                href={`mailto:${CONFIG.CONTACT_EMAIL}`}
                className="px-6 py-3 rounded-full bg-[#ebefea] text-[#181d1a] hover:bg-[#e5e9e4] text-xs font-bold whitespace-nowrap transition-colors"
              >
                Share Feedback
              </a>
            </div>
          )}
        </div>
      </section>

      {/* SECTION: FINAL CTA */}
      <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="bg-[#a83119] text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-xl text-center flex flex-col items-center gap-6">
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#ca492f] rounded-full blur-3xl opacity-60 pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#fea619] rounded-full blur-3xl opacity-30 pointer-events-none"></div>
          <div className="relative z-10 max-w-2xl flex flex-col gap-4">
            <span className="text-xs uppercase tracking-widest text-[#ffdad3] font-bold">
              Free Practice · No Pressure
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Come to a session. See what happens.
            </h2>
            <p className="text-base sm:text-lg text-[#ffdad3] leading-relaxed">
              You don't have to commit to anything. Join an upcoming session, practise with other people and see if GreetNetworks is right for you.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={onOpenRsvp}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#a83119] text-sm font-bold shadow-md hover:bg-[#f0f5f0] transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Register for the Next Session</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
              <a
                href={`mailto:${CONFIG.CONTACT_EMAIL}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#ca492f] text-white text-sm font-semibold hover:bg-[#8a1c05] transition-colors"
              >
                <span>Contact Us</span>
              </a>
            </div>
            <p className="text-xs text-[#ffdad3] pt-2">
              {getSessionScheduleText()}.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
