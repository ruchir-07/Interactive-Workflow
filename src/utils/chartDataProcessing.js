export const processChartData = (workflowData) => {
    let cumulativeTime = 0;
  
    const barChartData = workflowData.map(node => ({
      name: node.data.label,
      executionTime: node.data.executionTime,
    }));
  
    const lineChartData = workflowData.map(node => {
      cumulativeTime += node.data.executionTime;
      return {
        name: node.data.label,
        cumulativeTime,
      };
    });
  
    const pieChartData = workflowData.reduce((acc, node) => {
      const type = node.data.type || 'Unknown';
      const existing = acc.find(item => item.name === type);
      if (existing) {
        existing.value += node.data.executionTime;
      } else {
        acc.push({ name: type, value: node.data.executionTime });
      }
      return acc;
    }, []);
  
    return { barChartData, lineChartData, pieChartData };
  };
  