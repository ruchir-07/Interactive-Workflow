import React, { useState, useEffect } from "react";
import Canvas from "../components/Canvas/Canvas";
import NodePalette from "../components/Canvas/NodePalette";
import NodeSidebar from "../components/Canvas/NodeSidebar";
import CanvasControls from "../components/Canvas/CanvasControls";
import { validateWorkflow } from "../utils/validation";
import "../styles/components.css";

const WorkflowBuilder = ({ workflowData, setWorkflowData }) => {
  const [nodes, setNodes] = useState(workflowData.nodes || []);
  const [edges, setEdges] = useState(workflowData.edges || []);
  const [selectedNode, setSelectedNode] = useState(null);
  

  // Sync local state with parent `workflowData`
  useEffect(() => {
    setWorkflowData({ nodes, edges });
  }, [nodes, edges, setWorkflowData]);

  const handleAddNode = (nodeType) => {
    const newNode = {
      id: `node-${nodes.length + 1}`,
      type: nodeType,
      data: { label: `${nodeType} Node`, executionTime: 0, type: nodeType },
      position: { x: Math.random() * 400 + 100, y: Math.random() * 300 + 50 },
    };
    setNodes([...nodes, newNode]);
  };

  const handleUpdateNode = (updatedNode) => {
    setNodes((prevNodes) =>
      prevNodes.map((node) => (node.id === updatedNode.id ? updatedNode : node))
    );
    setSelectedNode(null);
  };

  const handleDeleteNode = (nodeId) => {
    setNodes((prevNodes) => prevNodes.filter((node) => node.id !== nodeId));
    setEdges((prevEdges) =>
      prevEdges.filter(
        (edge) => edge.source !== nodeId && edge.target !== nodeId
      )
    );
    setSelectedNode(null);
  };

  const handleSaveWorkflow = () => {
    const workflow = { nodes, edges };
    localStorage.setItem("workflow", JSON.stringify(workflow));
    alert("Workflow saved successfully!");
  };

  const handleLoadWorkflow = () => {
    const savedWorkflow = JSON.parse(localStorage.getItem("workflow"));
    if (savedWorkflow) {
      setNodes(savedWorkflow.nodes || []);
      setEdges(savedWorkflow.edges || []);
    } else {
      alert("No saved workflow found!");
    }
  };

  const handleValidateWorkflow = () => {
    const errors = validateWorkflow([...nodes, ...edges]);
    if (errors.length > 0) {
      alert(`Validation Errors:\n${errors.join("\n")}`);
    } else {
      alert("Workflow is valid!");
    }
  };
  const handleExportWorkflow = () => {
    const workflow = { nodes, edges };
    const blob = new Blob([JSON.stringify(workflow, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'workflow.json';
    link.click();
  };

  const handleImportWorkflow = (workflow) => {
    if (workflow.nodes && workflow.edges) {
      setNodes(workflow.nodes);
      setEdges(workflow.edges);
    } else {
      alert('Invalid workflow file!');
    }
  };
  
  return (
    <div className="workflow-builder">
      
      <div className="builder-container">
        <NodePalette
          onAddNode={handleAddNode}
          onSaveWorkflow={handleSaveWorkflow}
          onLoadWorkflow={handleLoadWorkflow}
          onValidateWorkflow={handleValidateWorkflow}
          onExportWorkflow={handleExportWorkflow}
          onImportWorkflow={handleImportWorkflow}

        />

        <Canvas
          nodes={nodes}
          setNodes={setNodes}
          edges={edges}
          setEdges={setEdges}
          onNodeSelect={setSelectedNode}
        />
        {selectedNode  && (
          <NodeSidebar
            node={selectedNode}
            onUpdateNode={handleUpdateNode}
            onDeleteNode={handleDeleteNode}
            onClose={() => setSelectedNode(null)}
          />
        )}
      </div>
      <CanvasControls />
    </div>
  );
};

export default WorkflowBuilder;
