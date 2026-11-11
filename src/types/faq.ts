export type FaqCategory = 'account' | 'myhealth' | 'mychart' | 'verification' | 'technical' | 'general';

export interface FaqArticle {
  slug: string;
  title: string;
  summary: string;
  category: FaqCategory;
  tags: string[];
  content: string;
}
