import { useEffect, useState } from 'react';
import { Check, Copy, Printer, X } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

export function ResumeModal({ open, onClose }: ResumeModalProps) {
  const [copiedAts, setCopiedAts] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (open) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  const handlePrint = () => {
    document.body.classList.add('printing-resume');
    const cleanup = () => {
      document.body.classList.remove('printing-resume');
      window.removeEventListener('afterprint', cleanup);
    };
    window.addEventListener('afterprint', cleanup);
    window.print();
    // Safety fallback if afterprint does not fire in sandboxed environments
    setTimeout(cleanup, 1500);
  };

  const handleCopyPlainText = async () => {
    const plainText = [
      `${PROFILE.resumeFullName}`,
      `${PROFILE.shortLocation} | ${PROFILE.phone} | ${PROFILE.resumeEmail}`,
      `LinkedIn: ${PROFILE.linkedinHandle} | GitHub: github.com/${PROFILE.githubHandle} | Credly: ${PROFILE.credlyHandle}`,
      '',
      'SUMMARY',
      PROFILE.resumeSummary,
      '',
      'EDUCATION',
      `${PROFILE.institution} — Bengaluru, Karnataka (${PROFILE.educationDates})`,
      `Bachelor of Computer Applications (BCA), Specialization in Artificial Intelligence & Machine Learning | CGPA: ${PROFILE.cgpa}`,
      `${PROFILE.preUniversity.institution} — Bengaluru, Karnataka (${PROFILE.preUniversity.dates})`,
      `${PROFILE.preUniversity.title}`,
      '',
      'TECHNICAL SKILLS',
      'Languages: Python, Java (Java 17), C, C++, SQL',
      'AI & Machine Learning: Machine Learning Fundamentals, Data Preprocessing, Regression, Classification, Neural Networks, Generative AI, Prompt Engineering',
      'Libraries & Developer Tools: Pandas, NumPy, Matplotlib, Scikit-learn, TensorFlow, OpenCV, yfinance, Git & GitHub, Maven, VS Code, IntelliJ IDEA',
      'Web, Cloud & Security: HTML5, CSS3, JavaScript, DBMS & SQLite, Cloud Fundamentals, Cryptography & Network Security, Linux',
      'Core Strengths & Languages: Problem-Solving, Strong Communication, Team Collaboration, Analytical Thinking | Languages: English, Kannada, Hindi',
      '',
      'TECHNICAL TRAINING',
      'Data Science Training Program — Pentagon Space (Under Training)',
      '- Selected through the college placement process and currently undergoing six-month technical training in Python programming, data preprocessing, statistical modeling, and applied ML.',
      '',
      'PROJECTS',
      'Stock Price Predictor | Python, yfinance, Pandas, NumPy, Matplotlib, Scikit-learn',
      '- Engineered an end-to-end historical market data pipeline analyzing Apple Inc. (AAPL) equity prices starting January 2, 2015 via yfinance (data/AAPL.csv).',
      '- Built structured preprocessing, exploratory visualization, and model-based price forecasting workflows.',
      '',
      'CERTIFICATIONS',
      '- Software Engineering Job Simulation (Midas — Java 17, Maven, Asynchronous Messaging) | J.P. Morgan Chase & Co. (Forage) — github.com/ChayaR777/forage-midas',
      '- Pragati: Path to Future Cohort 6 (AI & Generative AI) | Infosys Springboard',
      '- Prompt Engineering & Natural Language Processing for Developers | Infosys Springboard',
      '- Introduction to Software Engineering | IBM / Coursera',
      '- AI Literacy, Data Fundamentals & Quantum Enigma Badge | IBM (Credly)',
      '- Introduction to Generative AI | Google',
      '- Cryptography and Network Security & Soft Skills & Personality Development | NPTEL',
      '',
      'COMMUNITY & VOLUNTEERING',
      'Active Student Volunteer — National Service Scheme (NSS)',
      '- Contributed to BDA Green Bengaluru environmental drives, Police Marshal coordination, Blood Donation drives, and campus cultural initiatives.'
    ].join('\n');

    try {
      await navigator.clipboard.writeText(plainText);
      setCopiedAts(true);
      setTimeout(() => setCopiedAts(false), 2500);
    } catch {
      setCopiedAts(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-3 sm:p-6 bg-[#1F1915]/75 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[900px] bg-[#FAF6F0] border border-[#E4DBC9] rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Toolbar */}
        <div className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-3 px-5 sm:px-6 py-3.5 bg-[#FAF6F0]/95 backdrop-blur-xs border-b border-[#E4DBC9]">
          <div>
            <h2
              id="resume-modal-title"
              className="font-display text-lg font-semibold text-[#1F1915]"
            >
              Standard Single-Page Resume
            </h2>
            <p className="text-xs text-[#786C61]">
              ATS-formatted layout · Print or save directly as a 1-page PDF
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={handleCopyPlainText}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-medium text-[#1F1915] bg-[#FFFFFF] hover:bg-[#F2EBE0] border border-[#E4DBC9] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[38px]"
            >
              {copiedAts ? (
                <>
                  <Check className="w-4 h-4 text-[#9E4B16]" aria-hidden="true" />
                  <span>Copied ATS Text</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" aria-hidden="true" />
                  <span>Copy ATS Text</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-[#FAF6F0] bg-[#9E4B16] hover:bg-[#813B0F] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[38px]"
            >
              <Printer className="w-4 h-4" aria-hidden="true" />
              <span>Print / Save PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume preview"
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-[#E4DBC9] bg-[#FFFFFF] text-[#1F1915] hover:bg-[#F2EBE0] transition-colors duration-150"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Sleek Standard A4/Letter Resume Sheet */}
        <div className="p-4 sm:p-8 bg-[#EFE8DC]">
          <div
            id="resume-print-sheet"
            className="mx-auto max-w-[816px] bg-[#FFFFFF] text-[#1A1A1A] border border-[#E4DBC9] shadow-sm px-7 py-8 sm:px-11 sm:py-10 font-sans leading-[1.42]"
          >
            {/* Resume Header */}
            <header className="text-center pb-3.5 border-b-[1.5px] border-[#1F1915]">
              <h1 className="font-sans text-2xl sm:text-[26px] font-bold tracking-wide text-[#111111]">
                {PROFILE.resumeFullName}
              </h1>
              <p className="mt-1.5 text-[12px] text-[#333333] flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5">
                <span>{PROFILE.shortLocation}</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">{PROFILE.phone}</span>
                <span aria-hidden="true">·</span>
                <a
                  href={`mailto:${PROFILE.resumeEmail}`}
                  className="text-[#111111] underline decoration-[#999999] underline-offset-2"
                >
                  {PROFILE.resumeEmail}
                </a>
              </p>
              <p className="mt-1 text-[11.5px] text-[#333333] flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5">
                <a
                  href={PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#111111] underline decoration-[#999999] underline-offset-2"
                >
                  {PROFILE.linkedinHandle}
                </a>
                <span aria-hidden="true">·</span>
                <a
                  href={PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#111111] underline decoration-[#999999] underline-offset-2"
                >
                  github.com/{PROFILE.githubHandle}
                </a>
                <span aria-hidden="true">·</span>
                <a
                  href={PROFILE.credlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#111111] underline decoration-[#999999] underline-offset-2"
                >
                  Credly Badges
                </a>
              </p>
            </header>

            {/* Professional Summary */}
            <section className="mt-3.5">
              <h2 className="font-sans text-[11.5px] font-bold tracking-[0.08em] uppercase text-[#111111] border-b border-[#CCCCCC] pb-0.5 mb-1.5">
                Profile Summary
              </h2>
              <p className="text-[12px] text-[#262626] leading-[1.48]">
                {PROFILE.resumeSummary}
              </p>
            </section>

            {/* Education */}
            <section className="mt-3.5">
              <h2 className="font-sans text-[11.5px] font-bold tracking-[0.08em] uppercase text-[#111111] border-b border-[#CCCCCC] pb-0.5 mb-2">
                Education
              </h2>
              <div className="space-y-2">
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="text-[12.5px] font-bold text-[#111111]">
                      {PROFILE.institution}
                    </p>
                    <p className="text-[11.5px] font-medium text-[#333333] tabular-nums">
                      {PROFILE.educationDates}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="text-[12px] italic text-[#262626]">
                      Bachelor of Computer Applications (BCA) — Specialization in Artificial Intelligence &amp; Machine Learning
                    </p>
                    <p className="text-[11.5px] font-semibold text-[#111111] tabular-nums">
                      CGPA: {PROFILE.cgpa}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="text-[12.5px] font-bold text-[#111111]">
                      {PROFILE.preUniversity.institution}
                    </p>
                    <p className="text-[11.5px] font-medium text-[#333333] tabular-nums">
                      {PROFILE.preUniversity.dates}
                    </p>
                  </div>
                  <p className="text-[12px] italic text-[#262626]">
                    {PROFILE.preUniversity.title}
                  </p>
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section className="mt-3.5">
              <h2 className="font-sans text-[11.5px] font-bold tracking-[0.08em] uppercase text-[#111111] border-b border-[#CCCCCC] pb-0.5 mb-1.5">
                Technical Skills
              </h2>
              <div className="space-y-1 text-[11.8px] text-[#262626]">
                <p>
                  <span className="font-bold text-[#111111]">Programming Languages:</span> Python 3.13, Java (Java 17), C, C++, SQL
                </p>
                <p>
                  <span className="font-bold text-[#111111]">AI &amp; Machine Learning:</span> Machine Learning Fundamentals, Data Preprocessing, Regression &amp; Classification, Neural Networks, Generative AI, Prompt Engineering
                </p>
                <p>
                  <span className="font-bold text-[#111111]">Libraries &amp; Tools:</span> Pandas, NumPy, Matplotlib, Scikit-learn, TensorFlow, OpenCV, yfinance, Git &amp; GitHub, Maven, VS Code, IntelliJ IDEA
                </p>
                <p>
                  <span className="font-bold text-[#111111]">Web, Cloud &amp; Security:</span> HTML5, CSS3, JavaScript, DBMS &amp; SQLite, Cloud Fundamentals, Cryptography &amp; Network Security, Linux
                </p>
                <p>
                  <span className="font-bold text-[#111111]">Professional Strengths &amp; Languages:</span> Problem-Solving, Strong Communication, Analytical Thinking, Team Collaboration · Spoken: {PROFILE.languagesSpoken.join(', ')}
                </p>
              </div>
            </section>

            {/* Technical Training */}
            <section className="mt-3.5">
              <h2 className="font-sans text-[11.5px] font-bold tracking-[0.08em] uppercase text-[#111111] border-b border-[#CCCCCC] pb-0.5 mb-1.5">
                Technical Training
              </h2>
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="text-[12.5px] font-bold text-[#111111]">
                    Data Science Training Program — Pentagon Space
                  </p>
                  <p className="text-[11.5px] font-semibold text-[#333333]">
                    Under Training (6-Month Program)
                  </p>
                </div>
                <ul className="mt-1 list-disc pl-4 space-y-0.5 text-[11.8px] text-[#262626]">
                  <li>
                    Selected through the college placement process and currently undergoing intensive technical training in Python programming, data preprocessing, statistical modeling, and machine learning workflows.
                  </li>
                </ul>
              </div>
            </section>

            {/* Projects */}
            <section className="mt-3.5">
              <h2 className="font-sans text-[11.5px] font-bold tracking-[0.08em] uppercase text-[#111111] border-b border-[#CCCCCC] pb-0.5 mb-1.5">
                Projects
              </h2>
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="text-[12.5px] font-bold text-[#111111]">
                    Stock Price Predictor
                    <span className="font-normal text-[#444444]">
                      {' '}
                      | Python, yfinance, Pandas, NumPy, Matplotlib, Scikit-learn
                    </span>
                  </p>
                </div>
                <ul className="mt-1 list-disc pl-4 space-y-0.5 text-[11.8px] text-[#262626]">
                  <li>
                    Built an automated market data pipeline ingesting historical Apple Inc. (AAPL) prices starting January 2, 2015 via <span className="font-mono text-[11px]">yfinance</span> into structured CSV storage (<span className="font-mono text-[11px]">data/AAPL.csv</span>).
                  </li>
                  <li>
                    Implemented data cleaning, exploratory time-series visualization, and model-based price forecasting workflows.
                  </li>
                </ul>
              </div>
            </section>

            {/* Certifications */}
            <section className="mt-3.5">
              <h2 className="font-sans text-[11.5px] font-bold tracking-[0.08em] uppercase text-[#111111] border-b border-[#CCCCCC] pb-0.5 mb-1.5">
                Certifications
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-1 text-[11.5px] text-[#262626] list-disc pl-4">
                <li>
                  <span className="font-semibold text-[#111111]">Software Engineering Job Simulation (Midas)</span> · J.P. Morgan Chase (Forage)
                </li>
                <li>
                  <span className="font-semibold text-[#111111]">Pragati: Path to Future Cohort 6</span> · Infosys Springboard
                </li>
                <li>
                  <span className="font-semibold text-[#111111]">Prompt Engineering &amp; NLP for Developers</span> · Infosys Springboard
                </li>
                <li>
                  <span className="font-semibold text-[#111111]">Introduction to Software Engineering</span> · IBM / Coursera
                </li>
                <li>
                  <span className="font-semibold text-[#111111]">AI Literacy, Data Fundamentals &amp; Quantum Enigma</span> · IBM (Credly)
                </li>
                <li>
                  <span className="font-semibold text-[#111111]">Introduction to Generative AI</span> · Google
                </li>
                <li>
                  <span className="font-semibold text-[#111111]">Cryptography &amp; Network Security</span> · NPTEL
                </li>
                <li>
                  <span className="font-semibold text-[#111111]">Soft Skills &amp; Personality Development</span> · NPTEL
                </li>
              </ul>
            </section>

            {/* Community & Extracurricular */}
            <section className="mt-3.5">
              <h2 className="font-sans text-[11.5px] font-bold tracking-[0.08em] uppercase text-[#111111] border-b border-[#CCCCCC] pb-0.5 mb-1.5">
                Community &amp; Volunteering
              </h2>
              <p className="text-[11.8px] text-[#262626]">
                <span className="font-bold text-[#111111]">National Service Scheme (NSS) — Active Student Volunteer:</span>{' '}
                Contributed to BDA Green Bengaluru environmental initiatives, Police Marshal coordination, Blood Donation drives, Aarohi, Republic Day, and Independence Day events.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
