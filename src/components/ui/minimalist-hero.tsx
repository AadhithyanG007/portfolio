"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { LucideIcon, ChevronDown, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Define the props interface for type safety and reusability
interface MinimalistHeroProps {
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

// ParticleField removed

// Typewriter effect
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
      }, 40);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, started]);

  return (
    <span>
      {displayText}
      {currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="text-[#FBBF24]"
        >
          |
        </motion.span>
      )}
    </span>
  );
};

// Magnetic effect hook
const useMagnetic = () => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set((e.clientX - centerX) * 0.2);
      y.set((e.clientY - centerY) * 0.2);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [x, y]);

  return { ref, x: springX, y: springY };
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
    className="relative text-sm font-medium tracking-widest text-white/60 transition-all hover:text-[#FBBF24] group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FBBF24] transition-all group-hover:w-full" />
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
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="relative p-2 text-white/60 transition-all hover:text-[#FBBF24] group"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon className="h-5 w-5 relative z-10" />
    <span className="absolute inset-0 bg-[#FBBF24]/10 rounded-full scale-0 group-hover:scale-100 transition-transform" />
  </motion.a>
);

// GlowingOrb removed

// The main reusable Hero Section component
export const MinimalistHero = ({
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
}: MinimalistHeroProps) => {
  const magnetic = useMagnetic();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={cn(
        "relative flex h-screen w-full flex-col items-center justify-between overflow-hidden bg-transparent text-white p-8 font-sans md:p-12",
        className,
      )}
    >
      {/* Fixed Glass Navbar */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-black/10 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12 flex items-center justify-between transition-all duration-300">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold tracking-wider"
          >
            <span className="text-[#FBBF24]">&lt;</span>
            {logoText}
            <span className="text-[#FBBF24]">/&gt;</span>
          </motion.div>
          <nav className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <NavLink href={link.href}>{link.label}</NavLink>
              </motion.div>
            ))}
          </nav>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-1.5 md:hidden group"
            aria-label="Open menu"
          >
            <span className="block h-0.5 w-6 bg-white group-hover:bg-[#FBBF24] transition-colors"></span>
            <span className="block h-0.5 w-6 bg-white group-hover:bg-[#FBBF24] transition-colors"></span>
            <span className="block h-0.5 w-5 bg-white group-hover:bg-[#FBBF24] transition-colors"></span>
          </motion.button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="relative z-20 grid w-full max-w-7xl flex-grow grid-cols-1 items-center gap-8 md:grid-cols-2 lg:grid-cols-3 pt-24">
        {/* Left - Main headline & CTA */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="z-20 order-2 md:order-1 text-center md:text-left lg:col-span-1"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/20"
          >
            <Sparkles className="w-4 h-4 text-[#FBBF24]" />
            <span className="text-sm text-[#E2B65C] font-medium">
              Available for work
            </span>
          </motion.div>

          <h2 className="text-lg md:text-xl text-white/60 mb-4 font-light">
            <TypewriterText text={mainText} delay={800} />
          </h2>

          <motion.a
            href={readMoreLink}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.5 }}
            className="group inline-flex items-center gap-3 mt-6 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white text-sm uppercase tracking-widest hover:bg-white/10 hover:border-[#FBBF24]/50 hover:text-[#FBBF24] transition-all duration-500 backdrop-blur-md"
          >
            <span>Explore My Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>

        {/* Center - Profile Image with effects */}
        <motion.div
          ref={magnetic.ref}
          style={{ x: magnetic.x, y: magnetic.y }}
          className="relative order-1 md:order-2 flex justify-center items-center h-full lg:col-span-1"
        >
          {/* Rotating ring */}
          <motion.div
            className="absolute w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[420px] lg:h-[420px] rounded-full border border-[#E2B65C]/20 pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            }}
          >
            {/* Orbiting dots */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#FBBF24] rounded-full shadow-[0_0_10px_#FBBF24]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-[#FBBF24]/50 rounded-full" />
          </motion.div>

          {/* Secondary rotating ring */}
          <motion.div
            className="absolute w-[320px] h-[320px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] rounded-full border border-dashed border-[#FBBF24]/10 pointer-events-none"
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />

          {/* Main circle */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="absolute z-[1] w-[240px] h-[240px] md:w-[300px] md:h-[300px] lg:w-[360px] lg:h-[360px] rounded-full bg-gradient-to-br from-[#E2B65C]/20 via-[#F59E0B]/10 to-[#02050a] shadow-2xl shadow-[#E2B65C]/30 pointer-events-none backdrop-blur-sm border border-[#E2B65C]/10"
            style={{
              transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
            }}
          />

          {/* Profile image */}
          <motion.img
            src={imageSrc}
            alt={imageAlt}
            className="relative z-10 h-auto w-48 md:w-56 lg:w-64 object-cover scale-[1.6] drop-shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            style={{
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) scale(1.6)`,
            }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = `https://placehold.co/400x600/E2B65C/ffffff?text=Image+Not+Found`;
            }}
          />
        </motion.div>

        {/* Right - Big text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="z-20 order-3 flex items-center justify-center text-center md:justify-end lg:col-span-1"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter">
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {overlayText.part1}
            </motion.span>
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-[#E2B65C] via-[#f9dfa4] to-[#E2B65C]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              {overlayText.part2}
            </motion.span>
          </h1>
        </motion.div>
      </div>

      {/* Footer Elements */}
      <footer className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex items-center space-x-2"
        >
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} />
          ))}
        </motion.div>



        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="flex items-center gap-2 text-sm font-medium text-white/60"
        >
          <span className="w-2 h-2 bg-[#FBBF24] rounded-full animate-ping" />
          {locationText}
        </motion.div>
      </footer>
    </div>
  );
};
