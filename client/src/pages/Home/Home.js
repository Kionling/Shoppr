import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';


const Styles= {
    banner: {
        
    }
}


function Home(){


    return (
        <div>
            <h1>I am in Home Component</h1>
            <Link to="/signup">
            <button className="largeButton">Create an Account</button>
            </Link>
            <Link to="/login">
            <button className="largeButton">Log In</button>
            </Link>
        </div>
    );
}

export default Home;