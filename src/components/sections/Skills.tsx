"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiMap, FiCamera, FiCpu, FiCode } from "react-icons/fi";

interface SkillCategory {
  title: string;
  icon: typeof FiCode;
  color: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Geospatial",
    icon: FiMap,
    color: "cyan",
    skills: [
      "ArcGIS Pro",
      "QGIS",
      "Global Mapper",
      "Remote Sensing",
      "Spatial Analysis",
      "Coordinate Systems",
      "Geodatabase Design",
      "Map Production",
    ],
  },
  {
    title: "Drone & LiDAR",
    icon: FiCamera,
    color: "emerald",
    skills: [
      "Agisoft Metashape",
      "Pix4D",
      "LiDAR Processing",
      "Point Clouds",
      "UAV Mapping",
      "Photogrammetry",
      "Orthomosaic Creation",
      "DTM/DSM Generation",
    ],
  },
  {
    title: "Artificial Intelligence",
    icon: FiCpu,
    color: "purple",
    skills: [
      "Python",
      "PyTorch",
      "OpenCV",
      "CVAT",
      "Deep Learning",
      "Computer Vision",
      "Neural Networks",
      "Model Training",
      "Segmentation",
    ],
  },
  {
    title: "Development",
    icon: FiCode,
    color: "orange",
    skills: [
      "Flask",
      "React",
      "Next.js",
      "TypeScript",
      "Git",
      "Docker",
      "PostgreSQL",
      "REST APIs",
    ],
  },
];

const colorMap = {
  cyan: "border-cyan-400/20 hover:border-cyan-400/40 text-cyan-400",
  emerald: "border-emerald-400/20 hover:border-emerald-400/40 text-emerald-400",
  purple: "border-purple-400/20 hover:border-purple-400/40 text-purple-400",
  orange: "border-orange-400/20 hover:border-orange-400/40 text-orange-400",
};

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" ref={ref} className="section-padding relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container-max mx-auto text-center mb-16"
      >
        <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">
          Expertise
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
          Skills &{" "}
          <span className="gradient-text-static">Technologies</span>
        </h2>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          A comprehensive toolkit spanning geospatial science, artificial
          intelligence, and modern software development.
        </p>
      </motion.div>

      <div className="container-max mx-auto">
        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skillCategories.map((cat, i) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(i)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-medium text-sm transition-all duration-300 border ${
                activeCategory === i
                  ? "bg-cyan-400/10 border-cyan-400/40 text-cyan-400"
                  : "glass border-transparent text-slate-400 hover:text-white hover:border-slate-600"
              }`}
            >
              <cat.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{cat.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Active Category Skills */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl p-8 sm:p-10 border border-cyan-400/10"
        >
          {(() => {
            const ActiveIcon = skillCategories[activeCategory].icon;
            return (
              <div className="flex items-center gap-3 mb-8">
                <ActiveIcon className="w-6 h-6 text-cyan-400" />
                <h3 className="text-2xl font-bold text-white">
                  {skillCategories[activeCategory].title}
                </h3>
              </div>
            );
          })()}

          <div className="flex flex-wrap gap-3">
            {skillCategories[activeCategory].skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className={`px-5 py-2.5 rounded-xl border text-sm font-medium transition-all duration-300 hover:scale-105 cursor-default ${colorMap[skillCategories[activeCategory].color as keyof typeof colorMap] || colorMap.cyan}`}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* All Skills Overview Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8"
        >
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
              className="glass rounded-2xl p-6 hover-card cursor-pointer"
              onClick={() => setActiveCategory(i)}
            >
              <cat.icon className="w-8 h-8 text-cyan-400 mb-4" />
              <h4 className="text-white font-semibold mb-2">{cat.title}</h4>
              <p className="text-slate-400 text-sm">
                {cat.skills.length} skills & tools
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {cat.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-1 rounded-lg bg-cyan-400/10 text-cyan-400/80"
                  >
                    {skill}
                  </span>
                ))}
                {cat.skills.length > 3 && (
                  <span className="text-xs px-2 py-1 rounded-lg bg-cyan-400/5 text-slate-500">
                    +{cat.skills.length - 3}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
