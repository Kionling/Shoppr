import React, { useState, useEffect } from 'react';
import MapContainer from '../../components/MapContainer/MapContainer';
import VisionItems from '../../components/VisionItems/VisionItems';
import ResultsList from '../../components/ResultsList/ResultsList';
import { useShopprContext } from '../../utils/GlobalState';
import { SET_STORE_PREF } from '../../utils/actions';


function Result() {
    const [itemToSearch, setItemToSearch] = useState();
    const [state, dispatch] = useShopprContext();

    useEffect(() => {
        dispatch({ type: SET_STORE_PREF, isOnline: true })
    }, [])

    return (
        <div>
            <h1>I am in Result Component</h1>
            
            <div class="row">
                <div class="col s4"><VisionItems></VisionItems></div>
                <div class="col s8">
                    {state.isOnline ? <ResultsList></ResultsList> : <MapContainer itemToSearch={state.CurrentSearch.items[state.current_search_item].name} ></MapContainer>}
                </div>
            </div>
        </div>

    );
}

export default Result;