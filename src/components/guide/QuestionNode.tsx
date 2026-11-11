'use client';

import { DecisionNode } from '@/types/flow';

interface QuestionNodeProps {
  node: DecisionNode;
  onSelectOption: (nextNodeId: string) => void;
}

export function QuestionNode({ node, onSelectOption }: QuestionNodeProps) {
  return (
    <div>
      <h2 className="mb-2 text-xl font-bold text-alberta-navy">{node.title}</h2>
      <p className="mb-6 text-alberta-med-gray">{node.content}</p>
      <div className="space-y-3">
        {node.options?.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelectOption(option.nextNodeId)}
            className="flex w-full items-center justify-between rounded-lg border-2 border-gray-200 bg-white p-4 text-left transition-all hover:border-alberta-blue hover:bg-alberta-light-blue"
          >
            <span className="font-medium text-alberta-dark-gray">{option.label}</span>
            <svg className="h-5 w-5 shrink-0 text-alberta-med-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
}
