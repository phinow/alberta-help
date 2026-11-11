'use client';

import Link from 'next/link';
import { faqArticles } from '@/data/faq-articles';
import { useSearch } from '@/hooks/useSearch';
import { FaqCategory } from '@/types/faq';

const categories: { value: string; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'account', label: 'Account' },
  { value: 'myhealth', label: 'MyHealth' },
  { value: 'mychart', label: 'MyChart' },
  { value: 'verification', label: 'Verification' },
  { value: 'technical', label: 'Technical' },
  { value: 'general', label: 'General' },
];

const categoryColors: Record<FaqCategory, string> = {
  account: 'bg-blue-100 text-blue-800',
  myhealth: 'bg-green-100 text-green-800',
  mychart: 'bg-purple-100 text-purple-800',
  verification: 'bg-amber-100 text-amber-800',
  technical: 'bg-gray-100 text-gray-800',
  general: 'bg-teal-100 text-teal-800',
};

export default function FaqPage() {
  const { query, setQuery, category, setCategory, results } = useSearch(faqArticles);

  return (
    <div className="px-4 py-8">
      <div className="mx-auto max-w-3xl">
        <nav className="mb-6 text-sm text-alberta-med-gray">
          <Link href="/" className="hover:text-alberta-blue">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-alberta-dark-gray">FAQ</span>
        </nav>

        <h1 className="mb-2 text-3xl font-bold text-alberta-navy">Knowledge Base</h1>
        <p className="mb-6 text-alberta-med-gray">Find answers to common questions about Alberta.ca accounts, MyHealth Records, and MyChart.</p>

        <div className="mb-6">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-alberta-med-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search articles..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-4 text-alberta-dark-gray placeholder:text-alberta-med-gray focus:border-alberta-blue focus:outline-none focus:ring-2 focus:ring-alberta-blue/20"
            />
          </div>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setCategory(cat.value)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                category === cat.value
                  ? 'bg-alberta-blue text-white'
                  : 'bg-gray-100 text-alberta-med-gray hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {results.map((article) => (
            <Link
              key={article.slug}
              href={`/faq/${article.slug}`}
              className="block rounded-lg border border-gray-200 bg-white p-5 transition-all hover:border-alberta-blue hover:shadow-sm"
            >
              <div className="mb-2 flex items-start justify-between gap-4">
                <h3 className="font-bold text-alberta-navy">{article.title}</h3>
                <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryColors[article.category]}`}>
                  {article.category}
                </span>
              </div>
              <p className="text-sm text-alberta-med-gray">{article.summary}</p>
            </Link>
          ))}
          {results.length === 0 && (
            <div className="py-12 text-center text-alberta-med-gray">
              <p className="text-lg font-medium">No articles found</p>
              <p className="text-sm">Try a different search term or category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
