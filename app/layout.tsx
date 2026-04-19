import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Open Limits — High-Converting UGC Ads for Lower CAC, Higher ROAS',
  description: 'Open Limits is a UGC ads agency producing performance creatives, partnership ads with creators, and full-funnel video strategy.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
