import React, { useRef, useEffect, useState} from "react";
import API from "../../utils/API";
import { Redirect } from "react-router-dom";
import { useShopprContext } from "../../utils/GlobalState";
import "./Friends.css";
import { SET_CURRENT_PATH, ADD_FRIEND ,SET_FRIENDS} from "../../utils/actions";
import user_avatar from "../../assets/user_avatar.png";
import CurrentFriends from "../../components/CurrentFriends/CurrentFriends";

function Friends() {
  // let friendAccounts = [];
  const friendsEmail = useRef();

  const [state, dispatch] = useShopprContext();
  const [friendAccounts, setfriendAccounts] = useState([]);

  
  useEffect(() => {
    console.log("Friend accounts:", friendAccounts);
    //  dispatch({type: SET_CURRENT_PATH, currentPath: "/friends"})

  }, [ friendAccounts ] );

  useEffect(() => {
    dispatch({ type: SET_CURRENT_PATH, currentPath: "/friends" });
    if(state.User && state.User.id){
      API.getFriends(state.User.id).then((friends) => {
        console.log("Got friends back from the API:", friends.data);
       dispatch({type:SET_FRIENDS, friends:friends.data})
      })
    }
  }, []);



  let currentUser = null;
  if (state && state.User) {
    currentUser = state.User;
  }
  if (!currentUser) {
    return <Redirect to="/" />;
  }

  function addFriend(index) {
    console.log( "values passed to addFriend API from UI: ",state.User,friendAccounts[index] )
    API.addFriend({User: state.User, Friend: friendAccounts[index] })
    .then((results) => {
        console.log("Added friend: ", results);

        dispatch({type:ADD_FRIEND, newFriend: friendAccounts[index]});
    }).catch((err) => console.log(err));
  }

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
  return (<div>
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
              <div className="friendCard" onClick={()=>addFriend(index)} key={index}>
              <img src={ friend.avatar ? friend.avatar : user_avatar } className="avatar"/>
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
