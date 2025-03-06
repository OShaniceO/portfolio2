import React from "react";
import ProjectCard from "./ProjectCard";

import CatImage from "../assets/images/cat.jpeg";
import ClockImage from "../assets/images/clock.jpeg";
import HobbyImage from "../assets/images/hobby.jpeg";
import WeatherImage from "../assets/images/weather.jpeg";
import ReactWeatherImage from "../assets/images/reactweather.jpeg";

const Assignments = () => {
  return (
    <div id="assignments" className="projects-container">
      <h1>Assignments</h1>
      <p>A Collection Of Completed Assignments.</p>
      <br />

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
          image={ReactWeatherImage}
          title="React Weather App"
          description="A React-based weather application providing live weather updates."
          builtWith="Built With HTML, CSS, and Javascript"
          link="https://dancing-arithmetic-ba1c3f.netlify.app/"
        />
      </div>
    </div>
  );
};

export default Assignments;
