'use client';

import { DecisionNode } from '@/types/flow';
import { AlertBanner } from '@/components/ui/AlertBanner';
import { PhoneNumber } from '@/components/ui/PhoneNumber';

interface InfoNodeProps {
  node: DecisionNode;
  onContinue: () => void;
}

export function InfoNode({ node, onContinue }: InfoNodeProps) {
  return (
    <div>
      <h2 className="mb-2 text-xl font-bold text-alberta-navy">{node.title}</h2>
      <div className="mb-6 whitespace-pre-line text-alberta-med-gray">{node.content}</div>

      {node.tip && (
        <div className="mb-6">
          <AlertBanner type="info">{node.tip}</AlertBanner>
        </div>
      )}

      {node.phoneNumber && (
        <div className="mb-6">
          <PhoneNumber label={node.phoneNumber.label} phone={node.phoneNumber.phone} />
        </div>
      )}

      {node.nextNodeId && (
        <button
          onClick={onContinue}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-alberta-blue px-6 py-3 font-semibold text-white transition-colors hover:bg-alberta-dark-blue"
        >
          Continue
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}
