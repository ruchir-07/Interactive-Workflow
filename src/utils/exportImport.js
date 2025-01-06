export const exportWorkflow = (workflow) => {
    const blob = new Blob([JSON.stringify(workflow)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'workflow.json';
    link.click();
  };
  
  export const importWorkflow = (file, callback) => {
    const reader = new FileReader();
    reader.onload = (event) => callback(JSON.parse(event.target.result));
    reader.readAsText(file);
  };
  