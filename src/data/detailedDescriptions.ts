export type ProjectDetailEntry = {
  title: string;
  summary: string;
  highlights: string[];
  buildNotes: string[];
  techStack: string[];
};

export const projectDetails: Record<string, ProjectDetailEntry> = {
  medinexus: {
    title: "MediNexus - Secure Telemedicine Platform",
    summary:
      "A full-stack telemedicine platform with secure video consultations, AI health guidance, real-time messaging, lab report workflows, prescriptions, and role-based dashboards. The experience is governed by strict time windows, audit logging, and OTP-based recovery across patient, doctor, and admin surfaces.",
    highlights: [
      "24/7 appointment booking with grouped slots and spacing validation",
      "P2P WebRTC video calls with clinical notes, prescriptions, and auto-close logic",
      "AI chat assistant for symptom severity and guidance",
      "Inline PDF lab reports, uploads, and dedicated prescription workflows",
      "Governance with audit logs, access control, and rate limiting",
      "Load testing readiness with resilient cron workers",
    ],
    buildNotes: [
      "Doctor dashboard supports queue management, reschedules, and live status control.",
      "Patient dashboard enforces payment gating and strict join windows.",
      "Admin console centralizes doctor and patient management with audit trails.",
    ],
    techStack: [
      "React + TypeScript + Tailwind CSS",
      "Node.js + Express + PostgreSQL (Neon)",
      "PeerJS WebRTC, Stripe Checkout, Groq AI",
      "Brevo Email API, JWT auth, Helmet headers",
    ],
  },
  "infinity-pools": {
    title: "Infinity Pools - Luxury Pool Showcase",
    summary:
      "A premium digital showcase for a luxury pool construction studio, designed to feel cinematic and tactile. The UI blends dark, aquatic palettes with scroll-driven motion, glassmorphism, and immersive 3D water visuals to convey high-end craftsmanship.",
    highlights: [
      "Interactive 3D water scene with custom shaders and atmospheric lighting",
      "Scroll-driven zoom parallax galleries with high-res local portfolio assets",
      "Motion masonry layout mixing autoplaying MP4s with premium imagery",
      "Team portraits with hover-driven micro-interactions",
      "24/7 availability pulse badges and refined contact surfaces",
    ],
    buildNotes: [
      "Luxurious dark theme with HSL token system and brass accents.",
      "Lenis smooth scrolling and Framer Motion orchestration for cinematic flow.",
      "Custom Google Maps embed tuned for greyscale luxury styling.",
    ],
    techStack: [
      "React + TypeScript + Vite",
      "Tailwind CSS + Framer Motion",
      "Three.js + React Three Fiber + Drei",
      "Lenis smooth scrolling + Lucide icons",
    ],
  },
  soon: {
    title: "SOON - Team Showcase App",
    summary:
      "A hybrid Android team showcase designed for transparent collaboration. It ships a digital roster, secure task logging, a points leaderboard, and a media gallery to celebrate milestones inside a mobile-first interface.",
    highlights: [
      "Interactive team roster with profile drill-downs",
      "Task logging workflow with activity visibility",
      "Gamified points and leaderboard to reinforce progress",
      "Team media gallery for milestones and recognition",
      "Hybrid deployment pipeline for Android distribution",
    ],
    buildNotes: [
      "Optimized for mobile-first layouts and quick scanning.",
      "Packaged as a web-to-native experience via Capacitor.",
      "Designed for internal teams and fast iteration cycles.",
    ],
    techStack: [
      "React + TypeScript + Vite",
      "Capacitor for Android packaging",
      "Cloudflare Pages hosting",
      "Tailwind CSS UI system",
    ],
  },
  portfolio: {
    title: "Portfolio Website",
    summary:
      "A cinematic portfolio experience showcasing projects, skills, and case studies with immersive motion, glassmorphic surfaces, and a unified visual system built for high-impact presentation.",
    highlights: [
      "Unified parallax background and layered atmosphere",
      "3D hover interactions for project cards",
      "Advanced motion orchestration for page transitions",
      "Responsive glassmorphic bento layouts",
      "Orbital skills timeline with interactive cues",
    ],
    buildNotes: [
      "Built as a Next.js app with composable UI sections.",
      "Designed for both desktop impact and mobile clarity.",
      "Performance-friendly animations with GPU acceleration.",
    ],
    techStack: [
      "Next.js + TypeScript",
      "Framer Motion + Three.js",
      "Tailwind CSS styling system",
    ],
  },
};
