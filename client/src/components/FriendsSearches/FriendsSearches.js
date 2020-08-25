import React, { useRef, useEffect, useState } from "react";
import "./FriendsSearches.css";
import { useShopprContext } from "../../utils/GlobalState";
import { SET_FRIENDS } from "../../utils/actions";
import API from "../../utils/API";

function CurrentFriends() {
  const [state, dispatch] = useShopprContext();
  const [friendsSearches, setFriendsSearches] = useState();

  // Get the Freinds Searches and instantiate a local variable
  useEffect(() => {
    API.getFriendsSearches({
      userid: state.User.id,
      item: state.CurrentSearch.items[state.current_search_item],
    })
      .then((results) => {
        setFriendsSearches(results);
      })
      .catch((err) => console.log(err));
  });

  // Watch that local variable
  useEffect(() => {}), [friendsSearches];

  return (
    <div>
      <h1>Matching Friend's Searches</h1>
      {friendsSearches ? (
        friendsSearches.map((searchItem) => {
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

export default CurrentFriends;
