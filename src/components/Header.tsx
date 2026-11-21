import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Training', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Credentials', href: '#credentials' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF6F0]/95 backdrop-blur-sm border-b border-[#E4DBC9]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          className="font-display text-xl font-semibold tracking-tight text-[#1F1915] whitespace-nowrap shrink-0 hover:text-[#9E4B16] transition-colors duration-150"
        >
          {PROFILE.name}
        </a>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#5B5046] hover:text-[#1F1915] underline-offset-4 hover:underline decoration-[#9E4B16] decoration-1.5 transition-colors duration-150 whitespace-nowrap shrink-0 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-[#FAF6F0] bg-[#1F1915] hover:bg-[#9E4B16] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[40px]"
          >
            Get in Touch
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#E4DBC9] bg-[#FAF6F0] text-[#1F1915] hover:bg-[#F2EBE0] transition-colors duration-150"
          >
            {mobileOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-nav-drawer"
          aria-label="Mobile Navigation"
          className="md:hidden border-t border-[#E4DBC9] bg-[#FAF6F0] px-5 py-4 space-y-1"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="block px-3 py-3 rounded-lg text-base font-medium text-[#1F1915] hover:bg-[#F2EBE0] transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="flex items-center justify-center w-full px-4 py-3 text-base font-medium text-[#FAF6F0] bg-[#9E4B16] hover:bg-[#813B0F] rounded-lg transition-colors duration-150"
            >
              Get in Touch
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
