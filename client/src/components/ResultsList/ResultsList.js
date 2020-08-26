import React, {useRef} from 'react';
import { Link } from "react-router-dom";
import API from '../../utils/API';
import './ResultsList.css';
import { useShopprContext } from "../../utils/GlobalState";
import results from "../../sample_rainforest_table_search.json";
import axios from "axios";


function ResultsList(){

    const [state, dispatch] = useShopprContext();
    let itemList = [];

   axios.get("/api/getRainForest/lamp").then( (response) => {
       console.log("back from the axios get request...", response);
       itemList = response.search_results;
    });

   // itemList = results.search_results;

    return (
        <div className="resultsList">
        <h1>Results List:</h1>
            { itemList.map( result => {
                return ( <div className="productCard">
                <div><a href={ result.link } target="_blank"><img src= {result.image} style={{width:"200px"}} /></a>
                </div>
                <div className="productTitle">
                    { result.title }</div>
                <div>
                
                </div>
               
                </div>)
            }) 
            })

        </div> 
    )
}

export default ResultsList;


