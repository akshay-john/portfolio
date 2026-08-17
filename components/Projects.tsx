"use client";

import React from "react";
import { motion } from "framer-motion";
import { FolderGit2, Sparkles, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { portfolioData } from "@/lib/data";

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-28 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Portfolio Work"
          title="Featured Projects"
          subtitle="Real-world Data Science & AI engineering applications designed for practical enterprise workflows."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}

          {/* More Projects Coming Soon Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-2xl p-6 sm:p-8 border border-dashed border-slate-800 hover:border-purple-500/40 transition-all flex flex-col justify-between items-center text-center relative overflow-hidden group min-h-[400px]"
          >
            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 my-6 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all shadow-lg shadow-purple-500/10">
              <Rocket className="w-8 h-8" />
            </div>

            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>In Active Development</span>
              </span>

              <h3 className="text-xl font-bold text-white mb-2">
                More Projects Coming Soon
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Currently engineering statistical models, predictive pipelines, and automated machine learning workflows as part of my ongoing MSc Data Science program.
              </p>
            </div>

            <div className="w-full pt-4 border-t border-slate-800/80">
              <span className="text-xs text-slate-500 font-mono">
                Stay tuned for upcoming updates
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
