// Open Limits wordmark + monogram (infinity-like open bracket).
// Designed to echo the brand name 'open' + 'limits' (∞).
export function Monogram({ className = '', color = '#4CC97F' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M14 24c0-5 3.5-9 8-9s8 4 8 9-3.5 9-8 9-8-4-8-9Z"
        stroke={color} strokeWidth="3.5" strokeLinecap="round"
      />
      <path
        d="M30 15c5 0 9 4 9 9s-4 9-9 9"
        stroke={color} strokeWidth="3.5" strokeLinecap="round"
      />
      <circle cx="22" cy="24" r="2.2" fill={color} />
    </svg>
  );
}

export function Wordmark({ className = '', color = '#1D5F38' }: { className?: string; color?: string }) {
  return (
    <span className={`font-display font-bold text-[1.4rem] leading-none tracking-tight ${className}`} style={{ color }}>
      open<span style={{ color: '#4CC97F' }}>/</span>limits
    </span>
  );
}
