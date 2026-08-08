"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Building2, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/lib/data";

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative bg-slate-950/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academic Background"
          title="Education"
          subtitle="Strong academic foundation in computer applications and advanced data science."
        />

        <div className="relative border-l-2 border-sky-500/30 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
          {portfolioData.education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Node Icon */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-10 h-10 rounded-full bg-slate-900 border-2 border-sky-500 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all shadow-md shadow-sky-500/20">
                <GraduationCap className="w-5 h-5" />
              </div>

              {/* Content Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-sky-500/40 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </span>

                  {item.status ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 animate-pulse">
                      <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                      <span>{item.status}</span>
                    </span>
                  ) : null}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-sky-300 transition-colors">
                  {item.degree}
                </h3>

                <div className="flex items-center gap-2 text-slate-300 font-medium text-sm sm:text-base mb-4">
                  <Building2 className="w-4 h-4 text-purple-400" />
                  <span>{item.institution}</span>
                </div>

                {item.description ? (
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
