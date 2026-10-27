"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiMessageSquare } from "react-icons/fi";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Dr. John Smith",
    role: "Director, Geospatial Technologies Lab",
    text: "Vianney's work in integrating AI with geospatial analysis is truly exceptional. His ability to develop end-to-end pipelines that transform raw drone imagery into actionable insights demonstrates exceptional technical skill and domain expertise.",
    avatar: "JS",
  },
  {
    name: "Sarah Williams",
    role: "Senior Project Manager, Infrastructure Development",
    text: "The change detection system Vianney built has revolutionized how we monitor infrastructure development. His deep understanding of both AI and GIS makes him a rare and valuable talent in the field.",
    avatar: "SW",
  },
  {
    name: "Prof. Michael Chen",
    role: "Research Supervisor, Digital Twin Initiative",
    text: "Vianney's research into digital twin solutions shows remarkable depth. His approach to combining UAV photogrammetry, LiDAR, and AI for creating comprehensive digital replicas is cutting-edge and highly promising.",
    avatar: "MC",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative">
      <div className="container-max mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">
            Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            What People{" "}
            <span className="gradient-text-static">Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
              className="glass rounded-2xl p-8 hover-card border border-cyan-400/5 relative"
            >
              <FiMessageSquare className="w-10 h-10 text-cyan-400/20 absolute top-6 right-6" />

              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 flex items-center justify-center text-navy-900 font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{t.name}</h4>
                  <p className="text-slate-500 text-sm">{t.role}</p>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed italic">
                "{t.text}"
              </p>

              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    className="w-4 h-4 text-cyan-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
