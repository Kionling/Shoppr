import React, { useState, useEffect } from 'react';
import MapContainer from '../../components/MapContainer/MapContainer';
import VisionItems from '../../components/VisionItems/VisionItems';
import ResultsList from '../../components/ResultsList/ResultsList';
import { useShopprContext } from '../../utils/GlobalState';
import { SET_STORE_PREF, SET_CURRENT_PATH } from '../../utils/actions';
import FriendsSearches from '../../components/FriendsSearches/FriendsSearches';
import API from "../../utils/API";

function Result() {
    // const [itemToSearch, setItemToSearch] = useState();
    const [state, dispatch] = useShopprContext();
    const [friendsSearches, setFriendsSearches] = useState();

    useEffect(() => {
        dispatch({ type: SET_STORE_PREF, isOnline: true })
        dispatch({ type: SET_CURRENT_PATH, currentPath: "/result"})

        if (state.User && state.User.id) {
            API.getFriendsSearches({
            userid: state.User.id,
            item: state.CurrentSearch.items[state.current_search_item],
          })
            .then((results) => {
              setFriendsSearches(results);
            })
            .catch((err) => console.log(err));

        }
    }, [])

    return (
        <div>
            <h1>I am in Result Component</h1>
            <FriendsSearches friendsSearches={friendsSearches}></FriendsSearches>
            
            <div className="row">
                <div className="col s4"><VisionItems></VisionItems></div>
                <div className="col s8">
                    {state.isOnline ? <ResultsList itemToSearch={state.CurrentSearch.items[state.current_search_item]}></ResultsList> : <MapContainer itemToSearch={state.CurrentSearch.items[state.current_search_item]} ></MapContainer>}
                </div>
            </div>
        </div>

    );
}

export default Result;