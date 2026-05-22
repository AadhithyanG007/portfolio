"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// Vanta effect will be loaded dynamically
declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

interface VantaHeroProps {
  logoText: string;
  navLinks: { label: string; href: string }[];
  mainText: string;
  readMoreLink: string;
  imageSrc: string;
  imageAlt: string;
  overlayText: {
    part1: string;
    part2: string;
  };
  socialLinks: { icon: LucideIcon; href: string }[];
  locationText: string;
  className?: string;
}

// Typewriter effect component
const TypewriterText = ({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, started]);

  return (
    <span>
      {displayText}
      {currentIndex < text.length && (
        <span className="animate-pulse text-amber-400">|</span>
      )}
    </span>
  );
};

// Helper component for navigation links
const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="text-sm font-medium tracking-widest text-white/60 transition-colors hover:text-amber-400"
  >
    {children}
  </a>
);

// Helper component for social media icons
const SocialIcon = ({
  href,
  icon: Icon,
}: {
  href: string;
  icon: LucideIcon;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white/60 transition-all hover:text-amber-400 hover:scale-110"
  >
    <Icon className="h-5 w-5" />
  </a>
);

export const VantaHero = ({
  logoText,
  navLinks,
  mainText,
  readMoreLink,
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locationText,
  className,
}: VantaHeroProps) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    const loadVanta = async () => {
      if (!vantaRef.current || vantaEffect) return;

      // Dynamically import THREE and Vanta
      const THREE = await import("three");
      window.THREE = THREE;

      // Load Vanta NET effect
      const VANTA = await import("vanta/dist/vanta.net.min");

      const effect = (VANTA as any).default({
        points: 12.0,
        maxDistance: 20.0,
        spacing: 18.0,
        showDots: true,
      });

      setVantaEffect(effect);
    };

    loadVanta();

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className={cn(
        "relative flex h-screen w-full flex-col items-center justify-between overflow-hidden bg-black text-white p-8 font-sans md:p-12",
        className,
      )}
    >
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 pointer-events-none z-10" />

      {/* Header */}
      <header className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold tracking-tighter"
        >
          <span className="text-amber-400">{logoText.split(" ")[0]}</span>
          <span className="text-white/80">
            {" "}
            {logoText.split(" ").slice(1).join(" ")}
          </span>
        </motion.div>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <NavLink href={link.href}>{link.label}</NavLink>
            </motion.div>
          ))}
        </nav>
      </header>

      {/* Main Content */}
      <main className="z-30 flex max-w-7xl flex-1 flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <TypewriterText text={mainText} delay={500} />
          </h1>
          <motion.a
            href={readMoreLink}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="mt-8 inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors group"
          >
            <span className="text-lg">Explore my work</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </motion.div>

        {/* Image with Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          {/* Glowing background */}
          <div className="absolute inset-0 bg-amber-400/30 blur-3xl rounded-full scale-110" />

          {/* Image container */}
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-amber-400/50 shadow-2xl shadow-amber-400/20">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-4 -right-4 bg-amber-400 text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg"
            >
              {overlayText.part1} {overlayText.part2}
            </motion.div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex items-center space-x-4"
        >
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="text-sm font-medium text-white/80"
        >
          📍 {locationText}
        </motion.div>
      </footer>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-xs tracking-widest">SCROLL</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};
