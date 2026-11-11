'use client';

import { DecisionNode } from '@/types/flow';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { AlertBanner } from '@/components/ui/AlertBanner';

interface ActionNodeProps {
  node: DecisionNode;
  onContinue: () => void;
}

export function ActionNode({ node, onContinue }: ActionNodeProps) {
  return (
    <div>
      <h2 className="mb-2 text-xl font-bold text-alberta-navy">{node.title}</h2>
      <p className="mb-6 text-alberta-med-gray">{node.content}</p>

      {node.externalUrl && (
        <div className="mb-6">
          <ExternalLink href={node.externalUrl}>
            Open Page
          </ExternalLink>
        </div>
      )}

      {node.tip && (
        <div className="mb-6">
          <AlertBanner type="info">{node.tip}</AlertBanner>
        </div>
      )}

      {node.nextNodeId && (
        <button
          onClick={onContinue}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-alberta-navy px-6 py-3 font-semibold text-white transition-colors hover:bg-alberta-dark-blue"
        >
          I&apos;ve completed this step
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}
