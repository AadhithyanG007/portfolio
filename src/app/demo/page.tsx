"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

// Sample project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and real-time inventory management.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "AI Chat Application",
    description: "Real-time chat app with AI-powered responses and sentiment analysis.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    tech: ["React", "OpenAI", "Socket.io", "Node.js"],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Portfolio Dashboard",
    description: "Analytics dashboard for tracking investments and market trends.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tech: ["Vue.js", "D3.js", "Python", "FastAPI"],
    github: "#",
    live: "#",
  },
  {
    id: 4,
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    tech: ["React", "Redux", "Firebase", "Tailwind"],
    github: "#",
    live: "#",
  },
];

// ============ STYLE 1: Hover Cards Grid ============
function HoverCardsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.slice(0, 3).map((project) => (
        <motion.div
          key={project.id}
          className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10"
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 border-2 border-amber-400/0 group-hover:border-amber-400/50 rounded-2xl transition-all duration-300" />
          
          <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
          
          <div className="p-5 relative z-10">
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-white/60 text-sm mb-4 line-clamp-2">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span key={t} className="px-2 py-1 bg-amber-400/10 text-amber-300 text-xs rounded-full">
                  {t}
                </span>
              ))}
            </div>
            
            <div className="flex gap-3">
              <a href={project.github} className="text-white/60 hover:text-amber-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href={project.live} className="text-white/60 hover:text-amber-400 transition-colors">
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ============ STYLE 2: Stacked Cards Scroll ============
function StackedCards() {
  return (
    <div className="relative space-y-4">
      {projects.slice(0, 3).map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-white/5 to-white/[0.02] rounded-2xl p-6 border border-white/10 hover:border-amber-400/30 transition-all"
          style={{ marginLeft: `${index * 20}px` }}
        >
          <div className="flex gap-6">
            <img src={project.image} alt={project.title} className="w-32 h-24 object-cover rounded-lg" />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-white/60 text-sm mb-3">{project.description}</p>
              <div className="flex gap-2">
                {project.tech.slice(0, 3).map((t) => (
                  <span key={t} className="px-2 py-1 bg-amber-400/10 text-amber-300 text-xs rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ============ STYLE 3: Spotlight Gallery ============
function SpotlightGallery() {
  const [hovered, setHovered] = useState<number | null>(null);
  
  return (
    <div className="space-y-6">
      {/* Featured */}
      <motion.div
        className="relative rounded-2xl overflow-hidden group cursor-pointer"
        onHoverStart={() => setHovered(0)}
        onHoverEnd={() => setHovered(null)}
      >
        <img src={projects[0].image} alt={projects[0].title} className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        
        {/* Spotlight effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background: hovered === 0 
              ? "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(251,191,36,0.3) 0%, transparent 50%)"
              : "none"
          }}
        />
        
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className="text-amber-400 text-sm font-medium mb-2 block">Featured Project</span>
          <h3 className="text-2xl font-bold text-white mb-2">{projects[0].title}</h3>
          <p className="text-white/70">{projects[0].description}</p>
        </div>
      </motion.div>
      
      {/* Grid */}
      <div className="grid grid-cols-3 gap-4">
        {projects.slice(1, 4).map((project, i) => (
          <motion.div
            key={project.id}
            className="relative rounded-xl overflow-hidden group cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-32 object-cover" />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h4 className="text-white font-semibold text-center px-2">{project.title}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ============ STYLE 4: Timeline Flow ============
function TimelineFlow() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 via-amber-400/50 to-transparent" />
      
      {projects.slice(0, 3).map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={`relative flex items-center gap-8 mb-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
        >
          <div className="w-1/2 p-4">
            <div className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-amber-400/30 transition-all">
              <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
              <p className="text-white/60 text-sm mb-3">{project.description}</p>
              <div className="flex gap-2">
                {project.tech.slice(0, 2).map((t) => (
                  <span key={t} className="px-2 py-1 bg-amber-400/10 text-amber-300 text-xs rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Center dot */}
          <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-amber-400 rounded-full border-4 border-black z-10">
            <div className="absolute inset-0 bg-amber-400 rounded-full animate-ping opacity-30" />
          </div>
          
          <div className="w-1/2" />
        </motion.div>
      ))}
    </div>
  );
}

// ============ STYLE 5: 3D Card Flip ============
function CardFlip() {
  const [flipped, setFlipped] = useState<number | null>(null);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.slice(0, 3).map((project) => (
        <div
          key={project.id}
          className="relative h-64 cursor-pointer perspective-1000"
          onClick={() => setFlipped(flipped === project.id ? null : project.id)}
        >
          <motion.div
            className="relative w-full h-full"
            animate={{ rotateY: flipped === project.id ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Front */}
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden backface-hidden"
              style={{ backfaceVisibility: "hidden" }}
            >
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-amber-400 text-sm">Click to flip</p>
              </div>
            </div>
            
            {/* Back */}
            <div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-900/30 to-black border border-amber-400/30 p-6 flex flex-col justify-center"
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-white/70 text-sm mb-4">{project.description}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-1 bg-amber-400/20 text-amber-300 text-xs rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

// ============ STYLE 6: Masonry Layout ============
function MasonryLayout() {
  const heights = [280, 200, 240, 320];
  
  return (
    <div className="columns-2 md:columns-3 gap-4 space-y-4">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="break-inside-avoid group"
        >
          <div
            className="relative rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-amber-400/30 transition-all"
            style={{ height: heights[index % 4] }}
          >
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
              <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
              <p className="text-white/70 text-sm line-clamp-2">{project.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ============ STYLE 7: Carousel Slider ============
function CarouselSlider() {
  const [current, setCurrent] = useState(0);
  
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex"
        animate={{ x: `-${current * 100}%` }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {projects.map((project) => (
          <div key={project.id} className="w-full flex-shrink-0 px-4">
            <div className="relative rounded-2xl overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-72 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/70 mb-4">{project.description}</p>
                <div className="flex gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-amber-400/20 text-amber-300 text-sm rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      
      {/* Navigation */}
      <button
        onClick={() => setCurrent(Math.max(0, current - 1))}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-amber-400/50 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => setCurrent(Math.min(projects.length - 1, current + 1))}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-amber-400/50 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-amber-400" : "bg-white/30"}`}
          />
        ))}
      </div>
    </div>
  );
}

// ============ STYLE 8: Expanding Panels ============
function ExpandingPanels() {
  const [expanded, setExpanded] = useState<number | null>(null);
  
  return (
    <div className="flex gap-2 h-72">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          className="relative rounded-xl overflow-hidden cursor-pointer"
          animate={{ flex: expanded === index ? 4 : 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => setExpanded(expanded === index ? null : index)}
        >
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          
          <AnimatePresence>
            {expanded === index ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-0 left-0 right-0 p-6"
              >
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/70 mb-4">{project.description}</p>
                <div className="flex gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-1 bg-amber-400/20 text-amber-300 text-xs rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-end justify-center pb-4"
              >
                <h3 className="text-white font-semibold text-sm [writing-mode:vertical-lr] rotate-180">
                  {project.title}
                </h3>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

// ============ MAIN DEMO PAGE ============
export default function DemoPage() {
  const styles = [
    { name: "1. Hover Cards Grid", component: <HoverCardsGrid /> },
    { name: "2. Stacked Cards", component: <StackedCards /> },
    { name: "3. Spotlight Gallery", component: <SpotlightGallery /> },
    { name: "4. Timeline Flow", component: <TimelineFlow /> },
    { name: "5. 3D Card Flip", component: <CardFlip /> },
    { name: "6. Masonry Layout", component: <MasonryLayout /> },
    { name: "7. Carousel Slider", component: <CarouselSlider /> },
    { name: "8. Expanding Panels", component: <ExpandingPanels /> },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">
          <span className="text-amber-400">Projects Section</span> Style Demo
        </h1>
        <p className="text-white/60 text-center mb-12">
          Compare all 8 styles and pick your favorite
        </p>

        {styles.map((style, index) => (
          <div key={index} className="mb-20">
            <h2 className="text-2xl font-bold text-amber-400 mb-6 pb-2 border-b border-amber-400/30">
              {style.name}
            </h2>
            {style.component}
          </div>
        ))}
      </div>
    </div>
  );
}
