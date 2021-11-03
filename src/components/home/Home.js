import React from "react";
import "./home.css";
// import Particles from "react-particles-js";
// import particlesConfig from "../../config/particles-config";
import Navbar from "../navbar/Navbar";

const Home = () => {
  return (
    <div>
      <section id="home">
        <div class="home-container">
          <h1>Hello, I'm <span>Anthony Lofredo</span></h1>
          <h2>I'm a full-stack</h2>
          <h2>web developer.</h2>
          <a href="#about" id="home-button">Check out my work</a>
        </div>
      </section>
      <Navbar />
    </div>
  );
};

export default Home;
