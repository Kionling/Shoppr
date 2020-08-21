import React, { useRef }  from 'react';
import { Link, useHistory } from "react-router-dom";
import { useShopprContext } from "../../utils/GlobalState";

import API from '../../utils/API';



function Signup(){
    let history = useHistory();

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
        if (userNameRef.current.value && emailRef.current.value && passwordRef.current.value) {
            let User = {
                username: userNameRef.current.value.trim(),
                email: emailRef.current.value.trim(),
                password: passwordRef.current.value.trim()
            };

            console.log("User : ", User);
            API.createNewUser( User )
            .then( ( newUser )=>{
                console.log("Entered a new user (", newUser, ") into the database!");
            

                // Clear out the form fields -- not sure if we really need to do this
                userNameRef.current.value = "";
                emailRef.current.value = "";
                passwordRef.current.value = "";

                // redirect the user to the login page
                history.push("/login");

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
                    <label>Username</label>
                    <input type="text" className="form-control" id="username-input" placeholder="Username" ref={userNameRef} />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" id="email-input" placeholder="Email" ref={emailRef} />
                </div>
                <div className="form-group">
                   <label>Password</label>
                   <input type="password" className="form-control" id="password-input" placeholder="Password"  ref={passwordRef} />
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

