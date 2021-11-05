import React from "react";
import "./projects.css";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";

const Projects = () => {
  return (
    <section id="projects">
      <div class="projects-container">
        <Slide left>
          <h1>PROJECTS</h1>
        </Slide>
        <Zoom fraction={0.3}>

        <div class="project">
          <img src="/plantie.png" alt="" />
          <h4>Plantie</h4><br/>
          <p>A full-stack MERN app built with one teammate featuring user auth, API calls, task feed based on user inputs. I was responsible for designing and creating the full React architecture as well as helping out with data logic on the backend. Try it out, testuser and testpassword are the credentials.</p>
          <div class="code-buttons">
              <a class="project-button" href="https://github.com/davidvdev/plant-app-frontend">Code</a>
              <a class="project-button" href="https://plant-app-frontend-seven.vercel.app/">Live</a>
          </div>
        </div>
        </Zoom>
        <Zoom fraction={0.3}>

        <div class="project">
          <img src="/mlbstats.png" alt="" />
          <h4>MLB Stat History</h4><br/>
          <p>An interactive React app that uses API calls to retrieve information on all the players in MLB history. This app features a favorites page that allows the user to save and remove their favorite players from the list.</p>
          <div class="code-buttons">
              <a class="project-button" href="https://github.com/Lofredoa1/project2">Code</a>
              <a class="project-button" href="https://project2-lofredoa1.vercel.app/">Live</a>
          </div>
        </div>
        </Zoom>
      </div>
    </section>
  );
};

export default Projects;
