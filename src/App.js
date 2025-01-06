import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorkflowBuilder from './pages/WorkflowBuilder';
import AnalyticsDashboard from './pages/AnalyticsDashboard';
import Navbar from './routes';

const App = () => {
  const [workflowData, setWorkflowData] = useState({ nodes: [], edges: [] });

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <WorkflowBuilder
              workflowData={workflowData}
              setWorkflowData={setWorkflowData}
            />
          }
        />
        <Route
          path="/analytics"
          element={<AnalyticsDashboard workflowData={workflowData.nodes} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
