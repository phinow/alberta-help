'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-alberta-navy hover:text-alberta-blue">
          <svg className="h-8 w-8" viewBox="0 0 32 32" fill="currentColor">
            <path d="M16 2L2 28h28L16 2zm0 6l9 18H7l9-18z" />
          </svg>
          <div>
            <div className="text-lg font-bold leading-tight">Alberta.ca</div>
            <div className="text-xs text-alberta-med-gray">Sign-In Helper</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm font-medium text-alberta-dark-gray hover:text-alberta-blue">Home</Link>
          <Link href="/troubleshoot" className="text-sm font-medium text-alberta-dark-gray hover:text-alberta-blue">Troubleshoot</Link>
          <Link href="/faq" className="text-sm font-medium text-alberta-dark-gray hover:text-alberta-blue">FAQ</Link>
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg p-2 text-alberta-dark-gray hover:bg-gray-100 md:hidden"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="border-t border-gray-200 bg-white px-4 py-2 md:hidden">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-medium text-alberta-dark-gray">Home</Link>
          <Link href="/troubleshoot" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-medium text-alberta-dark-gray">Troubleshoot</Link>
          <Link href="/faq" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-medium text-alberta-dark-gray">FAQ</Link>
        </nav>
      )}
    </header>
  );
}
