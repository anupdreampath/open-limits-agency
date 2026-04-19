import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#113821',
        greenbrand: '#1D5F38',
        leaf: '#4CC97F',
        leafDark: '#36A866',
        mint: '#EBFFF3',
        mintSoft: '#DFF5E7',
        cream: '#FEECD2',
        creamSoft: '#FFF6EA',
        peach: '#FBC9A0',
        lavender: '#E2D8F3',
        lavenderSoft: '#EFE8FB',
        plum: '#5A4480',
        caramel: '#965F27',
        sunset: '#F78E1E',
        coral: '#FE5E54',
        cobalt: '#138BED',
        violet: '#8C56E3'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Instrument Serif"', 'Georgia', 'serif']
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'marquee-rev': 'marquee-rev 45s linear infinite',
        'float': 'float 6s ease-in-out infinite'
      },
      keyframes: {
        marquee: { '0%': { transform: 'translate3d(0,0,0)' }, '100%': { transform: 'translate3d(-50%,0,0)' } },
        'marquee-rev': { '0%': { transform: 'translate3d(-50%,0,0)' }, '100%': { transform: 'translate3d(0,0,0)' } },
        float: { '0%,100%': { transform: 'translate3d(0,0,0)' }, '50%': { transform: 'translate3d(0,-10px,0)' } }
      }
    }
  },
  plugins: []
};

export default config;
