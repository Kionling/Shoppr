import React from 'react';
import ResultsList from "../ResultsList/ResultsList"
import VisionItems from "../../components/VisionItems/VisionItems";
import {useShopprContext} from "../../utils/GlobalState";


function Result(){
    const [state, dispatch] = useShopprContext();
    
    return (
        <div>
            <h1>Result Component</h1>
            <VisionItems />
            <ResultsList />
        </div>
    );
}

export default Result;