// src/components/ProjectInfo.js
import React from 'react';

const ProjectInfo = ({ project }) => {
  return (
    <div>
      <h3>Project Information</h3>
      <p><strong>ID:</strong> {project.id}</p>
      <p><strong>Name:</strong> {project.project_name}</p>
      <p><strong>Output Name:</strong> {project.output_name}</p>
      <p><strong>Created:</strong> {new Date(project.created).toLocaleString()}</p>
      <p><strong>Last Modified:</strong> {new Date(project.modified).toLocaleString()}</p>
      <p><strong>Last Run:</strong> {new Date(project.last_run).toLocaleString()}</p>
    </div>
  );
};

export default ProjectInfo;
