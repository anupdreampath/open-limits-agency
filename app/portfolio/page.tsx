'use client';
import { useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { PORTFOLIO_BY_CATEGORY, CATEGORIES } from '@/lib/assets';

const PAGE_SIZE = 12;
const ALL_VIDEOS = Object.values(PORTFOLIO_BY_CATEGORY).flat();
const TABS = ['All', ...CATEGORIES.map(c => c.name)];

export default function PortfolioPage() {
  const [active, setActive] = useState('All');
  const [count, setCount] = useState(PAGE_SIZE);

  const pool = active === 'All' ? ALL_VIDEOS : (PORTFOLIO_BY_CATEGORY[active as keyof typeof PORTFOLIO_BY_CATEGORY] ?? []);
  const visible = pool.slice(0, count);
  const remaining = pool.length - count;

  function pick(cat: string) {
    setActive(cat);
    setCount(PAGE_SIZE);
  }

  return (
    <main>
      <Nav />

      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <span className="eyebrow">Portfolio</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl leading-tight text-ink">
            Every hook. <span className="italic">Every angle.</span>
          </h1>
          <p className="mt-5 text-ink/70 max-w-2xl mx-auto">
            A selection of UGC, performance and partnership ads we&apos;ve produced for D2C brands.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {TABS.map(cat => (
              <button
                key={cat}
                onClick={() => pick(cat)}
                className={`px-4 py-2 rounded-full border text-sm transition-colors ${active === cat ? 'bg-greenbrand text-white border-greenbrand' : 'bg-white border-ink/10 hover:border-leaf'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {visible.map((v, i) => (
              <div key={v.src + i} className="video-card aspect-[9/16] gpu transition-transform duration-300 hover:-translate-y-1.5">
                <video src={v.src} poster={v.poster} autoPlay muted loop playsInline preload="none" />
              </div>
            ))}
          </div>

          {remaining > 0 && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setCount(c => c + PAGE_SIZE)}
                className="px-8 py-3 rounded-full bg-greenbrand text-white text-sm font-medium hover:bg-greenbrand/90 transition-colors"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
