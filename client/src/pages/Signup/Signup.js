import React, { useRef }  from 'react';
import { Link } from "react-router-dom";
import { useShopprContext } from "../../utils/GlobalState";

import API from '../../utils/API';

import {
    CREATE_USER,
} from "../../utils/actions"


function Signup(){
    const [state, dispatch] = useShopprContext();

    const userNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

 //   console.log("OUR SHOPPR CONTEXT: " +  JSON.stringify( useShopprContext() ) );

    function handleSubmitForm(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log("In Handle form submit");

        // Only process the form data if there are actual values in there
        if (userNameRef.value && emailRef.value && passwordRef.value) {
            let User = {
                username: userNameRef.value.trim(),
                email: emailRef.value.trim(),
                password: passwordRef.value.trim()
            };

            console.log("User : " + User);
            API.createNewUser( User )
            .then( ( newUser )=>{
                console.log("Entered a new user ("+ newUser.data.username+") into the database!");
                    dispatch({
                        type: CREATE_USER,
                        User: newUser.data
                    });

                // Clear out the form fields -- not sure if we really need to do this
                userNameRef.current.value = "";
                emailRef.current.value = "";
                passwordRef.current.value = "";
                }
            )
            .catch( (err)=>{ console.log(err) });
            
        } // end of If Statement
    }
    return (
    <div className="container">
        <h1>Signup With Shoppr:</h1>
        <div className="row">
            <div className="col-md-6 col-md-offset-3">
            <form className="signup" onSubmit={handleSubmitForm}>
                <div className="form-group">
                    <label for="username">Username</label>
                    <input type="text" className="form-control" id="username" placeholder="Username" ref={userNameRef} />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="email-input" placeholder="Email" ref={userNameRef} />
                </div>
                <div className="form-group">
                   <label for="exampleInputPassword1">Password</label>
                   <input type="password" className="form-control" id="password-input" placeholder="Password"  ref={userNameRef} />
                 </div>
                 <div style={{display: "none"}} id="alert" className="alert alert-danger" role="alert">
                    <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                    <span className="sr-only">Error:</span> <span className="msg"></span>
                </div>
                <button type="submit" className="btn btn-default">Sign Up</button>
            </form><br></br>
            <p>Or log in <Link to="/login">here</Link></p>
            </div>
        </div>
    </div>
    );
}

export default Signup;

