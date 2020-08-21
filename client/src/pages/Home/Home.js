import React, {useRef} from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import API from '../../utils/API';

function Home(){
    const uploadImage = useRef();
    function handleFormSubmit(event){
        event.preventDefault();
        event.stopPropagation();
        //console.log(uploadImage.current.value);
        console.log(event.target.files[0],event.target);
        API.extract(event.target.files[0]).then((res)=>{
            console.log("here is the image uploaded res",res);
        })
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
            
            {/* Test Image recognisition */}
            <form
            className="mt-4"
            method="POST"
            encType="multipart/form-data"
           
          >
               {/* action="/api/extract" onSubmit={handleFormSubmit} */}
            <div className="form-group">
              <input
                type="file"
                name="file"
                id="input-files"
                className="form-control-file border"
                ref={uploadImage}
                onChange={handleFormSubmit}
              />
            </div>
            {/* <button type="submit" className="btn btn-primary">Submit</button> */}
          </form>
            
        </div>
    );
}

export default Home;