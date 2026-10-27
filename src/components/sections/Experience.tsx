"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiBriefcase, FiMapPin, FiPlus } from "react-icons/fi";

interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  highlights: string[];
}

const experiences: Experience[] = [
  {
    period: "Present",
    role: "GIS Engineer",
    company: "Charis UAS",
    location: "Kigali, Rwanda",
    highlights: [
      "Developing AI-powered pipelines for geospatial analysis",
      "UAV mapping and drone imagery processing",
      "LiDAR data processing and point cloud classification",
      "GIS database management and spatial analysis",
      "Infrastructure monitoring and change detection",
      "Computer vision model deployment for remote sensing",
    ],
  },
  {
    period: "Past",
    role: "GIS Tutor & Surveyor",
    company: "Muhizi Designing",
    location: "Kigali, Rwanda",
    highlights: [
      "Teaching GIS fundamentals and advanced spatial analysis",
      "Conducting land surveys and boundary demarcations",
      "Producing topographic maps and spatial datasets",
      "Mentoring students in geospatial technologies",
    ],
  },
  {
    period: "Past",
    role: "GIS & Infrastructure Specialist",
    company: "Infrastructure One Stop Center",
    location: "Nyanza District, Rwanda",
    highlights: [
      "Supporting infrastructure project mapping and monitoring",
      "Conducting spatial data collection and analysis",
      "Producing GIS deliverables for development projects",
      "Collaborating with government agencies on spatial planning",
    ],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="section-padding relative">
      <div className="container-max mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">
            Career Path
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            Work{" "}
            <span className="gradient-text-static">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-emerald-400/30 to-transparent hidden sm:block" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.2 }}
              className={`relative flex flex-col sm:flex-row items-start gap-6 mb-12 ${
                i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 lg:left-1/2 w-4 h-4 rounded-full bg-cyan-400 border-4 border-[#060d1a] -translate-x-1/2 z-10 hidden sm:block" style={{ top: 16 }} />

              {/* Content card */}
              <div className={`sm:w-1/2 ${i % 2 === 0 ? "sm:pl-20" : "sm:pr-20"} sm:ml-8 lg:ml-0`}>
                <div className="glass rounded-2xl p-6 hover-card border border-cyan-400/5">
                  <div className="flex items-center gap-2 mb-3">
                    <FiBriefcase className="w-5 h-5 text-cyan-400" />
                    <span className="text-cyan-400 text-sm font-mono">
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-emerald-400 font-medium mb-1">
                    {exp.company}
                  </p>
                  <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-4">
                    <FiMapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-slate-400 text-sm"
                      >
                        <FiPlus className="w-3 h-3 text-cyan-400 flex-shrink-0 mt-1" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Spacer for the other half */}
              <div className="hidden sm:block sm:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
