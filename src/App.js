import React from 'react';
import './App.css';
// Import React Components
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Particles from 'react-particles-js';



function App() {
  return (
    <div className="App">
       <Home/>
       <About/>
     
      
    </div>
  );
}

export default App;
