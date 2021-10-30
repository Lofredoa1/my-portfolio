import React from 'react';
import Particles from 'react-particles-js';
import "./home.css";
import particlesConfig from '../../config/particles-config';
import Navbar from '../navbar/Navbar';

const Home = (props) => {
    return (<div>

        <div class="home-container">
        <Particles params={particlesConfig}/>
                <h1>Hello, I'm Anthony</h1>
                <h2>I am a full-stack web developer.</h2>
                <a href="#about">Check out my work</a>
            </div>
            <Navbar/>
    </div>

    )
}

export default Home