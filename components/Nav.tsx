import Link from 'next/link';
import { BRAND } from '@/lib/assets';
import { Monogram, Wordmark } from './BrandMark';

export default function Nav() {
  return (
    <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <header
        className="fade-up pointer-events-auto w-full max-w-5xl rounded-full bg-white/75 backdrop-blur-md border border-ink/5 shadow-[0_10px_30px_-10px_rgba(17,56,33,0.15)]"
      >
        <div className="flex items-center justify-between pl-5 pr-2 py-2">
          <Link href="/" className="flex items-center gap-2">
            <Monogram className="w-8 h-8" />
            <Wordmark />
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-ink">
            <Link href="/" className="hover:text-leaf transition">Home</Link>
            <Link href="/portfolio" className="hover:text-leaf transition">Portfolio</Link>
            <Link href="/aboutus" className="hover:text-leaf transition">About us</Link>
          </nav>
          <a href={BRAND.calendly} target="_blank" rel="noreferrer" className="btn-pill small">
            Book a call
            <span className="arrow" aria-hidden>
              <ArrowRight />
            </span>
          </a>
        </div>
      </header>
    </div>
  );
}

function ArrowRight() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
