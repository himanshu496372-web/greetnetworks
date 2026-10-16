import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundScreen: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-[#e5e9e4] text-center flex flex-col items-center gap-5">
        <div className="w-16 h-16 rounded-2xl bg-[#ffdad3] flex items-center justify-center text-[#a83119]">
          <span className="material-symbols-outlined text-[32px]">explore_off</span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold text-[#a83119] uppercase tracking-wider">404 · Page Not Found</span>
          <h1 className="font-headline text-3xl font-extrabold text-[#181d1a]">
            Lost your way?
          </h1>
          <p className="text-sm text-[#59413c] leading-relaxed">
            The page you're looking for doesn't exist or may have been moved. All active practice drills and sessions are just a click away.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full pt-2">
          <Link
            to="/"
            className="w-full sm:flex-1 py-3 px-5 rounded-full bg-[#a83119] text-white text-sm font-semibold hover:bg-[#ca492f] transition-all text-center"
          >
            Go Home
          </Link>
          <Link
            to="/sessions"
            className="w-full sm:flex-1 py-3 px-5 rounded-full bg-[#ebefea] text-[#181d1a] text-sm font-semibold hover:bg-[#e5e9e4] transition-all text-center"
          >
            View Sessions
          </Link>
        </div>
      </div>
    </div>
  );
};
