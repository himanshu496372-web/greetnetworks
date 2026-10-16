import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ResourceItem } from '../types';
import { RESOURCES_LIST } from '../data/mockData';
import { CONFIG, getSessionScheduleText } from '../config';

interface ResourcesScreenProps {
  onOpenRsvp: () => void;
  onSelectResource: (resource: ResourceItem) => void;
}

export const ResourcesScreen: React.FC<ResourcesScreenProps> = ({
  onOpenRsvp,
  onSelectResource
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Public Speaking' | 'Networking' | 'Reflection'>('All');

  const filteredResources = selectedFilter === 'All'
    ? RESOURCES_LIST
    : RESOURCES_LIST.filter((r) => r.track === selectedFilter);

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO */}
      <section className="relative w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffdad3] text-[#8a1c05]">
              <span className="material-symbols-outlined text-[16px]">menu_book</span>
              <span className="text-xs font-bold tracking-wide">The Learning Library</span>
            </div>

            <h1 className="font-headline text-[38px] sm:text-[48px] lg:text-[56px] text-[#181d1a] tracking-tight font-extrabold leading-[1.08]">
              Keep learning, even after the session.
            </h1>

            <p className="text-base sm:text-lg text-[#59413c] max-w-xl leading-relaxed">
              Explore practical notes and learning resources from GreetNetworks sessions. Revisit important ideas, reflect on what you have learned, and use them in your next conversation or speaking activity.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#library-grid"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#a83119] text-white text-sm font-semibold shadow-md hover:bg-[#ca492f] transition-all hover:-translate-y-0.5"
              >
                <span>Browse Resource Guides</span>
                <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
              </a>
              <button
                onClick={onOpenRsvp}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-[#ebefea] text-[#181d1a] text-sm font-semibold hover:bg-[#e5e9e4] transition-colors cursor-pointer"
              >
                <span>Register for the Next Session</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#59413c] pt-2">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#006947] text-[18px]">check_circle</span>
                Session Recap Notes
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#006947] text-[18px]">check_circle</span>
                Interactive Drills
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#006947] text-[18px]">check_circle</span>
                Templates & Reflection
              </span>
            </div>
          </div>

          {/* Right Column: Featured Resource Card with Local Image */}
          <div className="lg:col-span-5 relative w-full">
            <div className="bg-white rounded-3xl p-6 shadow-xl flex flex-col gap-5 border border-[#e5e9e4]">
              {/* Session Header Strip */}
              <div className="flex items-center justify-between pb-2 bg-[#f0f5f0] px-4 py-2.5 rounded-2xl">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#006947] animate-pulse"></span>
                  <span className="text-xs text-[#181d1a] font-bold tracking-wide">
                    SESSION NOTES & DRILL SHEET
                  </span>
                </div>
                <span className="text-xs text-[#59413c] bg-[#ebefea] px-2 py-0.5 rounded-md font-semibold">
                  Practice Notes Archive
                </span>
              </div>

              {/* Video Drill Thumbnail using Local Image with Descriptive Alt */}
              <div className="relative rounded-2xl overflow-hidden aspect-[1.79] shadow-sm bg-[#2c322e]">
                <img
                  alt="Handwritten speaking drill sheet and notes from breakout session"
                  className="w-full h-full object-cover"
                  src="/images/drill-sheet-breakout.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <div className="flex items-center justify-between w-full text-white">
                    <span className="text-xs flex items-center gap-1.5 font-medium">
                      <span className="material-symbols-outlined text-[16px] text-[#6ffbbe]">mic</span>
                      Live Practice Breakout Sheet
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-white/20 backdrop-blur-md">
                      Active Drill
                    </span>
                  </div>
                </div>
              </div>

              {/* Key Takeaways Preview */}
              <div className="space-y-3 pt-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-[#6ffbbe] text-[#002113] text-xs font-semibold">
                    Past-Present-Future
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#ebefea] text-[#59413c] text-xs">
                    2-Min Impromptu
                  </span>
                </div>
                <div className="bg-[#f0f5f0] p-3.5 rounded-xl space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#a83119] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span className="text-[#181d1a]">Breathe during the first 5 seconds before speaking.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#a83119] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span className="text-[#181d1a]">Anchor your main thought with one crisp personal example.</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 text-xs border-t border-[#ebefea]">
                <span className="text-[#59413c]">
                  Session takeaway summary
                </span>
                <button
                  onClick={() => onSelectResource(RESOURCES_LIST[0])}
                  className="text-[#a83119] font-bold hover:underline cursor-pointer"
                >
                  Open Access Document →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FILTER PILLS */}
      <section className="w-full border-y border-[#e5e9e4] bg-white sticky top-20 z-30">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <button
              onClick={() => setSelectedFilter('All')}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedFilter === 'All'
                  ? 'bg-[#a83119] text-white shadow-sm'
                  : 'bg-[#f0f5f0] text-[#59413c] hover:bg-[#ebefea]'
              }`}
            >
              All Resources ({RESOURCES_LIST.length})
            </button>
            <button
              onClick={() => setSelectedFilter('Public Speaking')}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedFilter === 'Public Speaking'
                  ? 'bg-[#a83119] text-white shadow-sm'
                  : 'bg-[#f0f5f0] text-[#59413c] hover:bg-[#ebefea]'
              }`}
            >
              Public Speaking
            </button>
            <button
              onClick={() => setSelectedFilter('Networking')}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedFilter === 'Networking'
                  ? 'bg-[#a83119] text-white shadow-sm'
                  : 'bg-[#f0f5f0] text-[#59413c] hover:bg-[#ebefea]'
              }`}
            >
              Networking & Conversation
            </button>
            <button
              onClick={() => setSelectedFilter('Reflection')}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedFilter === 'Reflection'
                  ? 'bg-[#a83119] text-white shadow-sm'
                  : 'bg-[#f0f5f0] text-[#59413c] hover:bg-[#ebefea]'
              }`}
            >
              Templates & Log
            </button>
          </div>

          <div className="text-xs text-[#59413c]">
            Showing <strong className="text-[#181d1a]">{filteredResources.length}</strong> items
          </div>
        </div>
      </section>

      {/* SECTION 3: 6 RESOURCE CARDS GRID */}
      <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col gap-10" id="library-grid">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs text-[#a83119] font-bold uppercase tracking-wider">Learning Materials</span>
            <h2 className="font-headline text-3xl font-extrabold text-[#181d1a] tracking-tight mt-1">
              Browse Notes & Practical Guides
            </h2>
            <p className="text-sm text-[#59413c] mt-1">
              Click any card to read full drill instructions or launch the interactive practice timer.
            </p>
          </div>
          <span className="inline-flex items-center gap-1 text-xs text-[#006947] bg-[#6ffbbe]/30 px-3 py-1.5 rounded-full shrink-0 font-semibold">
            <span className="material-symbols-outlined text-[16px]">menu_book</span>
            Community Practice Notes
          </span>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res) => (
            <div
              key={res.id}
              className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow border border-[#e5e9e4] group"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs text-[#59413c] bg-[#ebefea] px-2.5 py-1 rounded-md font-medium">
                    {res.track} · {res.type}
                  </span>
                  <span
                    className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${
                      res.access === 'Public'
                        ? 'text-[#006947] bg-[#6ffbbe]/40'
                        : 'text-[#855300] bg-[#ffddb8]'
                    }`}
                  >
                    {res.access}
                  </span>
                </div>

                <h3 className="font-headline text-xl text-[#181d1a] font-bold leading-snug group-hover:text-[#a83119] transition-colors">
                  {res.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#59413c] leading-relaxed">
                  {res.description}
                </p>
              </div>

              <div className="pt-6 mt-4 flex items-center justify-between border-t border-[#ebefea]">
                <span className="text-xs text-[#59413c] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px]">schedule</span>
                  {res.readTime}
                </span>

                <button
                  onClick={() => onSelectResource(res)}
                  className="inline-flex items-center gap-1.5 text-xs text-[#a83119] hover:underline font-bold cursor-pointer"
                >
                  <span>{res.type === 'Activity Guide' ? 'View Activity' : 'Read Resource'}</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center p-4 rounded-xl bg-[#f0f5f0] text-center border border-[#e5e9e4]">
          <p className="text-xs sm:text-sm text-[#59413c]">
            {getSessionScheduleText()}. You can open any resource to read full notes or start an interactive drill.
          </p>
        </div>
      </section>

      {/* SECTION 4: ACCESS TIERS */}
      <section className="w-full bg-[#f0f5f0] py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
          <div className="max-w-2xl flex flex-col gap-2">
            <div className="inline-flex items-center gap-2 text-xs text-[#a83119] uppercase font-bold tracking-wider">
              Transparent Participation
            </div>
            <h2 className="font-headline text-3xl font-bold text-[#181d1a]">
              Useful resources, with clear access.
            </h2>
            <p className="text-base text-[#59413c]">
              GreetNetworks is 100% free. We keep foundational notes open to all, with deeper peer practice archives for active members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card A: Public Resources */}
            <div className="bg-white rounded-3xl p-8 shadow-sm flex flex-col justify-between gap-6 border border-[#e5e9e4]">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#6ffbbe]/30 text-[#002113] text-xs font-semibold">
                    Open to Everyone · No Sign-Up Needed
                  </span>
                  <span className="material-symbols-outlined text-[#006947] text-2xl">public</span>
                </div>
                <div>
                  <h3 className="font-headline text-2xl font-bold text-[#181d1a]">Public Resources</h3>
                  <p className="text-sm text-[#59413c] mt-2 leading-relaxed">
                    Foundational learning resources are open for anyone to explore and use. Perfect for getting an honest sense of what we cover before you join a session.
                  </p>
                </div>
                <ul className="space-y-3 text-sm text-[#181d1a]">
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#006947] text-[20px] shrink-0 mt-0.5">check</span>
                    <span>Core session recap notes & summary points</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#006947] text-[20px] shrink-0 mt-0.5">check</span>
                    <span>Beginner solo speaking & conversation drill guides</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#006947] text-[20px] shrink-0 mt-0.5">check</span>
                    <span>Free to read online anytime without logging in</span>
                  </li>
                </ul>
              </div>
              <a
                href="#library-grid"
                className="w-full text-center py-3.5 px-6 rounded-full bg-[#ebefea] hover:bg-[#e5e9e4] text-[#181d1a] text-sm font-semibold transition-colors"
              >
                Browse Public Notes
              </a>
            </div>

            {/* Card B: Community Resources */}
            <div className="bg-white rounded-3xl p-8 shadow-sm flex flex-col justify-between gap-6 border border-[#e5e9e4]">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#ffddb8] text-[#855300] text-xs font-semibold">
                    Shared in Community Circles
                  </span>
                  <span className="material-symbols-outlined text-[#855300] text-2xl">forum</span>
                </div>
                <div>
                  <h3 className="font-headline text-2xl font-bold text-[#181d1a]">Community Resources</h3>
                  <p className="text-sm text-[#59413c] mt-2 leading-relaxed">
                    Community members can access additional learning materials shared through GreetNetworks channels.
                  </p>
                </div>
                <ul className="space-y-3 text-sm text-[#181d1a]">
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#855300] text-[20px] shrink-0 mt-0.5">check</span>
                    <span>Weekly drill prompts & peer challenge sheets</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#855300] text-[20px] shrink-0 mt-0.5">check</span>
                    <div className="flex flex-col">
                      <span>Breakout room recordings recap & mentor observations</span>
                      {/* Short Recording Statement (Section 3 Item 4) */}
                      <span className="text-[11px] text-[#a83119] font-medium mt-0.5">
                        {CONFIG.RECORDING_POLICY ? (
                          <span>{CONFIG.RECORDING_POLICY}</span>
                        ) : (
                          <span className="bg-[#ffdad3] px-2 py-0.5 rounded font-bold">
                            TODO: Add recording policy here
                          </span>
                        )}
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#855300] text-[20px] shrink-0 mt-0.5">check</span>
                    <span>Direct access to peer practice partner discussions</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/community"
                className="w-full text-center py-3.5 px-6 rounded-full bg-[#ffddb8] hover:bg-[#ffb95f] text-[#2a1700] text-sm font-semibold transition-colors"
              >
                Learn About the Community
              </Link>
            </div>
          </div>

          {/* Low barrier reminder banner */}
          <div className="bg-[#ebefea] p-6 rounded-2xl flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left justify-between border border-[#e5e9e4]">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#a83119] text-3xl">lightbulb</span>
              <div>
                <h4 className="font-headline font-bold text-base text-[#181d1a]">
                  Best way to learn? Experience a practice round.
                </h4>
                <p className="text-xs text-[#59413c]">
                  Reading about speaking builds understanding. Speaking in a 2-person breakout builds reflex.
                </p>
              </div>
            </div>
            <button
              onClick={onOpenRsvp}
              className="py-3 px-6 rounded-full bg-[#a83119] text-white text-xs font-bold hover:bg-[#ca492f] transition-colors shrink-0 cursor-pointer"
            >
              Register for the Next Session
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 5: FINAL CTA */}
      <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-[#a83119] text-white rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center gap-5 shadow-xl">
          <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-white">
            Put these notes into practice this week.
          </h2>
          <p className="text-base text-white/90 max-w-xl">
            {getSessionScheduleText()}. All exercises from this library are tested live with real people in small peer breakout circles.
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
              Test Live Simulator
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
