import React, {useRef, useEffect} from 'react';
import "./CurrentSearchImage.css";
import { useShopprContext } from "../../utils/GlobalState";
import { SET_FRIENDS } from "../../utils/actions";
import API from "../../utils/API";

function CurrentSearchImage(){

const [state, dispatch] = useShopprContext();

return (
<div className="currentSearchImageContainer">
    <img src={state.CurrentSearch.image_url} className="currentSearchImage"/>
</div>

)

}

export default CurrentSearchImage