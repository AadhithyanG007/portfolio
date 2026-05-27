"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  GraduationCap,
  Rocket,
  Code2,
  Coffee,
  Sparkles,
  Terminal,
  GitBranch,
} from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiDocker,
  SiKubernetes,
  SiTypescript,
} from "react-icons/si";
import { GlowingEffect } from "./glowing-effect";

// Animated counter hook
function useCounter(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return { count, ref };
}

// Glass Card wrapper with glowing effect
function GlassCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`relative rounded-2xl ${className}`}
    >
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />
      <div className="relative h-full rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl pointer-events-none" />
        <div className="relative z-10 h-full">{children}</div>
      </div>
    </motion.div>
  );
}

// Stat Card Component
function StatCard({
  value,
  label,
  suffix = "",
  icon: Icon,
  delay = 0,
}: {
  value: number;
  label: string;
  suffix?: string;
  icon: React.ElementType;
  delay?: number;
}) {
  const { count, ref } = useCounter(value);

  return (
    <div ref={ref}>
      <GlassCard delay={delay} className="h-full">
        <Icon className="w-6 h-6 text-[#FBBF24] mb-3" />
        <div className="text-4xl md:text-5xl font-bold text-white mb-1">
          {count}
          {suffix}
        </div>
        <div className="text-sm text-white/50 uppercase tracking-wider">
          {label}
        </div>
      </GlassCard>
    </div>
  );
}

// Floating icons for background
function FloatingIcon({
  icon: Icon,
  className,
  delay = 0,
}: {
  icon: React.ElementType;
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.08, y: [0, -10, 0] }}
      transition={{
        opacity: { duration: 1, delay },
        y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay },
      }}
      className={className}
    >
      <Icon className="w-8 h-8 text-[#F59E0B]" />
    </motion.div>
  );
}

export default function AboutBento() {
  return (
    <section className="relative w-full bg-transparent overflow-hidden z-10 py-24">
      {/* ===== TITLE SECTION ===== */}
      <div className="relative flex flex-col items-center justify-center pt-24 pb-8">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative z-50 bg-gradient-to-br from-white to-neutral-400 bg-clip-text text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          About Me
        </motion.h2>
      </div>

      {/* ===== BENTO GRID ===== */}
      <div className="relative px-4 pb-20 z-10">
        {/* Floating background icons */}
        <FloatingIcon
          icon={SiReact}
          className="absolute top-20 left-[10%]"
          delay={0}
        />
        <FloatingIcon
          icon={SiNodedotjs}
          className="absolute top-40 right-[15%]"
          delay={0.5}
        />
        <FloatingIcon
          icon={SiDocker}
          className="absolute bottom-40 left-[20%]"
          delay={1}
        />
        <FloatingIcon
          icon={SiTypescript}
          className="absolute bottom-20 right-[10%]"
          delay={1.5}
        />
        <FloatingIcon
          icon={SiKubernetes}
          className="absolute top-1/2 left-[5%]"
          delay={2}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[180px]">
            {/* Main Bio Card - Large */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 lg:col-span-3 row-span-2 relative rounded-3xl"
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <div className="relative h-full rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-8 overflow-hidden">
                {/* Light reflection on card */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#F59E0B]/10 via-transparent to-transparent rounded-3xl pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-3xl pointer-events-none" />

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E2B65C] to-[#FBBF24] flex items-center justify-center mb-6 shadow-lg shadow-[#E2B65C]/25"
                    >
                      <Sparkles className="w-6 h-6 text-black" />
                    </motion.div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      Hi, I&apos;m a{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E2B65C] to-[#FBBF24]">
                        Full-Stack Developer
                      </span>
                    </h3>

                    <p className="text-white/60 text-lg leading-relaxed">
                      Currently pursuing B.Tech at{" "}
                      <span className="text-[#E2B65C] font-semibold">
                        FISAT
                      </span>
                      , I transform ideas into scalable solutions. I believe in
                      clean architecture, security-first design, and writing
                      code that tells a story.
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-6">
                    <div className="flex -space-x-2">
                      {[SiReact, SiNodedotjs, SiTypescript].map((Icon, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center"
                        >
                          <Icon className="w-4 h-4 text-[#FBBF24]" />
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-white/40">
                      Primary Stack: MERN
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats Cards */}
            <div className="md:col-span-2 lg:col-span-3 grid grid-cols-2 gap-4">
              <StatCard
                value={10}
                suffix="+"
                label="Projects Built"
                icon={Rocket}
                delay={0.1}
              />
              <StatCard
                value={15}
                suffix="+"
                label="Technologies"
                icon={Code2}
                delay={0.2}
              />
            </div>

            {/* Education Card */}
            <GlassCard delay={0.3} className="md:col-span-2 lg:col-span-2">
              <GraduationCap className="w-6 h-6 text-[#E2B65C] mb-3" />
              <h4 className="text-lg font-semibold text-white mb-1">
                B.Tech in Computer Science
              </h4>
              <p className="text-sm text-white/50">FISAT, Kerala</p>
              <p className="text-xs text-white/30 mt-1">2023 - 2027</p>
            </GlassCard>

            {/* Location Card */}
            <GlassCard delay={0.4}>
              <MapPin className="w-6 h-6 text-[#E2B65C] mb-3" />
              <h4 className="text-lg font-semibold text-white mb-1">Kerala</h4>
              <p className="text-sm text-white/50">India 🇮🇳</p>
            </GlassCard>

            {/* Currently Learning Card */}
            <GlassCard delay={0.5} className="md:col-span-2 lg:col-span-2">
              <Terminal className="w-6 h-6 text-[#FBBF24] mb-3" />
              <h4 className="text-lg font-semibold text-white mb-2">
                Currently Exploring
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Docker", "Kubernetes", "AWS", "WebRTC"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded-full bg-white/5 backdrop-blur text-[#FBBF24]/90 border border-[#FBBF24]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>

            {/* Git Commits Card */}
            <GlassCard delay={0.6}>
              <GitBranch className="w-6 h-6 text-[#FBBF24] mb-3" />
              <div className="text-3xl font-bold text-white">120+</div>
              <p className="text-sm text-white/50">Git Commits</p>
            </GlassCard>

            {/* Coffee Card */}
            <GlassCard delay={0.7}>
              <Coffee className="w-6 h-6 text-[#FBBF24] mb-3" />
              <div className="text-3xl font-bold text-white">∞</div>
              <p className="text-sm text-white/50">Cups of Coffee</p>
            </GlassCard>
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-xl md:text-2xl text-white/40 italic">
              &quot;Building software that makes a{" "}
              <span className="text-[#E2B65C] not-italic font-semibold">
                difference
              </span>
              , one commit at a time.&quot;
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
