"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, Download } from "lucide-react";
import { portfolioData } from "@/lib/data";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav shadow-2xl shadow-black/50" : "bg-transparent py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Personal Brand */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg shadow-sky-500/30 group-hover:scale-105 transition-transform">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-base tracking-tight group-hover:text-sky-400 transition-colors">
                {portfolioData.personal.name}
              </span>
              <span className="text-[11px] text-sky-400 font-semibold tracking-wider uppercase">
                Data Science & AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2 text-xs xl:text-sm font-medium text-slate-300 hover:text-sky-400 hover:bg-slate-800/60 rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Desktop Resume Download CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={portfolioData.personal.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-4.5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-purple-600 hover:from-sky-400 hover:to-purple-500 rounded-xl shadow-md shadow-sky-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              className="p-2.5 text-slate-200 hover:text-white hover:bg-slate-800/80 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-sky-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden glass-panel border-b border-slate-800 px-4 pt-3 pb-6 space-y-1.5 shadow-2xl overflow-hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-4 py-3 text-sm font-medium text-slate-200 hover:text-sky-400 hover:bg-slate-800/80 rounded-xl transition-colors min-h-[44px] flex items-center"
              >
                {link.name}
              </button>
            ))}

            <div className="pt-3 mt-2 border-t border-slate-800 flex flex-col gap-2.5">
              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-4 py-3 text-xs font-semibold text-slate-200 border border-slate-700 hover:border-sky-500 rounded-xl transition-colors min-h-[44px] flex items-center justify-center"
              >
                View Resume (PDF)
              </a>
              <a
                href={portfolioData.personal.resumeUrl}
                download
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-white bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 rounded-xl shadow-lg shadow-sky-500/20 min-h-[44px]"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
