import React from 'react';
import logo from './images/lambda_shield_logo.png';
import profile from './images/resumePic.jpg';
import './Portfolio.css';

function Portfolio() {
  return (
    <div>
      <div className="header">
        <img src={logo} alt="Lambda School symbol"/>
        <h1>Trey McGarity</h1>
      </div>
      <div className="main">
        <div className="left-content">
          <h2>About Me</h2>
          <img src={profile} alt="chest-up-profile of Trey McGarity"/>
          <p>My name Jerry (Trey) Glenn McGarity III. I graduated from highschool in 2017; futhermore, I graduated with a Associates Degree majoring in Computer Science from Motlow State Community College in the summer of 2019. In my opinion traditional schooling wasn't preparing me for career in development, so I changed gears.</p>
          <p>I am currently a part-time student at Lambda School for Full Stack Web Development. I appreciate the focus of the curriculum of Lambda because it's specifically job-like development training and there is a plethora of advisors and peers to help Lambda students along the way.</p>
          <p>I believe Lambda will help me to start a honest, successful career as a developer!</p>
        </div>
        <div className="middle-content">
          <div className="skills">
          <h2>Skills</h2>
          <ul>
            <li>C++</li>
            <li>UI (HTML, CSS)</li>
            <li>JS</li>
            <li>ReactJS</li>
            <li>Redux</li>
          </ul>
          </div>
          <h2>Reach Me</h2>
          <nav>
              <a href="https://github.com/TreyMcGarity">GitHub</a>
              <br />
              <a href="https://www.linkedin.com/in/trey-mcgarity-3a0079196/">LinkedIn</a>
              <br />            
              <a href="https://www.facebook.com/profile.php?id=100004535505847">Facebook</a>
          </nav>
        </div>
        <div className="right-content">
          <h2>My Projects</h2>
          <div className="projects">
              <h3>Build Week Project</h3>
              <p>Save The Animals was my first build week project, and it was simply a marketing page to advertise an app that users and corporations could make donations to various humanitarian efforts.</p>
              <p>Built using HTML and LESS.</p>
              <a href="https://lets-save-the-animals.netlify.com/">Save the Animals</a>
              <br />
              <h3>Favorite Github Repositories</h3>
              <p>JavaScript-III was the project where prototypes were introduced through making a simple, fun text-based game.</p>
              <p>Built using JS.</p>
              <a href="https://github.com/TreyMcGarity/JavaScript-III/tree/trey-mcgarity">JavaScript-III</a>
              <br />
              <p>NASA daily photo introduced the ability of grabbing information from an API and manipulating different properties and state through the "useEffect" method.</p>
              <p>Built using ReactJS.</p>
              <a href="https://github.com/TreyMcGarity/nasa-photo-of-the-day/tree/treymcgarity">NASA daily photo</a>
              <br />
              <p>Team Builder is one of the more simpler but more fun projects. I created a form and the information entered is saved and displayed on a card to the screen.</p>
              <p>Built using ReactJS.</p>
              <a href="https://github.com/TreyMcGarity/team-builder/tree/trey-mcgarity">Team Builder</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;