"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FileText,
  Download,
  Mail,
  MapPin,
  ChevronDown,
  Sparkles,
  Award,
  Users,
  Terminal,
} from "lucide-react";
import { portfolioData } from "@/lib/data";

const LinkedInIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const GitHubIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = portfolioData.typingRoles;

  useEffect(() => {
    const fullText = roles[roleIndex];
    let typingSpeed = isDeleting ? 35 : 75;

    if (!isDeleting && currentText === fullText) {
      typingSpeed = 2000;
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      typingSpeed = 400;
    }

    const timer = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setIsDeleting(true);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, roles]);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 md:pt-36 md:pb-24 flex flex-col items-center justify-center overflow-hidden cyber-grid"
    >
      {/* Creative Background Lights */}
      <div className="bg-glow-blue -top-24 left-1/2 -translate-x-1/2" />
      <div className="bg-glow-purple top-1/3 left-1/2 -translate-x-1/2" />
      <div className="bg-glow-emerald bottom-10 right-10 hidden md:block" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Creative Profile Picture Frame */}
          <div className="relative mb-6 group cursor-pointer">
            {/* Outer Glowing Halo */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-sky-400 via-purple-500 to-emerald-400 blur-lg opacity-80 group-hover:opacity-100 transition duration-500 animate-pulse" />

            {/* Circular Image Container */}
            <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-sky-400/60 p-1 bg-slate-950 shadow-2xl">
              <Image
                src={portfolioData.personal.avatarUrl}
                alt={portfolioData.personal.name}
                width={208}
                height={208}
                priority
                className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Floating Tech Badge */}
            <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 bg-slate-900/90 border border-sky-500/50 rounded-full p-2 text-sky-400 shadow-xl shadow-sky-500/30">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400" />
            </div>
          </div>

          {/* Name Header */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-2"
          >
            {portfolioData.personal.name}
          </motion.h1>

          {/* Title Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm sm:text-lg md:text-xl font-bold tracking-widest uppercase gradient-text mb-4"
          >
            {portfolioData.personal.title}
          </motion.h2>

          {/* Dynamic Typing Box */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full max-w-lg mx-auto py-2 px-4 rounded-2xl glass-panel border border-slate-800 shadow-xl mb-6 flex items-center justify-center min-h-[52px]"
          >
            <span className="text-base sm:text-xl md:text-2xl font-mono text-slate-200 font-medium tracking-tight">
              Building as <span className="text-sky-400 font-bold border-b-2 border-purple-400 pb-0.5">{currentText}</span>
              <span className="animate-blink text-purple-400 font-normal">|</span>
            </span>
          </motion.div>

          {/* Introduction Narrative */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mb-6 font-normal px-2"
          >
            {portfolioData.personal.bio}
          </motion.p>

          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full glass-panel text-slate-300 text-xs sm:text-sm font-medium mb-8 border border-slate-800"
          >
            <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
            <span>{portfolioData.personal.location}</span>
          </motion.div>

          {/* Action Buttons (Mobile-first full-width stack / desktop row) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 w-full max-w-md"
          >
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 hover:border-sky-500 rounded-xl transition-all shadow-lg active:scale-95 min-h-[44px]"
            >
              <FileText className="w-4 h-4 text-sky-400" />
              <span>View Resume</span>
            </a>

            <a
              href={portfolioData.personal.resumeUrl}
              download
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 hover:from-sky-400 hover:to-purple-500 rounded-xl shadow-lg shadow-sky-500/20 transition-all active:scale-95 min-h-[44px]"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 rounded-xl transition-all active:scale-95 min-h-[44px]"
            >
              <Mail className="w-4 h-4 text-sky-400" />
              <span>Contact Me</span>
            </a>
          </motion.div>

          {/* Social Icons Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center justify-center gap-4 mb-10"
          >
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 text-slate-400 hover:text-sky-400 glass-panel rounded-xl hover:border-sky-500/40 transition-all transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 text-slate-400 hover:text-white glass-panel rounded-xl hover:border-slate-500 transition-all transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <GitHubIcon className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Creative Quick Stats Highlight Cards Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-2"
          >
            <div className="glass-card p-3 sm:p-4 rounded-2xl text-center border border-slate-800/90">
              <div className="flex justify-center mb-1 text-sky-400">
                <Terminal className="w-4 h-4" />
              </div>
              <div className="text-lg sm:text-xl font-bold text-white">7 Roles</div>
              <div className="text-[11px] sm:text-xs text-slate-400">Data & AI Target</div>
            </div>

            <div className="glass-card p-3 sm:p-4 rounded-2xl text-center border border-slate-800/90">
              <div className="flex justify-center mb-1 text-purple-400">
                <Users className="w-4 h-4" />
              </div>
              <div className="text-lg sm:text-xl font-bold text-white">Team Lead</div>
              <div className="text-[11px] sm:text-xs text-slate-400">CYNUX ERA AI/ML</div>
            </div>

            <div className="glass-card p-3 sm:p-4 rounded-2xl text-center border border-slate-800/90">
              <div className="flex justify-center mb-1 text-emerald-400">
                <Award className="w-4 h-4" />
              </div>
              <div className="text-lg sm:text-xl font-bold text-white">6 Certifications</div>
              <div className="text-[11px] sm:text-xs text-slate-400">Microsoft & NPTEL</div>
            </div>

            <div className="glass-card p-3 sm:p-4 rounded-2xl text-center border border-slate-800/90">
              <div className="flex justify-center mb-1 text-amber-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-lg sm:text-xl font-bold text-white">MSc Degree</div>
              <div className="text-[11px] sm:text-xs text-slate-400">Data Science</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Down Trigger */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="p-2 text-slate-500 hover:text-sky-400 transition-colors"
          >
            <ChevronDown className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
