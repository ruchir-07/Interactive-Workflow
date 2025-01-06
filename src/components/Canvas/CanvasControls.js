import React from 'react';
import '../../styles/components.css';

const CanvasControls = () => {
  return (
    <div className="canvas-controls">
      <button>Zoom In</button>
      <button>Zoom Out</button>
      <button>Reset View</button>
      <button>Toggle Grid</button>
    </div>
  );
};

export default CanvasControls;
