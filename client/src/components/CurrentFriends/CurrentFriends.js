import React, {useRef, useEffect} from 'react';
import "./CurrentFriends.css";
import { useShopprContext } from "../../utils/GlobalState";
import { SET_FRIENDS } from "../../utils/actions";
import API from "../../utils/API";

function CurrentFriends(){

const [state, dispatch] = useShopprContext();

useEffect( ()=> {
    console.log("In CurrentFriends, state.Friends:", state.Friends);
});

    return(
        <div>
          { (state.Friends && state.Friends.length > 0) ? state.Friends.map( (friend,index) => {
              return (
                  <div key={index}>
                  
                   <h5 id="friends" >{ friend.username }</h5>
                  </div>
              )
          }) : <div><h1>You have not added any friends yet.     </h1> </div>}
        </div>
    )

}

export default CurrentFriends