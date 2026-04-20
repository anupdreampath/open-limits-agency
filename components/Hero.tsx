'use client';

import { HERO_VIDEOS } from '@/lib/assets';
import { Monogram } from './BrandMark';
import { useBookCall } from '@/lib/BookCallContext';

export default function Hero() {
  const { openModal } = useBookCall();

  return (
    <section className="hero-bg relative overflow-hidden pt-32 pb-16">
      <div className="absolute top-24 right-6 md:right-16 opacity-80 pointer-events-none">
        <Monogram className="w-16 h-16 md:w-24 md:h-24" color="#4CC97F" />
      </div>

      <div className="max-w-7xl mx-auto px-5 text-center relative">
        <h1 className="fade-up font-display font-bold text-[44px] sm:text-5xl md:text-6xl lg:text-[64px] leading-[1.05] tracking-tight text-greenbrand">
          High-Converting UGC Ads for
          <br />
          Lower CAC, Higher ROAS
        </h1>

        <p className="fade-up d-1 mt-5 text-lg text-ink/80">
          Produced by Highly Qualified Creative Strategists and Media Buyers
        </p>

        <div className="fade-up d-2 mt-8">
          <button onClick={openModal} className="btn-pill">
            Book a call
            <span className="arrow" aria-hidden>
              <ArrowRight />
            </span>
          </button>
        </div>
      </div>

      <div className="mt-16 mask-fade-x overflow-hidden">
        <ul className="flex gap-5 animate-marquee gpu w-max">
          {[...HERO_VIDEOS, ...HERO_VIDEOS, ...HERO_VIDEOS].map((src, i) => (
            <li key={i} className="video-card shrink-0 w-[200px] sm:w-[240px] aspect-[9/16]">
              <video src={src} autoPlay muted loop playsInline preload="metadata" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
