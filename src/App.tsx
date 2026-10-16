import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeScreen } from './screens/HomeScreen';
import { AboutScreen } from './screens/AboutScreen';
import { SessionsScreen } from './screens/SessionsScreen';
import { CommunityScreen } from './screens/CommunityScreen';
import { ResourcesScreen } from './screens/ResourcesScreen';
import { RegisterScreen } from './screens/RegisterScreen';
import { NotFoundScreen } from './screens/NotFoundScreen';
import { LiveRoomSimulator } from './components/LiveRoomSimulator';
import { RsvpModal } from './components/RsvpModal';
import { ResourceModal } from './components/ResourceModal';
import { ResourceItem } from './types';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

export default function App() {
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null);

  const handleOpenRsvp = () => {
    setIsRsvpOpen(true);
  };

  const handleCloseRsvp = () => {
    setIsRsvpOpen(false);
  };

  const handleSelectResource = (resource: ResourceItem) => {
    setSelectedResource(resource);
  };

  const handleCloseResource = () => {
    setSelectedResource(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f6fbf5] text-[#181d1a] selection:bg-[#ffdad3] selection:text-[#3e0500]">
      <ScrollToTop />

      {/* ONE Shared Header component used on every page */}
      <Header onOpenRsvp={handleOpenRsvp} />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-20">
        <Routes>
          <Route
            path="/"
            element={
              <HomeScreen
                onOpenRsvp={handleOpenRsvp}
                onSelectResource={handleSelectResource}
              />
            }
          />
          <Route
            path="/about"
            element={<AboutScreen onOpenRsvp={handleOpenRsvp} />}
          />
          <Route
            path="/sessions"
            element={
              <SessionsScreen
                onOpenRsvp={handleOpenRsvp}
                onSelectResource={handleSelectResource}
              />
            }
          />
          <Route
            path="/community"
            element={<CommunityScreen onOpenRsvp={handleOpenRsvp} />}
          />
          <Route
            path="/resources"
            element={
              <ResourcesScreen
                onOpenRsvp={handleOpenRsvp}
                onSelectResource={handleSelectResource}
              />
            }
          />
          <Route
            path="/register"
            element={<RegisterScreen />}
          />
          <Route
            path="/simulator"
            element={<LiveRoomSimulator onOpenRsvp={handleOpenRsvp} />}
          />
          <Route
            path="/live"
            element={<LiveRoomSimulator onOpenRsvp={handleOpenRsvp} />}
          />
          <Route
            path="*"
            element={<NotFoundScreen />}
          />
        </Routes>
      </main>

      {/* ONE Shared Footer component used on every page */}
      <Footer onOpenRsvp={handleOpenRsvp} />

      {/* Interactive Modals */}
      <RsvpModal
        isOpen={isRsvpOpen}
        onClose={handleCloseRsvp}
      />

      <ResourceModal
        resource={selectedResource}
        onClose={handleCloseResource}
      />
    </div>
  );
}
