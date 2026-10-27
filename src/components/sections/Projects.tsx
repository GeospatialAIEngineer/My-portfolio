"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiExternalLink, FiGithub, FiLayers, FiBox, FiDatabase, FiCode, FiGlobe } from "react-icons/fi";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  tags: string[];
  icon: typeof FiLayers;
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI Building Change Detection",
    description:
      "End-to-end AI pipeline for detecting newly constructed and modified buildings from multi-temporal UAV orthophotos.",
    longDescription:
      "An end-to-end AI pipeline that detects newly constructed and modified buildings from multi-temporal UAV orthophotos using YOLO segmentation, polygon matching, and GIS analysis. The system processes drone imagery through computer vision models to automatically identify changes in building footprints over time, producing GIS-ready outputs for urban planning and development monitoring.",
    category: "AI",
    tags: ["YOLOv8", "Python", "QGIS", "OpenCV", "Drone Imagery"],
    icon: FiLayers,
    color: "cyan",
  },
  {
    id: 2,
    title: "AI Pothole Detection",
    description:
      "Drone-based pothole detection system with GIS outputs, severity classification, and interactive dashboard.",
    longDescription:
      "A drone-based pothole detection system that produces GIS-ready outputs, severity classification, and an interactive dashboard. Using aerial imagery captured by UAVs, the AI model identifies, classifies, and maps potholes across road networks, enabling efficient infrastructure maintenance planning.",
    category: "AI",
    tags: ["Computer Vision", "Python", "GIS", "Drone", "Dashboard"],
    icon: FiDatabase,
    color: "emerald",
  },
  {
    id: 3,
    title: "LiDAR Corridor Mapping",
    description:
      "Processing large-scale LiDAR datasets into classified point clouds, terrain models, and engineering products.",
    longDescription:
      "Processing large-scale LiDAR datasets into classified point clouds, digital terrain models, and engineering-ready products. The workflow includes data acquisition planning, point cloud classification, feature extraction, and the generation of deliverables suitable for corridor engineering and infrastructure design.",
    category: "LiDAR",
    tags: ["LiDAR", "Point Cloud", "DTM", "Global Mapper", "Engineering"],
    icon: FiBox,
    color: "purple",
  },
  {
    id: 4,
    title: "Digital Twin Research",
    description:
      "Research integrating UAV photogrammetry, LiDAR, GIS, BIM, and AI for digital twin solutions.",
    longDescription:
      "Research into integrating UAV photogrammetry, LiDAR, GIS, BIM, and AI to develop comprehensive digital twin solutions. This work explores the convergence of geospatial technologies and building information modeling to create dynamic, data-rich digital replicas of physical environments.",
    category: "Research",
    tags: ["Digital Twin", "BIM", "UAV", "LiDAR", "AI"],
    icon: FiGlobe,
    color: "orange",
  },
  {
    id: 5,
    title: "Environmental GIS",
    description:
      "GIS and remote sensing workflows for environmental impact assessments and sustainable development.",
    longDescription:
      "GIS and remote sensing workflows supporting environmental impact assessments, land-use analysis, and sustainable development. Combining satellite imagery analysis, spatial statistics, and geodatabase management to provide actionable insights for environmental monitoring and decision-making.",
    category: "GIS",
    tags: ["Remote Sensing", "ArcGIS", "Python", "EIA", "Sustainability"],
    icon: FiCode,
    color: "teal",
  },
];

const categories = ["All", "AI", "LiDAR", "Research", "GIS"];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" ref={ref} className="section-padding relative">
      <div className="container-max mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            Featured{" "}
            <span className="gradient-text-static">Projects</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Showcasing my work in AI-powered geospatial solutions, from computer
            vision pipelines to LiDAR processing and digital twin research.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border ${
                activeFilter === cat
                  ? "bg-cyan-400/10 border-cyan-400/40 text-cyan-400"
                  : "glass border-transparent text-slate-400 hover:text-white hover:border-slate-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
            >
              <div className="glass rounded-2xl p-6 hover-card h-full flex flex-col group border border-cyan-400/5 hover:border-cyan-400/20">
                {/* Icon & Color Bar */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                    <project.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex gap-2">
                    <span className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/5 transition-all cursor-pointer">
                      <FiGithub className="w-4 h-4" />
                    </span>
                    <span className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/5 transition-all cursor-pointer">
                      <FiExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-lg bg-cyan-400/5 text-cyan-400/70 border border-cyan-400/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
