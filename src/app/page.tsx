"use client";

import LoadingScreen from "@/components/ui/LoadingScreen";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Navbar from "@/components/ui/Navbar";
import ParticleBackground from "@/components/ui/ParticleBackground";
import HeroSection from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About";
import SkillsSection from "@/components/sections/Skills";
import ProjectsSection from "@/components/sections/Projects";
import ExperienceSection from "@/components/sections/Experience";
import EducationSection from "@/components/sections/Education";
import StatisticsSection from "@/components/sections/Statistics";
// import TestimonialsSection from "@/components/sections/Testimonials"; // Hidden for now, will re-add later
import ContactSection from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <LoadingScreen />
      <ScrollProgress />
      <ParticleBackground />
      <Navbar />

      {/* Floating Theme Toggle */}
      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <StatisticsSection />
      {/* <TestimonialsSection /> Hidden for now, will re-add later */}
      <ContactSection />
      <Footer />
    </main>
  );
}
