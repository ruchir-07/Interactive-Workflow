import React from 'react';
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  ReactFlowProvider,
} from 'react-flow-renderer';

const Canvas = ({ nodes, setNodes, edges, setEdges, onNodeSelect }) => {
  // Handle new edge connections
  const handleConnect = (params) => {
    setEdges((prevEdges) => addEdge(params, prevEdges));
  };

  return (
    <ReactFlowProvider>
      <div style={{ height: '90%', width: '100%', border:"1px solid #d3d3d3" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={(changes) => setNodes((nds) => nds.map((node) => {
            const change = changes.find((ch) => ch.id === node.id);
            return change ? { ...node, ...change } : node;
          }))}
          onEdgesChange={(changes) => setEdges((eds) => eds.map((edge) => {
            const change = changes.find((ch) => ch.id === edge.id);
            return change ? { ...edge, ...change } : edge;
          }))}
          onConnect={handleConnect}
          onNodeClick={(event, node) => onNodeSelect(node)}
          fitView
        >
          <MiniMap />
          <Controls />
          <Background color="#aaa" gap={16} />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
};

export default Canvas;
