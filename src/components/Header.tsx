import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

interface HeaderProps {
  onOpenRsvp?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenRsvp }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `whitespace-nowrap transition-colors py-1.5 px-2 text-sm font-medium ${
      isActive
        ? 'text-[#a83119] font-bold border-b-2 border-[#a83119]'
        : 'text-[#59413c] hover:text-[#181d1a]'
    }`;

  const getMobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
      isActive
        ? 'bg-[#ffdad3] text-[#8a1c05] font-bold'
        : 'text-[#181d1a] hover:bg-[#ebefea]'
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#f6fbf5]/95 backdrop-blur-xl border-b border-[#e5e9e4]">
      <div className="h-20 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2.5 text-left group focus-visible:ring-2 focus-visible:ring-[#a83119] rounded-lg p-1 whitespace-nowrap shrink-0"
        >
          <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#a83119] text-white shadow-sm transition-transform group-hover:scale-105">
            <span className="material-symbols-outlined text-[20px]">forum</span>
          </span>
          <span className="font-headline text-[22px] font-bold text-[#181d1a] tracking-tight">
            Greet<span className="text-[#a83119]">Networks</span>
          </span>
        </Link>

        {/* Zone 2: Desktop Navigation Links (React Router NavLink with aria-current="page") */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-6 text-sm"
        >
          <NavLink to="/" end className={getNavLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={getNavLinkClass}>
            About
          </NavLink>
          <NavLink to="/sessions" className={getNavLinkClass}>
            Sessions
          </NavLink>
          <NavLink to="/community" className={getNavLinkClass}>
            Community
          </NavLink>
          <NavLink to="/resources" className={getNavLinkClass}>
            Resources
          </NavLink>
          <NavLink
            to="/simulator"
            className={({ isActive }) =>
              `whitespace-nowrap transition-colors py-1.5 px-3 rounded-full flex items-center gap-1.5 text-sm ${
                isActive
                  ? 'bg-[#ca492f] text-white font-semibold'
                  : 'bg-[#ffdad3]/60 text-[#8a1c05] hover:bg-[#ffdad3] font-medium'
              }`
            }
          >
            <span className="material-symbols-outlined text-[16px]">videocam</span>
            <span>Live Room</span>
          </NavLink>
        </nav>

        {/* Zone 3: Primary Action & Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          {onOpenRsvp ? (
            <button
              onClick={onOpenRsvp}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#a83119] text-white text-sm font-semibold hover:bg-[#ca492f] transition-all shadow-sm hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap cursor-pointer"
            >
              Register for the Next Session
            </button>
          ) : (
            <Link
              to="/register"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#a83119] text-white text-sm font-semibold hover:bg-[#ca492f] transition-all shadow-sm hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
            >
              Register for the Next Session
            </Link>
          )}

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-[#ebefea] text-[#181d1a] hover:bg-[#e5e9e4] transition-colors focus-visible:ring-2 focus-visible:ring-[#a83119]"
          >
            <span className="material-symbols-outlined text-[24px]">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer / Panel */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden border-t border-[#e5e9e4] bg-[#f6fbf5] px-4 pt-4 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-150"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1.5">
            <NavLink to="/" end onClick={closeMenu} className={getMobileNavLinkClass}>
              <span>Home</span>
              <span className="material-symbols-outlined text-[18px]">home</span>
            </NavLink>
            <NavLink to="/about" onClick={closeMenu} className={getMobileNavLinkClass}>
              <span>About</span>
              <span className="material-symbols-outlined text-[18px]">info</span>
            </NavLink>
            <NavLink to="/sessions" onClick={closeMenu} className={getMobileNavLinkClass}>
              <span>Sessions</span>
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
            </NavLink>
            <NavLink to="/community" onClick={closeMenu} className={getMobileNavLinkClass}>
              <span>Community</span>
              <span className="material-symbols-outlined text-[18px]">groups</span>
            </NavLink>
            <NavLink to="/resources" onClick={closeMenu} className={getMobileNavLinkClass}>
              <span>Resources</span>
              <span className="material-symbols-outlined text-[18px]">menu_book</span>
            </NavLink>
            <NavLink to="/simulator" onClick={closeMenu} className={getMobileNavLinkClass}>
              <span className="flex items-center gap-2">
                <span>Live Room</span>
                <span className="px-2 py-0.5 rounded-full bg-[#ffddb8] text-[#855300] text-[10px] font-bold">
                  Interactive
                </span>
              </span>
              <span className="material-symbols-outlined text-[18px]">videocam</span>
            </NavLink>

            <div className="pt-3 border-t border-[#e5e9e4] mt-2">
              {onOpenRsvp ? (
                <button
                  onClick={() => {
                    closeMenu();
                    onOpenRsvp();
                  }}
                  className="w-full py-3.5 px-4 rounded-full bg-[#a83119] text-white text-sm font-semibold text-center hover:bg-[#ca492f] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Register for the Next Session</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              ) : (
                <Link
                  to="/register"
                  onClick={closeMenu}
                  className="w-full py-3.5 px-4 rounded-full bg-[#a83119] text-white text-sm font-semibold text-center hover:bg-[#ca492f] transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Register for the Next Session</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
