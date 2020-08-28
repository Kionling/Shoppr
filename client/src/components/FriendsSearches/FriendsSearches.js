import React, { useRef, useEffect, useState } from "react";
import "./FriendsSearches.css";
import { useShopprContext } from "../../utils/GlobalState";
import { SET_FRIENDS } from "../../utils/actions";


function FriendsSearches(props) {
  const [state, dispatch] = useShopprContext();



  return (
    <div>
      <h1 className="Bold">Your Friends Have Purchased Similar Items<span id="period">!</span></h1>
      { props.friendsSearches ? (
        props.friendsSearches.map((searchItem) => {
          return (
            <div className="card row ">
              <div className="col l6">
              <img className="friendAvatar circle " src={searchItem.friend.avatar}/>
              </div>
              <p className="Bold">{searchItem.friend.username}</p>
              <img id="friendsItem" src={searchItem.image_url} className="fSItemImage" />
              <p className="">Item: {searchItem.title} </p>
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
