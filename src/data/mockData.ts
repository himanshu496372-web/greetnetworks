import { ResourceItem, SessionInfo, TestimonialItem, Participant, NextSessionData } from '../types';
import { CONFIG } from '../config';

/**
 * NEXT_SESSION:
 * Single source of truth for the upcoming practice session.
 * Rendered once via NextSessionCard.
 * If null, renders friendly fallback: "Next date coming soon. Contact us to get notified."
 */
export const NEXT_SESSION: NextSessionData | null = {
  track: 'Networking',
  topic: 'Speak to Connect: How Public Speaking Builds Stronger Teams',
  summary: 'Sessions are structured around clear, bite-sized practice drills designed to help you communicate more comfortably. Small breakout rooms with 2–3 friendly peers.',
  date: 'Sunday, Oct 18',
  startTime: '7:00 PM',
  endTime: '8:00 PM',
  timeZone: 'IST',
  meetingPlatform: 'Google Meet',
};

export const PAST_SESSIONS: SessionInfo[] = [
  {
    id: 'past-1',
    topic: 'Body Language & Voice',
    date: 'Recent Session',
    time: '5:00 PM IST',
    duration: '60 Mins',
    track: 'Public Speaking',
    facilitator: 'Community Host',
    description: 'Practiced confident body posture, natural eye contact, vocal projection, and pacing variations to speak with ease and eliminate monotone delivery.',
    drillSnapshot: 'The 90-Second Posture & Vocal Modulation Drill in 3-person rooms',
    spotsLeft: 0,
    format: '3-Person Breakouts',
    status: 'Past',
    image: '/images/breakout-room-quad.jpg',
    imageAlt: 'GreetNetworks community members practicing body language and vocal delivery drills in breakout rooms'
  },
  {
    id: 'past-2',
    topic: 'Audience Engagement: How to Speak So People Actually Listen',
    date: 'Recent Session',
    time: '5:00 PM IST',
    duration: '60 Mins',
    track: 'Public Speaking',
    facilitator: 'Community Host',
    description: 'Practiced opening hooks, asking engaging questions, adjusting energy levels, and using conversational pacing so listeners stay genuinely interested throughout your talk.',
    drillSnapshot: 'The 60-Second Hook & Audience Engagement Drill in 3-person rooms',
    spotsLeft: 0,
    format: 'Live Practice Circles',
    status: 'Past',
    image: '/images/peer-speaking-headset.jpg',
    imageAlt: 'Peer practicing audience engagement and interactive speaking techniques'
  },
  {
    id: 'past-3',
    topic: 'Audience Awareness',
    date: 'Recent Session',
    time: '5:00 PM IST',
    duration: '60 Mins',
    track: 'Public Speaking',
    facilitator: 'Community Host',
    description: 'Practiced reading the room, tuning your message to listener backgrounds, spotting non-verbal feedback, and adapting your tone so everyone in the room stays engaged.',
    drillSnapshot: 'The 90-Second Room Reading & Adaptive Delivery Drill in 3-person rooms',
    spotsLeft: 0,
    format: 'Small Breakout Circles',
    status: 'Past',
    image: '/images/peers-conversation-pair.jpg',
    imageAlt: 'Peers practicing audience awareness and adaptive speaking techniques in small breakout rooms'
  }
];

export const RESOURCES_LIST: ResourceItem[] = [
  {
    id: 'res-1',
    title: 'Structuring Your Thoughts Under Pressure',
    track: 'Public Speaking',
    type: 'Session Notes',
    access: 'Public',
    readTime: '4 min read',
    description: 'Review the key ideas and frameworks covered in our impromptu speaking session: the Past-Present-Future structure, breathing through pauses, and answering without rambling.',
    content: {
      overview: 'When put on the spot, the brain scrambles to find words because there is no structure to anchor them. The Past-Present-Future (PPF) triad gives an instant mental scaffold for any question.',
      keyPoints: [
        'Take a 3-second physical breath before your first sentence. Silence signals composure, not hesitation.',
        'Past: "Initially, whenever I faced this question, I used to..."',
        'Present: "Today, what we notice happening is..."',
        'Future: "Moving forward, the single most important step will be..."',
        'Keep each section to 20–30 seconds to maintain crisp momentum.'
      ],
      practicalExercise: 'Try the 2-Minute Impromptu Challenge: pick any item on your desk (a cup, a pen, a key) and speak using Past-Present-Future.',
      takeawayPrompt: 'Observe: did you rush to speak in the first second, or did you hold space for calm breathing?'
    }
  },
  {
    id: 'res-2',
    title: 'The 2-Minute Random Object Drill',
    track: 'Public Speaking',
    type: 'Activity Guide',
    access: 'Public',
    readTime: 'Self-Drill (5 min)',
    description: 'A self-practice activity sheet to practise spontaneous fluency. Pick an ordinary item, tell a 90-second story with context, and build comfortable vocal pacing.',
    content: {
      overview: 'Fluency is a motor skill, not an intellectual one. By pitching or describing an everyday mundane object, you free your mind from the fear of being "factually incorrect" and focus purely on vocal rhythm.',
      keyPoints: [
        'Grab the closest object: a sticky note, a mug, a notebook charger.',
        'Minute 1: Describe who invented or owned this item and what trouble it saved them.',
        'Last 30 seconds: State why you would never throw it away.',
        'Record your voice on your phone without re-recording or editing.'
      ],
      practicalExercise: 'Set a countdown timer for 90 seconds. Speak continuously. If you stumble, pause silently for 1 second, smile, and continue.',
      takeawayPrompt: 'Notice filler words. Aim to replace "um", "like", and "so" with a comfortable silence.'
    }
  },
  {
    id: 'res-3',
    title: 'Starting Conversations with Strangers',
    track: 'Networking',
    type: 'Session Notes',
    access: 'Public',
    readTime: '3 min read',
    description: 'Revisit practical ideas for breaking the ice without awkwardness: finding shared context, asking curious open-ended followups, and comfortable eye contact.',
    content: {
      overview: 'Most people dread networking because they believe they must perform or impress. Genuine connection happens when you treat the other person as someone who has something fascinating to teach you.',
      keyPoints: [
        'Comment on the shared immediate context (the room, the workshop, the weather, the event prompt).',
        'Never lead with "What do you do for work?" — lead with "What brought you to this group today?"',
        'The 70/30 Listening Rule: aim to have your partner speak for 70% of the first 3 minutes.',
        'Follow up on emotions rather than logistics: "That sounds like quite a shift—how did that feel?"'
      ],
      practicalExercise: 'Next time you talk to a peer on a call or in daily life, offer one observational comment about your shared context.',
      takeawayPrompt: 'Watch their shoulders relax when they realize you are genuinely listening.'
    }
  },
  {
    id: 'res-4',
    title: 'Curious Listener Challenge',
    track: 'Networking',
    type: 'Activity Guide',
    access: 'Community Members',
    readTime: 'Peer Exercise',
    description: 'Try a guided two-way exercise to practise introductions, spotting non-verbal cues, and turning a dry question into a natural conversational exchange.',
    content: {
      overview: 'This is a signature breakout drill. In pairs, one person speaks for 90 seconds while the listener focuses on curious follow-up without giving unsolicited advice.',
      keyPoints: [
        'Round 1: Person A shares: "A skill I have been trying to learn."',
        'Person B responds with curious questions that begin with "What made you..." or "How did..."',
        'Avoid interrupting with personal anecdotes during their sharing turn.',
        'Round 2: Switch roles.'
      ],
      practicalExercise: 'Pair up with a partner or peer during our practice breakouts to test this challenge.',
      takeawayPrompt: 'Experience how much closer you feel when someone asks about your perspective without jumping in with theirs.'
    }
  },
  {
    id: 'res-5',
    title: 'Giving Constructive Peer Observations',
    track: 'Public Speaking',
    type: 'Session Notes',
    access: 'Community Members',
    readTime: 'Discussion Group',
    description: 'Framework notes on how to share honest, kindly delivered feedback in breakout rooms without judgment or vague praise.',
    content: {
      overview: 'Vague feedback ("You did great!") builds pleasant feelings but little skill. Harsh critique shuts people down. Kind and specific observations deliver pure growth.',
      keyPoints: [
        'Mirroring: "Here is what stuck with me most from your story: [exact detail]."',
        'The Pivot: "One micro-experiment you could try next round: let your punchline land with 2 seconds of silence."',
        'Avoid absolutes. Use personal reaction language ("When you paused, I felt leaned in").',
        'Focus on only ONE adjustment at a time.'
      ],
      practicalExercise: 'Practice offering 1 specific observation to your peer partner in the feedback round of today\'s session.',
      takeawayPrompt: 'Kindness and honesty are not opposites; clear, specific observations are the highest form of respect.'
    }
  },
  {
    id: 'res-6',
    title: 'Personal Conversation & Speaking Log',
    track: 'Reflection',
    type: 'Template',
    access: 'Public',
    readTime: 'Printable / Digital',
    description: 'A lightweight reflection sheet to track what felt natural during your live drills and identify 1 micro-habit to test in your next session.',
    content: {
      overview: 'Confidence solidifies through conscious reflection. Spend 3 minutes post-session filling out this simple tracker.',
      keyPoints: [
        'Drill Completed: Record date and session topic.',
        'What felt surprisingly natural today? Note one small victory.',
        'What physical sensation did I notice? (Breathing pace, voice projection, eye contact)',
        'My one micro-experiment for next session: e.g., pause calmly before speaking.'
      ],
      practicalExercise: 'Keep this simple log on your notepad or phone notes app after every session.',
      takeawayPrompt: 'Reviewing your log over time reveals how quickly hesitation turns into calm reflex.'
    }
  }
];

// Testimonials only populated if provided in CONFIG.TESTIMONIALS (empty by default)
export const TESTIMONIALS_DATA: TestimonialItem[] = CONFIG.TESTIMONIALS;

// Participants for Live Simulator using local images
export const SIMULATOR_PARTICIPANTS: Participant[] = [
  {
    id: 'p-1',
    name: 'You (Active Speaker)',
    avatar: '/images/speaker-active.jpg',
    role: 'Speaking Active',
    isSpeaking: true,
    isMuted: false
  },
  {
    id: 'p-2',
    name: 'Peer 1',
    avatar: '/images/peer-speaking-headset.jpg',
    role: 'Peer Listener',
    isSpeaking: false,
    isMuted: true
  },
  {
    id: 'p-3',
    name: 'Peer 2',
    avatar: '/images/peer-smiling-sweater.jpg',
    role: 'Peer Listener',
    isSpeaking: false,
    isMuted: true
  },
  {
    id: 'p-4',
    name: 'Peer 3',
    avatar: '/images/peer-attentive-listener.jpg',
    role: 'Peer Listener',
    isSpeaking: false,
    isMuted: true
  },
  {
    id: 'p-5',
    name: 'Peer 4',
    avatar: '/images/peer-participant-headscarf.jpg',
    role: 'Peer Listener',
    isSpeaking: false,
    isMuted: true
  },
  {
    id: 'p-6',
    name: 'Peer 5',
    avatar: '/images/peer-listening-1.jpg',
    role: 'Peer Listener',
    isSpeaking: false,
    isMuted: true
  },
  {
    id: 'p-7',
    name: 'Peer 6',
    avatar: '/images/peer-listening-2.jpg',
    role: 'Peer Listener',
    isSpeaking: false,
    isMuted: true
  }
];

export const PRACTICE_PROMPTS: string[] = [
  "Introduce yourself using a memorable everyday story rather than your resume.",
  "Pitch an ordinary object on your desk in 90 seconds using Past-Present-Future.",
  "Describe a time you completely changed your mind about something important.",
  "If you had to teach a complete beginner one life skill in 2 minutes, what would it be?",
  "Tell a story about an unexpected kindness from a stranger.",
  "Explain why your favorite hobby brings you genuine peace without using buzzwords."
];
