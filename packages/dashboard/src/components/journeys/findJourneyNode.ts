import { Node } from "@xyflow/react";

import { DefinitionJourneyNode, JourneyNodeUiProps } from "../../lib/types";
import findNode from "./findNode";
import { isJourneyNode } from "./isJourneyNode";

export default function findJourneyNode(
  nodeId: string,
  nodes: Node<JourneyNodeUiProps>[],
  nodesIndex: Record<string, number>,
): DefinitionJourneyNode | null {
  const node = findNode(nodeId, nodes, nodesIndex);
  if (node && isJourneyNode(node)) {
    return node;
  }
  return null;
}
