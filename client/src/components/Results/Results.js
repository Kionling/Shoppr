import React, {useRef} from 'react';
import { Link } from "react-router-dom";
import API from '../../utils/API';
import './Results.css';
import { useShopprContext } from "../../utils/GlobalState";

function Results(){

    const [state, dispatch] = useShopprContext();


    return (
        <div className="resultsList">
            { state.results.map( result => {
                return ( <div>
                    { result.name }
                </div>)
            }) 
            })

        </div> 
    )
}

export default Results;


