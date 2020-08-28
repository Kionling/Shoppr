import React, { useState, useEffect } from "react";
import MapContainer from "../../components/MapContainer/MapContainer";
import VisionItems from "../../components/VisionItems/VisionItems";
import ResultsList from "../../components/ResultsList/ResultsList";
import { useShopprContext } from "../../utils/GlobalState";
import { SET_STORE_PREF, SET_CURRENT_PATH } from "../../utils/actions";
import FriendsSearches from "../../components/FriendsSearches/FriendsSearches";
import API from "../../utils/API";

function Result() {
  // const [itemToSearch, setItemToSearch] = useState();
  const [state, dispatch] = useShopprContext();
  const [friendsSearches, setFriendsSearches] = useState();

  function findAssociatedFriend(userId) {
    let friend = state.Friends.filter((friend) => friend.id === userId);
    return friend[0];
  }

  useEffect(() => {
    dispatch({ type: SET_STORE_PREF, isOnline: true });
    dispatch({ type: SET_CURRENT_PATH, currentPath: "/result" });

    let friendsIds = state.Friends.map((friend) => friend.id);

    if (state.User && state.User.id) {
      API.getFriendsSearches({
        friendsIds: friendsIds,
        item: state.CurrentSearch.items[state.current_search_item],
      })
        .then((results) => {
          console.log("In Result.js, friendsSearches:", results.data);

          results.data.forEach((product, index) => {
            console.log("looking for product.userId:", product.UserId);
            let friend = findAssociatedFriend(product.UserId);
            console.log("friend: ", friend);
            results.data[index].friend = friend;
          });

          console.log("Friends Searches: ", results.data);
          setFriendsSearches(results.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div>
      <div className="row center">

        <div className=" center">
          <div className="col s12 l12">
            <VisionItems></VisionItems>
          </div>
          <div className="col s12 l5 center">
            {friendsSearches &&
            friendsSearches.length > 0 &&
            state.User &&
            state.User.id ? (
              <FriendsSearches
                friendsSearches={friendsSearches}
              ></FriendsSearches>
            ) : (
              <div>
                <p>
                  Try connecting with your friends to see what items they
                  purchased!
                </p>
              </div>
            )}
          </div>
          <div className="col s12 l6 center">
            {state.isOnline ? (
              <ResultsList
                itemToSearch={
                  state.CurrentSearch.items[state.current_search_item]
                }
              ></ResultsList>
            ) : (
              <MapContainer
                itemToSearch={
                  state.CurrentSearch.items[state.current_search_item]
                }
              ></MapContainer>
            )}
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Result;
