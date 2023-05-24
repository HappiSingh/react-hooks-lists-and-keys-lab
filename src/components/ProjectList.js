import React from "react";


function ProjectList({ projects }) {
  console.log(projects);
  
  return (
    <div id="projects">
      <h2>My Projects</h2>
      {projects.map((proj) => {
        console.log(proj);
        return (
          
        );
    </div>
  ))
}

export default ProjectList;
