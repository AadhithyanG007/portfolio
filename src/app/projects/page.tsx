"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Sparkles, Filter } from "lucide-react";
import Link from "next/link";
import { ProjectCard, Project } from "@/components/ui/atropos-projects";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full-Stack" },
    { id: "realtime", label: "Real-time" },
    { id: "frontend", label: "Front-End / UI" },
  ];

  // List of all projects with their assigned category filters
  const allProjects: Project[] = [
    {
      id: 1,
      title: "MediNexus",
      description:
        "Secure Enterprise Telemedicine Platform with Zero-Trust Authentication, Role-Based Access Control, and Split-Screen Video Consultation for seamless healthcare delivery.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      tags: ["MERN", "PostgreSQL", "JWT", "REST APIs", "Tailwind"],
      liveUrl: "#",
      githubUrl: "https://github.com/AadhithyanG007",
      featured: true,
      category: "fullstack",
    },
    {
      id: 2,
      title: "SOON",
      description:
        "Something Out Of Nothing – A hybrid Android team showcase app with digital roster, task logging, gamified points system, and team gallery built with modern web technologies.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      tags: ["React", "Vite", "Capacitor", "Cloudflare Pages"],
      liveUrl: "#",
      githubUrl: "https://github.com/AadhithyanG007",
      featured: true,
      category: "realtime",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "This very website! Built with Next.js, Framer Motion, and Tailwind CSS with stunning 3D animations, particle effects, and WebGL light rays.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tags: ["Next.js", "Framer Motion", "Three.js", "TypeScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/AadhithyanG007",
      featured: false,
      category: "frontend",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#02050a] text-white py-16 px-6 md:px-12 relative overflow-hidden font-sans">
      {/* Immersive Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#FBBF24]/5 rounded-full blur-[150px]" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-[#E2B65C]/5 rounded-full blur-[150px]" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(245, 158, 11, 0.2) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(245, 158, 11, 0.2) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Navbar Actions */}
        <div className="flex justify-between items-center mb-16">
          <Link
            href="/"
            className="group flex items-center gap-3 px-5 py-2.5 rounded-full glass hover:border-[#FBBF24]/30 text-white/80 hover:text-white transition-all text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          <div className="hidden sm:flex items-center gap-2 text-xs font-bold tracking-widest text-[#FBBF24] border border-[#FBBF24]/30 rounded-full bg-[#FBBF24]/5 px-4 py-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ARCHIVE v1.0</span>
          </div>
        </div>

        {/* Page Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold tracking-tight mb-4"
          >
            <span className="text-[#E2B65C]">All </span>
            <span>Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            A filterable showcase of my engineering builds, dynamic front-ends, and architectural full-stack platforms.
          </motion.p>
        </div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-16 max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-2 text-white/40 mr-2 text-sm">
            <Filter className="w-4 h-4" />
            <span>Filter:</span>
          </div>
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 border ${
                  isActive
                    ? "bg-gradient-to-r from-[#E2B65C] to-[#FBBF24] text-[#02050a] font-semibold border-transparent shadow-lg shadow-[#FBBF24]/20"
                    : "glass text-white/60 hover:text-white hover:border-[#FBBF24]/40"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </motion.div>

        {/* Projects Grid with AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[350px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/40 text-lg">No projects match the selected category.</p>
          </div>
        )}
      </div>
    </main>
  );
}
