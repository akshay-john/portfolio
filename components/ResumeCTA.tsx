"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Download, ArrowRight, ShieldCheck } from "lucide-react";
import { portfolioData } from "@/lib/data";

export const ResumeCTA: React.FC = () => {
  return (
    <section className="py-16 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800 relative overflow-hidden text-center bg-gradient-to-b from-slate-900/90 to-slate-950/90 shadow-2xl"
        >
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-96 h-96 bg-gradient-to-r from-sky-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 mb-4 text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20 rounded-full">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            <span>Recruiter Quick Access</span>
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Interested in my complete technical profile?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Download my resume for detailed insights into my Data Science coursework, AI engineering projects, Python & SQL proficiency, and technical certifications.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-sky-500 rounded-xl transition-all shadow-lg active:scale-95"
            >
              <FileText className="w-4 h-4 text-sky-400" />
              <span>View Resume (PDF)</span>
            </a>

            <a
              href={portfolioData.personal.resumeUrl}
              download
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-purple-600 hover:from-sky-400 hover:to-purple-500 rounded-xl shadow-lg shadow-sky-500/20 transition-all active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
