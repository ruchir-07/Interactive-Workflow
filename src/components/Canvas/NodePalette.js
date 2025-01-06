import React from 'react';
import '../../styles/components.css';

const NodePalette = ({
  onAddNode,
  onSaveWorkflow,
  onLoadWorkflow,
  onValidateWorkflow,
  onExportWorkflow,
  onImportWorkflow
}) => {

    const handleImportWorkflow = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            const workflow = JSON.parse(e.target.result);
            onImportWorkflow(workflow);
          };
          reader.readAsText(file);
        }
      };
    
  return (
    <div className="node-palette">
      <h3>Node Palette</h3>
      <button className="node-palette-button" onClick={() => onAddNode('Start')}>Add Start Node</button>
      <button className="node-palette-button" onClick={() => onAddNode('Task')}>Add Task Node</button>
      <button className="node-palette-button" onClick={() => onAddNode('Decision')}>Add Decision Node</button>
      <button className="node-palette-button" onClick={() => onAddNode('End')}>Add End Node</button>

      <hr />

      <h3>Actions</h3>
      <button className="node-palette-button" onClick={onSaveWorkflow}>Save Workflow</button>
      <button className="node-palette-button" onClick={onLoadWorkflow}>Load Workflow</button>
      <button className="node-palette-button" onClick={onValidateWorkflow}>Validate Workflow</button>
      <div className="node-palette-import">
        <h3>Import/Export Workflow</h3>
        <button className="node-palette-button" onClick={onExportWorkflow}>Export Workflow</button>
        <input
          className="node-palette-button"
          type="file"
          accept="application/json"
          onChange={handleImportWorkflow}
        />
      </div>
    </div>
  );
};

export default NodePalette;
