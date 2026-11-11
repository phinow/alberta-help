'use client';

import { useState, useMemo } from 'react';
import { FaqArticle } from '@/types/faq';
import { searchArticles } from '@/lib/search';

export function useSearch(articles: FaqArticle[]) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');

  const filtered = useMemo(() => {
    let results = category === 'all' ? articles : articles.filter(a => a.category === category);
    if (query.trim()) {
      results = searchArticles(results, query);
    }
    return results;
  }, [articles, query, category]);

  return { query, setQuery, category, setCategory, results: filtered };
}
