"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";
import {
  Mail,
  Send,
  Github,
  Linkedin,
  Twitter,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import { SiWhatsapp } from "react-icons/si";

interface AnimatedContactProps {
  title?: string;
  subtitle?: string;
  email?: string;
  phone?: string;
  location?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  className?: string;
}

// Backgrounds removed

// Magnetic button component
const MagneticButton = ({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(button, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <a
      ref={buttonRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("inline-block", className)}
    >
      {children}
    </a>
  );
};

// Contact info item
const ContactItem = ({
  icon: Icon,
  label,
  value,
  href,
  delay,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
  delay: number;
}) => {
  const isWhatsApp = href?.startsWith("https://wa.me/");

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group"
    >
      {href ? (
        <a
          href={href}
          target={isWhatsApp ? "_blank" : undefined}
          rel={isWhatsApp ? "noopener noreferrer" : undefined}
          className="flex items-center gap-4 p-4 rounded-xl glass-dark hover:border-[#FBBF24]/30 hover:bg-[#FBBF24]/5 transition-all"
        >
          <div className="w-12 h-12 rounded-full bg-[#F59E0B]/10 flex items-center justify-center group-hover:bg-[#F59E0B]/20 transition-colors">
            <Icon className="w-5 h-5 text-[#FBBF24]" />
          </div>
          <div>
            <p className="text-xs text-white/40 uppercase tracking-wider">
              {label}
            </p>
            <p className="text-white font-medium group-hover:text-[#FBBF24] transition-colors">
              {value}
            </p>
          </div>
          <ArrowUpRight className="w-4 h-4 text-white/40 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      ) : (
        <div className="flex items-center gap-4 p-4 rounded-xl glass-dark">
          <div className="w-12 h-12 rounded-full bg-[#F59E0B]/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-[#FBBF24]" />
          </div>
          <div>
            <p className="text-xs text-white/40 uppercase tracking-wider">
              {label}
            </p>
            <p className="text-white font-medium">{value}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

// Social link card
const SocialCard = ({
  icon: Icon,
  name,
  href,
  delay,
}: {
  icon: React.ElementType;
  name: string;
  href: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <MagneticButton href={href}>
      <div className="w-20 h-20 rounded-2xl glass-dark flex flex-col items-center justify-center gap-2 hover:border-[#FBBF24]/30 hover:bg-[#FBBF24]/5 transition-all group">
        <Icon className="w-6 h-6 text-white/60 group-hover:text-[#FBBF24] transition-colors" />
        <span className="text-[10px] text-white/40 uppercase tracking-wider group-hover:text-white/60 transition-colors">
          {name}
        </span>
      </div>
    </MagneticButton>
  </motion.div>
);

export const AnimatedContact = ({
  title = "Let's Connect",
  subtitle = "Have a project in mind? Let's talk about it.",
  email = "hello@example.com",
  phone = "+1 (555) 123-4567",
  location = "San Francisco, CA",
  socialLinks = {},
  className,
}: AnimatedContactProps) => {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden bg-transparent z-10",
        className,
      )}
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-24">
        {/* Header */}
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
              CONTACT
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            <span className="text-[#FBBF24]">Let&apos;s</span> Connect
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Live Availability Status */}
            <div className="flex items-center gap-3 p-4 rounded-xl border border-[#F59E0B]/25 bg-[#F59E0B]/5 backdrop-blur-md shadow-[0_0_15px_rgba(245,158,11,0.05)]">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FBBF24] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FBBF24]"></span>
              </span>
              <span className="text-sm font-semibold tracking-wide text-white/95">
                Available for Custom Builds & R&D 24/7
              </span>
            </div>

            {/* WhatsApp contact */}

            {/* Contact items */}
            <div className="space-y-4">
              <ContactItem
                icon={Mail}
                label="Email"
                value={email}
                href={`mailto:${email}`}
                delay={0.2}
              />
              <ContactItem
                icon={SiWhatsapp}
                label="WhatsApp"
                value={phone}
                href={`https://wa.me/${phone.replace(/\D/g, "")}`}
                delay={0.3}
              />
              <ContactItem
                icon={MapPin}
                label="Location"
                value={location}
                delay={0.4}
              />
            </div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-xs text-white/40 uppercase tracking-wider mb-4 text-center">
                Find me on
              </p>
              <div className="flex justify-center gap-4">
                {socialLinks.github && (
                  <SocialCard
                    icon={Github}
                    name="GitHub"
                    href={socialLinks.github}
                    delay={0.6}
                  />
                )}
                {socialLinks.linkedin && (
                  <SocialCard
                    icon={Linkedin}
                    name="LinkedIn"
                    href={socialLinks.linkedin}
                    delay={0.7}
                  />
                )}
                {socialLinks.twitter && (
                  <SocialCard
                    icon={Twitter}
                    name="Twitter"
                    href={socialLinks.twitter}
                    delay={0.8}
                  />
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Aadhithyan G. All rights reserved.
            Crafted with precision & luxury.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
