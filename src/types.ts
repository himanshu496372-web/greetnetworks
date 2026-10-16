export type NavScreen = 'home' | 'about' | 'sessions' | 'community' | 'resources' | 'simulator' | 'register' | 'not-found';

export interface NextSessionData {
  track: string;
  topic: string;
  summary: string;
  date: string;
  startTime: string;
  endTime: string;
  timeZone: string;
  meetingPlatform: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  track: 'Public Speaking' | 'Networking' | 'Reflection';
  type: 'Session Notes' | 'Activity Guide' | 'Template';
  access: 'Public' | 'Community Members';
  readTime: string;
  description: string;
  content: {
    overview: string;
    keyPoints: string[];
    practicalExercise: string;
    takeawayPrompt: string;
  };
}

export interface SessionInfo {
  id: string;
  topic: string;
  date: string;
  time: string;
  duration: string;
  track: 'Public Speaking' | 'Networking' | 'Both';
  facilitator: string;
  description: string;
  drillSnapshot: string;
  spotsLeft: number;
  format: string;
  status: 'Upcoming' | 'Past';
  image?: string;
  imageAlt?: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
}

export interface Participant {
  id: string;
  name: string;
  avatar: string;
  role?: string;
  isMuted?: boolean;
  isSpeaking?: boolean;
  hasHandRaised?: boolean;
}
