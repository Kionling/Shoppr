import React, { useRef } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { ADD_SEARCH_DETAIL,LOADING,STOP_LOADING } from "../../utils/actions";
import { useShopprContext } from "../../utils/GlobalState";
import SearchContainerS from "../SearchContainer/searchContainer.css";
import loader from '../../assets/loader.gif';
import {useHistory} from 'react-router-dom';


function SearchContainer() {
  const [state, dispatch] = useShopprContext();
  const imageUrl = useRef();
  const history = useHistory();

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

  return (
    <div className="container center">
      <div className="row">
        <div className="col s12 l6">
          {state.loading ? <img src={loader}></img> :
            <form onSubmit={handleFormSubmit}>
              <label>Image Url:</label>
              <input ref={imageUrl} />
              <button type="submit" className="btn #00b0ff light-blue accent-3">
                Submit
              </button>
            </form>
          }
        </div>
        <div className="col s12 l6">
          <h1 className="description">Search for an image by url<span id="period">.</span></h1>
        </div>
      </div>
    </div>
  );
}

export default SearchContainer;
