import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
function Projects() {
  return (
    
    <>
      <div className="ProjectWrapper" id="projects">
        <div className="Container">
          <hr style={{ height: '4px',borderColor: 'darkgray',background: 'darkgray'  }}/><br/>
          <div className="SectionTitle">Projects</div>
          <ProjectCard />
        </div>
      </div>
    </>
  );
}

export default Projects;
