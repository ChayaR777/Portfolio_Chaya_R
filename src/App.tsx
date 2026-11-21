import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutExperienceSection } from './components/AboutExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CredentialsSection } from './components/CredentialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#1F1915] flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#1F1915] focus:text-[#FAF6F0] focus:rounded-lg focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content" className="flex-1">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <AboutExperienceSection />
        <ProjectsSection />
        <CredentialsSection />
        <ContactSection onOpenResume={() => setResumeOpen(true)} />
      </main>

      <Footer />

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
