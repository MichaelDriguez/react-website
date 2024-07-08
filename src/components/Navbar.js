import React from 'react';
import { Link, Outlet } from "react-router-dom";
import LogoDarkTheme from '../images/LogoDarkTheme.png';

const Navbar = (props) =>  {
    return (
        <>
            <nav>
                <div className="w3-top">
                    {/* Navbar (sit on top) */}
                    <div className="w3-bar" id="myNavbar">
                        <a className="w3-bar-item w3-hide-medium w3-hide-large w3-right hover" href="javascript:void(0);"
                       onClick={toggleFunction} title="Toggle Navigation Menu">
                        <i className="fa fa-bars"></i>
                        </a>
                        <Link to="/" className="navcolor w3-bar-item hover">
                            <img src={LogoDarkTheme} alt="Logo for Mike's Pictures"
                                 style={{width: "50px",height:"20px"}}/>
                        </Link>
                        <Link to="/contact" className="navcolor w3-bar-item w3-hide-small w3-right hover">CONTACT</Link>
                        <Link to="/theme-picker" className="navcolor w3-bar-item w3-hide-small w3-right hover">THEME PICKER</Link>
                        <Link to="/projects" className="navcolor w3-bar-item w3-hide-small w3-right hover">PROJECTS</Link>
                        <Link to="/about" className="navcolor w3-bar-item w3-hide-small w3-right hover">ABOUT</Link>
                    </div>

                    {/* Navbar on small screens */}
                    <div id="navDemo" className="w3-bar-block
                    w3-hide w3-hide-large w3-hide-medium">
                        <Link to="/about" className="w3-bar-item w3-button"
                              onClick={toggleFunction}> ABOUT</Link>
                        <Link to="/projects" className="w3-bar-item w3-button"
                          onClick={toggleFunction}> PROJECTS</Link>
                        <Link to="/theme-picker" className="w3-bar-item w3-button"
                          onClick={toggleFunction}> THEME PICKER</Link>
                        <Link to="/contact" className="w3-bar-item w3-button"
                              onClick={toggleFunction}> CONTACT</Link>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </>
    );
}

// // Change style of navbar on scroll
// window.onscroll = function() {myFunction()};
// function myFunction() {
//     let navbar = document.getElementById("myNavbar");
//     if (document.body.scrollTop > 100 ||
//         document.documentElement.scrollTop > 100) {
//         navbar.className = "w3-bar" + " w3-card" +
//             " w3-animate-top" + " w3-white";
//     } else {
//         navbar.className =
//             navbar.className.replace(" w3-card w3-animate-top w3-white", "");
//     }
// }

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    let x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") === -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

export default Navbar;
