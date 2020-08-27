import React, { useRef, useEffect, useState } from "react";
import "./FriendsSearches.css";
import { useShopprContext } from "../../utils/GlobalState";
import { SET_FRIENDS } from "../../utils/actions";


function FriendsSearches(props) {
  const [state, dispatch] = useShopprContext();



  return (
    <div>
      <h1>Your Friends bought these similar items:</h1>
      { props.friendsSearches ? (
        props.friendsSearches.map((searchItem) => {
          return (
            <div>
              <img className="friendAvatar" src={searchItem.friend.avatar}/>
              <p>{searchItem.friend.username}</p>
              <img src={searchItem.image_url} className="fSItemImage" />
              <p className="friendPuchaseTitle">Item: {searchItem.title} </p>
            </div>
          );
        })
      ) : (
        <div>No matching friend searches found.</div>
      )}
    </div>
  );
}

export default FriendsSearches;
