import { PERFORMANCE_VIDEO, HERO_VIDEOS } from '@/lib/assets';
import FanStack from './FanStack';

export default function PerformanceSection() {

  // Performance stack: 3 main cards + 1 peek card. Cards fan outward diagonally.
  const cards = [
    { src: HERO_VIDEOS[0], offsetX: -150, offsetY: -20, rotate: -12, width: 220 },
    { src: HERO_VIDEOS[2], offsetX: 20,   offsetY: 30,  rotate: 4,   width: 220 },
    { src: HERO_VIDEOS[4], offsetX: 170,  offsetY: -10, rotate: 14,  width: 220 },
    { src: PERFORMANCE_VIDEO, offsetX: 260, offsetY: 90, rotate: 22, width: 170 }
  ];

  return (
    <section className="section-cream relative pt-24 pb-36 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="eyebrow orange">Performance Creatives</p>
          <h2 className="mt-3 font-display font-semibold text-4xl md:text-5xl leading-[1.1]" style={{ color: '#965F27' }}>
            Performance-Focused<br />Video Ads
          </h2>
          <p className="mt-5 text-ink/75 max-w-md leading-relaxed">
            These are ads designed to scale. We produce them with professional actors but keep the
            UGC-style framework intact, so the content feels authentic yet polished. With the flexibility
            to add more visuals and storytelling angles, our performance creative strategists craft ads
            that don&apos;t just look good — they deliver high ROAS at scale.
          </p>
        </div>

        <FanStack cards={cards} height={560} pivot="center" />
      </div>
    </section>
  );
}
