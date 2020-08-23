import React from 'react';
import './VisionItems.css';
import { useShopprContext } from "../../utils/GlobalState";


function VisionItems(){
    const [state, dispatch] = useShopprContext();
    let visionItems = [];

    if (state.CurrentSearch && state.CurrentSearch.items) {
      visionItems = state.CurrentSearch.items;
    } else {
        visionItems = null;
    }

    return (
        
        <div className="visionItems">
            <h1>Vision Items:</h1>

            { visionItems ? state.CurrentSearch.items.map(item=>
            {
                return (
                <div>
                <button className="itemButton">  {item.title}</button>
              
                </div>
                )
            }) : <div clasName="visionItems">No items from the google vision api found...</div> }
           
           <div>
           <br></br>
               Would you like to purchase in-store or online?
               ... need toggle button here ...
           </div>
        </div>
    );
}

export default VisionItems;