import { ArrowUp } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF6F0] border-t border-[#E4DBC9] py-10">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#E4DBC9]">
          <div>
            <p className="font-display text-lg font-semibold text-[#1F1915]">
              {PROFILE.name}
            </p>
            <p className="text-xs text-[#786C61] mt-0.5">
              {PROFILE.role} · {PROFILE.location}
            </p>
          </div>

          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-6 text-sm text-[#5B5046]">
            <a href="#about" className="hover:text-[#1F1915] transition-colors duration-150">
              About
            </a>
            <a href="#skills" className="hover:text-[#1F1915] transition-colors duration-150">
              Skills
            </a>
            <a href="#experience" className="hover:text-[#1F1915] transition-colors duration-150">
              Training
            </a>
            <a href="#projects" className="hover:text-[#1F1915] transition-colors duration-150">
              Projects
            </a>
            <a href="#credentials" className="hover:text-[#1F1915] transition-colors duration-150">
              Credentials
            </a>
            <a href="#contact" className="hover:text-[#1F1915] transition-colors duration-150">
              Contact
            </a>
          </nav>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-[#1F1915] bg-[#F2EBE0] hover:bg-[#E4DBC9] border border-[#E4DBC9] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[38px]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#9E4B16]" aria-hidden="true" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#786C61]">
          <p>© {year} {PROFILE.name}. Built with care in Bengaluru.</p>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href={PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1F1915] transition-colors duration-150"
            >
              LinkedIn
            </a>
            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1F1915] transition-colors duration-150"
            >
              GitHub
            </a>
            <a
              href={PROFILE.credlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1F1915] transition-colors duration-150"
            >
              Credly
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="hover:text-[#9E4B16] transition-colors duration-150"
            >
              {PROFILE.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
