export const validateWorkflow = (elements) => {
    const startNodes = elements.filter((el) => el.data?.type === 'start');
    const endNodes = elements.filter((el) => el.data?.type === 'end');
  
    const errors = [];
    if (startNodes.length !== 1) {
      errors.push('Workflow must have exactly one start node.');
    }
    if (endNodes.length !== 1) {
      errors.push('Workflow must have exactly one end node.');
    }
  
    return errors;
  };
  