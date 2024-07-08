import React from 'react';
import Footer from '../components/Footer.js';

const Home = () => {
  return (
      <div>
          <div className="bgimg-1 w3-display-container w3-opacity-min" id="home">
              <div className="w3-display-middle" style={{whiteSpace: "nowrap"}}>
                  <div className="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">
                      <div>MICHAEL</div>
                      <div>RODRIGUEZ</div>
                  </div>
              </div>
          </div>
          <br/>

          <div className="w3-content w3-container w3-padding-64">
              <h3 className="w3-center">Who is Michael Rodriguez?</h3>
              <p> I am Michael Rodriguez, and I am a university student majoring in cybersecurity
                  with an emphasis in computer science. With knowledge on several programming
                  languages, frameworks, developer tools, and operating systems, I can help contribute
                  to company growth and expand my skills along the way.
              </p>
          </div>
          <div className="bgimg-1 w3-display-container w3-opacity-min" id="home">
              <div className="w3-display-middle" style={{whiteSpace: "nowrap"}}>
                  <div className="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">
                      <div>TECHNICAL</div>
                      <div>SKILLS</div>
                  </div>
              </div>
          </div>
          <Footer/>
      </div>
  )
};

export default Home;
