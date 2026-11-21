import { FormEvent, useState } from 'react';
import { ArrowUpRight, Award, Check, Copy, FileText, Mail, MapPin, Send } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export function ContactSection({ onOpenResume }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const nextErrors: typeof errors = {};

    if (!senderName.trim()) {
      nextErrors.name = 'Please enter your name.';
    }
    if (!senderEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!subject.trim()) {
      nextErrors.subject = 'Please add a short subject.';
    }
    if (!message.trim()) {
      nextErrors.message = 'Please enter your message.';
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    const encodedSubject = encodeURIComponent(subject.trim());
    const encodedBody = encodeURIComponent(
      `Name: ${senderName.trim()}\nEmail: ${senderEmail.trim()}\n\n${message.trim()}`
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${encodedSubject}&body=${encodedBody}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#F2EBE0]/55">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-sm font-medium text-[#9E4B16] mb-2">06. Contact</p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#1F1915] [text-wrap:balance] mb-4">
                Let&apos;s connect and build something meaningful.
              </h2>
              <p className="text-base text-[#5B5046] leading-relaxed mb-8">
                Open to software engineering internships, AI/ML collaborations, entry-level technical opportunities, and conversations around thoughtful software.
              </p>
            </div>

            <div className="space-y-3.5 pt-6 border-t border-[#E4DBC9]">
              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E4DBC9] flex items-center justify-between gap-4">
                <div className="flex items-start gap-3 min-w-0">
                  <Mail className="w-5 h-5 text-[#9E4B16] mt-0.5 shrink-0" aria-hidden="true" />
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-[#786C61]">Email Address</p>
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="text-sm sm:text-base font-semibold text-[#1F1915] hover:text-[#9E4B16] transition-colors duration-150 break-all"
                    >
                      {PROFILE.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#1F1915] bg-[#FAF6F0] hover:bg-[#F2EBE0] border border-[#E4DBC9] rounded-lg transition-colors duration-150 shrink-0 min-h-[38px]"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#9E4B16]" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E4DBC9] flex items-start gap-3">
                <ArrowUpRight className="w-5 h-5 text-[#9E4B16] mt-0.5 shrink-0" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-xs font-medium text-[#786C61]">LinkedIn</p>
                  <a
                    href={PROFILE.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-semibold text-[#1F1915] hover:text-[#9E4B16] underline-offset-4 hover:underline transition-colors duration-150 break-all"
                  >
                    {PROFILE.linkedinHandle}
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E4DBC9] flex items-start gap-3">
                <ArrowUpRight className="w-5 h-5 text-[#9E4B16] mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs font-medium text-[#786C61]">GitHub Profile</p>
                  <a
                    href={PROFILE.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-semibold text-[#1F1915] hover:text-[#9E4B16] underline-offset-4 hover:underline transition-colors duration-150"
                  >
                    github.com/{PROFILE.githubHandle}
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E4DBC9] flex items-start gap-3">
                <Award className="w-5 h-5 text-[#9E4B16] mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs font-medium text-[#786C61]">Verified Badges</p>
                  <a
                    href={PROFILE.credlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-semibold text-[#1F1915] hover:text-[#9E4B16] underline-offset-4 hover:underline transition-colors duration-150"
                  >
                    Credly Profile &amp; Badges
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E4DBC9] flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#9E4B16] mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs font-medium text-[#786C61]">Location</p>
                  <p className="text-sm sm:text-base font-medium text-[#1F1915]">{PROFILE.location}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E4DBC9] flex items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-[#9E4B16] mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-medium text-[#786C61]">Curriculum Vitae</p>
                    <p className="text-sm sm:text-base font-semibold text-[#1F1915]">
                      Standard 1-Page Resume
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="inline-flex items-center px-3.5 py-2 text-xs font-semibold text-[#FAF6F0] bg-[#1F1915] hover:bg-[#9E4B16] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[38px]"
                >
                  Open &amp; Print PDF
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Accessible Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] border border-[#E4DBC9] rounded-2xl p-6 sm:p-8">
              <h3 className="font-display text-2xl font-semibold text-[#1F1915] mb-2">
                Send a Message
              </h3>
              <p className="text-sm text-[#5B5046] mb-6">
                Draft a direct note below—it opens cleanly in your default mail client addressed to {PROFILE.email}.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-[#FAF6F0] border border-[#E4DBC9] space-y-3">
                  <p className="font-display text-lg font-semibold text-[#1F1915]">
                    Message draft ready in your mail app
                  </p>
                  <p className="text-sm text-[#5B5046]">
                    If your mail client did not open automatically, you can reach me directly at{' '}
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="font-semibold text-[#9E4B16] underline underline-offset-4"
                    >
                      {PROFILE.email}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setSenderName('');
                      setSenderEmail('');
                      setSubject('');
                      setMessage('');
                    }}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-[#1F1915] bg-[#F2EBE0] hover:bg-[#E4DBC9] rounded-lg transition-colors duration-150 min-h-[40px]"
                  >
                    Write Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-[#1F1915] mb-1.5">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={senderName}
                        onChange={(e) => {
                          setSenderName(e.target.value);
                          if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                        }}
                        placeholder="Jane Doe"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FAF6F0] border border-[#E4DBC9] rounded-lg text-[#1F1915] placeholder:text-[#786C61]"
                      />
                      {errors.name && (
                        <p className="text-xs text-[#9E4B16] mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-[#1F1915] mb-1.5">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={senderEmail}
                        onChange={(e) => {
                          setSenderEmail(e.target.value);
                          if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                        }}
                        placeholder="jane@company.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FAF6F0] border border-[#E4DBC9] rounded-lg text-[#1F1915] placeholder:text-[#786C61]"
                      />
                      {errors.email && (
                        <p className="text-xs text-[#9E4B16] mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-sm font-medium text-[#1F1915] mb-1.5">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={subject}
                      onChange={(e) => {
                        setSubject(e.target.value);
                        if (errors.subject) setErrors((prev) => ({ ...prev, subject: undefined }));
                      }}
                      placeholder="Software Developer Role / Project Discussion"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF6F0] border border-[#E4DBC9] rounded-lg text-[#1F1915] placeholder:text-[#786C61]"
                    />
                    {errors.subject && (
                      <p className="text-xs text-[#9E4B16] mt-1">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label htmlFor="contact-message" className="block text-sm font-medium text-[#1F1915]">
                        Message
                      </label>
                      <span className="font-mono text-xs text-[#786C61] tabular-nums">
                        {message.length} chars
                      </span>
                    </div>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                      }}
                      placeholder="Share details about an opportunity, project, or conversation..."
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF6F0] border border-[#E4DBC9] rounded-lg text-[#1F1915] placeholder:text-[#786C61]"
                    />
                    {errors.message && (
                      <p className="text-xs text-[#9E4B16] mt-1">{errors.message}</p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#FAF6F0] bg-[#9E4B16] hover:bg-[#813B0F] rounded-lg transition-colors duration-150 min-h-[44px]"
                    >
                      <Send className="w-4 h-4" aria-hidden="true" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
