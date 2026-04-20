// Open Limits logo components.
export function Monogram({ className = '' }: { className?: string }) {
  return (
    <img 
      src="/logo.png" 
      alt="Open Limits Logo" 
      className={className}
    />
  );
}

export function Wordmark({ className = '', color = '#1D5F38' }: { className?: string; color?: string }) {
  return (
    <span className={`font-display font-bold text-[1.4rem] leading-none tracking-tight ${className}`} style={{ color }}>
      Open<span style={{ color: '#4CC97F' }}>/</span>Limits
    </span>
  );
}
