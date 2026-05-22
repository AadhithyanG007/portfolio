"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function UnifiedBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#000000]">
      {/* Dynamic Parallax Orbs */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-[#F59E0B]/5 rounded-full blur-[120px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-[#FBBF24]/5 rounded-full blur-[100px]"
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[60%] left-[30%] w-[400px] h-[400px] bg-[#E2B65C]/5 rounded-full blur-[80px]"
      />

      {/* Grid pattern overlay (subtle) */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(245, 158, 11, 0.2) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(245, 158, 11, 0.2) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Mouse-follow glow */}
      <div
        className="absolute inset-0 z-[1] opacity-30 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(245, 158, 11, 0.08), transparent 50%)`,
        }}
      />
    </div>
  );
}
