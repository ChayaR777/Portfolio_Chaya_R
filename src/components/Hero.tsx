import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Mail } from 'lucide-react';
import { PROFILE, SKILL_GROUPS, SOFT_STRENGTHS } from '../data/portfolioData';
import { ImageWithFallback } from './ImageWithFallback';

type HeroTab = 'code' | 'profile' | 'focus';

interface HeroProps {
  onOpenResume: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  const [activeTab, setActiveTab] = useState<HeroTab>('code');

  return (
    <section id="top" className="pt-10 pb-14 md:pt-16 md:pb-20 border-b border-[#E4DBC9]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-6 flex flex-col justify-between py-1">
            <div>
              <p className="text-sm font-medium text-[#9E4B16] mb-4">
                {PROFILE.role} · {PROFILE.location}
              </p>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.35rem] font-semibold tracking-tight text-[#1F1915] leading-[1.1] [text-wrap:balance] max-w-xl">
                {PROFILE.headline}
              </h1>

              <p className="mt-6 text-base sm:text-lg text-[#5B5046] leading-relaxed max-w-[54ch]">
                Pursuing a Bachelor of Computer Applications in Artificial Intelligence &amp; Machine Learning at {PROFILE.institution}. Focused on Python, Java, backend engineering, and practical ML workflows.
              </p>
            </div>

            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#FAF6F0] bg-[#9E4B16] hover:bg-[#813B0F] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[44px]"
              >
                <span>View Projects</span>
                <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#1F1915] bg-[#FFFFFF] hover:bg-[#F2EBE0] border border-[#E4DBC9] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[44px]"
              >
                <span>View Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#1F1915] bg-[#F2EBE0] hover:bg-[#E7DDD0] border border-[#E4DBC9] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[44px]"
              >
                <span>Contact Me</span>
              </a>

              <div className="flex flex-wrap items-center gap-4 pl-1">
                <a
                  href={PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-[#5B5046] hover:text-[#1F1915] underline-offset-4 hover:underline decoration-[#9E4B16] transition-colors duration-150 whitespace-nowrap shrink-0 py-2"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href={PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-[#5B5046] hover:text-[#1F1915] underline-offset-4 hover:underline decoration-[#9E4B16] transition-colors duration-150 whitespace-nowrap shrink-0 py-2"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href={`mailto:${PROFILE.email}`}
                  aria-label={`Email ${PROFILE.name}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#5B5046] hover:text-[#1F1915] underline-offset-4 hover:underline decoration-[#9E4B16] transition-colors duration-150 whitespace-nowrap shrink-0 py-2"
                >
                  <Mail className="w-4 h-4 text-[#9E4B16]" aria-hidden="true" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Tabbed Developer Snapshot */}
          <div className="lg:col-span-6 flex">
            <div className="w-full rounded-2xl bg-[#FFFFFF] border border-[#E4DBC9] overflow-hidden flex flex-col justify-between">
              {/* Segmented Tab Switcher */}
              <div className="px-5 py-3.5 bg-[#F2EBE0]/70 border-b border-[#E4DBC9] flex items-center justify-between gap-4">
                <span className="font-mono text-xs font-medium text-[#786C61] truncate">
                  chaya-portfolio.ts
                </span>

                <div
                  role="tablist"
                  aria-label="Developer snapshot views"
                  className="flex items-center gap-1 p-1 bg-[#FAF6F0] border border-[#E4DBC9] rounded-lg shrink-0"
                >
                  {(
                    [
                      { id: 'code', label: 'Code' },
                      { id: 'profile', label: 'Profile' },
                      { id: 'focus', label: 'Focus' },
                    ] as const
                  ).map((tab) => {
                    const isSelected = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        aria-selected={isSelected}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 ${
                          isSelected
                            ? 'bg-[#1F1915] text-[#FAF6F0]'
                            : 'text-[#5B5046] hover:text-[#1F1915]'
                        }`}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Tab Content Body */}
              <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
                {activeTab === 'code' && (
                  <div className="rounded-xl bg-[#241D18] text-[#F5EFE6] p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto">
                    <p className="text-[#A89A8E] mb-2">{'const developer = {'}</p>
                    <p className="pl-4">
                      <span className="text-[#D4C5B4]">name:</span>{' '}
                      <span className="text-[#F5B076]">&apos;{PROFILE.name}&apos;</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-[#D4C5B4]">degree:</span>{' '}
                      <span className="text-[#F5B076]">&apos;BCA (AI &amp; ML), 2027&apos;</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-[#D4C5B4]">location:</span>{' '}
                      <span className="text-[#F5B076]">&apos;Bengaluru, India&apos;</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-[#D4C5B4]">coreStack:</span> [
                      <span className="text-[#E6C79C]">&apos;Python&apos;</span>,{' '}
                      <span className="text-[#E6C79C]">&apos;Java 17&apos;</span>,{' '}
                      <span className="text-[#E6C79C]">&apos;SQL&apos;</span>,{' '}
                      <span className="text-[#E6C79C]">&apos;ML&apos;</span>],
                    </p>
                    <p className="pl-4">
                      <span className="text-[#D4C5B4]">training:</span>{' '}
                      <span className="text-[#F5B076]">&apos;Pentagon Space (Data Science — Under Training)&apos;</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-[#D4C5B4]">interests:</span> [
                      <span className="text-[#E6C79C]">&apos;AI/ML&apos;</span>,{' '}
                      <span className="text-[#E6C79C]">&apos;Backend&apos;</span>,{' '}
                      <span className="text-[#E6C79C]">&apos;Cloud &amp; Security&apos;</span>],
                    </p>
                    <p className="pl-4">
                      <span className="text-[#D4C5B4]">cgpa:</span>{' '}
                      <span className="text-[#F5B076] tabular-nums">&apos;8.44 / 10&apos;</span>
                    </p>
                    <p className="text-[#A89A8E] mt-1">{'};'}</p>
                  </div>
                )}

                {activeTab === 'profile' && (
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className="w-full sm:w-28 h-28 rounded-xl overflow-hidden border border-[#E4DBC9] bg-[#F2EBE0] shrink-0">
                        <ImageWithFallback
                          src={PROFILE.heroImage}
                          alt="Warm minimalist developer workspace"
                          fallbackTitle={PROFILE.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h2 className="font-display text-xl font-semibold text-[#1F1915]">
                          {PROFILE.name}
                        </h2>
                        <p className="text-sm font-medium text-[#9E4B16] mt-0.5">
                          BCA · AI &amp; Machine Learning
                        </p>
                        <p className="text-xs text-[#786C61] mt-1">
                          {PROFILE.institution} · {PROFILE.location}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-[#5B5046] leading-relaxed p-4 rounded-xl bg-[#FAF6F0] border border-[#E4DBC9]">
                      Building dependable software systems, machine learning data pipelines, and responsive web interfaces through structured experimentation.
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-[#FAF6F0] border border-[#E4DBC9]">
                        <p className="text-xs text-[#786C61]">Academic Standing</p>
                        <p className="text-sm font-semibold text-[#1F1915] tabular-nums mt-0.5">
                          CGPA {PROFILE.cgpa}
                        </p>
                      </div>
                      <div className="p-3 rounded-xl bg-[#FAF6F0] border border-[#E4DBC9]">
                        <p className="text-xs text-[#786C61]">Technical Training</p>
                        <p className="text-sm font-semibold text-[#1F1915] mt-0.5">
                          Pentagon Space (Under Training)
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'focus' && (
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-medium text-[#786C61] mb-2">Primary Engineering Stack</p>
                      <p className="text-sm font-medium text-[#1F1915] leading-relaxed">
                        {SKILL_GROUPS[0].items.join(' · ')} · {SKILL_GROUPS[2].items.slice(0, 3).join(' · ')}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#E4DBC9]">
                      <p className="text-xs font-medium text-[#786C61] mb-2">AI &amp; Data Libraries</p>
                      <p className="text-sm text-[#5B5046] leading-relaxed">
                        {SKILL_GROUPS[3].items.join(' · ')}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#E4DBC9]">
                      <p className="text-xs font-medium text-[#786C61] mb-2">Working Principles</p>
                      <p className="text-sm text-[#5B5046] leading-relaxed">
                        {SOFT_STRENGTHS.map((s) => s.name).join(' · ')}
                      </p>
                    </div>
                  </div>
                )}

                <div className="mt-5 pt-3.5 border-t border-[#E4DBC9] flex items-center justify-between text-xs font-mono text-[#786C61]">
                  <span>{PROFILE.institution}</span>
                  <span className="tabular-nums">Class of {PROFILE.graduationYear}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Key Profile Strip Below Hero Split */}
        <div className="mt-12 pt-8 border-t border-[#E4DBC9] grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <p className="text-xs font-medium text-[#786C61] mb-1">Degree &amp; Focus</p>
            <p className="text-sm sm:text-base font-semibold text-[#1F1915]">
              BCA · AI &amp; Machine Learning
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-[#786C61] mb-1">Expected Graduation</p>
            <p className="text-sm sm:text-base font-semibold text-[#1F1915] tabular-nums">
              Class of {PROFILE.graduationYear} · CGPA {PROFILE.cgpa}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-[#786C61] mb-1">Core Stack</p>
            <p className="text-sm sm:text-base font-semibold text-[#1F1915]">
              Python · Java 17 · SQL · ML
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-[#786C61] mb-1">Direct Contact</p>
            <a
              href={`mailto:${PROFILE.email}`}
              className="text-sm sm:text-base font-semibold text-[#9E4B16] hover:underline underline-offset-4 break-all"
            >
              {PROFILE.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
