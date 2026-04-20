'use client';

import { Monogram } from './BrandMark';
import { useBookCall } from '@/lib/BookCallContext';

export default function CtaCard() {
  const { openModal } = useBookCall();

  return (
    <section className="pt-16 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-5">
        <div
          className="relative rounded-[40px] px-6 py-8 md:px-10 md:py-10 overflow-hidden"
          style={{ background: 'linear-gradient(180deg, #EFFCF3 0%, #D3F5DF 100%)' }}
        >
          <div className="absolute left-6 top-1/2 -translate-y-1/2 opacity-90">
            <Monogram className="w-12 h-12 md:w-14 md:h-14" />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pl-16 md:pl-20">
            <div>
              <p className="font-display font-semibold text-2xl md:text-3xl text-greenbrand">Ready to Go Viral?</p>
              <p className="mt-1 text-ink/70 text-sm md:text-base">Let&apos;s Talk Strategy / Book Your Free Call</p>
            </div>
            <button onClick={openModal} className="btn-pill small">
              Book a call
              <span className="arrow" aria-hidden>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
