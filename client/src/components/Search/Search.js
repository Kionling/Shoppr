import React, {useRef} from 'react';
import { Link } from "react-router-dom";
import API from '../../utils/API';
 

function Search(){

    const imageUrl = useRef();

    function handleFormSubmit(){
        console.log("Image url passed: ",imageUrl.current.value);
        API.extractUrl(imageUrl.current.value).then((res)=>{
            console.log("here is the image uploaded res",res);
        })
    }


    return (
        <div>
            <form onSubmit={handleFormSubmit}>
            <label>Image Url:</label>
            <input ref={imageUrl} />
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div> 
    )
}

export default Search;


