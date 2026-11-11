import { DecisionNode, FlowDefinition } from '@/types/flow';

export function getNode(flow: FlowDefinition, nodeId: string): DecisionNode | undefined {
  return flow.nodes[nodeId];
}

export function getStartNode(flow: FlowDefinition): DecisionNode {
  return flow.nodes[flow.startNodeId];
}

export function countNodes(flow: FlowDefinition): number {
  return Object.keys(flow.nodes).length;
}

export function calculateProgress(flow: FlowDefinition, visitedCount: number): number {
  const total = countNodes(flow);
  if (total === 0) return 0;
  return Math.min(Math.round((visitedCount / total) * 100), 100);
}

export function isTerminalNode(node: DecisionNode): boolean {
  return node.type === 'resolution';
}
