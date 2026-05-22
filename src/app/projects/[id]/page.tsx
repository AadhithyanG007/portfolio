"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { projects, Project } from "@/data/projects";
import { projectDetails } from "@/data/detailedDescriptions";

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    if (id) {
      const foundProject = projects.find((p) => p.id === id);
      if (foundProject) {
        setProject(foundProject);
      } else {
        router.push("/projects");
      }
    }
  }, [id, router]);

  if (!project) return null; // Or a loading skeleton

  const detailEntry = projectDetails[project.id];
  const summaryText =
    detailEntry?.summary || project.longDescription || project.description;

  return (
    <main className="min-h-screen text-white pt-24 pb-16 px-6 md:px-12 relative overflow-hidden font-sans z-10">
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center gap-4"
        >
          <Link
            href="/projects"
            className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:border-[#FBBF24]/50 hover:bg-white/10 transition-all"
          >
            <ArrowLeft className="w-5 h-5 text-white/70 group-hover:text-[#FBBF24] group-hover:-translate-x-1 transition-all" />
          </Link>
          <div className="flex items-center gap-2 text-sm text-white/40">
            <Link
              href="/projects"
              className="hover:text-white transition-colors"
            >
              Projects
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#FBBF24]">{project.title}</span>
          </div>
        </motion.div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/20">
              <Sparkles className="w-4 h-4 text-[#FBBF24]" />
              <span className="text-sm text-[#E2B65C] font-medium uppercase tracking-widest">
                {project.category || "Case Study"}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              {project.title}
            </h1>

            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              {summaryText}
            </p>

            {/* Tech Stack */}
            <div className="mb-10">
              <h3 className="text-sm text-white/40 uppercase tracking-widest mb-4">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm font-medium bg-white/5 border border-white/10 rounded-lg text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-full text-white font-medium hover:bg-white/10 hover:border-[#FBBF24]/50 hover:text-[#FBBF24] transition-all duration-300 shadow-lg"
              >
                <span>Visit Live Project</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FBBF24]/20 to-transparent blur-3xl -z-10 rounded-full" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Details Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl font-bold mb-6">Project Narrative</h2>
            <div className="space-y-10">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <p className="text-lg text-white/75 leading-relaxed">
                  {summaryText}
                </p>
              </div>

              {detailEntry && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
                    <h3 className="text-lg font-semibold text-[#FBBF24] mb-4">
                      Signature Highlights
                    </h3>
                    <ul className="space-y-3 text-white/75">
                      {detailEntry.highlights.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-[#FBBF24]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
                    <h3 className="text-lg font-semibold text-[#FBBF24] mb-4">
                      Build Notes
                    </h3>
                    <ul className="space-y-3 text-white/75">
                      {detailEntry.buildNotes.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-[#FBBF24]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {detailEntry && (
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                  <h3 className="text-lg font-semibold text-[#FBBF24] mb-4">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {detailEntry.techStack.map((item, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 text-sm font-medium bg-white/5 border border-white/10 rounded-full text-white/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </motion.div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-1"
            >
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 sticky top-32 space-y-8">
                <h3 className="text-xl font-bold mb-6 text-[#FBBF24]">
                  Key Features
                </h3>
                <ul className="space-y-4">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#FBBF24] shrink-0 mt-0.5" />
                      <span className="text-white/80 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {detailEntry?.metrics && detailEntry.metrics.length > 0 && (
                  <div className="pt-6 border-t border-white/10">
                    <h4 className="text-lg font-semibold text-[#FBBF24] mb-4">
                      Metrics / Outcomes
                    </h4>
                    <ul className="space-y-3 text-white/75">
                      {detailEntry.metrics.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-[#FBBF24]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {detailEntry?.seoOptimizations &&
                  detailEntry.seoOptimizations.length > 0 && (
                    <div className="pt-6 border-t border-white/10">
                      <h4 className="text-lg font-semibold text-[#FBBF24] mb-4">
                        SEO Optimization
                      </h4>
                      <ul className="space-y-3 text-white/75">
                        {detailEntry.seoOptimizations.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="mt-1 h-2 w-2 rounded-full bg-[#FBBF24]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
}
