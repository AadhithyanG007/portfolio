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
      <div className="relative h-full rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl" />
        <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />
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
        <Icon className="w-6 h-6 text-amber-400 mb-3" />
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
      <Icon className="w-8 h-8 text-amber-400" />
    </motion.div>
  );
}

export default function AboutBento() {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* ===== LAMP SECTION - Integrated ===== */}
      <div className="relative flex flex-col items-center justify-center pt-20">
        {/* Lamp Light Effect */}
        <div className="relative flex w-full scale-y-125 items-center justify-center isolate z-0 h-[300px]">
          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto right-1/2 h-80 overflow-visible w-[30rem] bg-gradient-conic from-amber-200 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
          >
            <div className="absolute w-[100%] left-0 bg-black h-48 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
            <div className="absolute w-40 h-[100%] left-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto left-1/2 h-80 w-[30rem] bg-gradient-conic from-transparent via-transparent to-amber-200 text-white [--conic-position:from_290deg_at_center_top]"
          >
            <div className="absolute w-40 h-[100%] right-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
            <div className="absolute w-[100%] right-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          </motion.div>
          <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl"></div>
          <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
          <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-amber-100 opacity-40 blur-3xl"></div>
          <motion.div
            initial={{ width: "8rem" }}
            whileInView={{ width: "16rem" }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-amber-50 blur-2xl"
          />
          <motion.div
            initial={{ width: "15rem" }}
            whileInView={{ width: "30rem" }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-amber-100"
          />
          <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black"></div>
        </div>

        {/* Title - positioned to overlap lamp glow */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative z-50 -mt-16 mb-8 bg-gradient-to-br from-white to-neutral-400 bg-clip-text text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          About Me
        </motion.h2>
      </div>

      {/* ===== CONTINUOUS LIGHT SPILL INTO GRID ===== */}
      {/* Large ambient glow that connects lamp to grid */}
      <div className="absolute top-[200px] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-gradient-to-b from-amber-500/15 via-amber-500/5 to-transparent blur-[100px] rounded-full pointer-events-none" />

      {/* Secondary softer glow */}
      <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-400/10 blur-[150px] rounded-full pointer-events-none" />

      {/* ===== BENTO GRID ===== */}
      <div className="relative px-4 pb-20">
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
              <div className="relative h-full rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-8 overflow-hidden">
                {/* Lamp light reflection on card */}
                <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent rounded-3xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-3xl" />

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-6 shadow-lg shadow-amber-500/25"
                    >
                      <Sparkles className="w-6 h-6 text-black" />
                    </motion.div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      Hi, I&apos;m a{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400">
                        Full-Stack Developer
                      </span>
                    </h3>

                    <p className="text-white/60 text-lg leading-relaxed">
                      Currently pursuing B.Tech at{" "}
                      <span className="text-amber-300">FISAT</span>, I transform
                      ideas into scalable solutions. I believe in clean
                      architecture, security-first design, and writing code that
                      tells a story.
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-6">
                    <div className="flex -space-x-2">
                      {[SiReact, SiNodedotjs, SiTypescript].map((Icon, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center"
                        >
                          <Icon className="w-4 h-4 text-amber-300" />
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
              <GraduationCap className="w-6 h-6 text-amber-400 mb-3" />
              <h4 className="text-lg font-semibold text-white mb-1">
                B.Tech in Computer Science
              </h4>
              <p className="text-sm text-white/50">FISAT, Kerala</p>
              <p className="text-xs text-white/30 mt-1">2023 - 2027</p>
            </GlassCard>

            {/* Location Card */}
            <GlassCard delay={0.4}>
              <MapPin className="w-6 h-6 text-amber-400 mb-3" />
              <h4 className="text-lg font-semibold text-white mb-1">Kerala</h4>
              <p className="text-sm text-white/50">India 🇮🇳</p>
            </GlassCard>

            {/* Currently Learning Card */}
            <GlassCard delay={0.5} className="md:col-span-2 lg:col-span-2">
              <Terminal className="w-6 h-6 text-amber-400 mb-3" />
              <h4 className="text-lg font-semibold text-white mb-2">
                Currently Exploring
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Docker", "Kubernetes", "AWS", "WebRTC"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded-full bg-white/5 backdrop-blur text-amber-200/80 border border-amber-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>

            {/* Git Commits Card */}
            <GlassCard delay={0.6}>
              <GitBranch className="w-6 h-6 text-amber-400 mb-3" />
              <div className="text-3xl font-bold text-white">500+</div>
              <p className="text-sm text-white/50">Git Commits</p>
            </GlassCard>

            {/* Coffee Card */}
            <GlassCard delay={0.7}>
              <Coffee className="w-6 h-6 text-amber-400 mb-3" />
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
              <span className="text-amber-300 not-italic font-semibold">
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
