import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { ADD_SEARCH_DETAIL,LOADING,STOP_LOADING, GET_PREVIOUS_SEARCHES, SEARCH_SAVED } from "../../utils/actions";
import { useShopprContext } from "../../utils/GlobalState";
import SearchContainerS from "../SearchContainer/searchContainer.css";
import loader from '../../assets/loader.gif';
import {useHistory} from 'react-router-dom';


function SearchContainer() {
  const [state, dispatch] = useShopprContext();
  const imageUrl = useRef();
  const history = useHistory();
  const [searchHistory,setSearchHistory] = useState();

  useEffect(() => {
    if(state.User && state.User.id){
      API.getSearchHistory(state.User.id)
      .then((response)=>{
        console.log(response.data);
        dispatch({type:GET_PREVIOUS_SEARCHES, previousSearches:response.data});
      }).catch(err =>{
        console.log(err);
      })
    }
  }, []);

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Image url passed: ", imageUrl.current.value);
    dispatch({type:LOADING})
    API.extractUrl(imageUrl.current.value).then((res) => {
      console.log("here is the image uploaded res", res);
      dispatch({ type: ADD_SEARCH_DETAIL, newSearch: res.data });
      imageUrl.current.value = '';
      history.push("/result");
    }).catch(err =>{
      console.log(err);
      dispatch({type:STOP_LOADING});
    })
  }

  function showResult(searchObj){
    dispatch({ type: ADD_SEARCH_DETAIL, newSearch: searchObj });
    dispatch({type: SEARCH_SAVED, searchSaved: true });
    history.push("/result");
  }

  return (
    <div className="container center">
      <div className="row">
      <div className="col s12 l6">
        {
          state.PreviousSearches?
          state.PreviousSearches.map((search,index)=>{
            return (
            <div key={index} onClick={()=>showResult(search)}>
               <div>
                <img src={search.image_url} style={{width:200}}></img>
               </div>
                <div>{search.items}</div>
            </div>
            )
          }) : ''
        }
      </div>
      </div>
      <div className="row valign-wrapper  ">
        <div className="col s12 l6">
          {state.loading ? <img src={loader}></img> :
            <form onSubmit={handleFormSubmit}>
              <label>Image Url:</label>
              <input className="white-text" ref={imageUrl} />
              <button type="submit" className="btn #00b0ff light-blue accent-3">
                Submit
              </button>
            </form>
          }
        </div>
        <div className="col s12 l6">
          <h1 className="description white-text">Search for an image by url<span id="period">.</span></h1>
        </div>
      </div>
      
    </div>
  );
}

export default SearchContainer;
