'use client';
import { TRUSTED_LOGOS } from '@/lib/assets';

export default function TrustedBy() {
  const row1 = TRUSTED_LOGOS.slice(0, 8);
  const row2 = TRUSTED_LOGOS.slice(6);
  return (
    <section className="py-14 bg-white">
      <p className="text-center text-base font-medium text-ink/55">Trusted by</p>
      <div className="mt-6 space-y-6 mask-fade-x">
        <Row logos={row1} dir="marquee" />
        <Row logos={row2} dir="marquee-rev" />
      </div>
    </section>
  );
}

function Row({ logos, dir }: { logos: string[]; dir: 'marquee' | 'marquee-rev' }) {
  const doubled = [...logos, ...logos, ...logos];
  return (
    <div className="overflow-hidden">
      <ul className={`flex gap-14 items-center animate-${dir} gpu w-max`}>
        {doubled.map((src, i) => (
          <li key={i} className="shrink-0">
            <img
              src={src}
              alt="brand logo"
              className="h-9 md:h-10 w-auto object-contain opacity-60 hover:opacity-100 transition"
              style={{ filter: 'grayscale(100%)' }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
