"use client";

import { MinimalistHero } from "@/components/ui/minimalist-hero";
import AboutBento from "@/components/ui/about-bento-new";
import SkillsOrbital from "@/components/ui/skills-orbital";
import { AtroposProjects } from "@/components/ui/atropos-projects";
import { AnimatedContact } from "@/components/ui/animated-contact";
import { Instagram, Linkedin, Github } from "lucide-react";

import { projects } from "@/data/projects";

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

  // Filter only featured projects
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <main className="relative z-10">
      {/* Section 1: Landing - MinimalistHero */}
      <MinimalistHero
        logoText="Aadhithyan G."
        navLinks={navLinks}
        mainText="Full-stack developer building clean, scalable systems that solve real-world problems."
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
          projects={featuredProjects}
        />
      </section>

      {/* Section 5: Contact */}
      <section id="contact" className="relative z-10">
        <AnimatedContact
          title="Let's Connect"
          subtitle="Have a project in mind? Let's bring your ideas to life."
          email="aadhithyang475@gmail.com"
          phone="+91 9633723011"
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
