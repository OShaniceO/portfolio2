import UCImage from "../assets/images/UC.png";
import ProjectCard from "./ProjectCard";

const Commissions = () => {
  return (
    <div id="projects" className="projects-container">
      <h1>Commissions</h1>

      <p>Currently developing my initial commissioned project</p>

      <div className="projects-list">
        <ProjectCard
          image={UCImage}
          title="Development in Progress"
          description="This section will be updated with my commissioned work upon completion. The project focuses on creating a responsive web application."
          builtWith="Built With HTML, CSS, and Javascript"
          link="#"
        />
      </div>
    </div>
  );
};

export default Commissions;
