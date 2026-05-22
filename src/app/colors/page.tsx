"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Sparkles,
  Github,
  Linkedin,
  Instagram,
  ChevronDown,
} from "lucide-react";

// Color schemes
const colorSchemes = [
  {
    name: "Amber (Current)",
    primary: "#fbbf24",
    primaryRgb: "251, 191, 36",
    tailwind: "amber",
    gradient: "from-amber-400 via-amber-500 to-amber-600",
    textGradient: "from-amber-400 to-amber-600",
  },
  {
    name: "Cyan / Teal",
    primary: "#22d3d3",
    primaryRgb: "34, 211, 211",
    tailwind: "cyan",
    gradient: "from-cyan-400 via-cyan-500 to-teal-600",
    textGradient: "from-cyan-400 to-teal-500",
  },
  {
    name: "Purple / Violet",
    primary: "#a855f7",
    primaryRgb: "168, 85, 247",
    tailwind: "purple",
    gradient: "from-purple-400 via-purple-500 to-violet-600",
    textGradient: "from-purple-400 to-violet-500",
  },
  {
    name: "Emerald",
    primary: "#34d399",
    primaryRgb: "52, 211, 153",
    tailwind: "emerald",
    gradient: "from-emerald-400 via-emerald-500 to-green-600",
    textGradient: "from-emerald-400 to-green-500",
  },
  {
    name: "Rose / Pink",
    primary: "#f472b6",
    primaryRgb: "244, 114, 182",
    tailwind: "pink",
    gradient: "from-pink-400 via-pink-500 to-rose-600",
    textGradient: "from-pink-400 to-rose-500",
  },
  {
    name: "Electric Blue",
    primary: "#3b82f6",
    primaryRgb: "59, 130, 246",
    tailwind: "blue",
    gradient: "from-blue-400 via-blue-500 to-blue-600",
    textGradient: "from-blue-400 to-blue-600",
  },
  {
    name: "Coral / Orange",
    primary: "#fb7185",
    primaryRgb: "251, 113, 133",
    tailwind: "rose",
    gradient: "from-rose-400 via-red-400 to-orange-500",
    textGradient: "from-rose-400 to-orange-500",
  },
  {
    name: "Lime",
    primary: "#a3e635",
    primaryRgb: "163, 230, 53",
    tailwind: "lime",
    gradient: "from-lime-400 via-lime-500 to-green-500",
    textGradient: "from-lime-400 to-green-500",
  },
];

// Mini hero preview component
const HeroPreview = ({
  scheme,
  isSelected,
  onSelect,
}: {
  scheme: (typeof colorSchemes)[0];
  isSelected: boolean;
  onSelect: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      onClick={onSelect}
      className={`relative cursor-pointer rounded-2xl overflow-hidden border-2 transition-all ${
        isSelected
          ? `border-[${scheme.primary}] shadow-lg`
          : "border-white/10 hover:border-white/20"
      }`}
      style={{
        borderColor: isSelected ? scheme.primary : undefined,
        boxShadow: isSelected ? `0 0 30px ${scheme.primary}40` : undefined,
      }}
    >
      {/* Selected indicator */}
      {isSelected && (
        <div
          className="absolute top-3 right-3 z-50 w-6 h-6 rounded-full flex items-center justify-center"
          style={{ backgroundColor: scheme.primary }}
        >
          <Check className="w-4 h-4 text-black" />
        </div>
      )}

      {/* Mini hero */}
      <div className="relative h-64 bg-black p-4 overflow-hidden">
        {/* Particles simulation */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                backgroundColor: scheme.primary,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Glowing orb */}
        <motion.div
          className="absolute w-32 h-32 rounded-full blur-3xl opacity-30"
          style={{ backgroundColor: scheme.primary, top: "-20%", left: "-10%" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(${scheme.primary}80 1px, transparent 1px),
                             linear-gradient(90deg, ${scheme.primary}80 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />

        {/* Header */}
        <div className="relative z-10 flex justify-between items-center text-[10px]">
          <span className="font-bold">
            <span style={{ color: scheme.primary }}>&lt;</span>
            portfolio
            <span style={{ color: scheme.primary }}>/&gt;</span>
          </span>
          <div className="flex gap-3 text-white/40">
            <span>HOME</span>
            <span>ABOUT</span>
            <span>WORK</span>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-between h-[calc(100%-60px)] mt-2">
          {/* Left text */}
          <div className="flex-1">
            <div
              className="inline-flex items-center gap-1 px-2 py-1 mb-2 rounded-full text-[8px]"
              style={{
                backgroundColor: `${scheme.primary}15`,
                border: `1px solid ${scheme.primary}30`,
                color: scheme.primary,
              }}
            >
              <Sparkles className="w-2 h-2" />
              Available
            </div>
            <p className="text-[8px] text-white/60 max-w-[100px]">
              B.Tech student building full-stack systems...
            </p>
            <button
              className="mt-2 px-3 py-1 rounded-full text-[8px] font-bold text-black"
              style={{ backgroundColor: scheme.primary }}
            >
              Explore →
            </button>
          </div>

          {/* Center image */}
          <div className="relative">
            {/* Rotating ring */}
            <motion.div
              className="absolute inset-0 w-20 h-20 rounded-full border opacity-30"
              style={{ borderColor: scheme.primary }}
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: scheme.primary }}
              />
            </motion.div>

            {/* Glow */}
            <div
              className="absolute inset-2 rounded-full blur-xl opacity-40"
              style={{ backgroundColor: scheme.primary }}
            />

            {/* Circle */}
            <div
              className={`w-16 h-16 rounded-full bg-gradient-to-br ${scheme.gradient} mx-auto`}
            />

            {/* Avatar placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-10 bg-black/30 rounded-full" />
            </div>
          </div>

          {/* Right text */}
          <div className="flex-1 text-right">
            <h1 className="text-xl font-black">
              <span className="text-white/90">code &</span>
              <br />
              <span
                className={`bg-gradient-to-r ${scheme.textGradient} bg-clip-text text-transparent`}
              >
                create.
              </span>
            </h1>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center">
          <div className="flex gap-1">
            {[Github, Linkedin, Instagram].map((Icon, i) => (
              <div key={i} className="w-4 h-4 flex items-center justify-center">
                <Icon className="w-2.5 h-2.5 text-white/40" />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1 text-[8px] text-white/40">
            <span className="w-1 h-1 bg-green-400 rounded-full" />
            Kerala, India
          </div>
        </div>
      </div>

      {/* Color info */}
      <div className="p-4 bg-white/5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-white">{scheme.name}</h3>
            <p className="text-xs text-white/40 font-mono">{scheme.primary}</p>
          </div>
          <div
            className="w-8 h-8 rounded-full"
            style={{ backgroundColor: scheme.primary }}
          />
        </div>
      </div>
    </motion.div>
  );
};

// Full preview section
const FullPreview = ({ scheme }: { scheme: (typeof colorSchemes)[0] }) => {
  return (
    <div className="relative h-[500px] rounded-3xl overflow-hidden border border-white/10">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        {/* Particles */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: scheme.primary,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 10 - 5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Glowing orbs */}
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: scheme.primary, top: "-20%", left: "-10%" }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full blur-3xl opacity-15"
          style={{
            backgroundColor: scheme.primary,
            bottom: "10%",
            right: "10%",
          }}
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(${scheme.primary}80 1px, transparent 1px),
                             linear-gradient(90deg, ${scheme.primary}80 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full p-8 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">
            <span style={{ color: scheme.primary }}>&lt;</span>
            portfolio
            <span style={{ color: scheme.primary }}>/&gt;</span>
          </span>
          <div className="flex gap-8 text-sm text-white/60">
            {["HOME", "ABOUT", "PROJECTS", "CONTACT"].map((item) => (
              <span
                key={item}
                className="hover:text-white cursor-pointer transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 grid grid-cols-3 gap-8 items-center py-8">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full text-sm"
              style={{
                backgroundColor: `${scheme.primary}15`,
                border: `1px solid ${scheme.primary}30`,
                color: scheme.primary,
              }}
            >
              <Sparkles className="w-4 h-4" />
              Available for work
            </motion.div>
            <p className="text-white/60 mb-6">
              B.Tech student passionate about building full-stack systems that
              solve real-world problems.
            </p>
            <button
              className="px-6 py-3 rounded-full font-bold text-black hover:opacity-90 transition-opacity"
              style={{ backgroundColor: scheme.primary }}
            >
              Explore My Work →
            </button>
          </div>

          {/* Center */}
          <div className="relative flex items-center justify-center">
            {/* Rotating ring */}
            <motion.div
              className="absolute w-48 h-48 rounded-full border opacity-30"
              style={{ borderColor: scheme.primary }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                style={{ backgroundColor: scheme.primary }}
              />
            </motion.div>

            <motion.div
              className="absolute w-56 h-56 rounded-full border border-dashed opacity-10"
              style={{ borderColor: scheme.primary }}
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />

            {/* Glow */}
            <motion.div
              className="absolute w-40 h-40 rounded-full blur-2xl opacity-40"
              style={{ backgroundColor: scheme.primary }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Main circle */}
            <div
              className={`w-36 h-36 rounded-full bg-gradient-to-br ${scheme.gradient} shadow-2xl`}
            />

            {/* Placeholder avatar */}
            <div className="absolute w-20 h-28 bg-black/40 rounded-t-full" />
          </div>

          {/* Right */}
          <div className="text-right">
            <h1 className="text-6xl font-black tracking-tighter">
              <span className="text-white/90">code &</span>
              <br />
              <span
                className={`bg-gradient-to-r ${scheme.textGradient} bg-clip-text text-transparent`}
              >
                create.
              </span>
            </h1>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            {[Github, Linkedin, Instagram].map((Icon, i) => (
              <motion.div
                key={i}
                className="p-2 text-white/40 hover:text-white transition-colors cursor-pointer"
                whileHover={{ scale: 1.2 }}
                style={{ color: undefined }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = scheme.primary)
                }
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                <Icon className="w-5 h-5" />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex flex-col items-center gap-1 text-white/40"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="text-xs tracking-widest">SCROLL</span>
            <ChevronDown
              className="w-4 h-4"
              style={{ color: scheme.primary }}
            />
          </motion.div>

          <div className="flex items-center gap-2 text-sm text-white/60">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Kerala, India
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ColorsDemo() {
  const [selectedScheme, setSelectedScheme] = useState(colorSchemes[0]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Color Scheme{" "}
            <span style={{ color: selectedScheme.primary }}>Preview</span>
          </h1>
          <p className="text-white/60 max-w-xl mx-auto">
            Click on any color scheme below to see how your portfolio would
            look. The full preview will update in real-time.
          </p>
        </motion.div>

        {/* Full Preview */}
        <motion.div
          key={selectedScheme.name}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: selectedScheme.primary }}
            />
            Full Preview: {selectedScheme.name}
          </h2>
          <FullPreview scheme={selectedScheme} />
        </motion.div>

        {/* Color Grid */}
        <div>
          <h2 className="text-xl font-bold mb-6">All Color Schemes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {colorSchemes.map((scheme, index) => (
              <motion.div
                key={scheme.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <HeroPreview
                  scheme={scheme}
                  isSelected={selectedScheme.name === scheme.name}
                  onSelect={() => setSelectedScheme(scheme)}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Apply button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-white/40 mb-4">
            Like what you see? Let me know which color scheme you want!
          </p>
          <div
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-black cursor-pointer hover:opacity-90 transition-opacity"
            style={{ backgroundColor: selectedScheme.primary }}
          >
            Apply {selectedScheme.name} Theme
          </div>
        </motion.div>

        {/* Back link */}
        <div className="text-center mt-8">
          <a
            href="/"
            className="text-white/40 hover:text-white transition-colors"
          >
            ← Back to Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}
