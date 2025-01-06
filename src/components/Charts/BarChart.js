import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const BarChartComponent = ({ workflowData }) => {
  // Transform workflowData into chart data
  const data = workflowData.map((node) => ({
    name: node.data.label,
    executionTime: node.data.executionTime || 0,
  }));

  if (data.length === 0) {
    return <p>No data available for the bar chart.</p>;
  }

  return (
    <BarChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="executionTime" fill="#8884d8" />
    </BarChart>
  );
};

export default BarChartComponent;
