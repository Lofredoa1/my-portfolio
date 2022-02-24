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
            <img src="/ea$e.png" alt="" />
            <h4>Ea$e</h4><br/>
            <p>GA hosted a 3 day hackathon featuring teams comprised of UX/UI designs and software developers to answer the question: What does accessible money management look like? Our answer was to create an app to track your expenses, set goals, and save. Ea$e. A full-stack MERN app featuring user auth, API calls, and an interactive dashboard breaking down user expenses and target saving goals. I was responsible for leading the front-end development and acting as lead DevOps to help manage the developer work flow and manage issues.</p>
            <div class="code-buttons">
                <a class="project-button" href="https://github.com/Hackathon-2-15-22/frontend">Code</a>
                <a class="project-button" href="https://frontend-psi-two.vercel.app/">Live</a>
            </div>
          </div>
        </Zoom>
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
        <Zoom fraction={0.3}>
          <div class="project">
            <img src="/pokedex.png" alt="" />
            <h4>React Pokédex</h4><br/>
            <p>A React app built with responsive design that uses PokéAPI to retrieve information on all the original 151 classic pokémon. This app shows core stats of each pokémon and allows the user to catch pokémon and add them to their team. Dynamic colors are utilized in this app to highlight specific pokémon types.</p>
            <div class="code-buttons">
                <a class="project-button" href="https://github.com/Lofredoa1/Pokedex">Code</a>
                <a class="project-button" href="https://pokedex-hygjl7cq2-lofredoa1.vercel.app/">Live</a>
            </div>
          </div>
        </Zoom>
      </div>
    </section>
  );
};

export default Projects;
