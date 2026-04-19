import { PARTNERSHIP_VIDEOS } from '@/lib/assets';
import FanStack from './FanStack';

export default function PartnershipSection() {

  // Teen-patti fan: 3 cards sharing a bottom pivot, rotating outward.
  const cards = [
    { src: PARTNERSHIP_VIDEOS[0].src, poster: PARTNERSHIP_VIDEOS[0].poster, offsetX: -130, offsetY: -30, rotate: -18, width: 210 },
    { src: PARTNERSHIP_VIDEOS[1].src, poster: PARTNERSHIP_VIDEOS[1].poster, offsetX: 0,    offsetY: -10, rotate: 0,   width: 210 },
    { src: PARTNERSHIP_VIDEOS[2].src, poster: PARTNERSHIP_VIDEOS[2].poster, offsetX: 130,  offsetY: -30, rotate: 18,  width: 210 }
  ];

  return (
    <section className="section-lavender relative pt-32 pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <FanStack cards={cards} height={560} pivot="bottom" />
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
    </section>
  );
}
