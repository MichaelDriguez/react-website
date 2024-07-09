import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="w3-animate-opacity">
            <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
            <h1>Contact Information</h1> <hr/>
            <p> mlrodriguez2003@outlook.com <br/>
                <Link className="hover" to="https://github.com/MichaelDriguez"
                      target="_blank" rel="noreferrer" style={{ marginRight: '0.3%' }}><i class="devicon-github-original"></i></Link>
                <Link className="hover" to="https://www.linkedin.com/in/michael-driguez/"
                      target="_blank" rel="noreferrer"><i class="devicon-linkedin-plain"></i></Link>
            </p>
            <br/> <br/> <br/> <br/> <br/>
        </div>
    )
};

export default Home;
