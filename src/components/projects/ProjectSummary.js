import React from "react";
import { Link } from "react-router-dom";
const ProjectSummary = ({ project }) => {
  return (
    <div>
      <h1>{project.title}</h1> <p>{project.body}</p>;

      <p>Posted by Ali</p>
    </div>
  );
};

export default ProjectSummary;
