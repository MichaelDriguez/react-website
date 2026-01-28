import React from 'react';

const Projects = () => {
  return (
    <div>
      <div>
        <div className="w3-animate-opacity">
          <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
        <h1 className='title'>PROJECTS</h1>
          <p>Here's a list of <i>some</i> of the projects that I have worked on in the past couple
            years. When you click on the names of the projects, you will get redirected to their respective GitHub
            repositories, when applicable. As for the web-based applications, the yellow text within the project
            description will take you to the website itself.
          </p>
        </div>
      </div>

      <br/> <br/>
      <hr/>
      <div>
        <div className="w3-animate-opacity">
          <br/> <br/>
          <h2><a href="https://github.com/MichaelDriguez/react-website"
            target="_blank" rel="noreferrer" className="hover-two">
            <b>React Portfolio Website</b></a> | <i className="devicon-html5-plain" style={{marginRight: '0.3%'}}></i>
            <i className="devicon-css3-plain" style={{marginRight: '0.3%'}}></i>
            <i className="devicon-javascript-plain" style={{marginRight: '0.3%'}}></i>
            <i className="devicon-nodejs-plain" style={{marginRight: '0.3%'}}></i>
            <i className="devicon-react-original" style={{marginRight: '0.5%'}}></i></h2>
          <p>The react portfolio website is the website you see before you right now.
            This project first began with a w3.css template. I then modified it both visually and
            functionally to get what you see right now.
          </p>
          <br/> <br/>
        </div>
      </div>
      <hr/>
      <div>
        <div className="w3-animate-opacity">
          <br/> <br/>
          <h2><a href="https://github.com/MichaelDriguez/pi-4-pentesting-lab"
                 target="_blank" rel="noreferrer" className="hover-two">
                 <b>Raspberry Pi 4 Penetration Testing Lab</b></a> | <i className="devicon-kalilinux-original"></i>
                 <i class="devicon-raspberrypi-plain"></i></h2>
          <p>This repository contains documentation for my pentesting lab using Kali Linux XFCE.
            A successor to my Virtual Machine Penetration Testing Lab, this lab reflects improved
            documentation skills and more effective use of a variety of cybersecurity tools.
          </p>
          <br/> <br/>
        </div>
      </div>
      <div>
        <div className="w3-animate-opacity">
          <br/> <br/>
          <h2><b>Virtual Machine Penetration Testing Lab</b> | <i className="devicon-kalilinux-original"></i></h2>
          <p>The lab is an isolated virtual network where the attacker (Kali Linux)
            exploits the target machine (Metasploit 2). Some of the tools I have used in the
            pentesting lab include:</p>
          <ul>
            <li><b>VirtualBox - </b> Used to set up the pentesting environment itself.</li>
            <li>
              <b>Nmap - </b>Used to discover other machines on the network
              (in this case, just the target machine).
            </li>
            <li>
              <b>OpenVAS - </b>Used to scan the target machine for vulnerabilities.
            </li>
            <li>
              <b>WireShark - </b>Used to packet sniff a login attempt to the target machine.
              I used both Telnet and SSH connections and compared how data is stored in transit.
            </li>
            <li>
              <b>Hydra - </b>Used to decrypt the target machine's hashed password.
            </li>
          </ul>
          <p>This lab, which I made in early 2024, shows my early work in pentesting.
            Since then, I continued improving these skills through school and independent work. My successor lab, the Raspberry Pi 4 Penetration
            Testing Lab, reflects improvement on documentation and more effective use of some of the aforementioned tools.
          </p>
        </div>
      </div>
      <br/> <br/>
      <div>
        <div className="w3-animate-opacity">
          <br/> <br/>
          <h2><a href="https://github.com/MichaelDriguez/secure-password-generator"
                 target="_blank" rel="noreferrer" className="hover-two">
                 <b>Secure Password Generator</b></a> | <i className="devicon-java-plain"></i></h2>
          <p>This program generates secure passwords that one could use for their accounts. This
            program includes several customization options for password generation,
            including password length, the inclusion of symbols, and several other options. </p>
          <br/> <br/>
        </div>
      </div>
      <div>
        <div className="w3-animate-opacity">
          <br/> <br/>
          <h2><a href="https://github.com/MichaelDriguez/password-strength-checker"
          target="_blank" rel="noreferrer" className="hover-two">
          <b>Password Strength Checker</b></a> | <i className="devicon-bash-plain"></i></h2>
          <p><b>In collaboration with </b><a href="https://github.com/jvalenteros"
            target="_blank" rel="noreferrer" className="hover-two"><b>Johann
            Valenteros</b></a>
          </p>
          <p>This program checks how secure your password is. It determines the score by checking the length
            and complexity of the password. The program will also provide suggestions as to how you can make
            your password stronger.
          </p>
          <br/> <br/>
        </div>
      </div>
      <div>
        <div className="w3-animate-opacity">
          <br/> <br/>
          <h2><a href="https://github.com/jvalenteros/ciphers"
            target="_blank" rel="noreferrer" className="hover-two">
            <b>Cipher Tools</b></a> | <i className="devicon-html5-plain" style={{marginRight: '0.3%'}}></i>
            <i className="devicon-tailwindcss-original" style={{marginRight: '0.3%'}}></i>
            <i className="devicon-javascript-plain" style={{marginRight: '0.5%'}}></i></h2>
          <p><b>In collaboration with </b><a href="https://github.com/jvalenteros"
            target="_blank" rel="noreferrer" className="hover-two"><b>Johann Valenteros</b></a>
          </p>
          <p>This program encodes and decodes text using various ciphers.</p>
          <br/> <br/> <br/> <br/> <br/>
        </div>
      </div>
    </div>
  );
};

export default Projects;
