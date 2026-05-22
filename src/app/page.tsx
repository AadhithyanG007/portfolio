"use client";

import { MinimalistHero } from "@/components/ui/minimalist-hero";
import AboutBento from "@/components/ui/about-bento-new";
import SkillsOrbital from "@/components/ui/skills-orbital";
import { AtroposProjects } from "@/components/ui/atropos-projects";
import { AnimatedContact } from "@/components/ui/animated-contact";
import { Instagram, Linkedin, Github } from "lucide-react";

export default function Home() {
  const navLinks = [
    { label: "HOME", href: "#" },
    { label: "ABOUT", href: "#about" },
    { label: "PROJECTS", href: "/projects" },
    { label: "CONTACT", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/AadhithyanG007" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/aadhithyang" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/_aadhithyan_g?igsh=ZXNuaXM2NHRqamVl",
    },
  ];

  // Projects data
  const projects = [
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
    },
  ];

  return (
    <main className="relative z-10">
      {/* Section 1: Landing - MinimalistHero */}
      <MinimalistHero
        logoText="portfolio."
        navLinks={navLinks}
        mainText="B.Tech student passionate about building full-stack systems that solve real-world problems."
        readMoreLink="#about"
        imageSrc="/me.png"
        imageAlt="Profile portrait"
        overlayText={{
          part1: "code &",
          part2: "create.",
        }}
        socialLinks={socialLinks}
        locationText="Kerala, India"
      />

      {/* Section 2: About - LightRays + Bento Grid */}
      <section id="about">
        <AboutBento />
      </section>

      {/* Section 3: Skills - Orbital Timeline */}
      <section id="skills">
        <SkillsOrbital />
      </section>

      {/* Section 4: Projects */}
      <section id="projects" className="relative z-10">
        <AtroposProjects
          title="Featured Projects"
          subtitle="A showcase of my recent work and passion projects"
          projects={projects}
        />
      </section>

      {/* Section 5: Contact */}
      <section id="contact" className="relative z-10">
        <AnimatedContact
          title="Let's Connect"
          subtitle="Have a project in mind? Let's bring your ideas to life."
          email="aadhithyan.g@example.com"
          phone="+91 98765 43210"
          location="Kerala, India"
          socialLinks={{
            github: "https://github.com/AadhithyanG007",
            linkedin: "https://www.linkedin.com/in/aadhithyang",
            twitter: "#",
          }}
        />
      </section>
    </main>
  );
}
