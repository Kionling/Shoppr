import React, { useRef, useEffect, useState } from "react";
import "./FriendsSearches.css";
import { useShopprContext } from "../../utils/GlobalState";
import { SET_FRIENDS } from "../../utils/actions";


function FriendsSearches(props) {
  const [state, dispatch] = useShopprContext();


  return (
    <div>
      <h1>Matching Friend's Searches</h1>
      {props.friendsSearches ? (
        props.friendsSearches.map((searchItem) => {
          return (
            <div>
              <img src={searchItem.image} className="fSItemImage" />
              <h1>Item: {searchItem.name} </h1>
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
