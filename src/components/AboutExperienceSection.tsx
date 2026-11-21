import {
  EXPERIENCE_AND_COMMUNITY,
  PROFILE,
  SKILL_GROUPS,
  SOFT_STRENGTHS,
} from '../data/portfolioData';

export function AboutExperienceSection() {
  return (
    <>
      {/* 01. About Me & Core Strengths */}
      <section id="about" className="py-16 md:py-24 border-b border-[#E4DBC9]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-medium text-[#9E4B16] mb-2">01. About the Developer</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#1F1915] [text-wrap:balance]">
              Software engineering foundations paired with applied AI.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Bio & Academic Facts Card */}
            <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#E4DBC9] rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="space-y-4 text-base text-[#5B5046] leading-[1.75]">
                {PROFILE.introParagraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#E4DBC9]">
                <div className="p-4 rounded-xl bg-[#FAF6F0] border border-[#E4DBC9]">
                  <dt className="text-xs font-medium text-[#786C61]">Institution</dt>
                  <dd className="text-sm font-semibold text-[#1F1915] mt-1">
                    {PROFILE.institution}
                  </dd>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF6F0] border border-[#E4DBC9]">
                  <dt className="text-xs font-medium text-[#786C61]">Academic Standing</dt>
                  <dd className="text-sm font-semibold text-[#1F1915] tabular-nums mt-1">
                    BCA (AI &amp; ML, {PROFILE.graduationYear}) · CGPA {PROFILE.cgpa}
                  </dd>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF6F0] border border-[#E4DBC9]">
                  <dt className="text-xs font-medium text-[#786C61]">Location</dt>
                  <dd className="text-sm font-semibold text-[#1F1915] mt-1">{PROFILE.location}</dd>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF6F0] border border-[#E4DBC9]">
                  <dt className="text-xs font-medium text-[#786C61]">Career Interests</dt>
                  <dd className="text-sm font-semibold text-[#1F1915] mt-1">
                    AI/ML · Backend · Cloud &amp; Security
                  </dd>
                </div>
              </dl>
            </div>

            {/* Core Strengths Grid */}
            <div className="lg:col-span-5 bg-[#FFFFFF] border border-[#E4DBC9] rounded-2xl p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold text-[#1F1915] mb-1">
                Professional Strengths
              </h3>
              <p className="text-sm text-[#5B5046] mb-6">
                Core habits and problem-solving principles that guide my engineering work.
              </p>

              <div className="divide-y divide-[#E4DBC9]">
                {SOFT_STRENGTHS.map((strength, idx) => (
                  <div key={strength.name} className="py-3.5 first:pt-0 last:pb-0">
                    <div className="flex items-baseline gap-2.5">
                      <span className="font-mono text-xs text-[#9E4B16] tabular-nums">
                        0{idx + 1}.
                      </span>
                      <h4 className="text-sm font-semibold text-[#1F1915]">{strength.name}</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[#5B5046] mt-1 pl-6 leading-relaxed">
                      {strength.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Technical Skills */}
      <section id="skills" className="py-16 md:py-24 border-b border-[#E4DBC9] bg-[#F2EBE0]/45">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-sm font-medium text-[#9E4B16] mb-2">02. Capabilities</p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#1F1915]">
                Technical Skills &amp; Tooling
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#5B5046] max-w-md">
              Core languages, ML libraries, backend workflows, and foundational computer science disciplines.
            </p>
          </div>

          <div className="bg-[#FFFFFF] border border-[#E4DBC9] rounded-2xl divide-y divide-[#E4DBC9]">
            {SKILL_GROUPS.map((group) => (
              <div
                key={group.category}
                className="p-6 sm:px-8 sm:py-6 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-baseline"
              >
                <div className="md:col-span-4">
                  <h3 className="font-display text-lg font-semibold text-[#1F1915]">
                    {group.category}
                  </h3>
                  <p className="text-xs text-[#786C61] mt-1">{group.summary}</p>
                </div>
                <p className="md:col-span-8 text-sm sm:text-base font-medium text-[#3E362F] leading-relaxed">
                  {group.items.join(' · ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03. Training & Community Leadership */}
      <section id="experience" className="py-16 md:py-24 border-b border-[#E4DBC9]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-medium text-[#9E4B16] mb-2">03. Training &amp; Service</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#1F1915]">
              Technical Training &amp; Community Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {EXPERIENCE_AND_COMMUNITY.map((item) => (
              <article
                key={item.id}
                className="bg-[#FFFFFF] border border-[#E4DBC9] rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <p className="text-xs font-medium text-[#9E4B16] mb-2">{item.type}</p>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#1F1915] tracking-tight mb-1">
                    {item.role}
                  </h3>
                  <p className="text-sm font-medium text-[#786C61] mb-4">{item.organization}</p>
                  <p className="text-sm sm:text-base text-[#5B5046] leading-relaxed mb-6">
                    {item.summary}
                  </p>
                </div>

                <ul className="space-y-2.5 pt-5 border-t border-[#E4DBC9]">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-[#5B5046] flex items-start gap-2.5">
                      <span className="text-[#9E4B16] font-mono shrink-0" aria-hidden="true">
                        —
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
