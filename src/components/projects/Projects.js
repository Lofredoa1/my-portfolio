import React from "react";
import "./projects.css";
import Slide from "react-reveal/Slide";

const Projects = () => {
  return (
    <section id="projects">
      <div class="projects-container">
        <Slide left>
          <h1>PROJECTS</h1>
        </Slide>
        <div class="project">
          <img src="/plantie.png" alt="" />
          <h4>Plantie</h4><br/>
          <p>A full-stack MERN app built with one teammate featuring user auth, API calls, task feed based on user inputs. I was responsible for designing and creating the full React architecture as well as helping out with data logic on the backend. Try it out, testuser and testpassword are the credentials.</p>
          <div>
              <a href="">Code</a>
              <a href="">Live</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
