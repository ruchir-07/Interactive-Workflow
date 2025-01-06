import React from 'react';
import BarChartComponent from '../components/Charts/BarChart';
import LineChartComponent from '../components/Charts/LineChart';
import PieChartComponent from '../components/Charts/PieChart';
import '../styles/analytics.css';

const AnalyticsDashboard = ({ workflowData }) => {
  console.log('Workflow Data in Analytics:', workflowData);

  if (!workflowData || workflowData.length === 0) {
    return <p>No workflow data available for analytics.</p>;
  }

  return (
    <div className="analytics-dashboard">
      <h1>Analytics Dashboard</h1>
      <div className="charts-container">
        <div className="chart">
          <h3>Execution Time (Bar Chart)</h3>
          <BarChartComponent workflowData={workflowData} />
        </div>
        <div className="chart">
          <h3>Cumulative Execution Time (Line Chart)</h3>
          <LineChartComponent workflowData={workflowData} />
        </div>
        <div className="chart">
          <h3>Node Type Distribution (Pie Chart)</h3>
          <PieChartComponent workflowData={workflowData} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
