import React, { useRef, useEffect, useState } from "react";
import API from "../../utils/API";
import { Redirect } from "react-router-dom";
import { useShopprContext } from "../../utils/GlobalState";
import "./Friends.css";
import { SET_CURRENT_PATH, ADD_FRIEND } from "../../utils/actions";
import user_avatar from "../../assets/user_avatar.png";
import CurrentFriends from "../../components/CurrentFriends/CurrentFriends";

function Friends() {
  const friendsEmail = useRef();

  const [state, dispatch] = useShopprContext();
  const [friendAccounts, setfriendAccounts] = useState([]);

  useEffect(() => {}, [friendAccounts]);

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

  function addFriend(index) {
    API.addFriend({ User: state.User, Friend: friendAccounts[index] })
      .then((results) => {
        console.log("Added friend: ", results);

        dispatch({ type: ADD_FRIEND, friend: friendAccounts[index] });
      })
      .catch((err) => console.log(err));
  }

  function searchForFriend(e) {
    e.preventDefault();
    e.stopPropagation();

    let searchTerm = friendsEmail.current.value;

    API.searchForFriend(searchTerm)
      .then((results) => {
        console.log("Friends.js got results: ", results.data);
        setfriendAccounts(results.data);

        console.log("There are ", friendAccounts.length, " possible accounts");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <CurrentFriends />
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
            {friendAccounts.map((friend, index) => {
              return (
                <div
                  className="friendCard"
                  onClick={() => addFriend(index)}
                  key={index}
                >
                  <img
                    src={friend.avatar ? friend.avatar : user_avatar}
                    className="avatar"
                  />
                  <h1>{friend.username}</h1>
                  <p>{friend.email}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Friends;
