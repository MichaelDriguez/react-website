import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="w3-center w3-black w3-padding-64 w3-opacity">
            <div className="w3-xlarge w3-section">
                <Link to="https://github.com/MichaelDriguez" target="_blank">
                    <i className="fa fa-github w3-hover-opacity"></i></Link>
                <Link to="https://www.linkedin.com/in/michael-driguez/" target="_blank">
                    <i className="fa fa-linkedin w3-hover-opacity"></i></Link>
                <h4>Thank you for visiting.</h4>
            </div>
        </footer>
    );
}

export default Footer;
