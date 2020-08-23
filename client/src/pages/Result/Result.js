import React,{useState} from 'react';
import MapContainer from '../../components/MapContainer/MapContainer';

function Result(){
    const [itemToSearch,setItemToSearch] = useState()
    function handleOnClick(searchItem){
        setItemToSearch(searchItem);
    }

    return (
        <div>
            <h1>I am in Result Component</h1>
            <button onClick={()=>handleOnClick("table")}>Table</button>
            <button onClick={()=>handleOnClick("desk")}>Desk</button>
            <button onClick={()=>handleOnClick("couch")}>Couch</button>
            <MapContainer itemToSearch={itemToSearch} ></MapContainer>
        </div>
    );
}

export default Result;