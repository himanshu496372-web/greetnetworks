/**
 * Configuration and details for GreetNetworks
 * Handles values provided by the site owner with sensible fallbacks when details are missing.
 */

export interface AppConfig {
  REGISTRATION_URL: string;
  SESSION_DAY: string;
  SESSION_TIME: string;
  TIME_ZONE: string;
  IMAGES_ARE_REAL: boolean;
  TESTIMONIALS: Array<{ quote: string; author: string; role: string }>;
  RECORDING_POLICY: string;
  CONTACT_EMAIL: string;
}

export const CONFIG: AppConfig = {
  // [YOUR DETAILS] If empty, registration falls back to the in-app registration flow at /register
  REGISTRATION_URL: '',

  // [YOUR DETAILS] Day, time, and time zone for weekly sessions
  SESSION_DAY: 'Sunday',
  SESSION_TIME: '7:00 PM',
  TIME_ZONE: 'IST',

  // [YOUR DETAILS] Whether images depict real community participants
  IMAGES_ARE_REAL: false,

  // [YOUR DETAILS] Real community testimonials (empty array means no invented quotes will be rendered)
  TESTIMONIALS: [],

  // [YOUR DETAILS] Short recording policy statement
  RECORDING_POLICY: '',

  CONTACT_EMAIL: 'hello@greetnetworks.org',
};

export const getSessionScheduleText = (): string => {
  return `Sessions are held every ${CONFIG.SESSION_DAY} at ${CONFIG.SESSION_TIME} ${CONFIG.TIME_ZONE}`;
};
