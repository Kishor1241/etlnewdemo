// src/components/WorkflowSteps.js
import React from 'react';

const WorkflowSteps = ({ steps }) => {
  return (
    <div>
      <h3>Workflow Steps</h3>
      {steps.map((step) => (
        <div key={step.id}>
          <h4>{step.name_title}</h4>
          <p><strong>Status:</strong> {step.status}</p>
          <p><strong>Order of Execution:</strong> {step.ord_exec}</p>
          <pre>{JSON.stringify(step.params_extra, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
};

export default WorkflowSteps;
