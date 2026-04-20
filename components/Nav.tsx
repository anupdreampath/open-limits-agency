'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Monogram, Wordmark } from './BrandMark';
import { Menu, X } from 'lucide-react';
import BookCallModal from './BookCallModal';
import { useBookCall } from '@/lib/BookCallContext';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/dooh', label: 'DOOH' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { isOpen: isBookCallOpen, closeModal } = useBookCall();

  return (
    <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <header
        className="fade-up pointer-events-auto w-full max-w-5xl rounded-full bg-white/75 backdrop-blur-md border border-ink/5 shadow-[0_10px_30px_-10px_rgba(17,56,33,0.15)]"
      >
        <div className="flex items-center justify-start pl-2 pr-3 py-3 md:py-4">
          <Link href="/" className="flex items-center gap-12 overflow-visible">
            <Monogram className="w-10 h-10 scale-[3] origin-left" />
            <Wordmark />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-base font-medium text-ink ml-auto mr-4">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="hover:text-leaf transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Burger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden ml-auto p-2 rounded-full hover:bg-ink/5 transition"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-ink" />
            ) : (
              <Menu className="w-5 h-5 text-ink" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 z-40 pointer-events-auto">
          <div className="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(17,56,33,0.2)] border border-ink/5 overflow-hidden">
            <nav className="flex flex-col py-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-5 py-3 text-ink font-medium hover:bg-creamSoft/50 transition ${
                    index !== navLinks.length - 1 ? 'border-b border-ink/5' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Book a Call Modal */}
      <BookCallModal isOpen={isBookCallOpen} onClose={closeModal} />
    </div>
  );
}
