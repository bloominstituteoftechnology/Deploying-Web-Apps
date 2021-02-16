import React, { useState } from 'react';
import './App.css';

import useDarkMode from './hooks/useDarkMode'

import Nav from './components/Nav';
import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
const [darkMode, setDarkMode] = useDarkMode(false)

  return (
    <div className={darkMode ? "dark-mode App" : "App"}>
      <Nav darkmode={darkMode} setDarkMode={setDarkMode} />
      <Header />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
