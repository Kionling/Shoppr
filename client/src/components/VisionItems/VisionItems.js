import React from 'react';
import './VisionItems.css';
import { useShopprContext } from "../../utils/GlobalState";
import { SET_STORE_PREF, SET_SEARCH_ITEM } from "../../utils/actions";


function VisionItems() {
    const [state, dispatch] = useShopprContext();
    let visionItems = [];

    if (state.CurrentSearch && state.CurrentSearch.items && state.CurrentSearch.items[0].name != '') {
        visionItems = state.CurrentSearch.items;
    } else {
        visionItems = null;
    }

    function handleToogleStorePref(){
        dispatch({type:SET_STORE_PREF, isOnline:!state.isOnline})
    }
    function handleOnClick(searchIndex) {
        dispatch({type:SET_SEARCH_ITEM , current_search_item:searchIndex});
    }

    return (

        <div className="visionItems">
            <h1>Vision Items:</h1>
            <button onClick={() => handleOnClick("table")}>Table</button>
            <button onClick={() => handleOnClick("desk")}>Desk</button>
            <button onClick={() => handleOnClick("couch")}>Couch</button>
            {visionItems ? state.CurrentSearch.items.map((item,index) => {
                return (
                    <div>
                        <button className="itemButton" data-id={index} onClick={()=>handleOnClick(index)}> {item.name}</button>

                    </div>
                )
            }) : <div clasName="visionItems">No items from the google vision api found...</div>}

            <div>
                <br></br>
                <form>
                <div class="switch">
                    <label>
                        In-Store purchase 
                        <input type="checkbox" checked={state.isOnline} onChange={handleToogleStorePref}/>
                        <span class="lever"></span>
                        Online purchase
                        </label>
                </div>
                </form>
            </div>
        </div>
    );
}

export default VisionItems;