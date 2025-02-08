import React from "react";

const ProjectCard = ({ image, title, description, builtWith, link }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h2>{title}</h2>
      <p>{description}</p>
      <h6>{builtWith}</h6>
      <a href={link} target="_blank" rel="noreferrer" className="button-17">
        Launch
      </a>
    </div>
  );
};

export default ProjectCard;
