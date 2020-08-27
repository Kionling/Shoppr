import React, { useRef, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import API from '../../utils/API';
import './ResultsList.css';
import { useShopprContext } from "../../utils/GlobalState";
import { SEARCH_SAVED, LOADING, STOP_LOADING } from '../../utils/actions';
import loader from '../../assets/loader.gif';


function ResultsList(props) {



    const [state, dispatch] = useShopprContext();
    const [itemList, setItemList] = useState();


    useEffect(() => {
        console.log("current search item: " + props.itemToSearch);
        // console.log("In ResultsList Component: item is: ", props.itemToSearch);

        API.getProducts(props.itemToSearch).then((results) => {
            setItemList(results.data);

        }).catch(err => console.log(err));
    }, [props.itemToSearch]);

    //itemList = API.getProducts();


    function buyItem(itemDetail) {
        if (state.User && state.User.id) {
            console.log(itemDetail);
            console.log(state.User.id)
            console.log(state.searchSaved);
            let payload = {
                title: itemDetail.title,
                image_url: itemDetail.image,
                purchase_url: itemDetail.link,
                price: itemDetail.price ? itemDetail.price.raw : null,
                itemName: props.itemToSearch,
                UserId: state.User.id
            }
            dispatch({type:LOADING})
            if (state.searchSaved) {
                API.saveProducts(payload)
                    .then((response) => {
                        console.log("Product saved: ", response);
                        dispatch({type:STOP_LOADING});
                    })
                    .catch(err => {
                        console.log("Unable to save product")
                        dispatch({type:STOP_LOADING});
                    });
            }
            else {
                let searchSavePayload = {
                    UserId: state.User.id,
                    image_url: state.CurrentSearch.image_url,
                    itemNames: state.CurrentSearch.items
                }
                console.log("payload to save search: ", searchSavePayload);
                API.saveSearch(searchSavePayload)
                    .then((response) => {
                        console.log("Search saved", response.data);
                        dispatch({ type: SEARCH_SAVED, searchSaved: true });
                        API.saveProducts(payload)
                            .then((response) => {
                                console.log("Product saved: ", response);
                            })
                            .catch(err => {
                                console.log("Unable to save product")
                                dispatch({type:STOP_LOADING});
                            });

                    }).catch(err => {
                        console.log("Save not successfull");
                        dispatch({type:STOP_LOADING});
                    })
            }
        }
    }

    return (
        <div>
            {
                state.loading ? <img src={loader} /> :
                    <div className="resultsList">
                        <h1>Results List:</h1>

                        {itemList ? itemList.map((result, index) => {
                            return (<div className="productCard" key={index}>
                                <div><a href={result.link} target="_blank"><img src={result.image} style={{ width: "200px" }} /></a>
                                </div>
                                <div className="productTitle">
                                    <a target="blank" href={result.link}>{result.title}</a>
                                </div>
                                <div>
                                    {result.price ? result.price.raw : ''}
                                    <button className="btn" onClick={() => buyItem(result)} disabled={!state.User || !state.User.id}>Buy</button>
                                </div>


                            </div>)
                        }) : <div></div>
                        }
                 )

            </div>
            }
        </div>)
}

export default ResultsList;


