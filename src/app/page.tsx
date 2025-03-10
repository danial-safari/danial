'use client';

import { motion } from 'framer-motion';
import HeroSection from './_components/sections/Hero';
import AboutSection from './_components/sections/About';
import ProjectsSection from './_components/sections/ProjectsSection';
import ExperienceSection from './_components/sections/ExperienceSection';
import BlogSection from './_components/sections/BlogSection';
import ContactSection from './_components/sections/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <BlogSection />
        <ContactSection />
      </motion.div>
    </main>
  );
}
