"use client";

import { useState, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiJsonwebtokens,
  SiDocker,
  SiKubernetes,
  SiAmazonwebservices,
  SiWebrtc,
  SiSocketdotio,
  SiTypescript,
  SiGit,
} from "react-icons/si";
import { Shield, GitBranch } from "lucide-react";

interface SkillItem {
  id: number;
  title: string;
  icon: React.ElementType;
  color: string;
  relatedIds: number[];
  energy: number;
  description: string;
  orbit: number;
}

// Skills data with colors and orbit assignments
const skillsData: SkillItem[] = [
  // Orbit 1 - Frontend (innermost)
  {
    id: 2,
    title: "Tailwind",
    icon: SiTailwindcss,
    color: "#06B6D4",
    relatedIds: [3, 4, 17],
    energy: 95,
    description: "Utility-first CSS framework for rapid UI development.",
    orbit: 1,
  },
  {
    id: 3,
    title: "HTML",
    icon: SiHtml5,
    color: "#E34F26",
    relatedIds: [2, 4, 17],
    energy: 95,
    description: "Semantic markup and accessibility best practices.",
    orbit: 1,
  },
  {
    id: 4,
    title: "CSS",
    icon: SiCss3,
    color: "#1572B6",
    relatedIds: [2, 3, 17],
    energy: 90,
    description: "Modern layouts with Grid, Flexbox, and animations.",
    orbit: 1,
  },
  {
    id: 17,
    title: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    relatedIds: [5, 2, 3],
    energy: 88,
    description: "Type-safe JavaScript for scalable applications.",
    orbit: 1,
  },

  // Orbit 2 - Backend (middle)
  {
    id: 5,
    title: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
    relatedIds: [6, 7, 8, 17],
    energy: 88,
    description: "Server-side JavaScript runtime for scalable applications.",
    orbit: 2,
  },
  {
    id: 6,
    title: "Express",
    icon: SiExpress,
    color: "#68A063",
    relatedIds: [5, 7, 8],
    energy: 85,
    description: "Minimal and flexible Node.js web application framework.",
    orbit: 2,
  },
  {
    id: 7,
    title: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
    relatedIds: [5, 6, 8],
    energy: 80,
    description: "Advanced open-source relational database.",
    orbit: 2,
  },
  {
    id: 8,
    title: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    relatedIds: [5, 6, 7],
    energy: 82,
    description: "NoSQL document database for modern applications.",
    orbit: 2,
  },
  {
    id: 18,
    title: "Git",
    icon: SiGit,
    color: "#F05032",
    relatedIds: [15],
    energy: 90,
    description: "Version control for collaborative development.",
    orbit: 2,
  },

  // Orbit 3 - DevOps & Advanced (outermost)
  {
    id: 9,
    title: "JWT",
    icon: SiJsonwebtokens,
    color: "#FB015B",
    relatedIds: [10],
    energy: 85,
    description: "JSON Web Tokens for secure authentication.",
    orbit: 3,
  },
  {
    id: 10,
    title: "RBAC",
    icon: Shield,
    color: "#10B981",
    relatedIds: [9],
    energy: 80,
    description: "Role-based access control for authorization.",
    orbit: 3,
  },
  {
    id: 11,
    title: "WebRTC",
    icon: SiWebrtc,
    color: "#00D4AA",
    relatedIds: [12],
    energy: 75,
    description: "Real-time communication for video/audio streaming.",
    orbit: 3,
  },
  {
    id: 12,
    title: "WebSockets",
    icon: SiSocketdotio,
    color: "#25C2A0",
    relatedIds: [11, 5],
    energy: 78,
    description: "Real-time bidirectional communication protocol.",
    orbit: 3,
  },
  {
    id: 13,
    title: "Docker",
    icon: SiDocker,
    color: "#2496ED",
    relatedIds: [14, 15, 16],
    energy: 75,
    description: "Containerization for consistent deployments.",
    orbit: 3,
  },
  {
    id: 14,
    title: "Kubernetes",
    icon: SiKubernetes,
    color: "#326CE5",
    relatedIds: [13, 15, 16],
    energy: 70,
    description: "Container orchestration at scale.",
    orbit: 3,
  },
  {
    id: 15,
    title: "CI/CD",
    icon: GitBranch,
    color: "#F97316",
    relatedIds: [13, 14, 16, 18],
    energy: 72,
    description: "Automated testing and deployment pipelines.",
    orbit: 3,
  },
  {
    id: 16,
    title: "AWS",
    icon: SiAmazonwebservices,
    color: "#FF9900",
    relatedIds: [13, 14, 15],
    energy: 70,
    description: "Cloud infrastructure and services.",
    orbit: 3,
  },
];

export default function SkillsOrbital() {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {},
  );
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);
      } else {
        setActiveNodeId(null);
        setPulseEffect({});
      }

      return newState;
    });
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = skillsData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  // Group skills by orbit
  const orbit1Skills = skillsData.filter((s) => s.orbit === 1);
  const orbit2Skills = skillsData.filter((s) => s.orbit === 2);
  const orbit3Skills = skillsData.filter((s) => s.orbit === 3);

  const orbitConfigs = [
    { skills: orbit1Skills, size: "18rem", radius: "9rem", duration: 30 },
    { skills: orbit2Skills, size: "30rem", radius: "15rem", duration: 40 },
    { skills: orbit3Skills, size: "44rem", radius: "22rem", duration: 55 },
  ];

  // Close when clicking anywhere outside skill icons
  const closeAll = () => {
    setExpandedItems({});
    setActiveNodeId(null);
    setPulseEffect({});
  };

  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-transparent overflow-hidden py-20 z-10"
      ref={containerRef}
    >
      {/* Background click overlay */}
      <div className="absolute inset-0 z-0" onClick={closeAll} />

      <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center z-10">
        Skills & Tech Stack
      </h2>
      <p className="text-white/60 text-center mb-16 max-w-md z-10">
        Click on any skill to explore related technologies
      </p>

      <div className="relative w-full max-w-6xl h-[60rem] flex items-center justify-center">
        {/* Center Circle - Gold React Icon */}
        <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-gray-900 to-black border-2 border-white/20 shadow-2xl flex items-center justify-center z-20">
          <div className="absolute w-28 h-28 rounded-full border border-[#E2B65C]/30 animate-ping opacity-30" />
          <SiReact
            className="w-12 h-12 text-[#E2B65C] animate-spin"
            style={{ animationDuration: "8s" }}
          />
        </div>

        {/* Generate Orbits */}
        {orbitConfigs.map((orbitConfig, orbitIdx) => {
          const angleStep = (2 * Math.PI) / orbitConfig.skills.length;

          return (
            <div
              key={orbitIdx}
              className="absolute rounded-full border border-dotted border-white/20 pointer-events-none"
              style={{
                width: orbitConfig.size,
                height: orbitConfig.size,
              }}
            >
              {orbitConfig.skills.map((skill, iconIdx) => {
                const angle = iconIdx * angleStep;
                const delay = -((angle / (2 * Math.PI)) * orbitConfig.duration);
                const isExpanded = expandedItems[skill.id];
                const isRelated = isRelatedToActive(skill.id);
                const isPulsing = pulseEffect[skill.id];
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.id}
                    className="absolute pointer-events-auto"
                    style={{
                      left: "50%",
                      top: "50%",
                      animation: `orbit-spin ${orbitConfig.duration}s linear infinite`,
                      animationPlayState: activeNodeId !== null ? 'paused' : 'running',
                      animationDelay: `${delay}s`,
                      zIndex: isExpanded ? 100 : 10,
                      "--orbit-radius": orbitConfig.radius,
                    } as React.CSSProperties}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleItem(skill.id);
                    }}
                  >
                    {/* Inner wrapper to handle elevation and scale without interfering with the parent's absolute keyframed counter-rotation */}
                    <div
                      className="relative flex flex-col items-center transition-all duration-500 ease-out"
                      style={{
                        transform: isExpanded
                          ? "translateY(-45px) scale(1.15)"
                          : isRelated
                          ? "scale(1.1)"
                          : "scale(1)",
                      }}
                    >
                      {/* Pulse effect for related items */}
                      {isPulsing && (
                        <div
                          className="absolute inset-0 rounded-full animate-ping"
                          style={{
                            backgroundColor: skill.color,
                            opacity: 0.4,
                            width: "3rem",
                            height: "3rem",
                            marginLeft: "-0.25rem",
                            marginTop: "-0.25rem",
                          }}
                        />
                      )}

                      {/* Icon container */}
                      <div
                        className={`
                          relative w-11 h-11 rounded-full flex items-center justify-center cursor-pointer
                          transition-all duration-300 shadow-lg
                          ${isExpanded ? "ring-2 ring-[#FBBF24]" : "hover:scale-110"}
                        `}
                        style={{
                          backgroundColor: isExpanded ? skill.color : "#1a1a1a",
                          boxShadow: isExpanded
                            ? `0 0 25px #FBBF24`
                            : isRelated
                            ? `0 0 20px ${skill.color}`
                            : `0 0 10px ${skill.color}40`,
                          border: `2px solid ${isExpanded ? "#FBBF24" : skill.color}`,
                        }}
                      >
                        <Icon
                          className="w-5 h-5 transition-colors duration-300"
                          style={{ color: isExpanded ? "#000" : skill.color }}
                        />
                      </div>

                      {/* Label */}
                      <div
                        className={`
                          absolute top-14 left-1/2 -translate-x-1/2 whitespace-nowrap
                          text-xs font-semibold tracking-wider transition-all duration-300
                          ${isExpanded ? "text-white scale-110 font-bold" : "text-white/60"}
                        `}
                      >
                        {skill.title}
                      </div>

                      {/* Expanded Card */}
                      {isExpanded && (
                        <div
                          className="absolute top-20 left-1/2 -translate-x-1/2 w-64 rounded-2xl glass-dark shadow-2xl p-5 text-white z-50 transition-all duration-300"
                          style={{
                            boxShadow: `0 15px 35px rgba(0, 0, 0, 0.4), 0 0 25px rgba(251, 191, 36, 0.25)`,
                          }}
                        >
                          <div
                            className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-[#FBBF24]"
                          />
                          <div className="flex items-center gap-2 mb-3">
                            <Icon
                              style={{ color: "#FBBF24" }}
                              className="w-4 h-4"
                            />
                            <span className="text-sm font-bold tracking-wide text-[#FBBF24]">
                              {skill.title}
                            </span>
                          </div>
                          
                          <div className="text-xs text-white/80">
                            <p className="leading-relaxed mb-4">{skill.description}</p>

                            {/* Related Skills */}
                            {skill.relatedIds.length > 0 && (
                              <div className="pt-3 border-t border-white/10">
                                <div className="flex items-center mb-2">
                                  <Link
                                    size={10}
                                    className="text-white/50 mr-1"
                                  />
                                  <span className="text-[10px] uppercase tracking-wider font-semibold text-white/50">
                                    Related Skills
                                  </span>
                                </div>
                                <div className="flex flex-wrap gap-1">
                                  {skill.relatedIds.map((relatedId) => {
                                    const relatedItem = skillsData.find(
                                      (i) => i.id === relatedId,
                                    );
                                    if (!relatedItem) return null;
                                    return (
                                      <button
                                        key={relatedId}
                                        className="flex items-center h-6 px-2.5 py-0 text-[10px] font-medium rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#FBBF24]/40 text-white transition-all duration-300 cursor-pointer"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          toggleItem(relatedId);
                                        }}
                                      >
                                        {relatedItem.title}
                                        <ArrowRight
                                          size={8}
                                          className="ml-1 text-white/50"
                                        />
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes orbit-spin {
          from {
            transform: translate(-50%, -50%) rotate(0deg) translateY(calc(-1 * var(--orbit-radius))) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg) translateY(calc(-1 * var(--orbit-radius))) rotate(-360deg);
          }
        }
      `}</style>
    </section>
  );
}
