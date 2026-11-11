import { FaqArticle } from '@/types/faq';

export function searchArticles(articles: FaqArticle[], query: string): FaqArticle[] {
  const tokens = query.toLowerCase().split(/\s+/).filter(t => t.length > 1);
  if (tokens.length === 0) return articles;

  return articles
    .map(article => {
      const searchable = [article.title, article.summary, ...article.tags, article.category].join(' ').toLowerCase();
      const score = tokens.reduce((acc, token) => acc + (searchable.includes(token) ? 1 : 0), 0);
      return { article, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ article }) => article);
}
