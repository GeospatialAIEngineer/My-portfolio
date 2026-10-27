"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { FiArrowDown, FiExternalLink, FiDownload, FiMail } from "react-icons/fi";

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-400/5 via-transparent to-transparent" style={{backgroundImage: "radial-gradient(ellipse at center, rgba(0,200,255,0.05) 0%, transparent 70%)"}} />

      {/* Animated orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 container-max mx-auto px-4 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span className="text-sm text-slate-300 font-medium">
            Available for opportunities
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6"
        >
          <span className="text-white">Building the Future</span>
          <br />
          <span className="gradient-text">with Geospatial AI</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          I develop AI-powered GIS solutions using drone imagery, LiDAR,
          computer vision, and remote sensing to transform spatial data into
          intelligent decision-making systems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-cyan-500 text-navy-900 font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25 hover:scale-105"
          >
            <span className="relative z-10">View Projects</span>
            <FiExternalLink className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-2 px-8 py-4 glass text-white font-semibold rounded-2xl hover:border-cyan-400/30 hover:glow-cyan transition-all duration-300 hover:scale-105"
          >
            <FiMail className="w-4 h-4 text-cyan-400" />
            Contact Me
          </a>
          <button
            className="inline-flex items-center gap-2 px-8 py-4 border border-slate-700 text-slate-300 font-semibold rounded-2xl hover:border-cyan-400/30 hover:text-white transition-all duration-300 hover:scale-105"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/Hitimana_JMV_CV.pdf";
              link.download = "Hitimana_Jean_Marie_Vianney_CV.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <FiDownload className="w-4 h-4" />
            Download CV
          </button>
        </motion.div>

        {/* Tech stack pills */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {["Python", "PyTorch", "YOLOv8", "QGIS", "LiDAR", "Drone Mapping", "OpenCV", "React"].map(
            (tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.2 + i * 0.1 }}
                className="px-4 py-1.5 text-xs font-medium rounded-full glass text-slate-300 border border-cyan-400/10"
              >
                {tech}
              </motion.span>
            )
          )}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-slate-500 uppercase tracking-widest">Scroll</span>
            <FiArrowDown className="w-5 h-5 text-cyan-400/60" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
