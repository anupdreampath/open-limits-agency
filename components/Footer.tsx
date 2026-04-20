'use client';
import Link from 'next/link';
import { BRAND } from '@/lib/assets';
import { Wordmark, Monogram } from './BrandMark';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-ink/5">
      <div className="max-w-7xl mx-auto px-5 py-16 grid md:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-8">
        <div>
          <div className="flex items-center gap-2">
            <Monogram className="w-9 h-9" />
            <Wordmark />
          </div>
          <p className="mt-5 text-ink/70 max-w-xs">
            High-Converting UGC Ads for<br />Lower CAC, Higher ROAS
          </p>
        </div>
        <div>
          <p className="font-semibold text-greenbrand">Company</p>
          <ul className="mt-4 space-y-2 text-ink/70">
            <li><Link href="/aboutus" className="hover:text-greenbrand">About us</Link></li>
            <li><Link href="/portfolio" className="hover:text-greenbrand">Portfolio</Link></li>
            <li><Link href="/contact" className="hover:text-greenbrand">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-greenbrand">Legal</p>
          <ul className="mt-4 space-y-2 text-ink/70">
            <li><Link href="/privacy-policy" className="hover:text-greenbrand">Privacy Policy</Link></li>
            <li><Link href="/cookie-policy" className="hover:text-greenbrand">Cookie Policy</Link></li>
            <li><Link href="/terms-of-use" className="hover:text-greenbrand">Terms of Use</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-greenbrand">Contact us</p>
          <ul className="mt-4 space-y-2 text-ink/70">
            <li className="flex items-start gap-2"><Icon name="mail" /><a href={`mailto:${BRAND.email}`} className="hover:text-greenbrand">{BRAND.email}</a></li>
            <li className="flex items-start gap-2"><Icon name="phone" />{BRAND.phone}</li>
            <li className="flex items-start gap-2"><Icon name="pin" />{BRAND.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink/5">
        <div className="max-w-7xl mx-auto px-5 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-ink/60">
          <p>Copyright {new Date().getFullYear()} By {BRAND.name}. All Rights Reserved.</p>
          <div className="flex gap-3">
            <a href={BRAND.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="w-8 h-8 grid place-items-center rounded-full border border-ink/15 hover:border-greenbrand hover:text-greenbrand"><Icon name="ig" /></a>
            <a href={BRAND.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-8 h-8 grid place-items-center rounded-full border border-ink/15 hover:border-greenbrand hover:text-greenbrand"><Icon name="in" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Icon({ name }: { name: string }) {
  const s = 'w-4 h-4';
  switch (name) {
    case 'mail':
      return (<svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M3 7l9 6 9-6" /></svg>);
    case 'phone':
      return (<svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 4h4l2 5-3 2a12 12 0 005 5l2-3 5 2v4a2 2 0 01-2 2A17 17 0 013 6a2 2 0 012-2z" /></svg>);
    case 'pin':
      return (<svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s7-7 7-12a7 7 0 10-14 0c0 5 7 12 7 12z" /><circle cx="12" cy="10" r="2.5" /></svg>);
    case 'ig':
      return (<svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>);
    case 'in':
      return (<svg className={s} viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5.01 2.5 2.5 0 01.02-5zM3 9h4v12H3zM10 9h4v2c.6-1 2-2.3 4.2-2.3 3.2 0 4.8 2 4.8 5.2V21h-4v-6.2c0-1.5-.7-2.6-2.2-2.6-1.3 0-2.1.9-2.4 1.8-.1.3-.1.7-.1 1.1V21h-4z" /></svg>);
  }
  return null;
}
