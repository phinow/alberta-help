'use client';

import { useState, useCallback, useMemo } from 'react';
import { FlowDefinition, DecisionNode } from '@/types/flow';
import { getNode, getStartNode, calculateProgress } from '@/lib/decision-tree';

export function useDecisionTree(flow: FlowDefinition) {
  const [currentNodeId, setCurrentNodeId] = useState(flow.startNodeId);
  const [history, setHistory] = useState<string[]>([]);

  const currentNode = useMemo(
    () => getNode(flow, currentNodeId) ?? getStartNode(flow),
    [flow, currentNodeId]
  );

  const progress = useMemo(
    () => calculateProgress(flow, history.length + 1),
    [flow, history.length]
  );

  const canGoBack = history.length > 0;

  const goToNode = useCallback((nodeId: string) => {
    setHistory(prev => [...prev, currentNodeId]);
    setCurrentNodeId(nodeId);
  }, [currentNodeId]);

  const goBack = useCallback(() => {
    setHistory(prev => {
      const next = [...prev];
      const previousId = next.pop();
      if (previousId) {
        setCurrentNodeId(previousId);
      }
      return next;
    });
  }, []);

  const restart = useCallback(() => {
    setCurrentNodeId(flow.startNodeId);
    setHistory([]);
  }, [flow.startNodeId]);

  const selectOption = useCallback((nextNodeId: string) => {
    goToNode(nextNodeId);
  }, [goToNode]);

  const continueToNext = useCallback(() => {
    if (currentNode.nextNodeId) {
      goToNode(currentNode.nextNodeId);
    }
  }, [currentNode, goToNode]);

  return {
    currentNode,
    progress,
    canGoBack,
    goBack,
    restart,
    selectOption,
    continueToNext,
    stepNumber: history.length + 1,
  };
}
