import React from "react";

function Child(props)
{
    return(
        <div className="child" >
        <h1>child</h1>
        <h1>{props.compony}</h1>
        </div>
    )
}
export default Child;