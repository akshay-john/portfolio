"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, CheckCircle, ExternalLink, Sparkles } from "lucide-react";
import { ProjectItem } from "@/types/portfolio";

const GitHubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="glass-card rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-800 hover:border-sky-500/40 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between h-full"
    >
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-sky-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none group-hover:opacity-100 transition-opacity duration-500" />

      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20 rounded-full">
            <Bot className="w-3.5 h-3.5" />
            <span>{project.categoryBadge || "Featured Project"}</span>
          </span>

          {project.subcategoryBadge && (
            <span className="inline-flex items-center gap-1 text-xs font-medium text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
              <Sparkles className="w-3 h-3 text-purple-400" />
              <span>{project.subcategoryBadge}</span>
            </span>
          )}
        </div>

        {project.imageUrl && (
          <div className="relative mb-5 overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/60 aspect-video group/img">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover object-top transform group-hover/img:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 pointer-events-none" />
          </div>
        )}

        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 group-hover:text-sky-300 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-300 text-base leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="mb-6 bg-slate-900/60 rounded-xl p-4 border border-slate-800">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            Key Features & Insights
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feature, fIndex) => (
              <li key={fIndex} className="flex items-start gap-2 text-slate-300 text-xs sm:text-sm">
                <CheckCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-semibold text-slate-300 bg-slate-800/80 hover:bg-sky-950 hover:text-sky-300 hover:border-sky-500/40 border border-slate-700/80 rounded-lg transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-3 justify-between">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-sky-500 rounded-xl transition-all shadow-md group/btn"
        >
          <GitHubIcon className="w-4 h-4 text-sky-400 group-hover/btn:scale-110 transition-transform" />
          <span>View Source Code on GitHub</span>
        </a>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-sky-300 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 rounded-xl transition-all shadow-md group/liveBtn"
          >
            <ExternalLink className="w-4 h-4 text-sky-400 group-hover/liveBtn:scale-110 transition-transform" />
            <span>Interactive Dashboard</span>
          </a>
        )}
      </div>
    </motion.div>
  );
};
