"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  center = true,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${center ? "text-center" : "text-left"}`}
    >
      {badge && (
        <span className="inline-block px-3.5 py-1 mb-3 text-xs font-semibold tracking-wider text-sky-400 uppercase bg-sky-500/10 border border-sky-500/20 rounded-full">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
        {title}
      </h2>
      <div
        className={`h-1 w-16 bg-gradient-to-r from-sky-400 to-purple-500 rounded-full mt-3 mb-4 ${
          center ? "mx-auto" : ""
        }`}
      />
      {subtitle && (
        <p className="max-w-2xl text-slate-400 text-base md:text-lg leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
