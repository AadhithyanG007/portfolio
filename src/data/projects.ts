import { medinexusDetails, infinityPoolsDetails, soonDetails, portfolioDetails } from "./detailedDescriptions";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  category?: string;
}

export const projects: Project[] = [
  {
    id: "medinexus",
    title: "MediNexus",
    description: "Secure Enterprise Telemedicine Platform with Zero-Trust Authentication, Role-Based Access Control, and Split-Screen Video Consultation.",
    longDescription: medinexusDetails,
    features: [
      "24/7 Appointment Booking with Grouped Time Slots",
      "Real-time P2P Video Calls via PeerJS WebRTC",
      "🤖 MediBot AI Chat powered by Groq (Llama 3.3 70B)",
      "💬 In-App Real-time messaging with unread notification dots",
      "📋 Health Records & Inline PDF Lab Report Viewer",
      "💊 Dedicated Prescriptions Tab with browser notifications",
      "💳 Payment Processing via official Stripe Checkout Gateway",
      "👨‍⚕️ Clinical Console for Doctor Notes and Prescriptions",
      "📅 Interactive Doctor Leave Calendar",
      "🛡️ Admin Panel for Doctor/Patient Management & Audit Logs"
    ],
    image: "/MedinexusSS.png",
    tags: ["MERN", "PostgreSQL", "JWT", "REST APIs", "Tailwind", "WebRTC"],
    liveUrl: "https://medinexus-sandy.vercel.app/",
    githubUrl: "https://github.com/AadhithyanG007/Medinexus",
    featured: true,
    category: "fullstack",
  },
  {
    id: "infinity-pools",
    title: "Infinity Pools",
    description: "Premium Swimming Pool Construction & Maintenance landing page featuring cinematic scrolling and glassmorphism design.",
    longDescription: infinityPoolsDetails,
    features: [
      "Cinematic Inertia-Based Smooth Scrolling",
      "🧊 Custom Glassmorphism UI System",
      "Interactive 3D Elements and Overlays",
      "Premium Dark Mode Aesthetics",
      "Responsive Fluid Typography & Layouts"
    ],
    image: "/infinityPoolsSS.png",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "Lenis", "React"],
    liveUrl: "https://www.infintypools.com/",
    githubUrl: "",
    featured: true,
    category: "frontend",
  },
  {
    id: "soon",
    title: "SOON",
    description: "Something Out Of Nothing – A hybrid Android team showcase app with digital roster, task logging, and gamified points system.",
    longDescription: soonDetails,
    features: [
      "Interactive Team Digital Roster",
      "Task Logging and Management System",
      "Gamified Points & Leaderboard Integration",
      "Team Media Gallery",
      "Hybrid Mobile Deployment via Capacitor"
    ],
    image: "/SoonSS.png",
    tags: ["React", "Vite", "Capacitor", "Cloudflare Pages", "Tailwind"],
    liveUrl: "https://soon-cez.pages.dev/",
    githubUrl: "https://github.com/AadhithyanG007",
    featured: true,
    category: "realtime",
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description: "This very website! Built with Next.js, Framer Motion, and Tailwind CSS with stunning animations and a unified glassmorphic system.",
    longDescription: portfolioDetails,
    features: [
      "Unified Global Parallax Background",
      "Atropos.js 3D Hover Interactions",
      "Advanced Framer Motion Orchestration",
      "Responsive Glassmorphic Bento Grid",
      "Interactive Orbital Skills Timeline"
    ],
    image: "/portfolioSS.png",
    tags: ["Next.js", "Framer Motion", "Three.js", "TypeScript", "Tailwind"],
    liveUrl: "/",
    githubUrl: "https://github.com/AadhithyanG007",
    featured: false,
    category: "frontend",
  },
];
