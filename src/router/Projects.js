import React from 'react';

const Projects = () => {
    return (
        <div className="bgimg-1">
            <div>
                <div className="w3-animate-opacity">
                    <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
                    <h1>Projects</h1>
                    <h3>Here's a list of <i>some</i> of the projects that I have worked on in the past couple
                        years. When you click on the names of the projects, you will get redirected to their respective GitHub
                        repositories.</h3>
                </div>
            </div>

            <br/> <br/>
            <hr/>

            <div>
                <div className="w3-animate-opacity">
                    <br/> <br/>
                    <h2><a href="https://github.com/MichaelDriguez/secure-password-generator"
                   target="_blank" className="w3-hover-opacity"><b>Secure Password Generator</b></a><br/>June 2024 | Java </h2>
                    <h3>This program generates secure passwords that one could use for their accounts. This
                        program includes several customization options for password generation,
                        including password length, the inclusion of symbols, and several other options. </h3>
                    <br/> <br/>
                </div>
            </div>
            <div>
                <div className="w3-animate-opacity">
                    <br/> <br/>
                    <h2><a href="https://github.com/MichaelDriguez/password-strength-checker"
                           target="_blank" className="w3-hover-opacity"><b>Password Strength Checker</b></a><br/>July
                        2024
                        | Shell </h2>
                    <h3>This program checks how secure your password is. It determines the score by checking the
                        length
                        and complexity of the password. The program will also provide suggestions as to how you
                        can make
                        your password stronger.</h3>
                    <br/> <br/>
                </div>
            </div>
            <div>
                <div className="w3-animate-opacity">
                    <br/> <br/>
                    <h2><a href="https://github.com/MichaelDriguez/react-website"
                           target="_blank" className="w3-hover-opacity"><b>This Website</b></a>
                        <br/>July 2024 | HTML, CSS, JavaScript, React </h2>
                    <h3>This website began with a w3.css template. I then modified it both visually and
                        functionally to get
                        what you see right now. The background gradient and favicon were created in Aseprite.
                        This website is currently under construction, so this project is not quite finished yet.</h3>
                    <br/> <br/> <br/> <br/> <br/>
                </div>
            </div>
        </div>
    )
};

export default Projects;
