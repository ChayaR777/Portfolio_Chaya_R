import { useEffect, useState } from 'react';
import { ArrowUpRight, Maximize2, X } from 'lucide-react';
import { COMPLETED_PROJECTS, ProjectItem } from '../data/portfolioData';
import { ImageWithFallback } from './ImageWithFallback';

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-[#E4DBC9] bg-[#F2EBE0]/45">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <p className="text-sm font-medium text-[#9E4B16] mb-2">04. Featured Case Study</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#1F1915] [text-wrap:balance]">
              Completed Engineering Work
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5B5046] max-w-md">
            Practical machine learning data pipeline built with Python, yfinance, and Scikit-learn.
          </p>
        </div>

        {/* Split Featured Case Study */}
        <div className="space-y-12">
          {COMPLETED_PROJECTS.map((project) => (
            <article
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch"
            >
              {/* Project Details Card */}
              <div className="lg:col-span-6 bg-[#FFFFFF] border border-[#E4DBC9] rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#E4DBC9]">
                    <div>
                      <p className="text-xs font-medium text-[#786C61]">Role &amp; Focus</p>
                      <p className="text-sm font-semibold text-[#1F1915] mt-0.5">{project.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-medium text-[#786C61]">Status</p>
                      <p className="text-sm font-medium text-[#9E4B16] mt-0.5">
                        {project.number}. {project.status} · <span className="tabular-nums">{project.year}</span>
                      </p>
                    </div>
                  </div>

                  <h3 className="font-display text-2xl sm:text-[1.75rem] font-semibold text-[#1F1915] tracking-tight mt-5 mb-3 [text-wrap:balance]">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#5B5046] leading-relaxed mb-5">
                    {project.summary}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((item, idx) => (
                      <li key={idx} className="text-sm text-[#5B5046] flex items-start gap-2.5">
                        <span className="text-[#9E4B16] font-mono text-xs mt-1 shrink-0" aria-hidden="true">
                          —
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* 2x2 Key Specs Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-5 border-t border-[#E4DBC9] mb-6">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="p-3 rounded-xl bg-[#FAF6F0] border border-[#E4DBC9]"
                      >
                        <p className="text-[11px] font-medium text-[#786C61]">{metric.label}</p>
                        <p className="text-xs sm:text-sm font-semibold text-[#1F1915] font-mono mt-0.5 truncate">
                          {metric.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#E4DBC9]">
                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-[#FAF6F0] bg-[#9E4B16] hover:bg-[#813B0F] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[42px]"
                      >
                        View Case Study
                      </button>

                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-[#1F1915] bg-[#F2EBE0] hover:bg-[#E4DBC9] border border-[#E4DBC9] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[42px]"
                        >
                          <span>View GitHub</span>
                          <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Showcase Column */}
              <div className="lg:col-span-6 flex flex-col justify-between gap-4">
                <div className="relative group flex-1 min-h-[280px] rounded-2xl overflow-hidden border border-[#E4DBC9] bg-[#FFFFFF]">
                  <ImageWithFallback
                    src={project.imageUrl}
                    alt={project.imageAlt}
                    fallbackTitle={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    aria-label={`Expand ${project.title} preview`}
                    className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#1F1915]/85 hover:bg-[#9E4B16] text-[#FAF6F0] text-xs font-medium backdrop-blur-xs transition-colors duration-150 min-h-[36px]"
                  >
                    <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Expand</span>
                  </button>
                </div>

                <div className="px-5 py-3.5 rounded-xl bg-[#FFFFFF] border border-[#E4DBC9]">
                  <p className="text-xs font-medium text-[#786C61] mb-1">Technical Stack</p>
                  <p className="font-mono text-xs text-[#1F1915] leading-relaxed">
                    {project.stack.join(' · ')}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1F1915]/70 backdrop-blur-xs"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#FAF6F0] border border-[#E4DBC9] rounded-2xl shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-6 py-4 bg-[#FAF6F0]/95 backdrop-blur-xs border-b border-[#E4DBC9]">
              <div className="flex items-center gap-2 text-xs font-medium text-[#786C61]">
                <span className="font-mono tabular-nums text-[#9E4B16]">{selectedProject.number}.</span>
                <span>{selectedProject.category}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedProject.status}</span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[#E4DBC9] bg-[#FFFFFF] text-[#1F1915] hover:bg-[#F2EBE0] transition-colors duration-150"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="aspect-[16/10] rounded-xl overflow-hidden border border-[#E4DBC9] bg-[#F2EBE0]">
                <ImageWithFallback
                  src={selectedProject.imageUrl}
                  alt={selectedProject.imageAlt}
                  fallbackTitle={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3
                  id="project-modal-title"
                  className="font-display text-2xl sm:text-3xl font-semibold text-[#1F1915] tracking-tight mb-3"
                >
                  {selectedProject.title}
                </h3>
                <div className="space-y-3 text-base text-[#5B5046] leading-relaxed">
                  {selectedProject.description.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-[#E4DBC9]">
                <h4 className="text-sm font-semibold text-[#1F1915] mb-3">
                  Architecture &amp; Key Deliverables
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.highlights.map((item, idx) => (
                    <li key={idx} className="text-sm sm:text-base text-[#5B5046] flex items-start gap-3">
                      <span className="text-[#9E4B16] font-mono text-xs mt-1.5 shrink-0" aria-hidden="true">
                        —
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 border-t border-[#E4DBC9] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-medium text-[#786C61] mb-1">Technologies Used</p>
                  <p className="font-mono text-xs sm:text-sm text-[#1F1915]">
                    {selectedProject.stack.join(' · ')}
                  </p>
                </div>
                {selectedProject.repoUrl && (
                  <a
                    href={selectedProject.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#FAF6F0] bg-[#9E4B16] hover:bg-[#813B0F] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[44px]"
                  >
                    <span>Open Repository</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
