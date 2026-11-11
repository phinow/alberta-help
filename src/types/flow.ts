export type NodeType = 'question' | 'action' | 'info' | 'resolution';

export interface DecisionNode {
  id: string;
  type: NodeType;
  title: string;
  content: string;
  options?: { label: string; nextNodeId: string; description?: string }[];
  nextNodeId?: string;
  externalUrl?: string;
  tip?: string;
  alertType?: 'info' | 'warning' | 'success' | 'error';
  phoneNumber?: { label: string; phone: string };
}

export interface FlowDefinition {
  id: string;
  title: string;
  description: string;
  category: 'guide' | 'troubleshoot';
  icon: string;
  estimatedMinutes?: number;
  startNodeId: string;
  nodes: Record<string, DecisionNode>;
}

export interface TreeState {
  currentNodeId: string;
  history: string[];
  flowId: string;
}
