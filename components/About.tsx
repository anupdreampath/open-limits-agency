import { Monogram } from './BrandMark';

// Orbit-style stat pills arranged along a curved dotted arc.
const stats = [
  { n: '150+', l: 'Brand collaborations', color: '#8C56E3', bg: '#F1E9FD' },
  { n: '10+', l: 'years of D2C Experience', color: '#138BED', bg: '#E3F0FD' },
  { n: '3.8', l: 'Avg. ROAS', color: '#FE5E54', bg: '#FFE5E3' },
  { n: '$4M+', l: 'Revenue generated', color: '#DD8211', bg: '#FDEAD0' }
];

// Positions (percent) on the arc: left, top
const positions = [
  { left: '14%', top: '58%' },
  { left: '36%', top: '18%' },
  { left: '58%', top: '36%' },
  { left: '26%', top: '78%' }
];

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="eyebrow">About Us</span>
            <h2 className="mt-4 font-display font-semibold text-4xl md:text-5xl leading-[1.1] text-greenbrand">
              Crafting UGC ads that truly Connect
            </h2>
          </div>
          <p className="text-ink/75 leading-relaxed max-w-lg md:pt-4">
            We&apos;re a creative performance agency specializing in strategic, high-impact content that
            resonates, engages, and converts. Our expert team handles the entire UGC ad production
            process, driving maximum ROAS while minimizing CAC.
          </p>
        </div>

        {/* Orbit */}
        <div className="relative mt-16 h-[520px]">
          {/* Dotted arc */}
          <svg
            viewBox="0 0 800 500"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M60,420 C200,120 600,80 740,340"
              fill="none"
              stroke="#CBD5D0"
              strokeWidth="1.5"
              strokeDasharray="2 6"
              strokeLinecap="round"
            />
          </svg>

          {/* Decorative monogram right */}
          <div className="absolute right-4 top-8 opacity-80">
            <Monogram className="w-24 h-24 md:w-32 md:h-32" />
          </div>

          {/* Stat pills */}
          {stats.map((s, i) => (
            <div
              key={s.l}
              className="absolute rounded-full shadow-[0_10px_30px_-12px_rgba(17,56,33,0.25)] gpu transition-transform duration-300 hover:-translate-y-1.5"
              style={{
                left: positions[i].left,
                top: positions[i].top,
                background: s.bg,
                padding: '16px 22px',
                minWidth: 140,
                color: s.color,
                textAlign: 'center'
              }}
            >
              <p className="font-display font-bold text-3xl leading-none" style={{ color: s.color }}>{s.n}</p>
              <p className="mt-1 text-xs font-medium" style={{ color: s.color }}>{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
