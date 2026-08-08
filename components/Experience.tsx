"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Users, CheckCircle2, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/lib/data";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Work Experience"
          title="Industry Experience"
          subtitle="Practical engineering experience in leadership and artificial intelligence development."
        />

        <div className="space-y-8">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-800 hover:border-sky-500/40 transition-all relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 flex-wrap mb-1">
                    <h3 className="text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      {exp.role}
                    </h3>
                    {exp.isLeadership && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-full">
                        <Users className="w-3.5 h-3.5" />
                        <span>Team Lead</span>
                      </span>
                    )}
                  </div>
                  <div className="text-lg font-semibold text-sky-400">
                    {exp.company}
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  <Calendar className="w-3.5 h-3.5 text-sky-400" />
                  <span>Duration: {exp.duration}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-sky-400" />
                  Key Responsibilities & Contributions
                </h4>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li
                      key={hIndex}
                      className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
