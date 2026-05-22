"use client";

import React, { useRef, useEffect } from "react";
import Atropos from "atropos/react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import "atropos/css";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  category?: string;
}

interface AtroposProjectsProps {
  title?: string;
  subtitle?: string;
  projects: Project[];
  className?: string;
  showViewAll?: boolean;
}

// Spotlight effect component
export const SpotlightCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = React.useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      className={cn("relative overflow-hidden", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(251, 191, 36, 0.12), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
};

// Single project card component
export const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Atropos
        className="w-full"
        shadow={false}
        highlight={false}
        rotateXMax={10}
        rotateYMax={10}
      >
        <SpotlightCard className="group h-full animate-fade-in">
          <div className="relative h-full rounded-2xl glass-dark overflow-hidden flex flex-col justify-between">
            {/* Core clickable card content linking to dedicated projects page */}
            <Link href="/projects" className="block cursor-pointer flex-1">
              {/* Image section */}
              <div
                className="relative h-48 overflow-hidden"
                data-atropos-offset="-3"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#E2B65C] text-black text-xs font-bold rounded-full shadow-lg shadow-[#E2B65C]/20">
                    FEATURED
                  </div>
                )}
              </div>

              {/* Content section */}
              <div className="p-6 pb-2" data-atropos-offset="5">
                {/* Tags */}
                <div
                  className="flex flex-wrap gap-2 mb-4"
                  data-atropos-offset="3"
                >
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium bg-[#FBBF24]/10 text-[#FBBF24] rounded-md border border-[#FBBF24]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold text-white mb-2 group-hover:text-[#FBBF24] transition-colors"
                  data-atropos-offset="8"
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className="text-white/60 text-sm mb-4 line-clamp-2"
                  data-atropos-offset="2"
                >
                  {project.description}
                </p>
              </div>
            </Link>

            {/* Links footer (not nested inside the main Link block to keep buttons separately active) */}
            <div className="p-6 pt-0" data-atropos-offset="10">
              <div className="flex items-center gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-[#FBBF24] transition-colors group/link"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-[#FBBF24] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                )}
              </div>
            </div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-t from-[#FBBF24]/5 to-transparent" />
            </div>
          </div>
        </SpotlightCard>
      </Atropos>
    </motion.div>
  );
};

export const AtroposProjects = ({
  title = "Featured Projects",
  subtitle = "A selection of my recent work",
  projects,
  className,
  showViewAll = true,
}: AtroposProjectsProps) => {
  return (
    <section
      className={cn(
        "relative w-full pt-24 pb-16 px-6 md:px-12 overflow-hidden",
        className,
      )}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 text-xs font-bold tracking-widest text-[#FBBF24] border border-[#FBBF24]/30 rounded-full bg-[#FBBF24]/5">
              PORTFOLIO
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {title.split(" ").map((word, i) => (
              <span key={i}>
                {i === 0 ? (
                  <span className="text-[#E2B65C]">{word} </span>
                ) : (
                  <span>{word} </span>
                )}
              </span>
            ))}
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View more button */}
        {showViewAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#E2B65C] text-black font-bold rounded-full hover:bg-[#d8a648] transition-colors group"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};
