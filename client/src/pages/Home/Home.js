import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';

function Home(){


    return (
        <div>
            <h1>I am in Home Component</h1>
            <Link to="/signup">
            <button class="largeButton">Sign Up</button>
            </Link>
        </div>
    );
}

export default Home;