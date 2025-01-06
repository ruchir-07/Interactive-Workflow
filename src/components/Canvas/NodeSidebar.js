import React, { useState, useEffect } from 'react';
import '../../styles/components.css';

const NodeSidebar = ({ node, onUpdateNode, onDeleteNode, onClose }) => {
  const [label, setLabel] = useState(node.data.label);
  const [executionTime, setExecutionTime] = useState(node.data.executionTime);

  // Update local state when a new node is selected
  useEffect(() => {
    setLabel(node.data.label);
    setExecutionTime(node.data.executionTime);
  }, [node]);

  const handleSave = () => {
    onUpdateNode({
      ...node,
      data: {
        ...node.data,
        label,
        executionTime: parseInt(executionTime, 10),
      },
    });
  };

  return (
    <div className="node-sidebar">
      <div className="node-sidebar-header">
        <h3>Edit Node</h3>
        <button className="close-button" onClick={onClose}>
          ✕
        </button>
      </div>
      <div className="node-sidebar-content">
        <label>
          Label:
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />
        </label>
        <label>
          Execution Time:
          <input
            type="number"
            value={executionTime}
            onChange={(e) => setExecutionTime(e.target.value)}
          />
        </label>
        <div className="node-sidebar-actions">
          <button onClick={handleSave}>Save</button>
          <button onClick={() => onDeleteNode(node.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default NodeSidebar;
