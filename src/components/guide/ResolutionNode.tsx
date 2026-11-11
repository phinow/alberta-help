'use client';

import Link from 'next/link';
import { DecisionNode } from '@/types/flow';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { AlertBanner } from '@/components/ui/AlertBanner';
import { PhoneNumber } from '@/components/ui/PhoneNumber';

interface ResolutionNodeProps {
  node: DecisionNode;
  onRestart: () => void;
}

export function ResolutionNode({ node, onRestart }: ResolutionNodeProps) {
  return (
    <div>
      {node.alertType && (
        <div className="mb-4">
          <AlertBanner type={node.alertType}>
            <strong>{node.title}</strong>
          </AlertBanner>
        </div>
      )}

      <h2 className="mb-2 text-xl font-bold text-alberta-navy">{node.title}</h2>
      <p className="mb-6 whitespace-pre-line text-alberta-med-gray">{node.content}</p>

      {node.tip && (
        <div className="mb-6">
          <AlertBanner type="info">{node.tip}</AlertBanner>
        </div>
      )}

      {node.externalUrl && (
        <div className="mb-6">
          <ExternalLink href={node.externalUrl}>
            Open Page
          </ExternalLink>
        </div>
      )}

      {node.phoneNumber && (
        <div className="mb-6">
          <PhoneNumber label={node.phoneNumber.label} phone={node.phoneNumber.phone} />
        </div>
      )}

      <div className="flex flex-wrap gap-3 border-t border-gray-200 pt-6">
        <button
          onClick={onRestart}
          className="rounded-lg border-2 border-alberta-blue px-4 py-2 text-sm font-medium text-alberta-blue hover:bg-alberta-light-blue"
        >
          Start Over
        </button>
        <Link
          href="/"
          className="rounded-lg border-2 border-gray-200 px-4 py-2 text-sm font-medium text-alberta-dark-gray hover:bg-gray-50"
        >
          Back to Home
        </Link>
        <Link
          href="/troubleshoot"
          className="rounded-lg border-2 border-gray-200 px-4 py-2 text-sm font-medium text-alberta-dark-gray hover:bg-gray-50"
        >
          More Troubleshooting
        </Link>
      </div>
    </div>
  );
}
