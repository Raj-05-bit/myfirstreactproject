import React from "react";
import Child from "./Child.jsx"
function Perent(props)
{
    return(
        <div className="perent">
            <h1>perent</h1>
            <Child compony={props.compony}/>
        </div>
    )
}
export default Perent;