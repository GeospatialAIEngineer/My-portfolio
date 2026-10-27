"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiAward, FiBookOpen } from "react-icons/fi";

interface Education {
  degree: string;
  institution: string;
  field: string;
  icon: typeof FiBookOpen;
}

const educationItems: Education[] = [
  {
    degree: "MSc",
    institution: "University of Lay Adventist in Kigali (UNILAK)",
    field: "Environmental and Development Studies (Environmental Information Systems)",
    icon: FiBookOpen,
  },
  {
    degree: "BSc",
    institution: "University of Rwanda",
    field: "Surveying and Geomatics Engineering",
    icon: FiBookOpen,
  },
];

interface Certification {
  title: string;
  issuer: string;
  year: string;
}

const certifications: Certification[] = [
  { title: "Coming Soon", issuer: "Professional Certification", year: "—" },
  { title: "Coming Soon", issuer: "Professional Certification", year: "—" },
  { title: "Coming Soon", issuer: "Professional Certification", year: "—" },
];

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" ref={ref} className="section-padding relative">
      <div className="container-max mx-auto">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            <span className="gradient-text-static">Education</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {educationItems.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
            >
              <div className="glass rounded-2xl p-8 hover-card h-full border border-cyan-400/5 hover:border-cyan-400/20">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 flex items-center justify-center">
                    <edu.icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 rounded-lg bg-cyan-400/10 text-cyan-400 text-sm font-bold mb-1">
                      {edu.degree}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {edu.field}
                </h3>
                <p className="text-slate-400">{edu.institution}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase">
            Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            <span className="gradient-text-static">Certifications</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Professional certifications and continuous learning achievements.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
              className="glass rounded-2xl p-6 border border-dashed border-slate-700 flex flex-col items-center justify-center text-center min-h-[180px] hover:border-emerald-400/30 transition-all duration-300"
            >
              <FiAward className="w-10 h-10 text-slate-600 mb-4" />
              <h4 className="text-white font-semibold mb-1">{cert.title}</h4>
              <p className="text-slate-500 text-sm">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
