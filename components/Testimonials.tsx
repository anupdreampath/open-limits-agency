import { TESTIMONIALS } from '@/lib/assets';

export default function Testimonials() {
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section className="section-green relative pt-20 pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <span
          className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium"
          style={{ backgroundColor: '#DFF5E7', color: '#02B358' }}
        >
          Testimonial
        </span>
        <h2
          className="mt-5 font-serif-display text-5xl md:text-6xl leading-[1.05]"
          style={{ color: '#FFEBC9' }}
        >
          What our partners says about us
        </h2>
      </div>

      <div className="mt-14 mask-fade-x overflow-hidden">
        <div className="flex gap-5 gpu px-5 animate-marquee w-max">
          {loop.map((t, i) => (
            <div
              key={i}
              className="shrink-0 w-[320px] sm:w-[380px] p-7 rounded-3xl shadow-[0_12px_28px_-18px_rgba(0,0,0,0.35)]"
              style={{ background: t.bg, color: t.author_color }}
            >
              <p className="leading-relaxed text-[15px]" style={{ color: t.author_color }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-5 h-px w-16" style={{ backgroundColor: t.author_color, opacity: 0.35 }} />
              <p className="mt-4 text-sm font-medium" style={{ color: t.author_color }}>{t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
