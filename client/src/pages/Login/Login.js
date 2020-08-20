import React, { useRef }  from 'react';
import { Link } from "react-router-dom";
import { useShopprContext } from "../../utils/GlobalState";

import API from '../../utils/API';

import {
    CREATE_USER,
} from "../../utils/actions"


function Login(){
    const [state, dispatch] = useShopprContext();

    const userNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

 //   console.log("OUR SHOPPR CONTEXT: " +  JSON.stringify( useShopprContext() ) );

    function handleSubmitForm(e) {
        e.preventDefault();
        e.stopPropagation();

    }
    return (
    <div className="container">
      <h1>Login:</h1>
    </div>
    );
}

export default Login;

