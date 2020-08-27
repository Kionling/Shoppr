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

//    axios.get("/api/getRainForest/lamp").then( (response) => {
//        console.log("back from the axios get request...", response);
//        itemList = response.search_results;
//     });

   itemList = results.search_results;

    function buyItem(itemDetail){
        console.log(itemDetail);
        console.log(state.User.id)
        console.log(state.searchSaved);
        // let payload = {
        //     title: itemDetail.title ,
        //     image_url: itemDetail.image,
        //     purchase_url: itemDetail.link,
        //     price: itemDetail.price?itemDetail.price.raw:null ,
        //     itemName: ,
        //     UserId: state.User.id
        // }
    }

    return (
        <div className="resultsList">
        <h1>Results List:</h1>
            { itemList.map( (result,index) => {
                return ( <div className="productCard" key={index}>
                <div><a href={ result.link } target="_blank"><img src= {result.image} style={{width:"200px"}} /></a>
                </div>
                <div className="productTitle">
                    <a target="blank" href={result.link}>{ result.title }</a>
                    </div>
                <div>
                {result.price? result.price.raw : '' }
                <button className="btn" onClick={()=>buyItem(result)}>Buy</button>
                </div>

               
                </div>)
            }) 
            })

        </div> 
    )
}

export default ResultsList;


