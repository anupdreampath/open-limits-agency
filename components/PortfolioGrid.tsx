import Link from 'next/link';
import { CATEGORIES } from '@/lib/assets';

// Staggered vertical offsets per column index
const offsets = [0, -40, 20, -20, 10, -30, 30, -10, 0];

export default function PortfolioGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center">
          <span className="eyebrow">Our Work</span>
          <h2 className="mt-4 font-display font-semibold text-4xl md:text-5xl leading-[1.1] text-greenbrand">
            Brands made these<br />with {`${'Open Limits'}`}
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 items-start">
          {CATEGORIES.slice(0, 8).map((c, i) => (
            <div
              key={c.name}
              style={{ transform: `translateY(${offsets[i] || 0}px)` }}
              className="gpu"
            >
              <Link href="/portfolio" className="group block">
                <div className="flex items-center justify-between mb-3 text-ink/60">
                  <p className="text-sm font-medium">{c.name}</p>
                  <span className="w-7 h-7 rounded-full border border-ink/20 grid place-items-center text-xs transition group-hover:bg-greenbrand group-hover:text-white group-hover:border-greenbrand">→</span>
                </div>
                <div className="video-card aspect-[9/13] transition-transform duration-300 group-hover:-translate-y-1.5">
                  <video src={c.thumb} autoPlay muted loop playsInline preload="metadata" />
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/portfolio" className="btn-pill">
            View all
            <span className="arrow" aria-hidden>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
