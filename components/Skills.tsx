"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillCard } from "@/components/SkillCard";
import { portfolioData } from "@/lib/data";

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Competencies"
          title="Skills & Technologies"
          subtitle="Categorized proficiency across data science frameworks, programming languages, databases, and enterprise cloud tools."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skills.map((category, index) => (
            <SkillCard key={category.category} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
