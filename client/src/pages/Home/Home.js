import React, {useRef} from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import Search from "../../components/Search/Search";
import API from '../../utils/API';

function Home(){

    function handleFormSubmit(event){
        event.preventDefault();
        event.stopPropagation();
        //console.log(uploadImage.current.value);
      

     //   let file = uploadImage.current.value;
      //  console.log(file);

      //  API.extract(file).then.

        // API.extract(event.target.files[0]).then((res)=>{
        //     console.log("here is the image uploaded res",res);
        // })
      //   API.extract(file).then((res)=>{
      //     console.log("here is the image uploaded res",res);
      // })
    }

    return (
        <div>
            <h1>I am in Home Component</h1>
            <Link to="/signup">
            <button className="largeButton">Create an Account</button>
            </Link>
            <Link to="/login">
            <button className="largeButton">Log In</button>
            </Link>
            
            <Search/>
  
            {/* <form
            className="mt-4"
            method="POST"
            encType="multipart/form-data"
            onSubmit={ handleFormSubmit }
           
          >
         
            <div className="form-group">
              <input
                type="file"
                name="file"
                id="input-files"
                className="form-control-file border"
                ref={uploadImage}
      
              /> */}

       
           
      
            
        </div>
    );
}

export default Home;