import CatImage from "../assets/images/cat.jpeg";
import ClockImage from "../assets/images/clock.jpeg";
import HobbyImage from "../assets/images/hobby.jpeg";
import WeatherImage from "../assets/images/weather.jpeg";
import PoemImage from "../assets/images/poem.jpeg";
import DictionaryImage from "../assets/images/dictionary.jpeg";
import ReactWeatherImage from "../assets/images/reactweather.jpeg";
import TravelImage from "../assets/images/travel.jpeg";
import ProjectCard from "./ProjectCard"; 

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <h1>My Projects</h1>
      <p>A collection of projects I've worked on recently.</p>

      <div className="projects-list">
        <ProjectCard
          image={CatImage}
          title="Cat Webpage"
          description="A fun, interactive webpage dedicated to various cat breeds and care tips."
          builtWith="Built With HTML and CSS"
          link="https://www.shecodes.io/cohorts/1832/projects/2221091"
        />

        <ProjectCard
          image={ClockImage}
          title="Timezone App"
          description="Track current local times across the globe with this app."
          builtWith="Built With HTML, CSS and Javascript"
          link="https://roaring-daifuku-292a48.netlify.app/"
        />

        <ProjectCard
          image={HobbyImage}
          title="Food Webpage"
          description="A webpage about my hobby, which just so happens to be cooking."
          builtWith="Built With HTML and CSS"
          link="https://www.shecodes.io/cohorts/1899/projects/2254378"
        />

        <ProjectCard
          image={WeatherImage}
          title="Weather Project"
          description="Live weather forecast data for any location with this weather app."
          builtWith="Built With HTML, CSS and Javascript"
          link="https://curious-truffle-2c4059.netlify.app/"
        />

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
          image={ReactWeatherImage}
          title="React Weather App"
          description="A React-based weather application providing live weather updates."
          builtWith="Built With HTML, CSS, and Javascript"
          link="https://dancing-arithmetic-ba1c3f.netlify.app/"
        />

        <ProjectCard
          image={TravelImage}
          title=".TRAVEL."
          description="A website showcasing South Africa's top tourist spots."
          builtWith="Built With HTML and CSS"
          link="https://eclectic-profiterole-bf7254.netlify.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
