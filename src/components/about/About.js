import React from "react";
import "./about.css";
//react-icons fo
import {
  SiJavascript,
  SiReact,
  SiPython,
  SiMongodb,
  SiCss3,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaNodeJs, FaSass } from "react-icons/fa";
import { DiRuby } from "react-icons/di";
import LightSpeed from "react-reveal/LightSpeed";
import Tada from "react-reveal/Tada";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const About = () => {
  return (
    <section id="about">
      <div class="about-container">
        <LightSpeed left duration={2000}>
          <h1 class="title">ABOUT</h1>
        </LightSpeed>
        <div class="about-me">
          <Tada delay={2000} fraction={1}>
            <img src="/profile.jpeg" alt="profile picture" />
          </Tada>
          <Fade right delay={1000}>
            <p>
              Solving problems through creative design and innovative solution
              is my passion. I strive to continuously learn new technologies to
              improve my ability to solve everyday issues. I enjoy collaborating
              with teams that push each other to grow. As a full-stack developer
              I have an extreme fascination with the organization of data and
              its ability to be manipulated.
            </p>
          </Fade>
        </div>
        <h1>Technologies I use</h1>
        <div class="skills">
          <Flip>
            <div class="skill">
              <SiJavascript size={80} />
              <p>JavaScript</p>
            </div>
          </Flip>
          <Flip>
            <div class="skill">
              <SiReact size={80} />
              <p>React</p>
            </div>
          </Flip>
          <Flip>
            <div class="skill">
              <AiOutlineHtml5 size={80} />
              <p>HTML5</p>
            </div>
          </Flip>
          <Flip>
            <div class="skill">
              <SiPython size={80} />
              <p>Python</p>
            </div>
          </Flip>
          <Flip>
            <div class="skill">
              <FaNodeJs size={80} />
              <p>Node</p>
            </div>
          </Flip>
          <Flip>
            <div class="skill">
              <SiMongodb size={80} />
              <p>MongoDB</p>
            </div>
          </Flip>
          <Flip>
            <div class="skill">
              <SiCss3 size={80} />
              <p>CSS</p>
            </div>
          </Flip>
          <Flip>
            <div class="skill">
              <SiPostgresql size={80} />
              <p>PostgreSQL</p>
            </div>
          </Flip>
          <Flip>
            <div class="skill">
              <SiTypescript size={80} />
              <p>TypeScript</p>
            </div>
          </Flip>
          <Flip>
            <div class="skill">
              <FaSass size={80} />
              <p>Sass</p>
            </div>
          </Flip>
          <Flip>
            <div class="skill">
              <DiRuby size={80} />
              <p>Ruby on Rails</p>
            </div>
          </Flip>
        </div>
      </div>
    </section>
  );
};

export default About;