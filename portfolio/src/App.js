import React from 'react';
import './App.css';

import Nav from './components/Nav';
import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
