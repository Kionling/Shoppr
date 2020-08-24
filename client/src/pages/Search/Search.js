import React, {useEffect} from 'react';
import SearchContainer from "../../components/SearchContainer/SearchContainer";
import { useShopprContext } from "../../utils/GlobalState";
import { SET_CURRENT_PATH } from "../../utils/actions";


function Search(){
    const [state,dispatch] = useShopprContext();


    useEffect( ()=> {
      dispatch({type: SET_CURRENT_PATH, currentPath: "/search"})
    }, []
    )
  
    return (
        <div>
            <h1>I am in Search Component</h1>
            <SearchContainer/>
        </div>
    );
}

export default Search;