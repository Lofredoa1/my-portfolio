import React from 'react';
import './App.css';
// Import React Components
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';


function App() {
  return (
    <div className="App">
       <Home/>
       <About/>
       <Projects/>
       <Contact/>
    </div>
  );
}

export default App;