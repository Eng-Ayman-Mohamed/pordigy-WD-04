import React from "react";
import "./Project.css";

function Project({ details }) {
  return (
    <div className="projectContainer">
      <img src={details.img} alt=""></img>
      <h3>{details.name}</h3>
      <p>{details.desc} </p>
      <a href={details.link} target="_blank" rel="noreferrer">
        <button> Repo </button>
      </a>
    </div>
  );
}

export default Project;
