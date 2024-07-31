import React from "react";
import Perent from "./Perent.jsx"

function GrandPerent(props)
{
    return(
        <div className="gp">
            <h1>GrandPerent</h1>
            <Perent compony={props.compony}/>
        </div>
        
    )
}
export default GrandPerent;