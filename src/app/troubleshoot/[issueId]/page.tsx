import { notFound } from 'next/navigation';
import Link from 'next/link';
import { DecisionTreeEngine } from '@/components/guide/DecisionTreeEngine';
import { getFlow, flowRegistry } from '@/data/flow-registry';

interface PageProps {
  params: Promise<{ issueId: string }>;
}

export function generateStaticParams() {
  return Object.keys(flowRegistry)
    .filter((id) => flowRegistry[id].category === 'troubleshoot')
    .map((issueId) => ({ issueId }));
}

export default async function TroubleshootIssuePage({ params }: PageProps) {
  const { issueId } = await params;
  const flow = getFlow(issueId);

  if (!flow || flow.category !== 'troubleshoot') {
    notFound();
  }

  return (
    <div className="px-4 py-8">
      <div className="mx-auto max-w-2xl">
        <nav className="mb-6 text-sm text-alberta-med-gray">
          <Link href="/" className="hover:text-alberta-blue">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/troubleshoot" className="hover:text-alberta-blue">Troubleshoot</Link>
          <span className="mx-2">/</span>
          <span className="text-alberta-dark-gray">{flow.title}</span>
        </nav>

        <div className="mb-8">
          <div className="mb-2 flex items-center gap-3">
            <span className="text-3xl">{flow.icon}</span>
            <h1 className="text-2xl font-bold text-alberta-navy">{flow.title}</h1>
          </div>
          <p className="text-alberta-med-gray">{flow.description}</p>
          {flow.estimatedMinutes && (
            <p className="mt-1 text-sm text-alberta-med-gray">Estimated time: ~{flow.estimatedMinutes} minutes</p>
          )}
        </div>

        <DecisionTreeEngine flow={flow} />
      </div>
    </div>
  );
}
