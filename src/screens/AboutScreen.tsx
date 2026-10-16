import React from 'react';
import { Link } from 'react-router-dom';
import { CONFIG, getSessionScheduleText } from '../config';

interface AboutScreenProps {
  onOpenRsvp: () => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onOpenRsvp }) => {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO */}
      <section className="relative w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffdad3] text-[#8a1c05]">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span className="text-xs font-bold tracking-wide">100% Free Learning Community</span>
            </div>

            <h1 className="font-headline text-[38px] sm:text-[48px] lg:text-[56px] text-[#181d1a] tracking-tight font-extrabold leading-[1.08]">
              A place to learn, practise, and grow with people.
            </h1>

            <p className="text-base sm:text-lg text-[#59413c] max-w-xl leading-relaxed">
              GreetNetworks is a free learning community where people build practical skills together. We focus on doing, not just listening—because learning becomes more useful when you put it into practice with others.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/sessions"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#a83119] text-white text-sm font-semibold shadow-md hover:bg-[#ca492f] transition-all hover:-translate-y-0.5"
              >
                <span>View Practice Sessions</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
              <button
                onClick={onOpenRsvp}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#ebefea] text-[#181d1a] text-sm font-semibold hover:bg-[#e5e9e4] transition-colors cursor-pointer"
              >
                <span>Register for the Next Session</span>
              </button>
            </div>

            {/* Reassurance items */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2 text-[#59413c] text-xs sm:text-sm">
              <span className="inline-flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#006947] text-[18px]">check_circle</span>
                No membership fees
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#006947] text-[18px]">check_circle</span>
                Live with real peers
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#006947] text-[18px]">check_circle</span>
                Safe, supportive practice
              </span>
            </div>
          </div>

          {/* Right Visual Column: Video Call Breakout Interface (Neutral roles, no fake names) */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative bg-[#2c322e] rounded-2xl p-3 shadow-xl overflow-hidden">
              {/* Top bar mimic */}
              <div className="flex items-center justify-between pb-2.5 px-2 text-[#edf2ed]/80 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ba1a1a] animate-pulse"></span>
                  <span>Active Practice Room • Small Group Practice</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-white/15 text-white text-[11px]">Breakout View</span>
              </div>

              {/* Video Collage Grid */}
              <div className="grid grid-cols-2 gap-2">
                <div className="relative rounded-xl overflow-hidden bg-[#e5e9e4] aspect-[4/3] group">
                  <img
                    alt="Peer presenting during speaking practice round"
                    className="w-full h-full object-cover"
                    src="/images/peer-speaking-headset.jpg"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/75 backdrop-blur-md px-2 py-0.5 rounded text-white text-[11px] flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-[#6ffbbe]">mic</span>
                    <span>Active Speaker</span>
                  </div>
                </div>

                <div className="relative rounded-xl overflow-hidden bg-[#ebefea] aspect-[4/3]">
                  <img
                    className="w-full h-full object-cover"
                    alt="Peer listening attentively during group exercise"
                    src="/images/peer-smiling-sweater.jpg"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/75 backdrop-blur-md px-2 py-0.5 rounded text-white text-[11px]">
                    <span>Peer Listener</span>
                  </div>
                </div>

                <div className="relative rounded-xl overflow-hidden bg-[#ebefea] aspect-[4/3]">
                  <img
                    className="w-full h-full object-cover"
                    alt="Community member engaged in conversation drill"
                    src="/images/peer-attentive-listener.jpg"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/75 backdrop-blur-md px-2 py-0.5 rounded text-white text-[11px]">
                    <span>Peer Listener</span>
                  </div>
                </div>

                <div className="relative rounded-xl overflow-hidden bg-[#ebefea] aspect-[4/3]">
                  <img
                    className="w-full h-full object-cover"
                    alt="Peer participating in online breakout circle"
                    src="/images/peer-participant-headscarf.jpg"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/75 backdrop-blur-md px-2 py-0.5 rounded text-white text-[11px]">
                    <span>Peer Listener</span>
                  </div>
                </div>
              </div>

              {/* Floating Prompt Toast */}
              <div className="mt-2.5 bg-white/10 backdrop-blur-md rounded-xl p-2.5 flex items-center justify-between text-white text-xs">
                <div className="flex items-center gap-2 truncate">
                  <span className="material-symbols-outlined text-[#ffddb8] text-[18px]">psychology</span>
                  <span className="truncate">"Tell a 90-second story without rushing"</span>
                </div>
                <span className="text-[11px] font-mono text-[#ffdad3] shrink-0 ml-2">Round 2</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY GREETNETWORKS EXISTS */}
      <section className="w-full bg-[#f0f5f0] py-16 lg:py-24" id="why-we-exist">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="text-xs uppercase tracking-widest text-[#a83119] font-bold">
                The Problem We Tackle
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl text-[#181d1a] font-extrabold tracking-tight">
                Knowledge without practice doesn't create confidence.
              </h2>
              <p className="text-base text-[#59413c] leading-relaxed">
                Most people know what good communication looks like. They read books, watch videos, and take notes. But when it's time to speak up in a meeting or introduce themselves to strangers, hesitation kicks in.
              </p>
              <p className="text-base text-[#59413c] leading-relaxed">
                That's because confidence isn't built through theory alone. It requires regular, zero-stakes rehearsal with friendly human beings who encourage you to try.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e5e9e4] flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#ffdad3] text-[#a83119] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">record_voice_over</span>
                </div>
                <h3 className="font-headline text-lg font-bold text-[#181d1a]">Low-Stakes Environment</h3>
                <p className="text-xs text-[#59413c] leading-relaxed">
                  Stumble freely. Forget your train of thought. Our breakout rooms are explicitly designed for safe trial and error.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e5e9e4] flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#ffddb8] text-[#855300] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">group</span>
                </div>
                <h3 className="font-headline text-lg font-bold text-[#181d1a]">Tiny Breakout Pods</h3>
                <p className="text-xs text-[#59413c] leading-relaxed">
                  Never get lost in a crowd of 50 people. Every participant gets dedicated microphone time in groups of 2 to 3.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e5e9e4] flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#6ffbbe] text-[#006947] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">thumb_up</span>
                </div>
                <h3 className="font-headline text-lg font-bold text-[#181d1a]">Kindly Delivered Feedback</h3>
                <p className="text-xs text-[#59413c] leading-relaxed">
                  Clear, constructive observations from peers focused on highlighting your natural strengths and practical adjustments.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e5e9e4] flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#ebefea] text-[#181d1a] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">payments</span>
                </div>
                <h3 className="font-headline text-lg font-bold text-[#181d1a]">Always 100% Free</h3>
                <p className="text-xs text-[#59413c] leading-relaxed">
                  No hidden tiers, no paywalls, no upsells. A community operated for the genuine joy of learning together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SKILL TRACKS */}
      <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col gap-10">
          <div className="max-w-2xl flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest text-[#a83119] font-bold">
              What We Practice
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-[#181d1a] font-extrabold tracking-tight">
              Focus tracks for real-world confidence.
            </h2>
            <p className="text-base text-[#59413c]">
              Two dedicated pathways designed to build immediate social and communicative ease.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Track 01 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between border border-[#e5e9e4]">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#ffdad3] text-[#8a1c05] text-xs font-bold uppercase">
                    Skill Track 01
                  </span>
                  <span className="material-symbols-outlined text-[#a83119] text-[28px]">campaign</span>
                </div>
                <div>
                  <h3 className="font-headline text-2xl font-bold text-[#181d1a]">Public Speaking</h3>
                  <p className="text-sm text-[#59413c] mt-2 leading-relaxed">
                    Practise expressing yourself clearly, organizing thoughts quickly, speaking with presence, and managing the initial nervousness that comes with speaking up.
                  </p>
                </div>

                {/* Practical session context snapshot */}
                <div className="rounded-2xl overflow-hidden bg-[#f0f5f0] p-4 flex items-center gap-4">
                  <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-[#d7dbd6]">
                    <img
                      alt="Participant practicing impromptu speaking"
                      className="w-full h-full object-cover"
                      src="/images/peer-speaking-headset.jpg"
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs text-[#a83119] font-bold uppercase">Real Drill Snapshot</span>
                    <p className="text-sm font-semibold text-[#181d1a] truncate">The 2-Minute Random Object Pitch</p>
                    <span className="text-xs text-[#59413c]">Focus: Structure under pressure & eye contact</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 pt-2">
                  <span className="text-xs font-semibold text-[#181d1a]">Active Practice Areas:</span>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-3 py-1.5 rounded-full bg-[#ebefea] text-[#181d1a]">Introductions</span>
                    <span className="px-3 py-1.5 rounded-full bg-[#ebefea] text-[#181d1a]">Impromptu & random-topic speaking</span>
                    <span className="px-3 py-1.5 rounded-full bg-[#ebefea] text-[#181d1a]">Storytelling & presentations</span>
                    <span className="px-3 py-1.5 rounded-full bg-[#ebefea] text-[#181d1a]">Group discussions & role-play</span>
                    <span className="px-3 py-1.5 rounded-full bg-[#ebefea] text-[#181d1a]">Giving & receiving feedback</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Track 02 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between border border-[#e5e9e4]">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#ffddb8] text-[#653e00] text-xs font-bold uppercase">
                    Skill Track 02
                  </span>
                  <span className="material-symbols-outlined text-[#855300] text-[28px]">forum</span>
                </div>
                <div>
                  <h3 className="font-headline text-2xl font-bold text-[#181d1a]">Networking</h3>
                  <p className="text-sm text-[#59413c] mt-2 leading-relaxed">
                    Learn how to start conversations, find common ground, listen, and build comfortable, genuine connections with people.
                  </p>
                </div>

                {/* Practical session context snapshot */}
                <div className="rounded-2xl overflow-hidden bg-[#f0f5f0] p-4 flex items-center gap-4">
                  <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-[#d7dbd6]">
                    <img
                      className="w-full h-full object-cover"
                      alt="Two peers discussing ideas during networking exercise"
                      src="/images/peers-conversation-pair.jpg"
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs text-[#855300] font-bold uppercase">Real Drill Snapshot</span>
                    <p className="text-sm font-semibold text-[#181d1a] truncate">The Curious Listener Challenge</p>
                    <span className="text-xs text-[#59413c]">Focus: Reflective questions & authentic rapport</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 pt-2">
                  <span className="text-xs font-semibold text-[#181d1a]">Active Practice Areas:</span>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-3 py-1.5 rounded-full bg-[#ebefea] text-[#181d1a]">Icebreakers</span>
                    <span className="px-3 py-1.5 rounded-full bg-[#ebefea] text-[#181d1a]">Active listening drills</span>
                    <span className="px-3 py-1.5 rounded-full bg-[#ebefea] text-[#181d1a]">Curiosity-driven questioning</span>
                    <span className="px-3 py-1.5 rounded-full bg-[#ebefea] text-[#181d1a]">Conversational agility</span>
                    <span className="px-3 py-1.5 rounded-full bg-[#ebefea] text-[#181d1a]">Graceful conversation exits</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE 60-MINUTE SESSION FORMAT */}
      <section className="w-full bg-[#f0f5f0] py-16 lg:py-24" id="how-we-learn">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
          <div className="max-w-2xl flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest text-[#a83119] font-bold">
              What Happens In A Session
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-[#181d1a] font-extrabold tracking-tight">
              A 60-minute session, broken into four focused steps.
            </h2>
            <p className="text-base text-[#59413c]">
              {getSessionScheduleText()}. Here is what you can expect when you join.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e5e9e4] flex flex-col gap-3">
              <span className="text-xs font-bold text-[#a83119] bg-[#ffdad3] px-2.5 py-1 rounded-full w-fit">
                Step 01 · 10 Mins
              </span>
              <h3 className="font-headline text-lg font-bold text-[#181d1a]">Concept Framing</h3>
              <p className="text-xs text-[#59413c] leading-relaxed">
                A community host introduces one clear, bite-sized communication idea or exercise prompt.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e5e9e4] flex flex-col gap-3">
              <span className="text-xs font-bold text-[#855300] bg-[#ffddb8] px-2.5 py-1 rounded-full w-fit">
                Step 02 · 25 Mins
              </span>
              <h3 className="font-headline text-lg font-bold text-[#181d1a]">Breakout Practice</h3>
              <p className="text-xs text-[#59413c] leading-relaxed">
                Participants split into small rooms of 2–3. Everyone takes turns trying the drill in a relaxed setting.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e5e9e4] flex flex-col gap-3">
              <span className="text-xs font-bold text-[#006947] bg-[#6ffbbe] px-2.5 py-1 rounded-full w-fit">
                Step 03 · 15 Mins
              </span>
              <h3 className="font-headline text-lg font-bold text-[#181d1a]">Kindly Observations</h3>
              <p className="text-xs text-[#59413c] leading-relaxed">
                Peers offer positive, specific feedback on what resonated and what you might experiment with next.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e5e9e4] flex flex-col gap-3">
              <span className="text-xs font-bold text-[#8a1c05] bg-[#ffb4a4] px-2.5 py-1 rounded-full w-fit">
                Step 04 · 10 Mins
              </span>
              <h3 className="font-headline text-lg font-bold text-[#181d1a]">Group Debrief</h3>
              <p className="text-xs text-[#59413c] leading-relaxed">
                We return to the main room to share takeaways, reflect on what felt natural, and celebrate progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: COMMUNITY CULTURE */}
      <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <span className="text-xs uppercase tracking-widest text-[#a83119] font-bold">
              Our Principles
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-[#181d1a] font-extrabold tracking-tight">
              A community where everyone is rooting for you.
            </h2>
            <p className="text-base text-[#59413c] leading-relaxed">
              We know that speaking up in front of strangers can feel intimidating. That's why GreetNetworks is deliberately designed to feel encouraging and warm from the very first minute.
            </p>

            <div className="flex flex-col gap-3 pt-2 text-sm text-[#59413c]">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#006947] text-[20px] shrink-0 mt-0.5">check_circle</span>
                <p><strong className="text-[#181d1a]">Mistakes are celebrated:</strong> No one is judging perfection; we cheer the courage to speak up.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#006947] text-[20px] shrink-0 mt-0.5">check_circle</span>
                <p><strong className="text-[#181d1a]">Equal voice:</strong> Breakout rooms ensure everyone gets dedicated speaking time, not just the extroverts.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#006947] text-[20px] shrink-0 mt-0.5">check_circle</span>
                <p><strong className="text-[#181d1a]">Zero pressure:</strong> If you feel overwhelmed, you can pause or listen anytime without judgment.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-[#ebefea] border border-[#e5e9e4]">
              <img
                alt="GreetNetworks community call group during online session"
                className="w-full h-full object-cover"
                src="/images/community-group-frame.jpg"
              />
            </div>
            <div className="mt-3 bg-[#f0f5f0] text-[#181d1a] p-3.5 rounded-2xl shadow-sm flex items-center gap-3 border border-[#e5e9e4]">
              <span className="material-symbols-outlined text-[#a83119] text-[24px]">favorite</span>
              <p className="text-xs sm:text-sm font-medium">
                Practice together. Support each other. Build confidence every week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FINAL CALLOUT */}
      <section className="w-full py-16 lg:py-24">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#a83119] text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-xl">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#ca492f] rounded-full blur-3xl opacity-60 pointer-events-none"></div>
            <div className="relative z-10 max-w-2xl flex flex-col items-start gap-4">
              <span className="px-3 py-1 rounded-full bg-white/15 text-white text-xs uppercase tracking-wider font-bold">
                Zero Barriers To Entry
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-white font-extrabold tracking-tight">
                You don't have to join the community first. Start with a session.
              </h2>
              <p className="text-base sm:text-lg text-white/90">
                Every session is free. Join one, experience how we learn together, and then decide whether you would like to stay connected.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenRsvp}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#a83119] text-sm font-bold shadow-lg hover:bg-[#f0f5f0] transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Register for the Next Session</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>
                <a
                  href={`mailto:${CONFIG.CONTACT_EMAIL}`}
                  className="inline-flex items-center justify-center px-6 py-4 rounded-full bg-white/10 text-white text-sm font-semibold hover:bg-white/20 transition-colors"
                >
                  Contact GreetNetworks
                </a>
              </div>
              <p className="text-xs text-white/80 pt-1">
                {getSessionScheduleText()}. Zero pressure · 100% Free
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
