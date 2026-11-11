import { notFound } from 'next/navigation';
import Link from 'next/link';
import { faqArticles, getArticleBySlug } from '@/data/faq-articles';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return faqArticles.map((article) => ({ slug: article.slug }));
}

export default async function FaqArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="px-4 py-8">
      <div className="mx-auto max-w-3xl">
        <nav className="mb-6 text-sm text-alberta-med-gray">
          <Link href="/" className="hover:text-alberta-blue">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/faq" className="hover:text-alberta-blue">FAQ</Link>
          <span className="mx-2">/</span>
          <span className="text-alberta-dark-gray">{article.title}</span>
        </nav>

        <article className="rounded-xl border border-gray-200 bg-white p-8">
          <h1 className="mb-4 text-2xl font-bold text-alberta-navy">{article.title}</h1>
          <div className="prose prose-sm max-w-none text-alberta-dark-gray">
            {article.content.split('\n\n').map((paragraph, i) => {
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return <h3 key={i} className="mt-6 mb-2 text-lg font-bold text-alberta-navy">{paragraph.replace(/\*\*/g, '')}</h3>;
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <ul key={i} className="mb-4 list-disc space-y-1 pl-5">
                    {paragraph.split('\n').map((item, j) => (
                      <li key={j}>{item.replace(/^- /, '').replace(/\*\*(.*?)\*\*/g, '$1')}</li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.includes('\n- ')) {
                const [heading, ...items] = paragraph.split('\n');
                return (
                  <div key={i} className="mb-4">
                    <p className="mb-2 font-semibold">{heading.replace(/\*\*/g, '')}</p>
                    <ul className="list-disc space-y-1 pl-5">
                      {items.map((item, j) => (
                        <li key={j}>{item.replace(/^- /, '').replace(/\*\*(.*?)\*\*/g, '$1')}</li>
                      ))}
                    </ul>
                  </div>
                );
              }
              return <p key={i} className="mb-4" dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />;
            })}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-alberta-med-gray">{tag}</span>
            ))}
          </div>
        </article>

        <div className="mt-6 text-center">
          <Link href="/faq" className="text-sm font-medium text-alberta-blue hover:text-alberta-dark-blue">
            &larr; Back to all articles
          </Link>
        </div>
      </div>
    </div>
  );
}
