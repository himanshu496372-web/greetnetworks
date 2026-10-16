import React from 'react';
import { Link } from 'react-router-dom';
import { CONFIG, getSessionScheduleText } from '../config';

interface FooterProps {
  onOpenRsvp?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRsvp }) => {
  return (
    <footer className="w-full bg-[#f0f5f0] text-[#181d1a] pt-12 pb-8 border-t border-[#e5e9e4]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10">
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <Link to="/" className="flex items-center gap-2 w-fit">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#a83119] text-white">
                <span className="material-symbols-outlined text-[18px]">forum</span>
              </span>
              <span className="font-headline text-xl font-bold text-[#181d1a]">
                Greet<span className="text-[#a83119]">Networks</span>
              </span>
            </Link>
            <p className="text-sm text-[#59413c] max-w-sm leading-relaxed">
              Free practical learning through people, practice and feedback. Real peer rooms for public speaking and networking.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6ffbbe] text-[#002113] text-xs font-semibold">
                Free Practice Community
              </span>
            </div>
          </div>

          {/* Col 2: Navigation - Links ONLY to pages that exist */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h3 className="font-headline text-base font-semibold text-[#181d1a]">Navigation</h3>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
              <Link
                to="/"
                className="text-left text-[#59413c] hover:text-[#a83119] transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-left text-[#59413c] hover:text-[#a83119] transition-colors"
              >
                About
              </Link>
              <Link
                to="/sessions"
                className="text-left text-[#59413c] hover:text-[#a83119] transition-colors"
              >
                Sessions
              </Link>
              <Link
                to="/community"
                className="text-left text-[#59413c] hover:text-[#a83119] transition-colors"
              >
                Community
              </Link>
              <Link
                to="/resources"
                className="text-left text-[#59413c] hover:text-[#a83119] transition-colors"
              >
                Resources
              </Link>
              <Link
                to="/simulator"
                className="text-left text-[#59413c] hover:text-[#a83119] transition-colors font-medium"
              >
                Live Room
              </Link>
              {onOpenRsvp ? (
                <button
                  type="button"
                  onClick={onOpenRsvp}
                  className="col-span-2 text-left text-[#a83119] font-semibold hover:underline cursor-pointer"
                >
                  Register for the Next Session
                </button>
              ) : (
                <Link
                  to="/register"
                  className="col-span-2 text-left text-[#a83119] font-semibold hover:underline"
                >
                  Register for the Next Session
                </Link>
              )}
            </div>
          </div>

          {/* Col 3: Connect */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h3 className="font-headline text-base font-semibold text-[#181d1a]">Connect</h3>
            <p className="text-sm text-[#59413c]">Questions or want to say hello?</p>
            <div className="flex flex-col gap-1">
              <a
                className="text-sm text-[#a83119] hover:underline font-semibold flex items-center gap-1.5"
                href={`mailto:${CONFIG.CONTACT_EMAIL}`}
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
                {CONFIG.CONTACT_EMAIL}
              </a>
            </div>
            <div className="pt-2 text-xs text-[#59413c]">
              {getSessionScheduleText()}.
            </div>
          </div>
        </div>

        {/* Bottom Bar: Clean copyright and valid navigation */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#59413c] border-t border-[#ebefea]">
          <p>© 2025 GreetNetworks. Free practical learning through people, practice and feedback.</p>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-[#181d1a]">About</Link>
            <span aria-hidden="true">·</span>
            <Link to="/sessions" className="hover:text-[#181d1a]">Sessions</Link>
            <span aria-hidden="true">·</span>
            <Link to="/register" className="hover:text-[#181d1a]">Register</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
