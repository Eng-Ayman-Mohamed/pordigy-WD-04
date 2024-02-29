import React from "react";
import Project from "../Project/Project";
import MyProjects from "../../data/projects";
const Projects = () => {
  const Display = MyProjects.map((Pro) => <Project details={Pro} />);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>مشاريعي</h1>
      {Display}
    </div>
  );
};

export default Projects;
