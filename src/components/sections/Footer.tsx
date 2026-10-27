"use client";

import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiMapPin, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-cyan-400/10">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      <div className="container-max mx-auto px-4">
        <div className="py-12 grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Bio */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-400 flex items-center justify-center font-bold text-navy-900 text-sm">
                H
              </div>
              <span className="text-white font-semibold">
                Hitimana JMV
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Geospatial AI Engineer building intelligent solutions with drone
              imagery, LiDAR, and computer vision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <nav className="flex flex-wrap justify-center gap-4 text-sm">
              {["About", "Skills", "Projects", "Experience", "Contact"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(`#${link.toLowerCase()}`)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link}
                  </a>
                )
              )}
            </nav>
          </div>

          {/* Contact */}
          <div className="md:text-right">
            <div className="flex md:justify-end gap-3 mb-4">
              <a
                href="https://github.com/GeospatialAIEngineer"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all hover:border-cyan-400/30"
                aria-label="GitHub"
              >
                <SiGithub className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/GeospatialAIEngineer"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all hover:border-cyan-400/30"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a
                href="mailto:jmvhitimana050@gmail.com"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all hover:border-cyan-400/30"
                aria-label="Email"
              >
                <FiMail className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center md:justify-end gap-2 text-slate-500 text-sm">
              <FiMapPin className="w-4 h-4" />
              <span>Kigali, Rwanda</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Hitimana Jean Marie Vianney. All
            rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all hover:border-cyan-400/30"
            aria-label="Scroll to top"
          >
            <FiArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
