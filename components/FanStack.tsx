export type FanCardSpec = {
  src: string;
  poster?: string;
  offsetX: number;
  offsetY: number;
  rotate: number;
  width?: number;
  aspect?: string;
};

/**
 * FanStack: cards in static fanned positions (no scroll animation)
 */
export default function FanStack({
  cards,
  height = 520,
  pivot = 'bottom',
  mobileScale = 0.6,
  mobileShiftX = 0,
}: {
  cards: FanCardSpec[];
  height?: number;
  pivot?: 'bottom' | 'center';
  mobileScale?: number;
  mobileShiftX?: number;
}) {
  const mh = Math.round(height * mobileScale);
  // Auto-center + optional manual nudge
  const avgOffsetX = cards.reduce((s, c) => s + c.offsetX, 0) / cards.length;
  const centerX = -avgOffsetX * mobileScale + mobileShiftX;
  return (
    <>
      {/* Mobile: scaled down + centered so cards fit in viewport */}
      <div className="relative w-full overflow-hidden md:hidden" style={{ height: mh }}>
        <div
          className="absolute w-full top-0 left-0 origin-top"
          style={{ height, transform: `translateX(${centerX}px) scale(${mobileScale})` }}
        >
          {cards.map((c, i) => (
            <FanCard key={i} spec={c} index={i} pivot={pivot} />
          ))}
        </div>
      </div>
      {/* Desktop: original full-size fan */}
      <div className="relative w-full hidden md:block" style={{ height }}>
        {cards.map((c, i) => (
          <FanCard key={i} spec={c} index={i} pivot={pivot} />
        ))}
      </div>
    </>
  );
}

function FanCard({
  spec,
  index,
  pivot
}: {
  spec: FanCardSpec;
  index: number;
  pivot: 'bottom' | 'center';
}) {
  const w = spec.width ?? 220;
  const aspect = spec.aspect ?? '9/14';

  return (
    <div
      style={{
        zIndex: index + 1,
        width: w,
        aspectRatio: aspect,
        position: 'absolute',
        left: '50%',
        top: pivot === 'bottom' ? 'auto' : '50%',
        bottom: pivot === 'bottom' ? '15%' : 'auto',
        marginLeft: -(w / 2) + spec.offsetX,
        marginTop: pivot === 'center' ? -(w * 1.55) / 2 + spec.offsetY : spec.offsetY,
        transform: `rotate(${spec.rotate}deg)`,
        transformOrigin: pivot === 'bottom' ? 'bottom center' : 'center',
        transition: 'transform .3s ease'
      }}
      className="video-card gpu hover:!scale-105"
    >
      <video src={spec.src} poster={spec.poster} autoPlay muted loop playsInline preload="metadata" />
    </div>
  );
}
