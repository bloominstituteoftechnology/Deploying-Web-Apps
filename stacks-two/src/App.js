import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import './App.css';

import MarketsList from './components/MarketsList';
import SignUpForm from './components/SignUpForm';

function App() {
  return (
    <div className="App">
      <Router>

      <h1>Welcome to your Markets Update!</h1>

      <nav className="container">
          <h1>
            Join Us!
          </h1>
          <ul className="steps">
            <li>
              <NavLink exact to="/">
                Markets
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup">
                Sign Up
              </NavLink>
            </li>
          </ul>
        </nav>
      
      <Route path="/"
      component = {MarketsList}/>

      <Route path="/signup" 
      component = {SignUpForm}/>
  
      </Router>
      
    </div>
  );
}

export default App;
