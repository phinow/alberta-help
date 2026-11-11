'use client';

import { useState } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function Accordion({ title, children, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-lg border border-gray-200 bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-4 text-left font-medium text-alberta-dark-gray hover:bg-gray-50"
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <svg
          className={`h-5 w-5 shrink-0 text-alberta-med-gray transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && <div className="border-t border-gray-200 px-4 py-3 text-sm text-alberta-med-gray">{children}</div>}
    </div>
  );
}
