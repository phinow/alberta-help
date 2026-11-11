'use client';

import { FlowDefinition } from '@/types/flow';
import { useDecisionTree } from '@/hooks/useDecisionTree';
import { ProgressBar } from './ProgressBar';
import { BackButton } from './BackButton';
import { QuestionNode } from './QuestionNode';
import { ActionNode } from './ActionNode';
import { InfoNode } from './InfoNode';
import { ResolutionNode } from './ResolutionNode';

interface DecisionTreeEngineProps {
  flow: FlowDefinition;
}

export function DecisionTreeEngine({ flow }: DecisionTreeEngineProps) {
  const { currentNode, progress, canGoBack, goBack, restart, selectOption, continueToNext, stepNumber } = useDecisionTree(flow);

  return (
    <div className="mx-auto max-w-2xl">
      <ProgressBar progress={progress} stepNumber={stepNumber} />

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        {canGoBack && <BackButton onClick={goBack} />}

        {currentNode.type === 'question' && (
          <QuestionNode node={currentNode} onSelectOption={selectOption} />
        )}
        {currentNode.type === 'action' && (
          <ActionNode node={currentNode} onContinue={continueToNext} />
        )}
        {currentNode.type === 'info' && (
          <InfoNode node={currentNode} onContinue={continueToNext} />
        )}
        {currentNode.type === 'resolution' && (
          <ResolutionNode node={currentNode} onRestart={restart} />
        )}
      </div>
    </div>
  );
}
