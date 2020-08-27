import React, { useState, useEffect } from 'react';
import MapContainer from '../../components/MapContainer/MapContainer';
import VisionItems from '../../components/VisionItems/VisionItems';
import ResultsList from '../../components/ResultsList/ResultsList';
import { useShopprContext } from '../../utils/GlobalState';
import { SET_STORE_PREF, SET_CURRENT_PATH } from '../../utils/actions';


function Result() {
    // const [itemToSearch, setItemToSearch] = useState();
    const [state, dispatch] = useShopprContext();

    useEffect(() => {
        dispatch({ type: SET_STORE_PREF, isOnline: true })
        dispatch({ type: SET_CURRENT_PATH, currentPath: "/result"})
    }, [])

    return (
        <div>
            
            <div className="row">
                <div className="col s4 l4"><VisionItems></VisionItems></div>
                <div className="col s8 l7">
                    {state.isOnline ? <ResultsList itemToSearch={state.CurrentSearch.items[state.current_search_item]}></ResultsList> : <MapContainer itemToSearch={state.CurrentSearch.items[state.current_search_item]} ></MapContainer>}
                </div>
            </div>
        </div>

    );
}

export default Result;