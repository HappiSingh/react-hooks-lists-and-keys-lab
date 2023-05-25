import React from "react";
import ProjectItem from "./ProjectItem";


function ProjectList({ projects }) {
  console.log(projects);

  return (
    <div id="projects">
      <h2>My Projects</h2>

      {projects.map((projectInfo) => {
        return (
          <ProjectItem
            key={projectInfo.id}
            name={projectInfo.name}
            about={projectInfo.about}
            technologies={projectInfo.technologies}
          />
        );
      })}
    </div>
  );
}

export default ProjectList;
