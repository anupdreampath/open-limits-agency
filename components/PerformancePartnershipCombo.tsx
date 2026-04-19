import { PERFORMANCE_VIDEO, HERO_VIDEOS, PARTNERSHIP_VIDEOS } from '@/lib/assets';
import FanStack from './FanStack';

export default function PerformancePartnershipCombo() {

  // Performance cards (diagonal fan)
  const perfCards = [
    { src: HERO_VIDEOS[0], offsetX: -150, offsetY: -40, rotate: -12, width: 220 },
    { src: HERO_VIDEOS[2], offsetX: 20,   offsetY: 10,  rotate: 4,   width: 220 },
    { src: HERO_VIDEOS[4], offsetX: 170,  offsetY: -30, rotate: 14,  width: 220 },
    { src: PERFORMANCE_VIDEO, offsetX: 260, offsetY: 50, rotate: 22, width: 170 }
  ];

  // Partnership cards (teen-patti fan with bottom pivot)
  const partnerCards = [
    { src: PARTNERSHIP_VIDEOS[0].src, poster: PARTNERSHIP_VIDEOS[0].poster, offsetX: -200, offsetY: -40, rotate: -18, width: 210 },
    { src: PARTNERSHIP_VIDEOS[1].src, poster: PARTNERSHIP_VIDEOS[1].poster, offsetX: -70,  offsetY: -20, rotate: 0,   width: 210 },
    { src: PARTNERSHIP_VIDEOS[2].src, poster: PARTNERSHIP_VIDEOS[2].poster, offsetX: 60,   offsetY: -40, rotate: 18,  width: 210 }
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Top half - Performance (cream background) */}
      <div className="section-cream pt-14 pb-14 md:pt-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-8 md:gap-16 items-center">
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

          {/* Performance fan: span ~660px wide → scale 0.52 fits in ~340px mobile column */}
          <FanStack cards={perfCards} height={420} pivot="center" mobileScale={0.52} mobileShiftX={25} />
        </div>
      </div>

      {/* Bottom half - Partnership (lavender background) */}
      <div className="section-lavender pt-14 pb-14 md:pt-32 md:pb-24">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            {/* Partnership fan: span ~520px wide → scale 0.65 fits in ~340px mobile column */}
            <FanStack cards={partnerCards} height={420} pivot="bottom" mobileScale={0.65} mobileShiftX={25} />
          </div>

          <div className="order-1 md:order-2">
            <p className="eyebrow purple">Performance UGC Videos</p>
            <h2 className="mt-3 font-display font-semibold text-4xl md:text-5xl leading-[1.1]" style={{ color: '#5A4480' }}>
              Partnership Ads with UGC<br />Creators
            </h2>
            <p className="mt-5 text-ink/75 max-w-md leading-relaxed">
              We team up with creators to turn their authentic content into ads. These partnership ads
              help your brand build trust and credibility while reaching the right audiences. Because
              the content feels natural and relatable, it drives better engagement, higher
              click-throughs, and stronger ROAS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
