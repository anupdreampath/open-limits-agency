'use client';
import { useId } from 'react';

/**
 * Tilted wavy orange ribbon with scrolling text (matches the reference site).
 * - Rotated -4deg for a dynamic "slanted" feel.
 * - Extends past the viewport (120vw) so the rotated ends never create gaps.
 * - Negative top/bottom margins so it overlaps the adjacent sections,
 *   which clip it via their own overflow-hidden.
 */
export default function WavyMarquee({
  items = ['4x Avg. ROAS', '1500+ Ads Produced', '100+ Brands']
}: { items?: string[] }) {
  const id = useId().replace(/:/g, '');
  const text = items.join(' . ') + ' . ';
  const repeated = Array.from({ length: 12 }).map(() => text).join('');

  // Asymmetric S-wave (rises on the left, dips in the middle, rises on the right)
  const textPath = 'M-50,120 C240,30 520,190 820,100 C1100,20 1300,170 1500,110';
  const bandPath =
    'M-50,90 C240,0 520,160 820,70 C1100,-10 1300,140 1500,80 ' +
    'L1500,170 C1300,230 1100,80 820,160 C520,250 240,90 -50,180 Z';

  return (
    <div
      className="relative pointer-events-none z-20"
      aria-hidden
      style={{
        marginTop: '-90px',
        marginBottom: '-90px'
      }}
    >
      <div
        style={{
          transform: 'rotate(-4deg)',
          transformOrigin: 'center center',
          width: '120vw',
          marginLeft: '-10vw'
        }}
      >
        <svg
          viewBox="0 0 1440 240"
          preserveAspectRatio="none"
          className="block w-full gpu"
          style={{ height: 200 }}
        >
          <defs>
            <path id={`tp-${id}`} d={textPath} fill="none" />
            <linearGradient id={`bg-${id}`} x1="0" x2="1">
              <stop offset="0%" stopColor="#F8B36A" />
              <stop offset="50%" stopColor="#F5A441" />
              <stop offset="100%" stopColor="#F8B36A" />
            </linearGradient>
          </defs>

          {/* Soft drop shadow under the band */}
          <path
            d={bandPath}
            fill="rgba(17,56,33,0.08)"
            transform="translate(0 6)"
          />

          {/* Ribbon band */}
          <path d={bandPath} fill={`url(#bg-${id})`} />

          {/* Subtle inner highlight line */}
          <path
            d="M-50,100 C240,15 520,170 820,85 C1100,5 1300,150 1500,95"
            fill="none"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="2"
          />

          {/* Scrolling text on wavy path */}
          <text
            fill="#2D1A5C"
            style={{
              fontFamily: 'DM Sans, ui-sans-serif, sans-serif',
              fontWeight: 700,
              fontSize: 44,
              letterSpacing: '0.01em'
            }}
          >
            <textPath href={`#tp-${id}`} startOffset="0%">
              {repeated}
              <animate
                attributeName="startOffset"
                from="0%"
                to="-50%"
                dur="30s"
                repeatCount="indefinite"
              />
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
}
