
import React from 'react';
import ProjectInfo from './components/ProjectInfo';
import TableView from './components/TableView';
import WorkflowSteps from './components/WorkflowSteps';
import jsonData from './data.json';
import './App.css';


const App = () => {
  return (
    <div>
      <h1>JSON Data Visualization</h1>
      <ProjectInfo project={jsonData} />
      <TableView headers={jsonData.table_headers} data={jsonData.table_data} />
      <WorkflowSteps steps={jsonData.workflow_steps} />
    </div>
  );
};

export default App;


