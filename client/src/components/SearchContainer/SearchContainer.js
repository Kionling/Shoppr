import React, {useRef} from 'react';
import { Link } from "react-router-dom";
import API from '../../utils/API';
import { ADD_SEARCH_DETAIL } from '../../utils/actions';
import { useShopprContext } from '../../utils/GlobalState';
 

function SearchContainer(){
    const [state,dispatch] = useShopprContext();
    const imageUrl = useRef();

    function handleFormSubmit(event){
        event.preventDefault();
        console.log("Image url passed: ",imageUrl.current.value);
        API.extractUrl(imageUrl.current.value).then((res)=>{
            console.log("here is the image uploaded res",res);
            dispatch({type:ADD_SEARCH_DETAIL, newSearch: res.data});
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

export default SearchContainer;


