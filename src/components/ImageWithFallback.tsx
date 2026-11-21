import { useState } from 'react';
import { Code2 } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallbackTitle: string;
  className?: string;
}

export function ImageWithFallback({
  src,
  alt,
  fallbackTitle,
  className = '',
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-[#EFE7DA] border border-[#E4DBC9] text-[#5B5046] p-6 text-center ${className}`}
      >
        <Code2 className="w-8 h-8 text-[#9E4B16] mb-3" strokeWidth={1.5} aria-hidden="true" />
        <span className="font-display text-base font-medium text-[#1F1915]">{fallbackTitle}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
