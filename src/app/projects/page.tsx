"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Sparkles, Filter } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "@/components/ui/atropos-projects";
import { projects as allProjects } from "@/data/projects";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full-Stack" },
    { id: "realtime", label: "Real-time" },
    { id: "frontend", label: "Front-End / UI" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-transparent text-white py-16 px-6 md:px-12 relative overflow-hidden font-sans">

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Navbar Actions */}
        <div className="flex justify-between items-center mb-16">
          <Link
            href="/"
            className="group flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:border-[#FBBF24]/30 text-white/80 hover:text-white transition-all text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          <div className="hidden sm:flex items-center gap-2 text-xs font-bold tracking-widest text-[#FBBF24] border border-[#FBBF24]/30 rounded-full bg-[#FBBF24]/5 px-4 py-2 opacity-0 pointer-events-none">
            {/* Spacer to keep flex layout balanced */}
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
