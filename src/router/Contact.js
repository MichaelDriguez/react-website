import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className="w3-animate-opacity">
      <br/> <br/> <br/> <br/> <br/> <br/> <br/>
      <pre className="ASCII-text">
                  {`
//     _____            _             _   
//    / ____|          | |           | |  
//   | |     ___  _ __ | |_ __ _  ___| |_ 
//   | |    / _ \\| '_ \\| __/ _\` |/ __| __|
//   | |___| (_) | | | | || (_| | (__| |_ 
//    \\_____\\___/|_| |_|\\__\\__,_|\\___|\\__|
//                                        
//                                                                                                                                                                                                                                                
      `}
      </pre>
      <h1 className="alt-text"><b>Contact</b></h1>
      <hr/>
      <p> mlrodriguez2003@outlook.com <br/>
        <Link className="hover" to="https://github.com/MichaelDriguez"
              target="_blank" rel="noreferrer" style={{marginRight: '0.3%'}}>
          <i class="devicon-github-original"></i>
        </Link>
        <Link className="hover" to="https://www.linkedin.com/in/michael-driguez/"
              target="_blank" rel="noreferrer">
          <i class="devicon-linkedin-plain"></i>
        </Link>
      </p>
      <br/> <br/> <br/> <br/> <br/>
    </div>
  );
};

export default Home;
