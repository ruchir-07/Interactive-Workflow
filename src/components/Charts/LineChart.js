import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const LineChartComponent = ({ workflowData }) => {
  let cumulativeTime = 0;

  // Transform workflowData into cumulative execution time
  const data = workflowData.map((node) => {
    cumulativeTime += node.data.executionTime || 0;
    return {
      name: node.data.label,
      cumulativeTime,
    };
  });

  if (data.length === 0) {
    return <p>No data available for the line chart.</p>;
  }

  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="cumulativeTime" stroke="#82ca9d" />
    </LineChart>
  );
};

export default LineChartComponent;
