export const saveWorkflow = (workflow) => {
    localStorage.setItem('workflow', JSON.stringify(workflow));
  };
  
  export const loadWorkflow = () => {
    const savedWorkflow = localStorage.getItem('workflow');
    return savedWorkflow ? JSON.parse(savedWorkflow) : [];
  };
  