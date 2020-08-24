import React, {useRef} from 'react';
import API from '../../utils/API';
import {Redirect} from 'react-router-dom';
import { useShopprContext } from "../../utils/GlobalState";

function Friends(){

    const [state, dispatch] = useShopprContext();
    const friendsEmail = useRef();
    let friendAccount = {};

    let currentUser = null;
    if (state && state.User) {
      currentUser = state.User;
    }
    if (!currentUser) {
        return  <Redirect  to="/" />
    }



    function searchForFriend(e) {
       
        e.preventDefault();
        e.stopPropagation();

        let searchTerm = friendsEmail.current.value;
        

        API.searchForFriend(searchTerm).then( (results) => {
            console.log("Friends.js got results: ", results);

        }).catch( err => console.log(err));

    }
    return (
        <div>
            <h1>Connect with Friends:</h1>

            <div>
                <form>
                    <label>Enter your friend's email address:</label>
                    <input type="text" ref={friendsEmail} onChange={searchForFriend}>

                    </input>
                    {/* <button type="submit" className="btn btn-primary">Search for my friends on Shoppr</button> */}
                </form>
            </div>

            <div>
                <h1>Friend on Shoppr</h1>
                <div>
                    <h1>{friendAccount.username}</h1>
                    <p>{friendAccount.email}</p>
                </div>
            </div>
        </div>
        
    );
}

export default Friends;