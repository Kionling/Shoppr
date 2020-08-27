import React, {useState,useEffect} from 'react';
import './VisionItems.css';
import { useShopprContext } from "../../utils/GlobalState";
import { SET_STORE_PREF, SET_SEARCH_ITEM, SEARCH_SAVED } from "../../utils/actions";
import API from '../../utils/API';


function VisionItems() {
    const [state, dispatch] = useShopprContext();
    const [btnIdMapping,setBtnIdMapping] = useState();
    let visionItems = [];
    let tempBtnList = [];
    

    useEffect(()=>{
        setBtnIdMapping([]);
        if (state.CurrentSearch && state.CurrentSearch.items && state.CurrentSearch.items.length > 0) {
            visionItems = state.CurrentSearch.items;
            for(let i of visionItems){
                let btnObj = {};
                btnObj[i] = null;
                tempBtnList.push(btnObj);
            }
            setBtnIdMapping(tempBtnList);
            console.log("button list mapped to id: ",btnIdMapping,tempBtnList);
        } else {
            visionItems = null;
        }
        console.log("button list mapped to id: ",btnIdMapping);
    },[]);

    function saveSearchAction(){
        // data like : {UserId:'',image_url:'',itemName: []}
        let payload = {
            UserId: state.User.id,
            image_url: state.CurrentSearch.image_url,
            itemNames: state.CurrentSearch.items
        }
        console.log("payload to save search: ",payload);
        API.saveSearch(payload)
        .then((response)=>{
            console.log("Search saved",response.data);
            dispatch({type: SEARCH_SAVED,searchSaved: true})

        }).catch(err =>{
            console.log("Save not successfull");
        })
    }

    function handleToogleStorePref(){
        dispatch({type:SET_STORE_PREF, isOnline:!state.isOnline})
    }
    function handleOnClick(searchIndex) {
        console.log("VisionItems Component: searchIndex=", searchIndex);
        console.log("State CurrentSearch:", state.CurrentSearch.items)
        dispatch({type:SET_SEARCH_ITEM , current_search_item:searchIndex});
    }

    return (

        <div className="visionItems">
            <h1>Vision Items:</h1>
            {/* <button onClick={() => handleOnClick("table")}>Table</button>
            <button onClick={() => handleOnClick("desk")}>Desk</button> */}
            {visionItems ? state.CurrentSearch.items.map((item,index) => {
                return (
                    <div>
                        <button className="itemButton" data-id={index} onClick={()=>handleOnClick(index)}> {item}</button>

                    </div>
                )
            }) : <div className="visionItems">No items from the google vision api found...</div>}

            <div>
                <br></br>
                <form>
                <div className="switch">
                    <label>
                        In-Store purchase 
                        <input type="checkbox" checked={state.isOnline} onChange={handleToogleStorePref}/>
                        <span className="lever"></span>
                        Online purchase
                        </label>
                </div>
                </form>

                <div>
                    <button className="btn" disabled={state.searchSaved} onClick={saveSearchAction}>Save my search</button>
                </div>
            </div>
        </div>
    );
}

export default VisionItems;