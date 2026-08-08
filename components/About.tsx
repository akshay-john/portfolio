"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Database,
  BarChart3,
  Code2,
  Cpu,
  Target,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const highlights = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Designing predictive models, classification systems, and natural language processing pipelines using Scikit-learn, Python, and open-source AI frameworks.",
  },
  {
    icon: Database,
    title: "SQL & Data Engineering",
    description:
      "Structuring complex SQL queries, database schemas, and data pipelines to aggregate, clean, and transform raw structured data into analysis-ready formats.",
  },
  {
    icon: BarChart3,
    title: "Statistical Data Analysis",
    description:
      "Uncovering patterns, performing exploratory data analysis (EDA), hypothesis testing, and building interactive dashboards with Power BI, Matplotlib, and Seaborn.",
  },
  {
    icon: Code2,
    title: "Python Software Development",
    description:
      "Writing clean, modular, and maintainable Python code for data processing, web backend integration with Flask, and algorithmic automation.",
  },
  {
    icon: Cpu,
    title: "Practical AI Solutions",
    description:
      "Developing practical, production-ready AI applications such as automated helpdesk chatbots, speech-to-text integration, and conversational engines.",
  },
  {
    icon: Target,
    title: "Recruiter-Ready Execution",
    description:
      "Committed to rigorous problem-solving, structured analytical thinking, and continuous skill refinement to deliver high-impact enterprise data solutions.",
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Professional Background"
          title="About Me"
          subtitle="A dedicated Data Science Postgraduate bridging complex statistical theory with enterprise artificial intelligence and analytics."
        />

        {/* Narrative Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-2xl p-6 sm:p-8 md:p-10 mb-12 border border-slate-800 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
            Turning Raw Data into Strategic Intelligence
          </h3>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-4">
            I am currently pursuing my Master of Science in Data Science at Kristu Jayanti Institute of Technology, following a Bachelor of Computer Applications (BCA) degree. My technical journey is anchored in mathematical rigor, computational efficiency, and business intelligence.
          </p>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            With hands-on experience building conversational AI, natural language processing tools, and predictive models, I am eager to apply my analytical capabilities as a Data Scientist, AI/ML Engineer, or Data Analyst in a high-impact, data-driven environment.
          </p>
        </motion.div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 border border-slate-800 hover:border-sky-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-5 group-hover:scale-110 group-hover:bg-sky-500/20 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-sky-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
