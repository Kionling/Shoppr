import React, { useRef, useEffect, useState} from "react";
import API from "../../utils/API";
import { Redirect } from "react-router-dom";
import { useShopprContext } from "../../utils/GlobalState";
import "./Friends.css";
import { SET_CURRENT_PATH } from "../../utils/actions";
import user_avatar from "../../assets/user_avatar.png";

function Friends() {
  // let friendAccounts = [];
  const friendsEmail = useRef();

  const [state, dispatch] = useShopprContext();
  const [friendAccounts, setfriendAccounts] = useState([]);

  useEffect(() => {
    console.log("Friend accounts:", friendAccounts);
    //  dispatch({type: SET_CURRENT_PATH, currentPath: "/friends"})

  }, [friendAccounts ] );

  useEffect(() => {
    dispatch({ type: SET_CURRENT_PATH, currentPath: "/friends" });
  }, []);



  let currentUser = null;
  if (state && state.User) {
    currentUser = state.User;
  }
  if (!currentUser) {
    return <Redirect to="/" />;
  }

  //   const [friendsState, friendsDispatch] = { FriendsProvider, useFriendsContext };

  function searchForFriend(e) {
    e.preventDefault();
    e.stopPropagation();

    let searchTerm = friendsEmail.current.value;

    API.searchForFriend(searchTerm)
      .then((results) => {
        console.log("Friends.js got results: ", results.data);
        setfriendAccounts(results.data );

        console.log("There are ", friendAccounts.length, " possible accounts");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="friendsConnect">
      <h1>Connect with Friends:</h1>

      <div>
        <form>
          <label>Enter your friend's email address:</label>
          <input
            type="text"
            ref={friendsEmail}
            onChange={searchForFriend}
          ></input>
          {/* <button type="submit" className="btn btn-primary">Search for my friends on Shoppr</button> */}
        </form>
      </div>

      <div>
        <h1>Your Friends on Shoppr</h1>
        <div>
          {friendAccounts.map((friend) => {
            return (
              <div className="friendCard">
              <img src={ friend.avatar ? friend.avatar : user_avatar } className="avatar"/>
                <h1>{friend.username}</h1>
                <p>{friend.email}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Friends;
