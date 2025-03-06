import PoemImage from "../assets/images/poem.jpeg";
import DictionaryImage from "../assets/images/dictionary.jpeg";
import TravelImage from "../assets/images/travel.jpeg";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="projects-container">
      <h1>Projects</h1>
      <p>Completed Personal Projects</p>
      <br />

      <div className="projects-list">
        <ProjectCard
          image={PoemImage}
          title="Poem Generator"
          description="A creative AI-driven tool to generate personalized poems based on user input."
          builtWith="Built With HTML, CSS and Javascript"
          link="https://dreamy-madeleine-c5ec41.netlify.app/"
        />

        <ProjectCard
          image={DictionaryImage}
          title="Dictionary App"
          description="An app providing word definitions, synonyms, and examples."
          builtWith="Built With HTML, CSS, and Javascript"
          link="https://willowy-kashata-3a436e.netlify.app/"
        />

        <ProjectCard
          image={TravelImage}
          title=".TRAVEL."
          description="A website showcasing South Africa's top tourist spots."
          builtWith="Built With HTML and CSS"
          link="https://eclectic-profiterole-bf7254.netlify.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
