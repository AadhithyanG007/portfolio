const fs = require('fs');

const content = fs.readFileSync('details.md', 'utf8');

const infinityPools = `# 🧊 Infinity Pools

A premium swimming pool construction and maintenance landing page focusing on cinematic scrolling and high-end glassmorphism design.

## ✨ Features

- **Cinematic Inertia-Based Smooth Scrolling** using Lenis for an ultra-premium feel.
- **🧊 Custom Glassmorphism UI System** with subtle blurs, transparency, and deep contrast.
- **Interactive 3D Elements and Overlays** powered by Framer Motion.
- **Premium Dark Mode Aesthetics** for high-end clients.
- **Responsive Fluid Typography & Layouts**.

## 🛠️ Tech Stack

- **Next.js** for SSR and performance optimization.
- **Framer Motion** for micro-animations and page transitions.
- **Tailwind CSS** for rapid responsive styling.
- **Lenis** for smooth scroll interpolation.
`;

const soonDetails = `# ⏱️ SOON

Something Out Of Nothing – A hybrid Android team showcase app with a digital roster, task logging, and gamified points system.

## ✨ Features

- **Interactive Team Digital Roster** with profile views.
- **Task Logging and Management System**.
- **Gamified Points & Leaderboard Integration** to boost productivity.
- **Team Media Gallery** for internal team achievements.
- **Hybrid Mobile Deployment via Capacitor**.

## 🛠️ Tech Stack

- **React + Vite** for blazing-fast frontend development.
- **Capacitor** to wrap the web app into a native Android APK.
- **Cloudflare Pages** for global edge hosting.
- **Tailwind CSS** for UI.
`;

const portfolioDetails = `# 🚀 Portfolio Website

My personal developer portfolio designed to showcase my projects, skills, and experience with a highly cinematic and interactive UI.

## ✨ Features

- **Unified Global Parallax Background**.
- **Atropos.js 3D Hover Interactions** on all cards.
- **Advanced Framer Motion Orchestration** for staggered loading and page transitions.
- **Responsive Glassmorphic Bento Grid**.
- **Interactive Orbital Skills Timeline**.

## 🛠️ Tech Stack

- **Next.js**.
- **Framer Motion**.
- **Three.js**.
- **TypeScript**.
- **Tailwind CSS**.
`;

const tsContent = `
export const medinexusDetails = \`${content.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;
export const infinityPoolsDetails = \`${infinityPools.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;
export const soonDetails = \`${soonDetails.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;
export const portfolioDetails = \`${portfolioDetails.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;
`;

fs.writeFileSync('src/data/detailedDescriptions.ts', tsContent);
