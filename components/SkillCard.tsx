"use client";

import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { SkillCategory } from "@/types/portfolio";

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

export const SkillCard: React.FC<SkillCardProps> = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-sky-500/30 transition-all duration-300 group"
    >
      <h3 className="text-lg font-bold text-white mb-4 pb-2 border-b border-slate-800/80 flex items-center justify-between">
        <span>{category.category}</span>
        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
          {category.skills.length} Technologies
        </span>
      </h3>

      <div className="flex flex-wrap gap-2.5">
        {category.skills.map((skill) => {
          // Dynamically lookup Lucide icon
          const IconComponent =
            skill.iconName && (Icons as any)[skill.iconName]
              ? (Icons as any)[skill.iconName]
              : Icons.Code2;

          return (
            <div
              key={skill.name}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-sky-950/70 border border-slate-800 hover:border-sky-500/40 transition-all duration-200 group/skill"
            >
              <IconComponent className="w-4 h-4 text-sky-400 group-hover/skill:text-sky-300 group-hover/skill:scale-110 transition-all shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover/skill:text-white transition-colors">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};
