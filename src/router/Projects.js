import React from 'react';
import Footer from "../components/Footer";

const Projects = () => {
    return (
        <div>
            <div className="bgimg-1 w3-display-container w3-opacity-min" id="home">
                <div className="w3-display-middle" style={{whiteSpace: "nowrap"}}>
                    <div className="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">
                        <div>LIST OF</div>
                        <div>PROJECTS</div>
                    </div>
                </div>
            </div>
            <div className="w3-content w3-container w3-padding-64">
                <p> Here's a list of <i>some</i> of the projects that I have worked on in the past couple years.
                    When you click on the names of the projects, you will get redirected to their respective GitHub
                    repositories.
                </p>
            </div>
            <Footer/>
        </div>
    )
};

export default Projects;
