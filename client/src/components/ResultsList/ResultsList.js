import React, {useRef, useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import API from '../../utils/API';
import './ResultsList.css';
import { useShopprContext } from "../../utils/GlobalState";
//import results from "../../sample_rainforest_table_search.json";
import axios from "axios";



function ResultsList( props ){



    const [state, dispatch] = useShopprContext();
    const [itemList, setItemList] = useState();
 

    useEffect( () => {
        console.log("current search item: "+ props.itemToSearch);
       // console.log("In ResultsList Component: item is: ", props.itemToSearch);

        API.getProducts( props.itemToSearch ).then((results) => {
            setItemList( results.data); 

        }).catch( err=>console.log(err));
    },[props.itemToSearch]);

   //itemList = API.getProducts();


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
            { itemList ?   itemList.map( (result,index) => {
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
            }) : <div></div>
            })

        </div> 
    )
}

export default ResultsList;


