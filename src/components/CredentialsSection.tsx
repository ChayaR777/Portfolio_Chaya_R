import { useState } from 'react';
import { ArrowUpRight, Award } from 'lucide-react';
import { CREDENTIAL_GROUPS, PROFILE } from '../data/portfolioData';

export function CredentialsSection() {
  const [activeIssuer, setActiveIssuer] = useState<string>('All');

  const issuers = ['All', ...CREDENTIAL_GROUPS.map((g) => g.issuer)];

  const filteredGroups =
    activeIssuer === 'All'
      ? CREDENTIAL_GROUPS
      : CREDENTIAL_GROUPS.filter((g) => g.issuer === activeIssuer);

  return (
    <section id="credentials" className="py-16 md:py-24 border-b border-[#E4DBC9]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-sm font-medium text-[#9E4B16] mb-2">05. Continuous Learning</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#1F1915]">
              Certifications &amp; Credentials
            </h2>
          </div>

          <a
            href={PROFILE.credlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#FAF6F0] bg-[#1F1915] hover:bg-[#9E4B16] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 self-start lg:self-auto min-h-[42px]"
          >
            <span>Verify Badges on Credly</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        {/* Functional Segmented Filter Bar */}
        <div className="mb-8 flex">
          <div
            role="tablist"
            aria-label="Filter credentials by issuer"
            className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F2EBE0] border border-[#E4DBC9] rounded-xl"
          >
            {issuers.map((issuer) => {
              const isActive = activeIssuer === issuer;
              return (
                <button
                  key={issuer}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveIssuer(issuer)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[38px] ${
                    isActive
                      ? 'bg-[#1F1915] text-[#FAF6F0]'
                      : 'text-[#5B5046] hover:text-[#1F1915] hover:bg-[#FAF6F0]'
                  }`}
                >
                  {issuer}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredGroups.map((group) => (
            <div
              key={group.issuer}
              className="bg-[#FFFFFF] border border-[#E4DBC9] rounded-2xl p-6 sm:p-7"
            >
              <div className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-[#E4DBC9]">
                <h3 className="font-display text-xl font-semibold text-[#1F1915]">
                  {group.issuer}
                </h3>
                <span className="font-mono text-xs text-[#786C61] tabular-nums">
                  {group.items.length} {group.items.length === 1 ? 'credential' : 'credentials'}
                </span>
              </div>

              <ul className="divide-y divide-[#E4DBC9]/70">
                {group.items.map((item) => (
                  <li
                    key={item.title}
                    className="py-3 first:pt-0 last:pb-0 flex items-start justify-between gap-4"
                  >
                    <div className="flex items-start gap-2.5">
                      <Award
                        className="w-4 h-4 text-[#9E4B16] mt-0.5 shrink-0"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                      <div>
                        <span className="text-sm sm:text-base font-medium text-[#1F1915] block">
                          {item.title}
                        </span>
                        {item.linkUrl && (
                          <a
                            href={item.linkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-medium text-[#9E4B16] hover:underline underline-offset-4 mt-1"
                          >
                            <span>{item.linkLabel || 'View Verification'}</span>
                            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                          </a>
                        )}
                      </div>
                    </div>
                    {item.note && (
                      <span className="text-xs text-[#786C61] whitespace-nowrap shrink-0 mt-0.5">
                        {item.note}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
