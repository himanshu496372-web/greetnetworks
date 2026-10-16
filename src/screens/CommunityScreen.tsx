import React from 'react';
import { Link } from 'react-router-dom';
import { CONFIG, getSessionScheduleText } from '../config';

interface CommunityScreenProps {
  onOpenRsvp: () => void;
}

export const CommunityScreen: React.FC<CommunityScreenProps> = ({ onOpenRsvp }) => {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO */}
      <section className="relative w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffdad3] text-[#8a1c05]">
              <span className="material-symbols-outlined text-[16px]">groups</span>
              <span className="text-xs font-bold tracking-wide">The GreetNetworks Community</span>
            </div>

            <h1 className="font-headline text-[38px] sm:text-[48px] lg:text-[56px] text-[#181d1a] tracking-tight font-extrabold leading-[1.08]">
              Learn with people.{' '}
              <span className="text-[#a83119] underline decoration-[#ffdad3] decoration-wavy decoration-2 underline-offset-4">
                Grow through practice.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#59413c] max-w-xl leading-relaxed">
              We're a free, member-led community where people come together to practise public speaking and networking. No experts talking down to you—just real people helping each other improve.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenRsvp}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#a83119] text-white text-sm font-semibold shadow-md hover:bg-[#ca492f] transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Register for the Next Session</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
              <Link
                to="/sessions"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-[#ebefea] text-[#181d1a] text-sm font-semibold hover:bg-[#e5e9e4] transition-colors"
              >
                View Session Schedule
              </Link>
            </div>

            {/* Micro value props */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#59413c] pt-2">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#006947] text-[18px]">check_circle</span>
                Member-Led Circles
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#006947] text-[18px]">check_circle</span>
                Supportive Feedback
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#006947] text-[18px]">check_circle</span>
                100% Free Always
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual with Local Image */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative bg-white rounded-3xl p-4 shadow-xl border border-[#e5e9e4]">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#2c322e]">
                <img
                  alt="GreetNetworks community call screenshot showing smiling participants"
                  className="w-full h-full object-cover"
                  src="/images/community-group-frame.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                  <div className="flex items-center justify-between w-full text-white">
                    <span className="text-xs font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping"></span>
                      Sunday Practice Circle
                    </span>
                    <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md">
                      Peer-to-Peer
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-[#f0f5f0] rounded-xl mt-3 text-xs text-[#59413c] flex items-center justify-between">
                <span>Friendly, constructive practice rounds</span>
                <span className="font-bold text-[#a83119]">Zero Judgement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHO IS IN THIS COMMUNITY */}
      <section className="w-full bg-[#f0f5f0] py-16 lg:py-24">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
          <div className="max-w-2xl flex flex-col gap-2">
            <span className="text-xs text-[#a83119] font-bold uppercase tracking-wider">
              Diverse & Welcoming
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-[#181d1a] font-bold tracking-tight">
              Who is this community for?
            </h2>
            <p className="text-base text-[#59413c]">
              We bring together students, early professionals, career changers, and anyone who wants to communicate with ease.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e5e9e4] flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#ffdad3] text-[#a83119] flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">school</span>
              </div>
              <h3 className="font-headline text-lg font-bold text-[#181d1a]">Students & Grads</h3>
              <p className="text-xs text-[#59413c] leading-relaxed">
                Practising for interviews, college presentations, or networking with potential mentors.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e5e9e4] flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#ffddb8] text-[#855300] flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">work</span>
              </div>
              <h3 className="font-headline text-lg font-bold text-[#181d1a]">Early Professionals</h3>
              <p className="text-xs text-[#59413c] leading-relaxed">
                Building comfort in team meetings, presenting updates, and speaking spontaneously with seniors.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e5e9e4] flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#6ffbbe] text-[#006947] flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">psychology</span>
              </div>
              <h3 className="font-headline text-lg font-bold text-[#181d1a]">Quiet Thinkers</h3>
              <p className="text-xs text-[#59413c] leading-relaxed">
                Introverts who have great ideas but want a low-stakes place to practice sharing them aloud.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e5e9e4] flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#ebefea] text-[#181d1a] flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">translate</span>
              </div>
              <h3 className="font-headline text-lg font-bold text-[#181d1a]">Fluency Builders</h3>
              <p className="text-xs text-[#59413c] leading-relaxed">
                Learners seeking conversational fluency and impromptu comfort in English without pressure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW COMMUNITY PARTICIPATION WORKS */}
      <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-5">
            <span className="text-xs text-[#a83119] font-bold uppercase tracking-wider">
              Easy Participation
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-[#181d1a] font-bold tracking-tight">
              How do I get involved?
            </h2>
            <p className="text-base text-[#59413c] leading-relaxed">
              We keep participation simple and welcoming. You don't have to fill out extensive questionnaires or pass auditions.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-[#ffdad3] text-[#a83119] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <h4 className="font-headline font-bold text-sm text-[#181d1a]">Register for a session</h4>
                  <p className="text-xs text-[#59413c] mt-0.5 leading-relaxed">
                    Pick an upcoming date and sign up for a free spot. We'll send you the meeting details.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-[#ffddb8] text-[#855300] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <h4 className="font-headline font-bold text-sm text-[#181d1a]">Experience the format</h4>
                  <p className="text-xs text-[#59413c] mt-0.5 leading-relaxed">
                    Join the call, meet friendly peers, and try a 90-second speaking rep in a small 2-3 person room.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-[#6ffbbe] text-[#006947] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <h4 className="font-headline font-bold text-sm text-[#181d1a]">Stay connected</h4>
                  <p className="text-xs text-[#59413c] mt-0.5 leading-relaxed">
                    If you enjoyed it, join our WhatsApp peer group to practice mid-week prompts and attend future sessions.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenRsvp}
                className="px-6 py-3.5 rounded-full bg-[#a83119] text-white text-xs font-bold hover:bg-[#ca492f] transition-colors cursor-pointer"
              >
                Register for the Next Session
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#f0f5f0] p-6 sm:p-8 rounded-3xl border border-[#e5e9e4]">
            <h3 className="font-headline text-xl font-bold text-[#181d1a] mb-2">
              Community Principles
            </h3>
            <p className="text-xs text-[#59413c] mb-6">
              Three agreements every member upholds in our practice rooms:
            </p>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ebefea] flex items-start gap-3">
                <span className="material-symbols-outlined text-[#006947] text-[20px] shrink-0 mt-0.5">handshake</span>
                <div className="text-xs">
                  <strong className="text-[#181d1a] block mb-0.5">Give kind, specific observations</strong>
                  <span className="text-[#59413c]">Tell peers what hooked you and one small experiment to try. Avoid harsh or vague criticism.</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ebefea] flex items-start gap-3">
                <span className="material-symbols-outlined text-[#855300] text-[20px] shrink-0 mt-0.5">timer</span>
                <div className="text-xs">
                  <strong className="text-[#181d1a] block mb-0.5">Share speaking time equally</strong>
                  <span className="text-[#59413c]">Respect the timer so everyone in your breakout gets an equal turn to practice and receive feedback.</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ebefea] flex items-start gap-3">
                <span className="material-symbols-outlined text-[#a83119] text-[20px] shrink-0 mt-0.5">security</span>
                <div className="text-xs">
                  <strong className="text-[#181d1a] block mb-0.5">Keep the space safe and confidential</strong>
                  <span className="text-[#59413c]">What peers share in breakouts stays in breakouts. Respect vulnerability.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: GALLERY (Softened honest claim, local images with descriptive alt text) */}
      <section className="w-full py-16 bg-[#f0f5f0]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="text-xs text-[#a83119] font-bold uppercase tracking-wider">Practice Environment</span>
            <h2 className="font-headline text-3xl sm:text-4xl text-[#181d1a] font-bold tracking-tight mt-1 mb-2">
              See the community in action.
            </h2>
            <p className="text-base text-[#59413c]">
              Interactive speaking and conversation breakout rooms. A preview of our online community practice format.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Gallery Card 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col group border border-[#e5e9e4]">
              <div className="relative aspect-video w-full overflow-hidden bg-[#2c322e]">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Four peers in video call practicing impromptu speaking drill"
                  src="/images/breakout-room-quad.jpg"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#181d1a] text-xs font-bold shadow-sm">
                    Impromptu speaking drill
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-1">
                <h4 className="font-headline text-base font-bold text-[#181d1a]">
                  2-minute impromptu storytelling drill
                </h4>
                <p className="text-xs sm:text-sm text-[#59413c]">
                  Breakout room exercise focusing on narrative pacing and eliminating filler pauses.
                </p>
              </div>
            </div>

            {/* Gallery Card 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col group border border-[#e5e9e4]">
              <div className="relative aspect-video w-full overflow-hidden bg-[#2c322e]">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Three peers participating in a guided conversation icebreaker drill"
                  src="/images/networking-drill-trio.jpg"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#181d1a] text-xs font-bold shadow-sm">
                    Networking drill
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-1">
                <h4 className="font-headline text-base font-bold text-[#181d1a]">
                  3-person conversational icebreaker
                </h4>
                <p className="text-xs sm:text-sm text-[#59413c]">
                  Practising active listening and open-ended curiosity prompts with new peers.
                </p>
              </div>
            </div>

            {/* Gallery Card 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col group border border-[#e5e9e4]">
              <div className="relative aspect-video w-full overflow-hidden bg-[#2c322e]">
                <img
                  alt="Community session debrief with group participants"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src="/images/community-group-frame.jpg"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#181d1a] text-xs font-bold shadow-sm">
                    Peer feedback circle
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-1">
                <h4 className="font-headline text-base font-bold text-[#181d1a]">
                  Group debrief & reflections
                </h4>
                <p className="text-xs sm:text-sm text-[#59413c]">
                  Sharing actionable reflections to help fellow speakers refine their delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FINAL CTA */}
      <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-[#a83119] text-white rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center gap-5 shadow-xl">
          <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-white">
            Find your voice with a friendly group.
          </h2>
          <p className="text-base text-white/90 max-w-xl">
            {getSessionScheduleText()}. Join our next online circle, try an impromptu drill, and see how quickly your confidence grows.
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
              Explore Live Simulator
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
