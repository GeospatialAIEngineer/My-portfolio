"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiMapPin, FiBriefcase, FiGlobe, FiTarget } from "react-icons/fi";

const infoCards = [
  { icon: FiMapPin, label: "Location", value: "Kigali, Rwanda" },
  { icon: FiBriefcase, label: "Role", value: "GIS Engineer" },
  { icon: FiGlobe, label: "Company", value: "Charis UAS" },
  { icon: FiTarget, label: "Focus", value: "Geospatial AI" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="section-padding relative">
      <div className="container-max mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            Passionate About{" "}
            <span className="gradient-text-static">Geospatial Innovation</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass rounded-3xl p-8 hover-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-emerald-400 flex items-center justify-center text-navy-900 font-bold text-lg">
                  V
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Hitimana Jean Marie Vianney
                  </h3>
                  <p className="text-cyan-400 text-sm font-medium">
                    Geospatial AI Engineer
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  I am a <span className="text-white font-medium">Geospatial AI Engineer</span> based in Kigali, Rwanda, currently working at <span className="text-emerald-400 font-medium">Charis UAS</span>. My mission is to build intelligent geospatial solutions that automate infrastructure monitoring using AI.
                </p>
                <p>
                  With expertise spanning <span className="text-cyan-400">Artificial Intelligence</span>, <span className="text-cyan-400">GIS</span>, <span className="text-cyan-400">UAV/Drone Mapping</span>, <span className="text-cyan-400">LiDAR Processing</span>, <span className="text-cyan-400">Remote Sensing</span>, and <span className="text-cyan-400">Computer Vision</span>, I combine cutting-edge technology with spatial science to solve real-world problems.
                </p>
                <p>
                  I specialize in developing end-to-end AI pipelines that transform raw spatial data into actionable intelligence — from drone imagery analysis to digital twin research and environmental monitoring.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {infoCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                className="glass rounded-2xl p-6 hover-card"
              >
                <card.icon className="w-6 h-6 text-cyan-400 mb-3" />
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                  {card.label}
                </p>
                <p className="text-white font-semibold">{card.value}</p>
              </motion.div>
            ))}

            {/* Mission card spanning 2 cols */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="col-span-2 glass rounded-2xl p-6 hover-card border-emerald-400/10"
            >
              <div className="flex items-start gap-3">
                <FiTarget className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">
                    My Mission
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    To build intelligent geospatial solutions that automate infrastructure monitoring using AI, enabling smarter decisions for sustainable development and environmental preservation.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
