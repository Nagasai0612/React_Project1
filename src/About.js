import React from 'react';
import './About.css';

const About = () => {
  const handler = () => {
    window.open('./resume.pdf', '_blank')
  }
  return (
    <div className="about-container">
      <img
        src="https://png.pngtree.com/png-clipart/20230913/original/pngtree-coder-clipart-boy-working-with-computer-game-on-the-desk-vector-png-image_11072679.png"
        alt="Profile"
        className="profile-pic"
      />
      <h1>About Me</h1>
      <p>
        Dynamic and adaptable Frontend Developer with
        strong proficiency in React.js and JavaScript technologies.
        Demonstrates excellent problem-solving skills and
        attention to detail. Experienced in responsive web
        design and working withRESTful APIs integration. Quick learner
        with the ability to efficiently adopt new technologies,
        including Generative AI.

      </p>
      <br></br>
      <div className="buttons">
        <button className="btn-primary">nagasai.degala@gmail.com</button>
        <button className="btn-secondary">See Design Work</button>
        <button className="btn-primary" onClick={handler}>Download CV</button>
      </div>
    </div>
  );
};

export default About;
