import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const PieChartComponent = ({ workflowData }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  // Transform workflowData into distribution by type
  const data = workflowData.reduce((acc, node) => {
    const type = node.data.type || 'Unknown';
    const existing = acc.find((item) => item.name === type);
    if (existing) {
      existing.value += 1;
    } else {
      acc.push({ name: type, value: 1 });
    }
    return acc;
  }, []);

  if (data.length === 0) {
    return <p>No data available for the pie chart.</p>;
  }

  return (
    <PieChart width={500} height={300}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default PieChartComponent;
