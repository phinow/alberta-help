import Link from 'next/link';
import { getTroubleshootFlows } from '@/data/flow-registry';

export default function TroubleshootPage() {
  const flows = getTroubleshootFlows();

  return (
    <div className="px-4 py-8">
      <div className="mx-auto max-w-5xl">
        <nav className="mb-6 text-sm text-alberta-med-gray">
          <Link href="/" className="hover:text-alberta-blue">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-alberta-dark-gray">Troubleshoot</span>
        </nav>

        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-alberta-navy">Troubleshoot an Issue</h1>
          <p className="text-alberta-med-gray">Select the issue you&apos;re experiencing for step-by-step help.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {flows.map((flow) => (
            <Link
              key={flow.id}
              href={`/troubleshoot/${flow.id}`}
              className="group rounded-xl border-2 border-gray-200 bg-white p-5 transition-all hover:border-alberta-blue hover:shadow-md"
            >
              <div className="mb-3 text-3xl">{flow.icon}</div>
              <h3 className="mb-1 font-bold text-alberta-navy group-hover:text-alberta-blue">{flow.title}</h3>
              <p className="text-sm text-alberta-med-gray">{flow.description}</p>
              {flow.estimatedMinutes && (
                <p className="mt-2 text-xs text-alberta-med-gray">~{flow.estimatedMinutes} min</p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
