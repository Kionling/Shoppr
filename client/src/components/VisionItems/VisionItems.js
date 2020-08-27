import React from "react";
import "./VisionItems.css";
import { useShopprContext } from "../../utils/GlobalState";
import { SET_STORE_PREF, SET_SEARCH_ITEM } from "../../utils/actions";
import API from "../../utils/API";

function VisionItems() {
  const [state, dispatch] = useShopprContext();
  let visionItems = [];

  if (
    state.CurrentSearch &&
    state.CurrentSearch.items &&
    state.CurrentSearch.items.length > 0
  ) {
    visionItems = state.CurrentSearch.items;
  } else {
    visionItems = null;
  }

  function saveSearchAction() {
    // data like : {UserId:'',image_url:'',itemName: []}
    let payload = {
      UserId: state.User.id,
      image_url: state.CurrentSearch.image_url,
      itemNames: state.CurrentSearch.items,
    };
    console.log("payload to save search: ", payload);
    API.saveSearch(payload)
      .then((response) => {
        console.log("Search saved");
      })
      .catch((err) => {
        console.log("Save not successfull");
      });
  }

  function handleToogleStorePref() {
    dispatch({ type: SET_STORE_PREF, isOnline: !state.isOnline });
  }
  function handleOnClick(searchIndex) {
    console.log("VisionItems Component: searchIndex=", searchIndex);
    console.log("State CurrentSearch:", state.CurrentSearch.items);
    dispatch({ type: SET_SEARCH_ITEM, current_search_item: searchIndex });
  }

  return (
    <div className="visionItems container left ">
      <h1 className="Bold">Vision Items:</h1>
      {/* <button onClick={() => handleOnClick("table")}>Table</button>
            <button onClick={() => handleOnClick("desk")}>Desk</button> */}
      {visionItems ? (
        state.CurrentSearch.items.map((item, index) => {
          return (
            <div className="row center">
              <div className="col s12">
                <button
                  id="itemButtons"
                  className="itemButton btn  #00b0ff light-blue accent-3"
                  data-id={index}
                  onClick={() => handleOnClick(index)}
                >
                  {" "}
                  {item}
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div className="visionItems center row">
          No items from the google vision api found...
        </div>
      )}
      <div className="center">
        <button
          className="btn  #00b0ff light-blue accent-3"
          onClick={saveSearchAction}
        >
          Save my search
        </button>
      </div>
      <div>
        <br></br>
        <form>
          <div className="switch center row">
            <label>
              In-Store purchase
              <input
                type="checkbox"
                className=""
                checked={state.isOnline}
                onChange={handleToogleStorePref}
              />
              <span className="lever  #00b0ff light-blue accent-3"></span>
              Online purchase
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VisionItems;
