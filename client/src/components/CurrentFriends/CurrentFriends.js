import React, {useRef, useEffect} from 'react';
import "./CurrentFriends.css";
import { useShopprContext } from "../../utils/GlobalState";
import { SET_FRIENDS } from "../../utils/actions";
import API from "../../utils/API";

function CurrentFriends(){

const [state, dispatch] = useShopprContext();

    useEffect(() => {
     if (state.User && state.User.id) {
         console.log("About to get Friends list.");

      API.getFriends(state.User).then((friends) => {
          console.log("Got friends back from the API:", friends);
         dispatch({type:SET_FRIENDS, friends:friends})
     })
     }
      }, [] );

    return(
        <div>
          { (state.Friends && state.Friends.length > 0) ? state.Friends.map( friend => {
              return (
                  <div>
                   { friend.username }
                  </div>
              )
          }) : <div>No Friends Found in the database yet. </div>}
        </div>
    )

}

export default CurrentFriends