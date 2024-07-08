import React from 'react';
import {Link} from "react-router-dom";

function NoPage() {
    return (
        <div className="w3-center">
            <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
            <h1><b> 404 Not Found</b></h1>
            <p>The page you are looking for does not exist.<br/></p>
            <Link to="/" className="w3-center"><h5>Return Home</h5></Link>
        </div>
    );
}

export default NoPage;
