import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="w3-animate-opacity">
            <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
            <h1>Contact Information</h1>
            <h3> Email - mlrodriguez2003@outlook.com <br/>
                <Link className="hover" to="https://github.com/MichaelDriguez"
                      target="_blank">GitHub</Link> <br/>
                <Link className="hover" to="https://www.linkedin.com/in/michael-driguez/"
                      target="_blank">LinkedIn</Link>
            </h3>
        </div>
    )
};

export default Home;
